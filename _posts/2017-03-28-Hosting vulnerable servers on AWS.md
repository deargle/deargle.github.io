---
title: Hosting vulnerable servers on AWS
description: Notebook on how I configured an AWS VPC with an OpenVPN server for hosting a set of vulnerable virtual images, 
    intended for students to do vulnerability assessments with.
---

I'll be starting a new job at CU Boulder soon. One of my responsibilities will be to teach an information security management class to business school students. I don't know whether there will be a lab available where I can host VMs for students to do vulnerability assessments on, and I can't just distribute OVAs for this because of how easy it would be to boot into root. So I want to host vulnerable servers on something like AWS. Obvious problem is that vulnerable servers are... vulnerable. I don't want the boxes to be pwned before the students can start playing with them. So for the last day or so I learned about taking vulnerable VMs and launching them into a VPN on AWS. This post documents what I learned. 

Went like this:

* make a vulnerable virtual image
* Export the appliance and convert it to an AMI 
* create a VPC on AWS
* configure OpenVPN community on an Ubuntu AMI
* launch 1-to-many instances of your vulnerable AMIs into the VPN

### Make a vulnerable virtual image, then export it

I skipped this step, but here you'd create a VM however you like, making it nice and vulnerable. Then you export your image into a format that AWS likes. There are [several acceptable formats for AWS mentioned in the docs](http://docs.aws.amazon.com/vm-import/latest/userguide/export-vm-image.html), OVA included. In VirtualBox, you can export a VM as an OVA using `File > Export Appliance...`. 

The important thing to note here is that only certain OSes are compatible with AWS's AMI format. [Thankfully, the list is long.](http://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html)


### Convert your image to an AMI 

I started at this step, with an unedited copy of [Violator](https://www.vulnhub.com/entry/violator-1,153/), pulled from VulnHub. 

You'll need the [AWS CLI](https://aws.amazon.com/cli/).

The process for creating an AMI involves: 

* uploading your image to an S3 bucket, 
* creating an IAM `VM Import Service Role`, 
* invoking the magic spells in the aws console to import the image from S3 into an AMI.

Docs [here](http://docs.aws.amazon.com/vm-import/latest/userguide/import-vm-image.html). Went smoothly for me, although the actual import took 10+ minutes. When you create your own AMI, AWS launches a copy of your instance appliance and then takes a snapshot of it. That snapshot will be associated with your new AMI, and is not deletable unless you first unregister your AMI. So be aware, you'll be paying for the storage of that snapshot as long as you have the AMI.


### Create a VPC

I created a new VPC intended just for vulnerable servers + the OpenVPN server. I created two subnets: one default public, where I put the openVPN server, and another default private, where all the violator instances were launched.

In my config:

* vpc with subnet `172.32.0.0/16`. Your CIDR just has to be different from whatever VPCs you already have.
* created a new internet gateway, attached it to the new VPC
* Two subnets, named one 'public' and the other 'private', CIDR's `172.32.0.0/20` and `172.32.16.0/20`
* edited the route table for the two subnets to include the new internet gateway: Destination `0.0.0.0/0` Target `<the gateway>`. Although you may not want your vulnerable servers to have internet access? Up to you. OpenVPN definitely needs it.
* While in the VPC Dashboard, check your Network ACLs, and make sure that you're wide open on inbound rules. Also check your default security group for your new VPC, and change the source to `0.0.0.0/0`. (I don't use the default for the openvpn server, just for the instances launched into the private-only subnet).

Now I'll admit something: that last step took me late into the night. I must have kept looking over the Source error in the security rule, I could not figure out why I couldn't ssh into my openvpn server. I'm pretty certain the security group stuff here is the same as it is on the ec2 dashboard page. Note to self though, if no connectivity, it's almost certaintly security group stuff somewhere.



### Configure OpenVPN community on an Ubuntu AMI

Now from the EC2 dashboard. I created a new micro instance from an official ubuntu 16.04 AWS AMI.

During the launch config: 

* Change Network to the new VPC
* Change Subnet to your public one
* Click through to configure the security group. I created one that matches the one created by the official (but paid) OpenVPN Access Server marketplace AMI. That security group does this:
    * `Custom UPD | 1194 | 0.0.0.0/0`
    * `Custom TCP | 943 | 0.0.0.0/0`
    * `HTTPS | 0.0.0.0` (not necessary for the community version though)
    * `SSH | 0.0.0.0/0`

Aaaand launch and then ssh in, following the `connect` instructions.

For configuring OpenVPN server, I leaned mostly on [this blog post](https://rbgeek.wordpress.com/2012/12/13/openvpn-server-on-ubuntu-12-04-behind-nat/), and partly on [this blog post](http://agiletesting.blogspot.com/2015/01/setting-up-openvpn-server-inside-aws-vpc.html). Command history for posterity:

Assume `sudo` when not root.

```
apt-get update -y && apt-get upgrade -y
apt-get install openvpn easy-rsa
cd /etc/openvpn/
mkdir easy-rsa
cp -r /usr/share/easy-rsa/* /etc/openvpn/easy-rsa/
vim vars # edit parameters at bottom to whatever
su -
cd /etc/openvpn/easy-rsa
. ./vars
./clean-all
./build-ca
./build-key-server server # I didn't set a password
./build-key client # I didn't set a password. I'm going to couple with user auth
./build-dh
cd keys
cp ca.crt server.crt server.key dh2048.pem /etc/openvpn
exit
openvpn --genkey --secret secret.key
cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz /etc/openvpn/
gzip -d /etc/openvpn/server.conf.gz

vim server.conf  
# Notable changes:
# * push the CIDR for your entire VPC. In my case, `push "route 172.32.0.0 255.255.0.0"`
# * add your secret.key contents inside tls-auth, and also add `key-direction 0` after.

vim /etc/sysctl.conf 
# uncomment net.ipv4.ip_forward=1
sysctl -p

iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE 
# `-s` here should be the CIDR that you set in the `server` directive in server.conf, _not_ your VPC CIDR. 
# also put that in /etc/rc.local
                        
cp /usr/share/doc/openvpn/examples/sample-config-files/client.conf /etc/openvpn
vim client.conf   
# Notable changes:
# * set your open vpn public server in `remote ... 1194`. Add elastic ip to your openvpn instance when ready.
                         
openvpn --config /etc/openvpn/server.conf # to test that everything is working

openvpn --daemon --config /etc/openvpn/server.conf # when ready     
                         
```

`scp` or whatever your client.conf down, and try connecting while your openvpn is running on the server.


See [here](http://serverfault.com/questions/483941/generate-an-openvpn-profile-for-client-user-to-import) for a discussion of inline certs.

[Here's my redacted server.conf and client.conf](https://gist.github.com/deargle/ce70b597645dc7c7c9eaec40875faaf5)



### Launch a gazillion Violators

Or whatever. Launch them into the private subnet. Try pinging their ips from a client that's connected to the VPN. Fist-pump three times if great success.


### Todo


`auth-user-pass` ([how-to page](https://openvpn.net/index.php/open-source/documentation/howto.html#auth))

`auth-nocache` and `auth-retry interact` because I saw them in a client.conf that I use for something else.


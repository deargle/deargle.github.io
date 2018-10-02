---
title: Virtual Machines for the Security Labs
layout: assignment
---

<div id='nav-bar'></div>

I prepare virtual machines for students in my class to use, which communicate over a `infosec-net` NatNetwork. This page documents the virtual machines, along with how to install and configure virtualbox to use the network.

# `infosec-net` Network Map

The network map is as follows:
        
<div style='width:40%'> 
    <table class='table'>
        <thead>
            <tr>
                <th>IP Address</th>
                <th>Machine</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>192.168.55.100</td>
            <td>Windows 10 VM</td>
        </tr>
        </tbody>
    </table>
</div>

# Setting up Virtualbox and the infoset-net network

I pre-prepare the virtual machines to be on the same virtual network so that they have internet access and so that they can talk to one another. However, you must initialize the virtualbox network after you install virtualbox. To do so:

**Note:** Ideally you will have at least 8 GB memory (RAM)

1.  First, install one of the VirtualBox platform packages from [here](https://www.virtualbox.org/wiki/Downloads).
2.  Then, create the virtual network.
    * If on Windows, download and run [this script](https://www.dropbox.com/s/923mt76knrherrm/create-infosec-natnetwork.bat?dl=0)
    * If on Mac:
        * Open `Terminal` application
        * Copy-paste the following lines into the terminal, and press `enter`

                vboxmanage natnetwork add --netname infosec-net --network 192.168.55.0/24 --enable --dhcp off
                vboxmanage natnetwork start --netname infosec-net

    You can test whether the scripts were successful by navigating to `Virtuabox > File > Preferences > Network`, where you should see "infosec-net" in the list of networks. If you don't see that network, then you can manually create the network from this dialog prompt by clicking the `plus` and using the following options:
    
    Then click 'ok', 'ok'. 
    
        * Enable Network: `checked`
        * Network Name: `infosec-net` (case-sensitive!)
        * Network CIDR: `192.168.55.0/24`
        * Network Options:
            * Supports DHCP: `unchecked`
            * Supports IPv6: `unchecked`
            
    ![img](../images/virtualbox-infosecnet-config.png)
            
            
## Troubleshooting

If you are a mac user and virtualbox fails to install with the ever-so-helpful message that "Virtualbox Failed to Install", then I have no idea how to help you, stupid Macs. Let me know if you figure out a solution. There is a computer science help desk in the engineering school who can help you set up virtualization.

## "I forgot to do this before importing the VM, what should I do?"

You will need to reconfigure the network adapter for each VM that you imported before creating the `infosec-net` network. To do this, shut down the virtual machine (_shut down_, not _power off_!), then select the virtual machine from the virtualbox manager, click `Settings` > `Network` > `Adapter 1` > attached to `Nat Network' > name `infosec-net`. Then, start up the VM again. You should hopefully now have a working internet connection.

![img](../images/infosec-net-specific-device.png){: width="500px"}
            
            
# Importing Virtual Machine (VM) `.ova` files

**Note:** Ideally you will have at least 8 GB memory (RAM)

2. Obtain the `.ova` files for the lab from [this section](#the-virtual-machines)
3. Launch Virtualbox > "File" > "Import appliance"
    * select your downloaded .ova file
    * go through the prompts
4. Launch the newly-created VM by double-clicking it in the list on the left.
5. You can now delete the `.ova` file if you're disk-space-starved.

## Troubleshooting

* If you get an error message like this: "VT-x is disabled in the BIOS for both all CPU modes (VERR_VMX_MSR_ALL_VMX_DISABLED)"...
    * ... then you need to go into your BIOS to enable virtualization for your CPU.
    * If you are brave, you can Google for instructions specific to your machine. For example, if you had a Dell Precision 7520 laptop, you might google: "Dell Precision 7520 enable cpu virtualization bios"
        * Don't brick you laptop.

* There is a computer science help desk in the engineering school who can help you set up virtualization.

* High Sierra Mac users: if you try to launch the VM and get the following error message: **Kernel driver not installed (rc=-1908)** Then follow the instructions [here](https://apple.stackexchange.com/a/300518) then try launching the VM again.

# The Virtual Machines

<div class='alert alert-info'>All links can be found <a href='https://canvas.colorado.edu/courses/21392/pages/virtual-machine-links'>here</a>.</div>

## Windows 10

<div class='alert alert-info'>Download link ready! See above</div>

|-|-|
| username: | `labuser` |
| password: | `Password1` |



## Kali

<div class='alert alert-info'>Download link ready! See above</div>

|-|-|
| username: | `root` |
| password: | `toor` |


### Building your own Kali instead of using mine

<div class='alert alert-danger'><strong>Warning: </strong>If you are in my class and you do this, you are crazy.</div>

1.  Download Kali Linux Light 64 Bit from [here](https://www.kali.org/downloads/). It's less than 1GB.
2.  Follow the instructions [here](http://www.wikigain.com/install-kali-linux-virtualbox-pc/) to create the VM, except:

    * Use 40GB instead of 15GB for the dynamic disk size (just to be safe).
    * Choose whatever for the "Configure the Network" step. My scripts below reset all that anyway.
    * For Step 7 "Partition disks" step, choose "Guided - use entire disk" to save yourself extra work. Choose "All files in one partition" a few steps later on, too. Continue the instructions with Step 16.
    
3.  In a `terminal` in Kali, run the following commands.
    
        #############
        # virtualbox guest additions
        # for fullscreen and shared clipboard
        #################
        
        apt-get update && apt-get upgrade -y                # This might take a while. It will make sure your system is up-to-date.
        
        DEBIAN_FRONTEND=noninteractive \
        APT_LISTCHANGES_FRONTEND=none \
        apt-get \
        -o Dpkg::Options::="--force-confnew" \
        --force-yes \
        -fuy \
        dist-upgrade
        
        reboot
        
        apt-get install -y virtualbox-guest-x11 && reboot   # This should give you nice things like shared clipboard between your host and Kali, and fullscreen.
        
        # speaking of shared clipboard, do 'Devices' > 'Shared Clipboard' > 'Bidirectional'.
        
        ########
        # fix networking
        ########
        
        # first, make sure that 
        #   * your machine has network interface 1 set to NATNetwork and infosec-net
        #   * your machine has network interface 2 set to NAT
        # then, 
        
        apt-get purge network-manager   # banish the horrible mess that is the network-manager
        apt-get install net-tools       # go back to the glory days of ifconfig

        cat <<EOF >> /etc/network/interfaces
        auto eth0
        iface eth0 inet static
            address 192.168.55.101
            netmask 255.255.255.0
            gateway 192.168.55.1

        auto eth1
        iface eth1 inet dhcp
        EOF

        cat <<EOF > /etc/resolv.conf
        nameserver 192.168.55.1
        nameserver 8.8.8.8
        nameserver 8.8.4.4
        EOF

        service networking restart

        ###########
        # Package installations
        ############

        apt-get install -y libssl-dev libssh-dev
        apt-get install -y hashcat hydra wordlists vim metasploit-framework cewl openvpn
        
        ####
        # metasploit framework database setup
        ###
        
        msfdb init
        systemctl enable postgresql
        service postgresql start


        ######
        # social-engineer-toolkit
        #######

        apt-get --force-yes -y install git apache2 python-requests libapache2-mod-php \
          python-pymssql build-essential python-pexpect python-pefile python-crypto python-openssl

        cd /opt
        git clone https://github.com/trustedsec/social-engineer-toolkit/ set/
        cd set
        python setup.py install

4. You should now have a pretty good Kali install for this class.
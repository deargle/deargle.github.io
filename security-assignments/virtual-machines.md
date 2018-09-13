---
title: Virtual Machines for the Security Labs
layout: assignment
---

<div id='nav-bar'></div>

I prepare virtual machines for students in my class to use, which communicate over a `infosec-net` NatNetwork. This page documents the virtual machines, along with how to install and configure virtualbox to use the network.

## `infosec-net` Network Map

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

## Setting up Virtualbox and the infoset-net network

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
            
            
### Troubleshooting

If you are a mac user and virtualbox fails to install with the ever-so-helpful message that "Virtualbox Failed to Install", then I have no idea how to help you, stupid Macs. Let me know if you figure out a solution. There is a computer science help desk in the engineering school who can help you set up virtualization.
            
            
## Importing Virtual Machine (VM) `.ova` files

**Note:** Ideally you will have at least 8 GB memory (RAM)

2. Obtain the `.ova` files for the lab from [this section](#the-virtual-machines)
3. Launch Virtualbox > "File" > "Import appliance"
    * select your downloaded .ova file
    * go through the prompts
4. Launch the newly-created VM by double-clicking it in the list on the left.
5. You can now delete the `.ova` file if you're disk-space-starved.

### Troubleshooting

* If you get an error message like this: "VT-x is disabled in the BIOS for both all CPU modes (VERR_VMX_MSR_ALL_VMX_DISABLED)"...
    * ... then you need to go into your BIOS to enable virtualization for your CPU.
    * If you are brave, you can Google for instructions specific to your machine. For example, if you had a Dell Precision 7520 laptop, you might google: "Dell Precision 7520 enable cpu virtualization bios"
        * Don't brick you laptop.

* There is a computer science help desk in the engineering school who can help you set up virtualization.

* High Sierra Mac users: if you try to launch the VM and get the following error message: **Kernel driver not installed (rc=-1908)** Then follow the instructions [here](https://apple.stackexchange.com/a/300518) then try launching the VM again.

## The Virtual Machines

<div class='alert alert-info'>All links can be found <a href='https://canvas.colorado.edu/courses/21392/pages/virtual-machine-links'>here</a>.</div>

### Windows 10

Download link ready! See above.

|-|-|
| username: | `labuser` |
| password: | `Password1` |


{% include nav-pills.html selector='h2' %}
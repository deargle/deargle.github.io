---

title: Lab &ndash; Physcial Security Scavenger Hunt
number: 5
---

**Note:** This lab can be completed in a group of up to four members. Turn in one document to Learning Suite with all group members’ names listed.

To earn full credit for this lab, complete 5 of the 11 items below. 

# Item 1: Obtain the Password Hashes from an Unattended Public Computer

<div class='alert alert-warning'><strong>Note:</strong> This Item uses Cain, which is installed on the lab VM. It can be downloaded from <a href='http://www.oxid.it/downloads/ca_setup.exe'>www.oxid.it</a>. However, this file will set off all sorts of virus detection alarms and warnings, both in the browser and on your computer. Cain is <em>not</em> a virus, and www.oxid.it is the official site to obtain the file from. But you can use Cain to do *virusy* things, so it gets flagged.</div>


<div markdown='1' style='width:30%'>
<img src="../images/lab_5_1.jpg" width='100%' alt="lab 5 1">
</div>

Obtain the password hashes from an unattended public computer. In Windows 7/10, the password hashes are contained in two files (you’ll need both):

`C:\Windows\system32\config\SAM`

`C:\Windows\system32\config\system`

Since these files are protected by the operating system, boot from a Live CD/USB Linux distribution, such as Kali. From within Kali, copy the SAM and system files to a USB stick.

Password hashes can be dumped from the SAM file using a number of tools. For this lab, use Cain.
 
Run Cain (ignore any messages about the Windows firewall). Click the “Cracker” tab, and click within the right-hand pane to give it focus. Click on the + button in the toolbar and select Import Hashes from a SAM Database. Select the SAM file you obtained. Next to the Boot Key (HEX) field, select the System file you obtained. This will yield a hex string that you must copy and paste into the Boot Key (HEX) field. 

Include a screen shot of the hashes below to prove that you’ve done it. 

Note: Include a photo of the hashes, **but don’t actually crack the hashes.**

Example:

<div markdown='1' style='width:30%'>
<img src="../images/lab_5_2.jpg" width='100%' alt="lab 5 1">
</div>


# Item 2: Photograph an Unlocked, Unattended Terminal

Example:

<div markdown='1' style='width:30%'>
<img src="../images/lab_5_3.jpg" width='100%' alt="lab 5 1">
</div>


# Item 3: Shoulder Surf to Get a Legible Photo of a Screen in Use

Example:

<div markdown='1' style='width:30%'>
<img src="../images/lab_5_4.jpg" width='100%' alt="lab 5 1">
</div>


# Item 4: Go Dumpster Diving to Obtain a Photo of Sensitive and/or Potentially Valuable Information

**Note:** Please specify the information, but redact the information in the attached photo.

<div class='alert alert-warning'>While it is not illegal to dumpster dive in CO, you can still get in trouble for tresspassing, so be mindful and don't tresspass. See Colorado : State v. Hillman, 834 P.2d. 1271 (1992), which says that trash
curbside / in front of house / outside fenced area of property is public.</div>

Example:

<div class='row' >
    <div class='col-md-4'>
        <img class='pull-left' src="../images/lab_5_5.jpg" width='100%' alt="lab 5 1">
    </div>
    <div class='col-md-4'>
        <img class='pull-left' src="../images/lab_5_6.png" width='100%' alt="lab 5 1">
    </div>
</div>


# Item 5: Gain Access to a Pre-approved Restricted Area

Take a picture of yourself in the restricted area and document how you did it (e.g., tailgaiting). Get permission from a manager, etc. before entering the restricted area. For example, you might explain to a manager that you are doing a class assignment and you would like to test whether their employees will prohibit you from entering the restricted area. Only proceed with the test with the manager's approval.

**Note:** You have my permission to attempt to gain access to my office without picking the lock (please lock the door on your way out).

Example:

<div class='row'>
    <div class='col-md-4'>
        <img src="../images/lab_5_7.jpg"  width='100%' alt="lab 5 1">
    </div>
    <div class='col-md-4'>
        <img src="../images/lab_5_8.jpg" width='100%' alt="lab 5 1">
    </div>
    <div class='col-md-4'>
        <img src="../images/lab_5_9.jpg" width='100%' alt="lab 5 1">
    </div>
</div>


# Item 6: Take a Picture of Sensitive/Potentially Valuable Information Left in Someone’s Car

Example:

<div class='row'>
    <div class='col-md-4'>
        <img src="../images/lab_5_10.jpg"  width='100%' alt="lab 5 1">
    </div>
    <div class='col-md-4'>
        <img src="../images/lab_5_11.jpg"  width='100%' alt="lab 5 1">
    </div>
</div>


# Item 7: Access Saved Passwords in a Web Browser on an Unattended Computer

This website has a list of helpful tools to recover passwords from web browsers:

[http://www.nirsoft.net/password_recovery_tools.html](http://www.nirsoft.net/password_recovery_tools.html)


# Item 8: Get a photo of an ID badge that is good enough to make a duplicate. 

**Note:** Bonus points if you actually make a passable counterfeit badge.


# Item 9: Photo Document the Security Cameras in a Building and Establish a Route through the Building without Being Recorded


# Item 10: Install a False Keylogger on a Public Computer

Pretend that a USB drive is a keylogger. Plug it into the back of a public computer, and leave it for a day. Retrieve it later. Take a picture of when you leave it, and when you return. 

**Important:** Do _**not**_ use an actual keylogger unless you have prior approval from the device owner.


# Item 11: Enter a Pre-approved Restricted Area by Disguise

For example, use a clipboard or fake ID. You can combine this one with #5.

---
title: Vulnerable servers on GCP
description: A follow-up to an older post, now with automate-all-the-things.
---

In an [older post]({% post_url 2017-03-28-Hosting-vulnerable-servers-on-AWS %}), I described painfully and tediously configuring a single OpenVPN server which would connect a user to a private network of vulnerable servers. The idea was to shield
the vulnerable servers from public-internet auto-barragement, but make them avaialble for banging on for pop-the-box challenges for my students in my information security management class.

This year, I moved everything to Google Compute Platform -- mostly because they offer $300 for new accounts. I also converted from having students run virtual machines on their own laptops,
to spinning up a gcp version of Kali that I had specially prepared, which included nested virtualization with qemu for a self-containted pentesting instance.

Furthermore, I also met a new goal -- of creating a separate vpn network for each team. Surprise surprise, some of the students in one of my colleague's classes got cheeky and defaced other teams'
vulnerable servers. Separate vpn networks mitigated that attack vector.

I used Vagrant, Chef (chef-zero), Terraform, and Ansible -- in that order -- to provision, deploy, and hot-fix manage the separate workspaces for each team. I also switched to provioning the vpn
server with an all-in-one script. Hallelujah.

<p class='text-center'><a class='btn btn-large btn-success' href='https://github.com/deargle/gcp-vuln-server-behind-openvpn'>Check out the repo on github</a></p>
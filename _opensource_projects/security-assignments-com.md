---
type: opensource
tags: completed, code
title_short: "Security Assignments"
title: "Security-Assignments.com -- Content for an information security management course"
website: https://security-assignments.com
order: 1
with: Anthony Vance
thumbnail: /assets/img/security-assignments-com-thumbnail.png
repo_link: https://github.com/security-assignments/security-assignments.github.io
---

[Security-Assignments.com](https://security-assignments.com) is a collection of
course material that Tony Vance and I created and maintain for a course we have
taught at various universities. Other professors at various universities are
also using the material.

Students use Kali-on-GCP to complete the labs. This is a version of Kali
that I customize to integrate with Google's cloud platform services, including to be able
to use SSH-in-the-browser and to log in via a google account. I build it using
Packer and Vagrant. It uses nested virtualization. See the following repos:

- [lab source code](https://github.com/security-assignments/security-assignments.github.io)
- [kali-on-gcp source code](https://github.com/deargle/kali-on-gcp)
  - Also see the [Kali Pentest Lab!](https://github.com/deargle/kali-on-gcp/tree/master/kali-pentest-lab)
- [A GCP terraform-chef-vagrant-ansible c-c-combo](https://github.com/deargle/gcp-vuln-server-behind-openvpn) infrastructure for creating pop-the-box networks
- Vagrant libvirt boxes for use on Kali-on-GCP (and elsewhere!):
  - [Windows-2019-vuln](https://github.com/deargle/lab-windows-2019-vuln)
  - [Security-onion](https://github.com/deargle/lab-security-onion)
  - [pentest-humbleify](https://github.com/security-assignments/pentest-humbleify)
  - [De-ICE-S1-100](https://github.com/deargle/lab-de-ice-s1-100)
  - [metasploitable2](https://github.com/deargle/lab-metasploitable2)

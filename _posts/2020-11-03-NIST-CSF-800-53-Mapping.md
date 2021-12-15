---
title: Text-searchable mapping of NIST Cybersecurity Framework Core to 800-53 Controls
description: Announcing the creation of a tool that Shows details and permits
  text-searching of the NIST Special Publication 800-53 (Rev. 4) security and privacy
  controls mapped to the NIST Cybersecurity Framework Core.
tags: security tools
category: professional
---

<div class='page-header text-center well'><h2>
<a class='btn btn-primary' href='https://daveeargle.com/nist_csf_800_53_mapping/'>Go to the tool</a></h2></div>

I rent my cloak asunder in frustration when I realized I couldn't ctrl+f the
[NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) Core for
"penetration testing" or "encryption" or for anything, really, making it
impossible to go from knowing security technical stuff to understanding quickly
where a given control would fit into the core. So I wrestled with the 800-53 XML
for a few days and got it into a format that could be javascript-searched in a
webpage-table. Now I need a new cloak, but at least I have a table. I may post
feature updates to the table from time to time.

<a href='https://github.com/deargle/nist_csf_800_53_mapping'>Here's</a> all my python scripts for parsing the various NIST source
files and for preparing the datasource used by the html table. Hopefully my use
of python scripts will make updating the table relatively easy as new CSF or
800-53 versions are released.

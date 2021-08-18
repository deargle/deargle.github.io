---
type: research
tags: completed
title: "Do Security Fear Appeals Work when they Interrupt Tasks? A Multi-Method Examination of Password Strength"
with: Anthony Vance, Dennis Eggett, Detmar Straub, Kirk Ouimet
---

Accepted for forthcoming publication at MISQ. [Here's a link to a working draft of the paper.](https://www.dropbox.com/s/xj9zux3b97or21n/Enhancing%20Fear%20Appeals%20R4%20v2.docx?dl=0)

This paper was a long time coming. It's a followup to the wildly popular "Enhancing Password Security through Interactive Fear Appeals: A Web-Based Field Experiment", HICSS 2013 ([Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Nw7ibigAAAAJ&citation_for_view=Nw7ibigAAAAJ:d1gkVwhDpl0C)).

The original data for this paper was collected through a deception protocol on a website Socwall.com,
with password tooltip treatments designed and implemented by Kirk Ouimet. Later versions of the paper
required collecting additional data, including running a focus group. I re-implemented the password
tooltip treatments in several other website shells -- first for BYU, then for Temple. We didn't
end up using the BYU one to collect more data, but we did use the Temple one during a focus group
run by Tony with students from there. I also re-implemented the Socwall one -- all three on Heroku.
I initially used the social engineering toolkit to clone the sites, because I'm cool.

I can never remember the links to the tooltip portals. Here they are.

* [Socwall reimplementation](https://github.com/deargle/deargle-socwall.com)
* [BYU implementation](https://github.com/deargle/interactive_fear_appeals_cas)
* [Temple TUPortal implementation](https://github.com/deargle/deargle-tuportal)

Instructions for using each are included in the repo's README's. Be warned though,
they're "research notes," which means they're a mess.

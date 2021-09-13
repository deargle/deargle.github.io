---
title: I made a college financial calculator
description: Calculator to assist in optimizing investment strategies for future expenses.
tags: finances tools
---

<div class='page-header text-center well'><h2>Find the calculator <a href='https://daveeargle.com/college-financial-calculator/'>here</a>.</h2></div>

I was in school for a long time. When I finally got my first "real" job last year, I scheduled a meeting with my university's contracted financial counselors to ask them for help in savings goals.
I told them in advance that I was especially interested in figuring out how much I would need to save each month (or year or whatever) in order to have enough to help my children with college. My wife and I still haven't decided whether or how much we're going to assist our children with college versus letting them pay on their own for the life experience points -- but I still wanted to know theoretically how much we would need to save to reach some arbitrary goal.

The financial counselor asked me again at the beginning of the meeting what I hoped to get from the meeting, and I reminded her of the college savings question. Then, to my disappointment, the counselor spent nearly the entirety of the hour pushing unrelated financial products on me. When I asked again at the end for a formula or something I could use for the college savings question, she shrugged her shoulders and turned to the almighty google to see what was out there. Nothing turned up (quickly, anyway).

Leaving the meeting, I realized that I had taken classes on this kind of thing in my business degree. It's a question of long term investment with uneven cash flows. So I made a dadgum calculator with goal seek. First made it in Excel, then generalized it to this online one for the fun of it and to maybe help someone else.

To make this calculator, I played with Vue, d3, Finance.js, and goalSeek.js, all for the first time. I also accidentally used Bootstrap 4 instead of Bootstrap 3 (the rest of my site uses Bootstrap 3), so sigh I have to divorce this page from the entirety of the rest of my site. I <em>also</em> learned that Bower is deprecated, so I'd better learn something new like npm/yarn and webpack. Sigh. I just want to throw a nice calculator online, dangit! I learned that I am a [crusty old web-development dinosaur](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70) and that I'm way behind on all the newfangled front-end trends.

*Update 8/10/2018* -- learned npm/yarn and webpack today. I'm beast-mode now.

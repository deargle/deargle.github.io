---
title: Creating separate RSS feeds because I want to blog about more things.
description: Announcing the creation of category-specific RSS feeds.
tags: site-changes
---

I want to blog about a wider collection of topics. For years I've been timid to
publish beyond a small set of topics related to my work -- security, analytics,
pedagogy, etc. I'll call these the "professional" posts. But I have a lot of
random hobbies, and I want to archive them somehow! Like woodworking,
electronics, gardening, home automation, and church/religion stuff. I'll call
these "unprofessional" posts (⌐■_■).

I currently use [`jekyll/jekyll-feed`](https://github.com/jekyll/jekyll-feed) to
generate this site's `/feed.xml` RSS file. That file will continue to have _all_
posts. (I don't see an easy way to do otherwise with OOTB Jekyll.) But now, I'm
going to publish more RSS files, including
[`/feed/professional.xml`]({{ '/feed/professional.xml' | relative_url }})
and
[`/feed/unprofessional.xml`]({{ '/feed/unprofessional.xml' | relative_url }}).

I don't know how many readers I have, and of those, I don't know how many would
only want the professional-type posts. Hence this blog posts -- if you only want
one or the other, visit [ /feeds/]({% link feeds.md %}) to get the new links.

The homepage of this site, by default, will only show "professional" posts. That
change, coupled with this feeds-change, give me enough confidence to do
what I want.

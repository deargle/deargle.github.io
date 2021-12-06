---
layout: index
permalink: /
include_tags:
  - security
  - analytics
  - academia
  - pedagogy
---

{% include about-json-ld.html %}

Posts about {{ page.include_tags | array_to_sentence_string }}.
<br/>
[(View all posts)]({{ site.baseurl }}{% link blog/index.html %}) \| [(View all posts by tag)]({{ site.baseurl }}{% link tags.md %})
{: .mb-4 }

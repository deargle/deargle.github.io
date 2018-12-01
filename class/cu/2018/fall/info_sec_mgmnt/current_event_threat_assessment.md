---
layout: assignment
title: "Project: Technology Threat Assessment or Organization Breach Report"
---

This is a group project -- teams of up to four. <span class='label label-info'>Have each member of your team join one of the already-existing 
"Project \| Threat Assessment" groups on Canvas.</span> Do not make your own group. Search
Canvas groups for "Project \| Threat Assessment" and join one of those.

Your team has two choices for this project -- either perform a "Technology Threat Assessment", or report on an "Organization Breach." Both options
are described below.

## Approval for Topic

Your team should pitch your proposed topic on the #project_idea_claim on slack. You must obtain my approval for your topic.



## Option 1: Technology Threat Assessment Review

This option is adapted from Cryptography Engineering, 2nd edition, by Ferguson, Schneier and Kohno (2010).

This exercise deals with developing your security mindset in the context of real products or systems. Your goal with the security reviews is to evaluate the potential security and privacy issues of new technologies, evaluate the severity of those issues, and discuss how to address those security and privacy issues. This review should reflect deeply on the technology that you're discussing.

Your security review should contain: 

- **Summary of the technology that you're evaluating.** You may choose to evaluate a specific product (like a recently introduced wireless implantable drug pump) or a class of products with some common goal (like the set of all implantable medical devices). This summary should be at a high level. Around one or two paragraphs in length. State the aspects of the technology that are relevant to your observations in the following bullets.

    For this exercise, it is acceptable to make some assumptions about how the products work. However, if you do make assumptions about a product, then you should make it clear that you are doing so, and you should explicitly state what those assumptions are. 

    Being able to clearly summarize a product (even with explicitly stated assumptions) is very important. If you don't understand the technology well enough to provide a crisp and clear summary, then you probably don't understand the technology well enough to evaluate its security and privacy.

- State at least two **assets** and, for each asset, a corresponding security goal. Explain why the security goals are important. You should produce around one or two sentences per asset/goal.

- State at least two possible **threats**, where a threat is defined as an action by an adversary aimed at compromising an asset. Give an example adversary for each threat. You should have around one or two sentences per threat/adversary.

- State at least two potential **weaknesses**. Again, justify your answer using one or two sentences per weakness. For the purposes of this exercise, you don't need to fully verify whether these potential weaknesses are also actual weaknesses.

- State potential **defenses (mitigations)**. Describe potential defenses that the system could use or might already be using to address the potential weaknesses you've identified in the previous bullet.

- **Evaluate the risk** associated with the assets, threats, and potential weaknesses that you've described. Informally, how serious do you think these combinations of assets, threats, and potential weaknesses are?

- **Conclusions**. Provide some thoughtful reflections on your answers above. Also discuss relevant "bigger picture" issues. (Ethics, likelihood the technology will evolve, and so on). 

Some examples of past security reviews are online at [https://cubist.cs.washington.edu/Security/category/security-reviews/](https://cubist.cs.washington.edu/Security/category/security-reviews/)


### Deliverables for Option 1

Submit the following to Canvas:
1.  Your written security review
2.  A brief powerpoint slide presentation, following the general outline of the security review. Be prepared to present (probably ~5 minutes, up to 10 minutes allowed) -- a few lucky teams will be selected to present to the class.




## Option 2: Organization Breach

The purpose of this option is to explore the unfolding of a breach from the perspective of the organization -- to analyze how an organization handled it, and to look at how 
the public reacted to the dumpster fire (if at all). Teams will choose a semi-recent security breach incident and report on the unfolding of events leading up to, during, and after the breach. This report is more than just a summary of one or two news articles. 
It is a meta- and longitudinal analysis of the breach as it unfolded -- not a snapshot. For this reason, the breach needs to be sufficiently old for information to have eeked out and for public response
to have waxed and waned. (No breaking news.)

Structure:
- An-upfront **abstract** of main compromise. Should articulate the compromised asset, the exploited vulnerability, and the attacker motivations.
    - Consider using the [Security Cards framework](https://securitycards.cs.washington.edu/)
- **Timeline** -- high-level and also with analyses*
    - This should include as many of the following elements as possible
        - initial breach
        - movement of attacker through internal organization (if applicable)
        - management detection of threat and organizational response
        - organizational restructuring (firing, hirings)
        - organization public relations statements or actions
        - public reactions
        - congressional hearings, FCC or EU sanctions
        - stock price movements
    - Try to piece together as well as you can the organizational response timeline. How long did it take them to respond, how long was
        the public outraged, when did the event drop out of the news.
    - Your report should provide a high-level timeline overview, as well as an analysis of the timeline elements where possible from the three information security management domains: Organization, Technology, People
        - Technology: What vulnerabilities existed in the technology that were not mitigated. Could they have been mitigated?
        - Organization: How did organizational policies or culture, or lack thereof, contribute to the compromise, or to a failure to detect the breach
        - People: Was a human element involved in the breach -- perhaps a lapse of an organizational insider, or an insider attack?
- **Lessons learned**
    - For the organization
        - Where did they do well in handling the compromise?
        - Where did they do poorly?
        - How have they adapted their security posture, and against what threats are they still vulnerable? (Another brief round of threat-modeling here)
    - For the industry
    - For society (recommend regulations?)
- **Sources**
    - Should include a collection of different sources, as close to original-source as possible (e.g., original reporting, organization press announcements, congressional hearings -- not outlet regurgitations of first-hand accounts).

   
## Deliverable for Option 2

Your final report should probably be the length of an interesting online news article, e.g., for the nytimes or Wired. Long enough to cover the important points, but don't overdo it. 
I am not looking for a congressional oversight report in scope or length, but I am looking for sufficient detail to interest at least the average member of our class. <span class='label label-warning'>Informative and engaging, please.</span>

Submit the following to canvas:
* Your written deliverable
* A brief powerpoint slide presentation, following the general outline of the written deliverable review. Be prepared to present (probably ~5 minutes, up to 10 minutes allowed) -- a few lucky teams will be selected to present to the class.

<div class='alert alert-info'><strong>The report structure is flexible. </strong>If you can fulfill the main goal of a longitudinal exploration of an organization handling and the public responding to a breach,
while touching on the ideas I request in the structure outline, then I am satisfied. I have not given this option before. Option 1 has more precise expectations because that option has been around for a few years. Look at that option, and get a gauge for the weight of the deliverable. The complexity and
Option 1 and Option 2 should be comparable.</div>


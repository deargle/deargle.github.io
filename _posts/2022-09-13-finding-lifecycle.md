---
title: What happens to a security-assessment finding?
description: Philosophical musings on writing a vulnerability finding for a security assessment report.
tags: consulting
category: professional
...

I originally wanted to publish this on the company blog, until I realized that company blogs are for _assertive statements of reality_ as opposed to missives about professional growth and realizations. So this post is coming here instead!

I'm replacing the company name with `Firm`, not because it's confidential, but because the company might not want posts like these to come in up SEO for them.

Oh and I left academia back in June and joined an information security consulting group. Having so much fun.

---

_This article is philosophical musings on writing a vulnerability finding for a security assessment report. The author is as of time of publication one of `Firm`'s Senior Consultants. He recently moved into cybersecurity consulting during the Great Resignation, coming from a 10-year career in academia, in business schools, where he researched and taught cybersecurity management._

When I moved into the cybersecurity consulting industry from academia and started working at `Firm`, I had to learn how to _write a security assessment report_. This was an entirely different skill for me from _performing the technical work_ of a security assessment. A light-bulb moment was when I learned how the reports would be *used*. This post describes what I learned. It may be  insightful to current or prospective clients, or to new consultants in the industry.

**Key takeaways:**

- View each finding as a separate *ticket*. An *issue*. A bug tracker item. Because that might be *exactly* what the finding turns into once delivered to the client.
- A report's findings have lifecycle stages: Creation, Delivery, Support, and Retesting.

## Creation Stage

My notes below on the "creation" stage aren't comprehensive. I raise points relevant to the lifecycle stages discussions following this section.

- Finding "creation" is analogous to "opening an issue" in a source code management repository.
- Each finding may be _one vulnerability_, or a _collection of related vulnerabilities_.
  - How and whether vulnerabilities get grouped into a single finding is subjective. For example, three overly permissive cloud buckets could all be grouped into one finding, while two different kinds of authentication bypass should probably each get their own finding. It might depend on what kind of work the consultant envisions the client will need to do to _close_ the issue on their end.
- A finding should include things like the following:
  - **Impact statement:**
    - A _specific business risk_ realized by a _vulnerability_ within a client _asset_.
    - Should be punchy. Probably one sentence. Might be presented word-for-word by the consultant in a read-out call with the client in the "delivery" stage, to introduce the finding.
    - For example, "An attacker can completely take over accounts merely by guessing easily enumerated device serial numbers."
  - **Details:**
    - A finding should have sufficient detail to permit (1) the author-consultant, or (2) another consultant, or (3) the client, to replicate and con`Firm` the finding. Proofs-of-concept.
      - Consultant-authors should keep all three audiences in mind! Consultants, be kind to your future selves. You or a colleague may have to read this section *months* from now if and when you perform another security assessment for this client.
      - The client will need to be able to replicate the finding so that they can con`Firm` for themselves that it does indeed exist. This doesn't just support the consultant's finding's claim -- it also helps the client *fix* the vulnerability.
    - Should include detailed evidence _in the report_ demonstrating the finding.
      - If the client's code base changes after the initial discovery of the finding but before the report delivery, the consultant might not be able to go back later and get the evidence again.
      - Should include things like screenshots, code blocks, and raw (and redacted!) HTTP requests and responses. What gets included will depend on what is being assessed (e.g., webapp? mobile device? API?).
      - A fellow consultant could *learn* from the report, perhaps months later. Consider the educational opportunity.
      - The quality of the finding details writeup serves as an attestation to the quality of the consultant's and the consultancy's work. It may be a future calling-card for new client engagements.
        - Maybe the report is *so good* that it gets passed around between business units within the organization.
      - The details should be *direct*, yet *kind*. Kind as in, not *mean*. Not offensive. But direct as in, factual and assertive. Kind, because someone or some team wrote the code. Critique the *code*, but leave out character attacks on the code author; they have no place in a report paid for and delivered to a client.[^academic_critique]
  - **Classifications:**
    - Using agreed-upon [bug bars](https://softwareengineering.stackexchange.com/questions/232425/what-is-the-process-of-creating-a-bug-bar), the finding should be *classified*. What is its severity? Ease of exploitation? Does it impact system confidentiality, integrity, availability? Authentication and/or authorization? Etc. What gets classified and how it is done may depend on the client's needs, because finding classifications may have serious client business implications.
  - **Recommendations:**
    - Cybersecurity consultancies are hired to _break_ code for clients, not to _make_ code for them.
      - Therefore, at the _bare minimum_, a recommendation should be the lexical equivalent of a programming [unit test](https://en.wikipedia.org/wiki/Unit_testing) assertion -- a statement of what needs to be *true* in order for the vulnerability to be considered "mitigated." When is it "fixed"?
        - For example, "The `/foobar` route should authenticate requests," or, "The `id` parameter in the `/baz` route should be sanitized -- it should not allow arbitrary SQL code execution."
        - Imagine literally writing a unit test -- what would need to be true for it to pass?
    - Even though a consultant is hired to _hulk smash_ (within contractual limits!), consultants should strive to offer actionable advice and helpful resources to clients.
      - For example, consultants could point the client to well-reputed online guides for remediating vulnerabilities, such as one of the [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/IndexTopTen.html). Or for outdated software, links to recommended and currently up-to-date versions.

## Delivery Stage

Illustrated with a story.

The first project I worked on delivered the final report to the client-contact at the end of the contract's assessment calendar-window. A week later, a "read-out" call was scheduled with the client, and also with 12 (too many!) other engineers from the outsourced client company whose app we had assessed. During the call, my colleagues and I took turns "presenting" findings from our report, with the report visible on a shared screen. One finding at a time. We entirely skipped the introductory and methodology sections of the report, per the client's request. For a finding, we typically led with reading the impact statement aloud. Then we summarized succinctly what we had done to find it, and what we had exploited to find it.

The client would ask for clarification, and then deliberate internally, identifying which piece of their code base (invisible to us, for this engagement) was responsible. And a few times I heard the phrase that led to my light-bulb moment, one client to another:

> This finding is ID `123` within the `issue tracking system.`

Before the call, someone on the client engineering team had, within their tracking system, opened one ticket for each one of our findings, and had copy-and-pasted the details and recommendation section into there. (They had actually requested from us an Archer-format spreadsheet of our findings, which was essentially the same thing). During the call, they assigned each finding-issue to a team member, using their issue tracking system.

So at that point, the finding from the Creation stage took on a life of its own, as all issues within a tracking system do.

Possibly though, one of our findings had been tenuous. As in, we weren't certain there actually was a vulnerability, but we had documented it for sake of being thorough. For example, "The request to submit an order appears to accept arbitrary purchase amounts. We cannot tell what price is actually being charged on the back end. If the arbitrary price is ignored, we will update this finding and close it." After reading aloud which, on the call, the client might attest on the spot that, indeed, the client-provided price is ignored, and we would add a note to the finding stating their attestation, and close the finding. Or they would make a note to look into it, and then close or escalate it on their own time, until we saw it again during the Retest lifecycle stage.

Another phrase I heard repeated a few times was, one engineer to another, "Where is this report? I need these details [so I can close or work on the vuln]." A common response was, "The finding details are already in the tracking system. I can send the full PDF to you via [some internal secure messaging system] later." My impression was that the PDF might not ever complete that journey. But to the client team, it didn't matter. They had already copied the finding into the tracking system.

The problem was, my findings documents didn't stand alone -- for example, one finding had cross-references to lengthy domain names that I wrote out in a table in the methodology section.

I should have written each finding to be stand-alone. For this client, anyway.


## Support and Retest Stages

`Firm`'s contracts with clients typically specify one retest within `n` days from report delivery, bundled into the price of the overall assessment contract.

Many clients are interested not just in receiving a _bill of health_ from a cybersecurity consultancy, but specifically, in receiving a _bill of **good** health_. Like how children need a physical to go to summer camp. Not just *a* physical though, but a *passing* one. The client needs one, perhaps so they can get their app deployed. The client wants the findings _closed_ -- specifically, attested to *by the consultancy* that the findings are closed. This is why the unit-test-style recommendations findings sections are important. With those, the client knows what they need to do for the consultancy to give a passing score.

Occasionally, we also had some back-and-forth communication -- support -- with the client via email about findings in-between report delivery and the formal beginning of the retest. I consider this part of the Retest stage.

Continuing the story: For the retest, the client provided us with a list of all of our findings along with their notes about whether they had closed the finding's vulnerability -- or at least, with whether the client *thought* they had closed it. During retest, we verified for ourselves whether a finding was closed (where possible). If we couldn't verify that ourselves, we added a note to the top of each finding, recording the client's attestation about why the finding should be closed, and that we were closing it on the basis of the attestation.

After retest completion, we provided an updated version of our original report, with remediated findings updated with a `RETESTED/CLOSED` status. Or others with a `RETESTED/OPEN` status, but an explicit note about conversations we had had with the client about what they had done, and what they had left to do. Like perhaps their fix was dependent on yet another business unit or external vendor. Our updated retest report included a nice table at the very top of the report with just the "HIGH"- or "CRITICAL"-severity findings, most of which had a strike-through after the retest, indicating, "`Firm` initially identified some vulnerabilities in this app, but [client] fixed all of them to our satisfaction." Which meant that the particular client business unit was cleared to deploy their app to production, whereas otherwise they might have been blocked until the Highs and Criticals were mitigated, according to this client's organizational protocols.

Business moving forward is a good outcome for everyone. The hackers get to break stuff, and then see the satisfaction of their work not ignored. And the client gets their bill of good health.

[^academic_critique]: This can be tricky, but I saw some of it in reading academic paper reviews, in my previous job. An *objective and direct* paper review might say, "This paper has the following fatal flaws." That's fine -- for the sake of science, work must be critiqued. But it is *totally* not necessary to go beyond, and to attack the author. **Don't do the following!:** "This paper is crap, and *the author* is a bad scientist who should feel bad, and quit their job." This is a character attack! It's unprofessional. It's not necessary. It doesn't help science. There's niche situations in academia where focusing on the author *might* be important, such as in cases of scientific fraud, but those aren't relevant to this post.

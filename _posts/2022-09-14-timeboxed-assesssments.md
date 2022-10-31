---
title: Hiring a Consultancy vs Running a Bug Bounty Program
description: Philosophical musings on the differences between hiring an information security consultancy vs running a bug bounty program.
tags: consulting
category: professional
...

A company may be choosing between hiring an information security consultancy, or running a public "bug bounty" program. This post compares those two options. Warning: I'm still relatively new to working in a consultancy, so my thoughts on this may be immature.

## Running a bug-bounty program: Goals and Characteristics

A company that runs a bug bounty program might have goals that include the following:

1. Actually improve the security of products. Discover and patch vulnerabilities in products that might _already be in production_.
1. Weaken the vulnerability black-market by providing an acceptable-to-the-company outlet for security researchers to get paid for finding and reporting vulnerabilities.
1. Make public claims about having a bug bounty programs. Ostensibly, a platform or product with a bug bounty program will be more secure than one without such a program -- it's the open-source idea of many eyes leading to few bugs.[^specious_logic]

Bug-bounty program characteristics include the following:

* Consultants are paid based on the *number* and *type* of vulnerabilities they find -- consultants are not paid for their time.
* Findings have to be vetted by the client before payment is made.
* Clients _do not (necessarily) care_ about maintaining long-term relationships with researchers or consultants.


## Hiring an information security consultancy: Goals and Characteristics

Client goals might include the following:

1. Actually improve the security of products. Discover and patch vulnerabilities *before* moving to production; perform assessments in a sandbox environment.
1. Get a "clean bill of health" from an approved consultancy vendor. Approved-vendor lists perhaps come from cybersecurity insurance providers, from acquisition partners, or from boards-of-directors.

Information security consultancy characteristics include the following:

* Payment is for a fixed amount, and is not based on the number of vulnerabilities found, but rather, for the time consultants spend searching for vulnerabilities.
* A company that hires a consultancy doesn't *just* have a goal of *finding* and *patching* vulnerabilities. Above this, it is to also get a "bill of clean health" from a consultant or consultant-group -- specifically, from one with a _good reputation_.
* Information security consultancies are motivated to maintain _long-term business relationships_ with clients.


## What determines the reputation of a consultancy?

This is a chonky topic! For now, just consider that while reputation is a proxy for expertise, not all methods that determine reputation require actually evaluating expertise.

Some reputation-evaluation methods:

* Referrals
* Technical evaluations of previous reports
* Technical evaluations of public presentations by consultants from the consultancy
* Technical evaluations of public tools released by consultants
* Blog posts published by the consultancy
* Consultancy certificate-counting
  * includes ones such as CISSP, CEH, Security+, or ones from cloud-computing providers such as AWS, GCP, and Azure. Prospective clients might explicitly ask a consultancy whether and how many of a prospective vendor's consultants have these certifications. Certificates are arguably more important for cold-call relationships between vendors and clients, in the absence of referrals.

Ones that I think are less worthwhile:

* Impressions of consultancy website, advertisements, testimonials.

Some random thoughts:

* The success of a security assessment consultancy practice, and the value of its assessments to clients, depends on the strength of a consultancy's reputation for _being able_ to find vulnerabilities, including ones that are _hard to find_.

* Arguably, the quality of referrals and of a previous assessment-reports can be easier to evaluate and are more valuable than certifications-counting, depending on the strength and quality of the referral, or on the cybersecurity technical expertise of the prospective client reviewing the assessment.[^students_gpa_vs_referral]

* In either case -- with either bug-bounty programs or hiring a consultancy -- what a company ultimately obtains in the best-case scenario is the ability to say: "These assessors couldn't break this product". Whether that's an impressive claim depends largely on the (perceptions of) expertise of the assessors. And that is why the reputation of the "we" in a consultancy is so important; it is a proxy for the expertise of the consultants. A reputation is knowable even by persons unqualified to directly assess the expertise of a consultancy's consultants.[^do_not_roll_your_own_meta]a


## Hiring a consultancy lets a company control the value of its security assessments

For **both** the client and **also** for whomever the client is trying to impress, the _perception of expertise_ -- or the _reputation_ of the vendor-consultancy -- is very important. It's arguably more important than a consultancy's _actual_ expertise[^scandalous]. But the decision of which vendors have a sufficiently good reputation may not be up to the entity whose product is being assessed. Rather, an interested **someone else** makes the decision about which vendors have a good-enough expertise. And that third-party is probably making that decision based on the vendors' reputations.

But a **key point** is this: no such vendor-selection control is possible with a bug bounty program, so any company that needs to have an assessment performed by a vendor with a certain minimum expertise/reputation *must* specifically hire a consultancy, whether from an approved vendor list, or whether of their own choice.

---

PS: :wave: I quit academia and joined [Carve Systems](https://carvesystems.com), a cybersecurity consultanty! I'm having a great time. See also [this recent blog post]({% post_url 2022-09-13-finding-lifecycle %}).


[^students_gpa_vs_referral]: This is similar to a student trying to get their first job in an industry. Prospective employers can review external signals such as their GPA's or test scores. Or they can rely on a referral. Or an evaluation of the candidate's internship performance. (Hopefully it was a paid internship!) Employers probably prefer referrals over GPAs. They probably prefer internship evaluation most of all -- a self-referral, as it were -- but the candidate would prefer to skip straight to getting paid well. If the candidate is worth it, the employer probably prefers hiring them right away, too. Because speed is better for business.

[^scandalous]: But it's scandalous to suggest that the perception of expertise is possible without actual expertise, because the former will catch up to the latter eventually. But it _is_ possible, unlaughably so, or at least I can imagine, a situation where there is _actual_ expertise, but the _perception_ of expertise isn't there. This would be unfortunate, and would require interventions like "self-marketing" and "impression management", which aren't the focus of this post.

[^do_not_roll_your_own_meta]: This is related to why a company should not "roll their own crypto" -- because "anyone is smart enough to write a cryptography algorithm that they themselves cannot break," loosely quoting <https://www.schneier.com/crypto-gram/archives/1998/1015.html#cipherdesign>. Consider: NIST hosts cybersecurity competitions that bring together ostensibly the world's best cryptographers and cryptanalysts to try to find vulnerabilities in each other's ciphers. Even for them, the best claim that they can make is, "we weren't smart enough to break it, and we know lots of ways to break these kinds of things." They cannot, and I think do not say, "this cipher is objectively unbreakable." Ultimately, who's to say that there's not a shadowy expert sequestered in an elite shadowy government entity building who can and has already broken it? Still, industry does the best it can.

[^specious_logic]:  Whether that questionable logic holds is outside the scope of this article.  

---
title: Transcription of Crown Sterling Time AI Blackhat 2019 Q&A Session
description: A transcription of a recording of the question and answer
  session from Robert Grant's BlackHat 2019 presentatino about Time AI
---

For use in teaching asymmetric cryptography to
b-school students via an injection of snake oil. A transcription of audio from
a recording ([part 1][], [part 2][]) of Robert Grant's
BlackHat 2019 presentation about Time AI. Read [Bruce Schneier's coverage](https://www.schneier.com/blog/archives/2019/09/the_doghouse_cr_1.html) and links therein for context.

[part 1]: https://www.youtube.com/watch?v=oPiWqWJHz8E
[part 2]: https://www.youtube.com/watch?v=3nSOp9OfGtg

All not-italicized text is Robert Grant.

Please submit a PR if you can make out the parts that were unintelligible to me!
---

[[Part 1][] 26:22, start of Q&A session]

So this morning undersecretary Mike Griffin said on his twitter feed, "what I
want to bet on is the ability of the united states and our western allies to
out-innovate our adversaries." I think that's really important and it's not just
a national level but I'm excited for Time[.AI]'s timeliness to be able to impact
[... unintelligible ...] so we will go after the new market but the market is so
large already that nobody knows encryption… rant… like, nobody knew botox but
everyone wanted a botox grant but this is something that I think is so important
about sovereignty. So with that I'll open the time to just a couple of questions
real quick. Yes, go ahead,

_Speaker 1: [...] I understand correctly that all encryption is based on_
_factorization_ [yeah]_... including Diffie-Hellmann..._

Diffie-Hellman exchange, that's... more of the exchange methodology and I think
a lot of people refer to that but yes it's all based on factorization of prime
numbers. including Diffie-Hellman, including RSA, including elliptic curve.

_Speaker 1: AES too?_

AES is not! I'm talking about all asymmetric key, um, encryption.

_Speaker 1: So are you aware this is wrong._ [Sorry?] _Diffie-Hellmann is based_
_on discrete logarithm._ [Sorry I can't -- parle france?] _Oui oui oui._

Okay [chuckles]. So, but you can use Diffie-Hellmann exchange for public key
cryptography too. I'm talking about public key cryptography, and asymmetric...
key. Right? So that's different. Symmetric key is great. AES encryption,
fabulous, no issues there. In fact, Time.AI converts… ah, all of the data that's
 transferred into an AES encryption automatically so it's embedded within it. Yes.

_Speaker 2: So, can you uh … [unintelligible] which is, you can determine whether
a number is composite or prime using your new method._ [Yes.] _Um, how does that compare to AKS?_

Um, I haven't used AKS so I can't say that I can compare it. But I can tell you
that we don't have to go from the other way around, which is you don't have to
start from the number and work backwards, we can predict from the beginning,
outwards. Right. So, we know its position. Now we've also done other analysis
and found that there's a mirror reflection on when quasi primes show up versus
prime numbers. And it's around the number… six.

_Speaker 2: I may have misspoke. I mean if I were to give you a number and ask_
_you if the number was prime, you're able to use your method to determine that._
[Oh absolutely] _And do you have like Big O notation like the worst-case for how_
_long it would take to determine the number..._[interrupted]

We haven't done any speed tests on that yet. Again, once we knew that an index
could be created, ah, for this, we immediately went to developing the new
encryption. Ah, but we have actually worked with the amount of time that it
takes, so we know, ah we also want to be really responsible about this, it's not
really about factorizing anymore, I believe there's going to be -- very shortly
-- equations. Not algorithms, but equations -- that actually geometrically solve
the solution of this entanglement problem between sum and product. Yes.

_Speaker 3: On the day that those equations are found, will you release those publicly?_

That's a good question, but I can tell you that there's a lot of people that
would be very sensitive to this particular topic.

_Speaker 3: Not the equations, your technology. If there was an equation which_
_breaks all encryption, will you release your encryption._

Well, not all encryption -- public key, right, anything factor based, right.
Would we release our encryption's equation? It depends. I don't know the answer
to that question. We have considered doing white papers on our encryption. There
are certain... parties... that we're in talks with right now that may not want
us to do that. I can tell you that Microsoft is working on a non-factor-based
encryption I've heard about. I've heard Google working on it too. I don't think
they've been publishing that. So I think that that whole concept of, you know,
Kerchoff principle etcetera, I think is going to be challenged very soon,
because, people are really starting to look at this as trade secret, more than
anything else. So I can't answer that question right now, and I don't want to
venture it right now, because I can't say what our partners would want. We're
looking at doing partnership with several companies right now, many of whom you
would know.

_Speaker 4: [unintelligible] Microsoft and google are working on that,_
_[unintelligible] poster page in 1976, [unintelligible]_

Actually they just went back to one, probably because they know about this prime
factor issue, they went back to the 60's.

_Speaker 4: [unintelligible] 1978, asymmetric encryption based on things other_
_than factorization...  [unintelligible]... maybe there is a bit of pure art._
_Possibly, [unintelligible] prime numbers, there is a bit of pure art,_
_[unintelligible] so it was described and published 23 centuries ago._
_So maybe you should... Google some of..._

Yeah yeah that's part of it, but the quasi prime was not. So the prediction of
prime numbers was not. Actually, the first time that anyone published the issue
of the 24 hour clock, which was not our invention, we cite in our paper,
Peter Plichta who actually published that, I think in the 90's, he's an old
chemist from Germany, but the advent of the quasi prime, and being able to
predict primes was only in this year.

One last question then we gotta go.

_Speaker 5: So during your talk, you made allegations that RSA might not have a_
_problem in fact._

Not just RSA, right, I'm not talking about the company RSA, I'm only talking
about general factor based encryption. _[Right.]_ Public key.

_Speaker 5: Right. Can you substantiate that will some numbers, like, the_
_security level -- how significantly has it dropped?_

I cannot, and I will not here. I can just say to you that… there was a great
article that came out in the Economist last October, I can't remember the name
of the guy that wrote the article, but it basically was called,
"Prime factorization… Quantum computers will break Prime Factorization." But in
the second paragraph it says, "in addition to quantum computers, any one of the
millions of the professional and amateur mathematicians might have a stroke of
inspiration tomorrow, publish an equation that unravels it." I think that is
actually more likely than what we're talking about from a timeline perspective
for when quantum computers are going to come out.

_Speaker 5: How come you're not following the standard procedure in academia_
_where when there are findings in cryptanalysis, they are published?_

Because I don't have to.

_Audience murmur: Come on, man._

_Dan Guido, CEO of Trail of Bits: You uploaded that document to a website so you could get it_
_reviewed though. You said you put it on a website that was Cornell-affiliated._
_And that's Arxiv. That's like me saying I put information on Google Docs, so_
_Google reviewed it. You're lying!_

No I'm not.

_Dan: This is a scam!_

No it's not.

_Dan: It's a scam, and you're just using marketing material from this to trick a_
_bunch of people months later, you'll say you're legitimate because you spoke at_
_Black Hat. You should be ashamed of yourself, and all of you working for him_
_should quit your..._

[video break, start [Part 2][]]

_Dan: ...somebody with a moderate knowledge of mathematics, […] every single thing_
_you just said._

No, no. I'm sorry. I did not say, that all encryption is. I said factor-based
encryptions. _Yeah!_ Don't lie, no. No, please. Please. So I'm just saying this,
I'm just saying, you know what...

_Dan: You shouldn't be here. You shouldn't be here, you should be ashamed of yourself._

You can say whatever you like, you're entitled, you know what…

_Audience member: Well let's not be rude, alright, let's just not be rude, let's be respectable._

_Audience member 2, addressing Dan: Who do you work for? Who do you work for!_

_Dan: Who do I work for?! I run a cryptography team!_

So. Please have him removed.

[A burly man, who does not appear to be affiliated with Black Hat, removes him, without laying hands on him.]

So, the point is that, we don't claim to know everything. Okay. All I can tell you is that we strongly believe that this new encryption is a great approach to be able to benefit consumers, it's a novel approach, it's real, it works as an encryption, and we will subject ourselves to regular testing. Right, we absolutely! And if it makes sense for us to publish it, right, because our partners who are reviewing  it right now want us to, I'm more than happy to do that. But I'm just saying I want to handle this in a stepwise fashion. And as it relates to an equation that comes out for factorization, right, or speed of factorization tests etcetera, we'll subject ourselves to all that too. But, we want to do it in a stepwise fashion. You have to be responsible. I wouldn't even have gotten into this encryption field if I didn't feel like it was absolutely necessary. The last thing you want to do is come up with some discovery, then all the sudden have everyone tell you, dude, you just like screwed up this stuff. So we've been relatively quiet about it on purpose. But now we've got an encryption that's working, that's great, we'd like you guys to try it, and it's gonna have to stand on its own merit, just like every other encryption. So of course there's gonna be people that are going to have their own skeptical position [gesturing towards door], it is what it is. But you know what, those are usually people who don't create anything.

Thank you very much.

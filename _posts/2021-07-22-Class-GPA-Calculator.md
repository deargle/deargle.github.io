---
title: Class GPA Calculator
description: Some schools have guidelines for distribution of letter grades for a class. Announcing a tool that helps with compliance with those guidelines.
---
_Some schools have guidelines for distribution of letter grades for a class. Announcing a tool that helps with compliance with those guidelines._

<div class='page-header text-center well'>
  <h2>
    <a class='btn btn-primary' href='https://daveeargle.com/mandatory-grading-guidelines/'>Go to the tool</a>
  </h2>
</div>

---

Letter grades in college are supposed to be an efficient signal of how well students are mastering course material.

For a school evaluating a group of students all going through the same program -- say, a group of
second-years are being considered for scholarships -- GPAs can be more useful. Unless all students
are getting the _same_ GPAs. Without variance, there can't be meaningful discrimination by that metric.

Cross-schools, they're arguably useless for differentiating students. There's no standardization between schools
on how individual course grades are assigned. I think this is _the_ reason why standardized testing exists (e.g., ACT, SAT, GMAT, TSOL). It's supposed
to be the same test for everyone. If you can control for the test, then differences between
students have meaning, even comparing across groups.

Grade curves can be useful for classes with multiple sections, taught by different instructors. In this
case, curving can erase differences in teaching aptitude etc. [I wrote about this](https://www.reddit.com/r/cuboulder/comments/gdh983/does_this_warrant_talking_to_the_department_head/fphd63u/?context=3) on [/r/cuboulder](https://www.reddit.com/r/cuboulder/) once,
in response to a student took a section of a large, required course, taught by a grad student. The student concerned that they would get an unfairly low grade:

> Hi, I'm a prof. Will there be a curve for this class? This is one of the things that curves are intended to help fix -- problems with different grading standards, different test difficulties, etc among sections of classes (or among different classes in a school). If one section has an ultra-hard exam with a D average, and another section for the same class has an A average, then an across-section curve would in theory make it so that a student's grade was not determined merely by a dice-roll of which instructor a student got for a section.
>
> An aside from the perspective of an instructor -- assessing knowledge is not easy, and writing exams is hard. Judging what a student should know is subjective, and takes experience -- it takes semesters of teaching the same course, or it can partly be remedied by borrowing testing materials from others in the department or whomever has taught the same course. That's another thing curves are supposed to help -- help with the learning curve of writing assessments. Or an instructor gets "lucky" and finds a textbook which has pre-written exam questions, and they can just require the textbook for the course and use the exam questions, done. Cheese, and $$$$$$$ for students, but that's part of the appeal of textbooks to instructors. But no textbook, then instructor has to write all assessments themselves. And there is no real training on how to do that. Grad programs are about how to do research, not about pedagogy.
>
> Another friendly nitpick, a "professor" is someone with a phd, in that someone with a phd "professes" to be an expert in a field. I was thrown for a minute by dissonant impossibility of someone with a phd being a grad student in their own field. lol.
>
> But I would wait to see what the final posted grade will be. If it seems unduly low, then that would be the time to appeal to a department head. And bless your heart for going to the department head first instead of straight to the dean. That's the correct path for appeals, and saves a lot of organizational headache for everyone involved. Appeal straight to the dean and the dean is going to refer it to the department head.


Adding to the above: some professors might snub their noses at a school and assign all A's, as a lazy way out of more careful grading work. Or, maybe a professor is developing a new course, and they haven't honed their exam material yet. Good exams differentiate between students -- with bad exam questions, either everyone gets it right, or everyone gets it wrong, or it's a tossup on who gets it right or wrong. Maybe students in one year do better with certain material than in the next year, because perhaps the professor got better at teaching it, or perhaps because students cheated. Should students who do equally well on a class across years get the same grade? Holding exam, teaching method, teaching quality, and all else constant?

---

The thing that really gets students worried is a fear that they won't get a job because of their GPA. At employment time, students might be compared against
candidates from different schools. I don't see how minute differences in GPAs can be useful for discriminating between applicants from different schools. Regardless, GPAs might be used by an employer to do a rough first cut of job applicants. Even if those
applicants come from different schools. That's lazy of an employer -- a standardized test would be better --
but it's a lot cheaper than interviewing every candidate. And perhaps the practice signals to the candidate that an employer isn't a good match. An employer _could_ more reasonably
compare two candidates from the same college program by their GPA. Again, as long as there is variance! If everyone has 4.0's,
then this approach would never work.

Again, [some](https://www.dailycamera.com/2015/12/08/unrest-over-grade-guidelines-pressures-cu-boulders-business-school/) [students](https://www.change.org/p/david-l-ikenberry-faculty-at-cu-boulder-leeds-help-change-the-grading-guidelines-at-leeds-school-of-business-cu-boulder) [get](https://www.cuindependent.com/2016/02/22/the-debate-over-leeds-grading-guidelines-explained/) worried.

That's too abstract! We have a business (a business school) to run. Let's get to it! Faculty in a school need a target for grade distributions.
Here's [Leeds'](https://www.colorado.edu/business/current-students/academic-advising/undergraduate-degree-information/grading-guidelines):

> Average course grades should not exceed:
>
> 3.0 (1000‐2000 level courses)
> 3.0 (3000 level courses)
> 3.2 (4000 level courses)

These guidelines have been in place since I arrived at Leeds. But how to do this, practically? Default gradebooks (we use Canvas LMS) track grades on a 100-point
scale. I have a "problem" where I give "good" exams (high variance) with _very low_ average scores (we're talking 50% median, ouch). So before curving, my class GPAs might be _way below_ the 3.2-or-whatever mark. I _could_ leave grades there, but I'm not a monster, so I curve up. (I also try to not let students see their uncurved grades, because I'm still a young, not-yet-heartless professor.)

My typical approach is this:

* start with students' final 100-pt grades. Download as a csv from Canvas.
* Use a vlookup table to convert 100 pt grades to a letter grade.
* Use another v-lookup to convert letter grades to 4.0-scale grades.
* Compute the average of the latter.

  If way below target:
  * add `x` points to all students' final 100-pt grades, and observe the new 4.0 average.
  * Set up an excel goal-seek to set the 4.0-scale average to some value by changing the `x`-pt curve.

But that's tedious, especially because any change on the Canvas side means downloading the gradebook anew as a csv and doing all the prep
work on my excel formulas. And something being tedious means... time to spend way too many hours automating what could be error-prone
done in far shorter time! And then... share it with the internet, and get internet points!

<div class='page-header text-center well'>
  <h2>
    :tada: <a class='btn btn-primary' href='https://daveeargle.com/mandatory-grading-guidelines/'>Behold, a Grade Curvinator!</a> :tada:
  </h2>
</div>

---
title: Canvas LMS Quiz.Next Partial Credit Hack
description: Javascript hack for granting partial credit in Canvas Quiz.Next quizzes
tags: canvas pedagogy
---

Much to my consernation, as of 12-12-2019, Canvas' new Quiz format "Quiz.Next" does not calculate partial credit for "select all that apply"-type questions. Their _old_ ("classic") quiz
architecture offers this, but not their new one. And there are no definitive plans to offer this functionality in the future.


{% include image.html image='canvas-partial-credit-under-discussion.PNG' %}

_screenshot from [here](https://community.canvaslms.com/docs/DOC-12076-faq-new-quizzes#jive_content_id_Is_there_partial_points_grading_for_items)_

{% include image.html image='canvas-quiz-comparison-no-partial-credit.PNG' %}

_screenshot from [here](https://community.canvaslms.com/docs/DOC-12115-quizzesnext-feature-comparison)_

Sigh. Last year, I had to calculate partial credit by hand. That was tedious and error-prone, so I wrote me some javascript to automate the process.

{% highlight javascript %}
// Quiz.Next uses React webframework, so this function is needed to trigger the change-event after
// programmatically setting a question's point score.
//https://stackoverflow.com/questions/30683628/react-js-setting-value-of-input/52486921#52486921
function setNativeValue(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", { target: element, bubbles: true });
    // React 15
    event.simulated = true;
    // React 16
    let tracker = element._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
}


var items = jQuery('[data-automation="sdk-grading-result-wrapper"]')
jQuery.each(items, function(i, item){
    var correct = jQuery(item).find('svg[name="IconCheck"]')
    var incorrect = jQuery(item).find('svg[name="IconX"]')

    var num_correct = correct.length
    var num_incorrect = incorrect.length
    var num_questions = num_correct + num_incorrect
    var score = Math.round( ( num_correct / num_questions ) * 100 ) / 100
    var score_input = jQuery(item).find('[data-automation="sdk-grading-edit-score-input"]')[0]
    setNativeValue(score_input, score)
})
{% endhighlight %}

Partial credit is calculated as the number of "correct" selections for any question, divided by the sum of "correct" and "incorrect" quiz responses. I selected the "correct" and "incorrect" options by searching for the
corresponding `svg` icon (either `name="IconCheck"` or `name="IconX"` for correct and incorrect responses respectively). Couldn't find an easier way to detect whether a question was correct or incorrect because of the obfuscated `react` element class names.


The above code can be run from a browser development console. For example, Chrome's is found by opening the [Developer Tools](https://developers.google.com/web/tools/chrome-devtools) -- one way to do that is by right-clicking
and choosing "Inspect Element". Then, paste the script into the console input prompt, and running it by pressing `<enter>`.



{% include image.html image='chrome-dev-console.PNG' %}

Navigate to a view, such as the speedgrader, which shows a student quiz submission. The Quiz.Next quizzes are loaded as html `iframe` elements, so the Chrome developer console needs to be told to execute
the code below in the context of the Quiz.Next iframe. Do so by using the context dropdown, selecting the nested context that looks something like `quiz-lti-iad-prod.instructure.com` (see below).
{% include image.html image='chrome-change-console-frame-context.jpg' %}

Then, paste in the code below and execute it by pressing "enter":
{% include image.html image='canvas-grant-partial-credit.jpg' %}

Review the updated scores. If things look good, **click the `Update` button at the bottom of the quiz.** The score should update.

Chrome dev console allows javascript "snippets" to be saved within the browser, to be reusable later. The screenshot above shows that I have saved this code as a "snippet". Snippets can be selected from the `Sources`
tab (as shown in the image above), and run by pressing `Ctrl+Enter` within the snippet focus window.

Took me less than an hour to figure this out. Looking at you, Quiz.Next devs...

---
title: Canvas LMS "Unpublish All" Hack
description: A hacky javascript workaround to avoid hundreds of clicks to unpublish items after copying a course to a new semester
---

Canvas Learning Management System (LMS) is visually pretty, but is sorely lacking in core usability functionality.
One flaw relates to the difficulty of "unpublishing" assignments after copying a course. Assignments and files can individually be "published" or "unpublished" 
(available or unavailable for students to see). Assignments can also be nested with modules. 

{% include image.html image='canvas-modules.PNG' %}

When an instructor copies a course to start a new semester, 
all items retain their published state. This is often undesirable when, because not all assignments should be immediately available to students at the start of a semester. However,
it _is_ often desirable to have _module bucket names_ available for students to see.

[Canvas users are not happy](https://community.canvaslms.com/ideas/6173-publish-unpublish-all-option).

Canvas foils both goals, as of publication date of this post. (1) There is no built-in way to unpublish all assignments. (2) When a module is published,
all items within it are auto-published. But when a module is unpublished, items within it remain published. :facepalm:

Because aint nobody got time for all of the clicks it would take on the website to reach a desired publications state, we turn to our sordid friend,
Javascript. Javascript runs in your browser. In theory, yes, javascript can compromise accounts etc, and not everyone is a security expert to be able to discern what bad things my / the code might do, but perhaps you can trust others to review and vouch for the code. 
The javascript is merely selecting elements on the website (that's the `$('some selector')` part), and then simulating "clicks" on elements (`.click()`), 
just as if you had done it with your mouse. 

The following code can be run from a browser development console. For example, Chrome's is found by opening the [Developer Tools](https://developers.google.com/web/tools/chrome-devtools) -- one way to do that is by right-clicking
and choosing "Inspect Element". Then, paste the script into the console input prompt, and running it by pressing `<enter>`.

{% include image.html image='chrome-dev-console.PNG' %}

Without further ado,



## Publish all modules, and unpublish module subitems

[Publish most-all unpublished things (won't get files)](https://community.canvaslms.com/ideas/6173-publish-unpublish-all-option?commentID=150746#comment-147174)

{% highlight javascript %}
$('.publish-icon-publish[data-module-type="module"]').click()  
{% endhighlight %}


## Unpublish assignments, but leave modules published

Click "unpublish" for all non-module publish buttons, using the :not() selector 
    
{% highlight javascript %}
$('.publish-icon-published:not([data-module-type="module"])').click()
{% endhighlight %}
    

## Unpublish all files

Unpublishes all files. Waits 1 second after opening the model before selecting the "unpublish" radio button, and then submits the modal. 
Then, proceeds to the next attachment. [Canvas forum link.](https://community.canvaslms.com/ideas/6173-publish-unpublish-all-option?commentID=150746#comment-150636)
Had to make it recursive because otherwise loop functions would try to pop open all modals at once, which wouldn't be pretty.


{% highlight javascript %}
var attachments = $('[data-module-type=attachment] button.published').toArray()

var unpublishAttachment = function(e){
    
    new Promise(function(resolve, reject){
        $(e).click()
        setTimeout(function(){
            resolve();
        }, 1000)
    })
    .then( function(){
        return new Promise(function(resolve, reject){
            $('.permissions-dialog-form .icon-unpublish').siblings('input').click() 
            $('.permissions-dialog-form button[type=submit]').click();
            setTimeout(function(){
                resolve();
            }, 1000)
        })
    }).then(function(){
        if (attachments.length > 0){
            unpublishAttachment(attachments.pop())
        }
    })
}

if (attachments.length > 0){
    unpublishAttachment(attachments.pop())
}
{% endhighlight %}
    

Yes, Canvas should implement this functionality, but I've had them take three months to fix a show-stopping bug in quiz.next, 
so I'm not holding my breath for new features anytime soon.
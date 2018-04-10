---
title: "Interpreting dummy-coded parameter estimates with and without a model intercept"
draft: yes
description: null
tags: R logistic-regression
---

This post is to illustrate the differences in model parameter estimates for dummy-coded factors when the model includes an intercept versus when it does not.


## Data

[Dataset](/class/data/LendingClub_2007_2014_Cleaned_Reduced_NoTargetLeak.csv) is 10k rows from Lending Club, years 2007-2014.


loan_status
: The target values are `0 = Fully Paid` and `1 = Charged off (default)`. The goal is to predict whether a
  loan will default.

dti
: A ratio calculated using the borrower's total monthly debt payments on the total debt obligations, excluding mortgage and the requested LC loan, divided by the borrower's selfreported monthly income.

grade
: Lending Club-assigned loan grade. "A" is good, "G" is bad, etc.


{% highlight r %}
library(readr)
library(lsmeans)

my.data <- read_csv("https://daveeargle.com/class/data/LendingClub_2007_2014_Cleaned_Reduced_NoTargetLeak.csv")
{% endhighlight %}

## Reference level with an intercept

If we fit a logistic regression model, by default, an intercept will be estimated. In R, by default,
the first level is used as the reference level. 



{% highlight r %}
m <- glm(loan_status ~ grade, family='binomial', data=my.data)
summary(m)
{% endhighlight %}



{% highlight text %}
## 
## Call:
## glm(formula = loan_status ~ grade, family = "binomial", data = my.data)
## 
## Deviance Residuals: 
##     Min       1Q   Median       3Q      Max  
## -1.5829  -0.6222  -0.4769  -0.3523   2.3710  
## 
## Coefficients:
##             Estimate Std. Error z value Pr(>|z|)    
## (Intercept) -2.74868    0.09153 -30.030  < 2e-16 ***
## gradeB       0.63193    0.10614   5.954 2.62e-09 ***
## gradeC       1.20502    0.10544  11.429  < 2e-16 ***
## gradeD       1.53512    0.11264  13.629  < 2e-16 ***
## gradeE       1.83239    0.14778  12.399  < 2e-16 ***
## gradeF       1.95645    0.26251   7.453 9.14e-14 ***
## gradeG       3.66497    0.84165   4.355 1.33e-05 ***
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## (Dispersion parameter for binomial family taken to be 1)
## 
##     Null deviance: 8070.2  on 9999  degrees of freedom
## Residual deviance: 7719.6  on 9993  degrees of freedom
## AIC: 7733.6
## 
## Number of Fisher Scoring iterations: 5
{% endhighlight %}

The logOdds model predictions for any given instance starts with a value equal to the intercept that the model estimated -- in this case, -2.75. Then, if the instance has a grade anywhere between B..G, the logOdds is adjusted up or down (depending on the value of the estimate). If the instance has a grade
equal to the reference level (grade A), then no modification is made. This is because _the intercept
is the estimated prediction for the reference level, Grade A, and all other estimates are relative to
Grade A._

Using a reference level has the benefit of adding interpretabilty to the z-scores for each of the 
parameter estimates. Because each of the estimates is _relative to the reference level_, we can answer
the question "Are the average values for Grade B statisictally significantly different from those of Grade A?" The answer to that is found by looking at the z-score for the gradeB estimate -- 5.954, which has
a very small associated p-value, therefore we can reject the hypothesis that the means of gradeA and gradeB are the same. All other grade parameter estimates can likewise be interpreted as pairwise comparisons between each level and gradeA. Comparisons between other pairs can be obtained by contrasting 
least-square means for each grade level.

Least-square mean estimates:


{% highlight r %}
lsmeans(m, 'grade')
{% endhighlight %}



{% highlight text %}
##  grade     lsmean         SE df  asymp.LCL  asymp.UCL
##  A     -2.7486832 0.09153079 NA -2.9280803 -2.5692861
##  B     -2.1167522 0.05373719 NA -2.2220752 -2.0114293
##  C     -1.5436646 0.05234020 NA -1.6462495 -1.4410797
##  D     -1.2135612 0.06564622 NA -1.3422255 -1.0848970
##  E     -0.9162907 0.11602387 NA -1.1436933 -0.6888881
##  F     -0.7922381 0.24603778 NA -1.2744633 -0.3100129
##  G      0.9162907 0.83666003 NA -0.7235328  2.5561143
## 
## Results are given on the logit scale. 
## Confidence level used: 0.95
{% endhighlight %}
And pairwise contrasts:


{% highlight r %}
pairs(lsmeans(m, 'grade'))
{% endhighlight %}



{% highlight text %}
##  contrast   estimate         SE df     z.ratio p.value
##  A - B    -0.6319310 0.10613940 NA  -5.9537833  <.0001
##  A - C    -1.2050186 0.10543900 NA -11.4285852  <.0001
##  A - D    -1.5351220 0.11263797 NA -13.6288143  <.0001
##  A - E    -1.8323925 0.14778168 NA -12.3993210  <.0001
##  A - F    -1.9564451 0.26251186 NA  -7.4527875  <.0001
##  A - G    -3.6649739 0.84165188 NA  -4.3545010  0.0003
##  B - C    -0.5730876 0.07501455 NA  -7.6396863  <.0001
##  B - D    -0.9031910 0.08483579 NA -10.6463434  <.0001
##  B - E    -1.2004615 0.12786409 NA  -9.3885745  <.0001
##  B - F    -1.3245141 0.25183780 NA  -5.2593937  <.0001
##  B - G    -3.0330430 0.83838397 NA  -3.6177254  0.0055
##  C - D    -0.3301034 0.08395786 NA  -3.9317745  0.0016
##  C - E    -0.6273739 0.12728329 NA  -4.9289573  <.0001
##  C - F    -0.7514265 0.25154341 NA  -2.9872638  0.0447
##  C - G    -2.4599554 0.83829559 NA  -2.9344725  0.0520
##  D - E    -0.2972705 0.13330778 NA  -2.2299562  0.2793
##  D - F    -0.4213232 0.25464488 NA  -1.6545518  0.6465
##  D - G    -2.1298520 0.83923145 NA  -2.5378601  0.1458
##  E - F    -0.1240526 0.27202230 NA  -0.4560385  0.9993
##  E - G    -1.8325815 0.84466653 NA  -2.1695917  0.3122
##  F - G    -1.7085288 0.87208634 NA  -1.9591280  0.4410
## 
## Results are given on the log scale. 
## P value adjustment: tukey method for comparing a family of 7 estimates
{% endhighlight %}


The z-score for the estimate of the intercept can be interpreted as "is the intercept significantly different from 0?"


## No intercept, no reference level

Now examine the parameter estimates for when we instruct our model to _not_ estimate an intercept.


{% highlight r %}
m <- glm(loan_status ~ grade -1, family='binomial', data=my.data)
summary(m)
{% endhighlight %}



{% highlight text %}
## 
## Call:
## glm(formula = loan_status ~ grade - 1, family = "binomial", data = my.data)
## 
## Deviance Residuals: 
##     Min       1Q   Median       3Q      Max  
## -1.5829  -0.6222  -0.4769  -0.3523   2.3710  
## 
## Coefficients:
##        Estimate Std. Error z value Pr(>|z|)    
## gradeA -2.74868    0.09153 -30.030  < 2e-16 ***
## gradeB -2.11675    0.05374 -39.391  < 2e-16 ***
## gradeC -1.54366    0.05234 -29.493  < 2e-16 ***
## gradeD -1.21356    0.06565 -18.486  < 2e-16 ***
## gradeE -0.91629    0.11602  -7.897 2.85e-15 ***
## gradeF -0.79224    0.24604  -3.220  0.00128 ** 
## gradeG  0.91629    0.83666   1.095  0.27344    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## (Dispersion parameter for binomial family taken to be 1)
## 
##     Null deviance: 13862.9  on 10000  degrees of freedom
## Residual deviance:  7719.6  on  9993  degrees of freedom
## AIC: 7733.6
## 
## Number of Fisher Scoring iterations: 5
{% endhighlight %}

Take note that the estimate for grade A is equivalent to the previously-estimated intercept. However,
the estimates for all other grade levels is no longer interpreted as being relative to anything besides 0. So, while the estimates in isolation are much different from what they were previously, they are exactly equal to the previous relative estimates added to the previous intercept. The two models will lead
to exactly the same predictions.

Least-square means in this case are equivalent to what they were previously.


{% highlight r %}
lsmeans(m, 'grade')
{% endhighlight %}



{% highlight text %}
##  grade     lsmean         SE df  asymp.LCL  asymp.UCL
##  A     -2.7486832 0.09153079 NA -2.9280803 -2.5692861
##  B     -2.1167522 0.05373719 NA -2.2220752 -2.0114293
##  C     -1.5436646 0.05234020 NA -1.6462495 -1.4410797
##  D     -1.2135612 0.06564622 NA -1.3422255 -1.0848970
##  E     -0.9162907 0.11602387 NA -1.1436933 -0.6888881
##  F     -0.7922381 0.24603778 NA -1.2744633 -0.3100129
##  G      0.9162907 0.83666003 NA -0.7235328  2.5561143
## 
## Results are given on the logit scale. 
## Confidence level used: 0.95
{% endhighlight %}

# More than one predictor 

Note that least-square mean estimates are not reliable when interaction terms are present in the model. Also, when more than one predictor is used, least-square mean estimates are the mean effect for each level
of the requested factor _holding all other predictors constant at their averages_. In other words, they
are mean estimates "controlling for" the effect of other predictors. 



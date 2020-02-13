---
title: Notes on ML model evaluation
tags: analytics
---

\*\*draft\*\*

This post is a first-pass attempt to organize my thoughts for evaluating machine learning models, for my security analytics class. 
This touches on the "evaluation" phase of [CRISP-DM](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining).

{% include image.html image='CRISP-DM_Process_Diagram.png' alt='CRISP-DM' width='400px' %}

_By Kenneth Jensen - Own work based on: ftp://public.dhe.ibm.com/software/analytics/spss/documentation/modeler/18.0/en/ModelerCRISPDM.pdf (Figure 1), CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=24930610_

There exist two uses of statistical models -- (1) Machine Learning, and (2) "traditional statistics". Machine learning focuses
foremost on building models which will be used for making predictions. "Traditional statistics" focuses on using models to extract 
insights from a dataset-- e.g., t-tests and ANOVAs, ANCOVAs, to test for differences between group means on some outcome variable.
The thing to understand is that both "uses" _use the same models_. It is possible to extract data insights from machine learning models,
and it is possible to make predictions using "traditional statistics" models -- the _same algorithms are used to obtain the same models_.

Machine learning is betimes criticized for producing "black box" models -- e.g., a neural network model from which it seems impossible
to understand "why" it makes a certain prediction. Some machine learning applications must (arguably and sometimes legally) only use 
"interpretable" models, so that illegal or unethical bias in the predictions can be ruled out. For example:
* [models which predict a loan-applicant's credit-worthiness](https://www.experian.com/blogs/insights/2018/09/machine-learning-real-world-credit-risk/), 
* [models which predict a convict's likelihood of re-committing a crime](https://advances.sciencemag.org/content/4/1/eaao5580), and
* [models which determine eligibility for access to special hospital appointment scheduling and financial resources](https://www.nature.com/articles/s41746-019-0103-3) 
  - ([example of it going wrong](https://www.wired.com/story/how-algorithm-favored-whites-over-blacks-health-care/)). 

Such models should use algorithms which produce interpretable coefficients, decision paths, or other metrics 
for exogenous variables -- for example, decision trees, naive bayes, logistic regression. Bad algorithms would include k-nearest-neighbors
(predictions dependent on other points in the training dataset, not on exogenous factors of the datapoint), neural networks (complexity
of its layers resists human evaluation), [mostly-SVM](https://stats.stackexchange.com/questions/39243/how-does-one-interpret-svm-feature-weights).

Note though, that [there exists "partial dependency" analysis](https://cran.r-project.org/web/packages/datarobot/vignettes/PartialDependence.html), 
which is a backdoor way to learn how changes in values of one feature at a time influence predictions. Pretty cool.


"Traditional Statistics" Model interpretation
=============================================

Traditional statistical libraries in R, SAS, SPSS, etc. provide nice print-out summaries of regression models, which allow easy interpretation
of individual model variables. Scikit-learn has a standard API for buckets for train-test-splitting data, for fitting modeling algorithms, and 
for extracting overall model evaluation metrics. But `scikit-learn` has no such nice summary output view of a model's parameters. Enter [`statsmodels`](https://www.statsmodels.org/stable/index.html) -- provides
model summary print-outs comparable to R's.

{% include image.html image='scikit-learn-no-r-summary.png' %}

_Image from [this SO post](https://stackoverflow.com/q/26319259/5917194)_


Gamut of ML model evaluation metrics for binomial classifiers
====================================================

Most classifiers make probability predictions. These can be converted to nominal predictions using a cutoff threshold. Nominal predictions can be displayed using a confusion matrix.
A set of confusion matrices for a given classifier can be obtained by creating one confusion matrix for each possible probability cutoff threshold.

Evaluation metrics such as the following can be derived from a given confusion matrix. These all have synonyms from various fields of use.
* TPR (a.k.a recall, sensitivity, "probability of detection")
* FPR (1 - specificity)
* PPV (precision)
* F1 (harmonic mean of TPR and PPV)
* Accuracy

A Type 1 error is a False Positive, and therefore hurts (lowers) TPR
A Type 2 error is a False Negative, and therefore hurts (lowers) specificity, and hurts (raises) FPR

Wikipedia:
* [Sensitivity and specificity](https://en.wikipedia.org/wiki/Sensitivity_and_specificity)
* [Precision and Recall](https://en.wikipedia.org/wiki/Precision_and_recall)
* [Type 1 and Type 2 errors](https://en.wikipedia.org/wiki/Type_I_and_type_II_errors)

An F-score (F1-score) is the harmonic mean of TPR and PPV. Harmonic mean is an alternative to an arithmetic mean, and is more appropriate when averaging things that are proportions.
A harmonic mean is the... deep breath... **inverse of the average of the inverses of the given measures.** [:exhale:] It's a happy-medium between "how many of the actual yes-es did we
say were yes-es" and "how often were we right when we said something was a "yes."


Plots
-----

* ROC curves
* Precision-Recall curves
* Lift curves

### ROC curves

The set of all TPR and FPR metrics derived from the complete set of confusion matrices for a given classifier can be plotted on a ROC Curve -- TPR on the y-axis,
and FPR on the X axis.

ROC Curves do not depend on class priors. If your testing data does not have the same distribution as the population from which it was drawn, plots such as cumulative gain charts and lift charts,
which plot predictions that have been sorted by probability scores, can be deceptive. ROC curves, however, plot two metrics which consider actual-positives and actual-negatives separately. Therefore,
ROC curves will not change based on the ratio of classes.

A ROC curve also plots a "`p`-coin random guess" line -- a line plotting the skill of a coin-flip classifier model. This model calculates a random probability between 0 and 1 for each test data point,
and if that probability is above a given threshold, it predicts a `1`. If a threshold of `x` is used, say, `.75`, then a model would have a 25% chance for each test case of classifying it as a `1`, and a
75% chance of classifying it as a `0`. Therefore, 25% of the actually-positive cases will be predicted to be `yes`es (`TPR` of .25), and 75% of the actually-negative cases will be classified as `no`'s 
(`FPR` of .25). Note that the above conclusion does not depend on the balance of actually-yes-es to actually-nos, since the classes are considered separately for these metrics. When the complete set of 
TPR-FPR pairs is calculated from all possible thresholds, plotting the resultant set of points on a ROC curve results in a line drawn from `[0,0]` to `[1,1]`. This is called a `p`-coin because such a classifier
can also be considered flipping a maybe-weighted coin. For a fair coin, each datapoint has a `.5`-chance of being classified as a `1`, while a weighted coin that flipped a `1` 9 out of 10 times would give 
each test case a `.9` chance of being called a 1. A ROC curve for a given model had better perform better than a random coin flip for all of its possible thresholds. If it doesn't then it would be better to
always predict the _opposite_ of whatever the given model predicts. From such a classifier, turn away!

An area-under-the-curve can be calculated from a ROC curve to give a single metric that assesses the performance of a single classifier across all possible cutoff thresholds. This is equivalent to the 
ratio of total space that a classifier's curve "fills" down to the bottom-right of the [[0,1],[0,1]] ROC-curve plot space. Higher AUC == good.


### Precision-Recall curves

These are like ROC curves, except that they plot different metrics -- TPR and PPV. These two metrics together only consider 3 out of 4 possible cells of a confusion matrix -- the "true negative"s are
ignored. The thought here is that in application, things relating to the "actual yes"-es and the "yes-prediction"s are more interesting. Note that these are the two metrics that make an "F1"-score.
Therefore, AUC of a precision-recall curve is related to a cumulative averaging of the complete set of F1 scores across all possible cutoff thresholds for a given model.

A no-skill line on a precision-recall curve is not a line drawn from [0,0] to [1,1] -- rather, for a set of random guesses, the precision, or proportion of time that a "yes"-guess is correct, is always equal
to the proportion of actual-yes-values in the set of points from which the random sample was drawn. In other words, regardless of how often you guess "yes", if you're doing so completely randomly, you're
going to right at the rate that there are actual "yes"-es in the sample you are guessing against. Recall, on the other hand, will scale linearly with the likelihood of a no-skill classifier of guessing
"yes"-es. Recall that recall is a measure of "of the actual-positive test-cases, how many were correctly classified?" The more often you guess "yes", the more of the actual "yes"-es you'll get right. 
[See this explained with proper stats notation in this stackoverflow post](https://stats.stackexchange.com/a/266989/101484)


### Lift curves

:todo:


Model evaluations using python scikit-learn
-------------------------------------------

* [Good jupyter notebook, not mine](https://github.com/ferlocar/spring_2019_data_mining/blob/master/Module5_ROC_Cost_Visualization/model_assessment.ipynb)
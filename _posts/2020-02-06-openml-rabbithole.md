---
title: OpenML rabbithole
tags: analytics
categories: analytics
---

If the goal is to post a sample jupyter notebook online as a portfolio demonstration piece, then one of the first "problems" one encounters is, 
what dataset to use. If the goal of the portfolio piece is moreso to demonstrate model-building skills, and less-so domain knowledge of the dataset 
or associated feature-engineering skills, then starting with raw data would be tedious and distracting to a lean demonstration. 
One could theoretically prepare the data in a separate analysis, and then host a prepared dataset on e.g. github and fetch it using a url in the 
portfolio piece, but, again, this is distracting if data munging and feature engineering is not the primary goal for the demo.

Fortunately, this is a common problem, and therefore, there exist standardized ways of fetching data.

Please see {% include source-link.html name='this jupyter notebook' path='/notebooks/ml_datasets_examples.ipynb' %}
for some examples of good security-related datasets, as well as some examples of loading them.

The rest of this post documents a rabbit hole related to datasources for a machine learning assignment using scikit-learn that I am building.
The problems in the domain are often binomial targets, so logistic regression as a starter algorithm.

Scikit-learn `fetch_openml`
---------------------------

There exists [this scikit-learn](https://scikit-learn.org/stable/auto_examples/compose/plot_column_transformer_mixed_types.html#sphx-glr-auto-examples-compose-plot-column-transformer-mixed-types-py)
example for using logistic regression with mixed datatypes -- nominal and continuous. It shows a pipeline for handling these data, which only really requires changing
the datasource and correctly flagging which features are numeric and which are categorical.

The example imports `fetch_openml` function from sklearn:

```python
from sklearn.datasets import fetch_openml
```

Rabbit hole begins
  

www.openml.org
--------------

OpenML boasts boat-fulls of dataset, "tasks", "flows", and "runs." In theory, it provides a platform for  
data scientists to upload and score their analyses and predictions of and for various datasets. The uploaded "tasks", "flows", and "runs" are supposed to be accompanied by
source code or READMEs for replication purposes, but from my brief overview, that functionality is a hot mess. Key-value pair fields for run uploads get abused by
auto-uploaders which leads to a mix of function names, calls, and parameters. Clicking on the "download" buttons on these various areas provided
`json` with another wide variety of key-value pairs. Maybe I just don't have the vision, but in my opinion, the data sets are the main thing of value on OpenML.

Buried in one of the json files from [one](https://www.openml.org/r/6003251) [of](https://www.openml.org/r/9525179) [these](https://www.openml.org/f/6970) urls' JSON downloads but I don't remember which one was the following python sklearn pipeline:

```python
sklearn.pipeline.Pipeline(
    columntransformer=sklearn.compose._column_transformer.ColumnTransformer(
        numeric=sklearn.pipeline.Pipeline(
            missingindicator=sklearn.impute.MissingIndicator,
            imputer=sklearn.preprocessing.imputation.Imputer,
            standardscaler=sklearn.preprocessing.data.StandardScaler
        ),
        nominal=sklearn.pipeline.Pipeline(
            simpleimputer=sklearn.impute.SimpleImputer,
            onehotencoder=sklearn.preprocessing._encoders.OneHotEncoder
        )
    ),
    extratreesclassifier=sklearn.ensemble.forest.ExtraTreesClassifier
)(1)
```

I did the formatting. It was all in a single string. This was part of the documentation, which I guess is mildly helpful, after the 10 minutes to unreplicably find
it and parse it.

OpenML datasets
---------------

The datasets on OpenML are in ARFF format. The format specifies data attributes at the top, and the data at the bottom. Scikit-learn's `fetch_openml` can, 
you guessed it, fetch and load an openml dataset into a numpy array. 

There exists a New Standard (tm) called Frictionless Data which seeks to be the de facto standard for formatting datsets. OpenML [had said it is maybe possibly
is going to support the frictionless data format](https://frictionlessdata.io/articles/openml/), 
but [not yet](https://github.com/openml/OpenML/issues/482#issuecomment-378565567).



DataHub.io datapackages
-----------------------

So yay, along comes another dataset-hosting site, [datahub.io](https://datahub.io), which, um, [extracted datasets from OpenML](https://datahub.io/blog/new-machine-learning-datasets).
These packages can be fetched using the python package [`datapackage`](https://pypi.org/project/datapackage/).

So there's an internet "I made this" regurgitation cycle for you: many of the datasets on OpenML come from the [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php), 
and datahub.io now hosts OpenML datasets.

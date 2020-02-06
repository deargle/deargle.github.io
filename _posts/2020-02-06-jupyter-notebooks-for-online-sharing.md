---
title: Sharing code with Jupyter Notebooks
---

This post is a follow-up to an [earlier post about starting an online analytics portfolio]({% post_url 2020-01-31-analytics-portfolio-r-md %}), 
focusing on R. In that post, I walk though how to get markdown from an R script and share the static results with the internets.

A better way, with Jupyter Notebooks (`.ipynb`)
---------------------------------------------

Been reading more about jupyter notebooks (`.ipynb` files). 
* They are not limited to python kernels -- they can also run R.
* The `ipython` tool `nbconvert` can convert them to a number of formats, including markdown and html. 
* Several places will `nbconvert`-them to html for you, including [https://nbviewer.jupyter.org/](https://nbviewer.jupyter.org/) and github, gists, etc.
* Under the hood, they are `json`. They save the results from when their code cells are run. Therefore, `nbconvert` does _not_ need to execute the code cells. This means
  that notebooks that run specialized kernels or that need access to specialized environments such as ones from Amazon Sagemaker can be rendered using `nbconvert` _anywhere_.
* jupyter notebooks can, obviously, be opened and run by jupyter, as long as jupyter has access to a compatible kernel and environment. 
* Several sites offer free cloud-based JupyterHub, which can let other people view _and_ run jupyter notebooks, as long as the rendering service has a compatible kernel. These include but
  are not limited to:
    * [Google Colab](https://colab.research.google.com/)
        - `.ipynb` are saved to your google drive, and you can share them as you would other Google Drive documents
    * [mybinder.org](https://mybinder.org/)
        - benefit is that you can point to a `.ipynb` that you have in Github, a Gist, or another git-like location
    * [Kaggle](https://www.kaggle.com/kernels)
        - Notebooks live on Kaggle, and run Kaggle jupyter kernels.
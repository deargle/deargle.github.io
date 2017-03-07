---
layout: syllabus
---

# rmr2 installation for RStudio

The rmr2 package is not available via the official R CRAN repositories. You first need to install rmr2 [dependencies](https://github.com/RevolutionAnalytics/rmr2/blob/master/pkg/DESCRIPTION), and then you need to download and install rmr2 from file.

### Install dependencies

Below are the dependences for rmr2 v3.3.1

```
install.packages(c("Rcpp","RJSONIO","digest","functional"))
install.packages(c("reshape2","stringr","plyr","caTools"))
```

### Install rmr2

* Download the [latest package file](https://github.com/RevolutionAnalytics/RHadoop/wiki/Downloads). ([direct link to v3.3.1](https://github.com/RevolutionAnalytics/rmr2/releases/download/3.3.1/rmr2_3.3.1.tar.gz))

* Browse to the downloaded file using RStudio's package installer, and install it.

![rstudio package installer]({{site.baseurl}}/class/images/rstudio_package_install.png)

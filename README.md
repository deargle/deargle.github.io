# daveeargle.com

The personal website of Dave Eargle. Built using Jekyll, GitHub Pages, and Bootstrap.

## Building

The `master` branch serves prerendered static files. The `build-from-me` branch contains the jekyll project directory.
My approach is to create a repository in `_site` which tracks remote `master` (because username sites on github
        must build from the `master` branch). One directory up, the jekyll project tracks the `build-from-me` branch
of the same remote repository. 

```
cd _site

git init # if you haven't already
git remote add origin git@github.com:deargle/deargle.github.io.git

git fetch origin master
git add .
git commit -m 'updating published site'
git merge origin/master master -s ours -m 'merging'
git push origin master
```

use `script/production-build` and `script/production-push` for great success


## R markdown .Rmd

[Blogdown jekyll](https://github.com/yihui/blogdown-jekyll) can be used to render .Rmd files in the `_posts` directory. A `.Rprofile` is included with this repository which provides a `serve_my_site()` function. Start an `R` session so that the `.Rprofile` is read, and then run the function. Running it will render the `.Rmd` files into `.md` files. 



## License

* Content: [Creative Commons, BY](http://creativecommons.org/licenses/by/3.0/)
* Code: [MIT](http://opensource.org/licenses/mit-license.php)



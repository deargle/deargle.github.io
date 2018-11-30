# daveeargle.com

The personal website of Dave Eargle. Built using Jekyll, GitHub Pages, and Bootstrap.

## Building

The `master` branch serves prerendered static files. The `build-from-me` branch contains the jekyll project directory.
My approach is to create a repository in `_site` which tracks remote `master` (because username sites on github
        must build from the `master` branch). One directory up, the jekyll project tracks the `build-from-me` branch
of the same remote repository. 

Now I _will_ need to do the things that github normally does on its own when it builds pages, such as set a "production"
environment var. Will need to differentiate development builds from production builds.

## License

* Content: [Creative Commons, BY](http://creativecommons.org/licenses/by/3.0/)
* Code: [MIT](http://opensource.org/licenses/mit-license.php)



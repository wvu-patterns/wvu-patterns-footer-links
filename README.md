# WVU Pattern Library - Footer Links Module

[![Build Status](https://travis-ci.org/wvu-patterns/wvu-patterns-footer-links.svg?branch=master)](https://travis-ci.org/wvu-patterns/wvu-patterns-footer-links)

Use [Bower](http://bower.io/) to install this module.

```bash
$ bower install --save wvu-patterns-footer-links
```

### Overrideable defaults

```scss
$wvu-footer-breakpoint: 'min-width: 48em' !default;

$wvu-footer-facebook-png-url: '//static.wvu.edu/global/images/icons/facebook/wvu-footer/facebook__50x50--1.0.0.png' !default;
$wvu-footer-facebook-svg-url: '//static.wvu.edu/global/images/icons/facebook/wvu-footer/facebook--1.0.0.svg' !default;

$wvu-footer-twitter-png-url: '//static.wvu.edu/global/images/icons/twitter/wvu-footer/twitter__50x50--1.0.0.png' !default;
$wvu-footer-twitter-svg-url: '//static.wvu.edu/global/images/icons/twitter/wvu-footer/twitter--1.0.0.svg' !default;

$wvu-footer-youtube-png-url: '//static.wvu.edu/global/images/icons/youtube/wvu-footer/youtube__50x50--1.0.0.png' !default;
$wvu-footer-youtube-svg-url: '//static.wvu.edu/global/images/icons/youtube/wvu-footer/youtube--1.0.0.svg' !default;
```

###Pattern Development

Requires:

* Ruby 1.9.3-p484
* NodeJS
* Gulp

*RVM is Preferred* but not required

####Installation

* `cd {install-dir}/wvu-patterns-footer-links`
* `gem install bundler`
* `bundle install`
* `npm install`

####Pattern Testing

* `gulp test` will create a build directory so you can view pattern
* `gulp ci` will run lint test to make sure .scss file is valid
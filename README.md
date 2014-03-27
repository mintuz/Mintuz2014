# Forepoint SASS Framework

This is [Forepoint](http://www.forepoint.co.uk)'s Sass Framework that we use as a starting point for Front End Development.

The package is based on three popular libraries:

* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
* [Inuit CSS](https://github.com/csswizardry/inuit.css)
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/)

## Usage & Install

### Dependancies

This package comes with a few dependancies:

* [Sass](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [Sass Globbing](https://github.com/chriseppstein/sass-globbing)
* [Susy](http://susy.oddbird.net/)

### Install

To get this package all setup, dependancies installed and ready to be used we've added a little [INSTALL](https://github.com/forepoint/Forepoint-SASS-Framework/blob/master/INSTALL) script that automates the process for you.

Its all pretty simple, you just need to download and unzip this package. Jump into your CLI and navigate your way to the unzipped package. You then need to run:

	./INSTALL

## Grunt

As part of our development workflow we use [Grunt](http://gruntjs.com/) to handle compiling SASS and combining and concatenating JavaScript files.

## Bower

We have also introduced Bower into our workflow for managing our Packages production dependancies.

## SASS Structure

SASS is organised into a few different files and folders:

* [/core.css](https://github.com/forepoint/Forepoint-SASS-Framework/tree/master/assets/sass/core.css)
* [/site.css](https://github.com/forepoint/Forepoint-SASS-Framework/tree/master/assets/sass/site.css)
* [_config.scss](https://github.com/forepoint/Forepoint-SASS-Framework/blob/master/assets/sass/_config.scss)
* [_default.scss](https://github.com/forepoint/Forepoint-SASS-Framework/blob/master/assets/sass/_defaults.scss)
* [main.scss](https://github.com/forepoint/Forepoint-SASS-Framework/blob/master/assets/sass/main.scss)
* [main-old-ie.scss](https://github.com/forepoint/Forepoint-SASS-Framework/blob/master/assets/sass/main-old-ie.scss)

### /base

Base styles contains the CSS base configuration, mixins, functions, generic objects and miscellaneous helper classes. The idea is that you shouldn't ever need to change anything in `base` as its all standard stuff that doesn't make any design decisions for you.

### /site

Site styles is were all of your site or project specific stuff goes. This is organised into a few different folders:

* [objects](https://github.com/forepoint/Forepoint-SASS-Framework/tree/master/assets/sass/site.css/base) - project specific abstractions or styling modifications to abstractions defined in base. E.g. custom styling for form elements
* [type](https://github.com/forepoint/Forepoint-SASS-Framework/tree/master/assets/sass/site.css/objects) - custom font includes and typography setup, also may include icon font setup
* [ui](https://github.com/forepoint/Forepoint-SASS-Framework/tree/master/assets/sass/site.css/ui) - user interface specific styles e.g. header or footer styles

If it better aids the organisation for a specific project to create additional folders, then go crazy and create a few. The inclusion of [SASS Globbing](https://github.com/chriseppstein/sass-globbing) means they files or folder you create will automatically be including when you compile the SASS.

### _config.scss

Config allows you define the global configuration of the package. These are the kinds of things you setup at the start of a project but then never touch again. Hence why we've separated out _config.scss and _default.scss.

Config includes things like breakpoints, base font sizes and line heights, base spacing, grid configuration and which core objects and features are enabled.

### _default.scss

Default gives you a place to store/set project specific variables. Such as: base colours, link colours, brand colours or configure default form styles. We don't really put any limitations to what can be defined in _default.scss.

### main.scss

As it says let the wizardry commence! This is where you put all your project specific styles that don't fit into any of the files or folders in the site.css folder.

### main-old-ie.scss

You don't need to do anything with this file, it will compile itself and serve automatically serve styles to older version of IE that don't support media queries.

## Development

We're still very much developing this package and regularly making updates. If you spot anything wrong, broken or have any ideas please create an issue and let us know.
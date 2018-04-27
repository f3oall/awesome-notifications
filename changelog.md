# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

* Override global options on the toast create

## [2.2.9] - 04.27.2018

### Changed

* Rename `styles.css` to `style.css` to remove breaking change.

## [2.2.8] - 04.03.2018

### Changed

* Update `.npmignore` to decrease package size

## [2.2.7] - 04.03.2018

### Changed

* Update `readme.md`

## [2.2.6] - 04.03.2018

### Added

* `test/defaults.spec.js` for testing `defaults.js` file.

### Changed

* DefaultsDeep function has been changed.
* Change Babel config. Now project supports only 2 last versions of browsers.
* Start using Webpack 4. `webpack.config.js` has been changed.
* Start using Yarn instead of NPM.
* Refactoring of `defaults.js` code.

### Removed

* Remove `lodash.defaultsdeep` dependency.
* Remove few old unneeded development dependencies.

---
layout: docs
---

# Changelog

All notable changes to this project will be documented in this file.  
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.0.0] - 04.13.2019
Massive update which changed a big part of internal logic and added some new features.

### Added
* Optional `options` paramater for every public method. It used to override global options per call.
* Durations settings for each toast separately. It's available under `options.durations` property.
* Minimum durations settings for each async element. It's available under `options.minDurations` property.
* New default function which formats errors. It's available under `options.formatError` property.
* Now all messages passed to `alert()` method will be formatted by `options.formatError`.
* All toasts and popups methods, now return HTMLElement which was created by theme.
* New default messages. It's available under `options.messages`
* Brand new handsome and detailed documentation.
* New JS bundle for modern browsers.
* `_addToast` method
* `_addPopup` method
* `_afterAsync` method
* `_responseHandler` method, which is specific for `_afterAsync`
* `container` getter
* Webpack compress bundles to gzip format

### Changed
* New library gzipped sizes: `4kb` - default bundle, `3kb` - modern bundle.
* Now icons are use Font Awesome 5 by default.
* `html` parameter of all elements, now named `message`. It's no longer mandatory.
* `options.modal.okLabel` to `options.labels.confirmOk`
* `options.modal.okLabel` to `options.labels.confirmCancel`
* `options.modal.okLabel` to `options.labels.confirmCancel`
* `options.asyncBlockMinDuration` to `options.minDurations["async-block"]`
* `options.duration` to `options.durations.global`
* `options.handleReject` to `options.formatError`
* Internal name of `Modal` class changed to `Popup`
* Change browserlist setting for default bundle
* Rename `defaults.js` file to `options.js`
* Rename `modal.js` file to `popup.js`
  
### Removed
* `notify` method
* `_runFunction` method
* `_getContainer` method
* `options.modal.maxWidth` property, use CSS instead

### Fixed
* Now NPM dist contains `index.var.js`
  
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

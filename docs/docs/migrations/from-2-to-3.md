---
layout: docs
---

# Migrating from 2.x to 3.x

Before you start it's recomended to read [Changelog](/awesome-notifications/docs/changelog). It describes new features, which can ease your life and code.

## Options
The most part of changes in 3.x version is related with options object.
Before all check all defaults changes in changelog, if it's not applicable for you override it on initialize.

Perform actions below only if you was changing those values manually. If you never override defaults skip this step.

`options.modal.okLabel` should be replaced with `options.labels.confirmOk`  
`options.modal.okLabel` should be replaced with `options.labels.confirmCancel`
`options.modal.maxWidth` was deleted, use CSS to configure it

`options.asyncBlockMinDuration` should be replaced with `options.minDurations["async-block"]`

`options.duration` should be replaced with `options.durations.global`

`options.handleReject` should be replaced with `options.formatError`


## Toasts
All toasts now accept optional `options` parameter, which can be used to override global options for current call.

All toasts methods started to return HTMLElement which was created by them.

Rename `notify()` to `_addToast()`  
`_getContainer()` is a getter now, so you can access it by property `container`  
`_runFunction()` was deleted, check `_afterAsync()` instead  


## Popups
All popups now accept optional `options` parameter, which can be used to override global options for current call.

All popups methods started to return HTMLElement which was created by them.

`modal()` now has only 1 required parameter, `className` is optional now. Default value of `className`  is `"modal"`

You can consider use of new internal method named `_addPopup()`

## Design
Make sure that new design is applicable for your app. Otherwise consider using of old styles or just override new one.

### Thats all! Enjoy the update.
If you met some issues during the migration process or found inaccuracies in this article, please open issue on GitHub.

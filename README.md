[![npm version](https://badge.fury.io/js/awesome-notifications.svg)](https://badge.fury.io/js/awesome-notifications)

# Awesome Notifications

It's a lightweight, fully customizable JavaScript library for showing notifications.

Advantages: **no dependencies**, **advanced async support**, **fully customizable**, **>95% test coverage**.

**Demo:** https://f3oall.github.io/awesome-notifications/
![Demo gif](docs/demo.gif)

## Install

> **Attention!** This library uses FontAwesome icons, so you either need to make sure that [FontAwesome](http://fontawesome.io/get-started/) is connected to your project or disable icons, passing the `icons: {enabled: false}` property to options. Also you can preserve icons setting up a custom template for them via editing `options.icons.prefix` and `options.icons.suffix`

**Via NPM**

```
npm install --save awesome-notifications
```

**In browser**

Download [index.var.js](dist/index.var.js) and [style.css](dist/style.css), then put them in your html:

```html
<head>
  <link rel="stylesheet" href="path/to/style.css"></link>
  <script src="path/to/index.var.js"></script>
</head>
```

**Vue.js version**

You can learn more in the Vue.js version repository: https://github.com/f3oall/vue-awesome-notifications

## Usage

**Node.js**

```javascript
import AWN from "awesome-notifications"

let notifier = new AWN(options)
```

**In browser**

```html
<script>
  var notifier = new AWN.default(options);
</script>
<button onclick="notifier.success('Success message');">Show Success</button>
```

**Available functions**

You can pass any valid HTML to `html` functions params.

| Function                                         | Params                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                 | Example                                                                                                   |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `tip(html)`                                      | _html_ - `String`, required                                                                                                                                                                                                                                                             | shows a gray toast with specified `html`                                                                                                                                                                                                                                                                                    | `tip('First line text<br>Second line text')`                                                              |
| `info(html)`                                     | _html_ - `String`, required                                                                                                                                                                                                                                                             | shows a blue toast with specified `html`                                                                                                                                                                                                                                                                                    | `info('<b>You can put any HTML here</b>')`                                                                |
| `success(html)`                                  | _html_ - `String`, required                                                                                                                                                                                                                                                             | shows a green toast with specified `html`                                                                                                                                                                                                                                                                                   | `success('Simple none-HTML message')`                                                                     |
| `warning(html)`                                  | _html_ - `String`, required                                                                                                                                                                                                                                                             | shows an orange toast with specified `html`                                                                                                                                                                                                                                                                                 | `warning('Simple none HTML message')`                                                                     |
| `alert(html)`                                    | _html_ - `String`, required                                                                                                                                                                                                                                                             | shows a red toast with specified `html`                                                                                                                                                                                                                                                                                     | `alert('Simple none HTML message')`                                                                       |
| `async(promise, onResolve, onReject, html)`      | _promise_ - `Promise`, required; <br/> _onResolve_ - `Function`, `String`, optional, either callback or `html` for success toast; <br/> _onReject_ - `Function`, `String`, optional, either callback or `html` for alert toast; <br/> _html_ - `String`, optional, html for async toast | shows an async gray toast with specified `html` <br/><br/> On promise resolve will run `onResolve` if it's function, and show success toast if `onResolve` is a stirng<br/><br/> On promise reject will run `onReject` function and show alert toast, where `msg` is a promise error or `onReject`, if it's a `String`      | `async(somePromise, 'show me a green toast', 'custom message for alert toast' , 'Custom async msg')`      |
| `asyncBlock(promise, onResolve, onReject, html)` | _promise_ - `Promise`, required; <br/> _onResolve_ - `Function`, `String`, optional, either callback or `html` for success toast; <br/> _onReject_ - `Function`, `String`, optional, either callback or `html` for alert toast; <br/> _html_ - `String`, optional, html for async toast | blocks the screen untill `promise` will be completed <br/><br/> On promise resolve will run `onResolve` if it's function, and show success toast if `onResolve` is a stirng<br/><br/> On promise reject will run `onReject` function and show alert toast, where `msg` is a promise error or `onReject`, if it's a `String` | `asyncBlock(somePromise, 'show me a green toast', 'custom message for alert toast' , 'Custom async msg')` |
| `confirm(html, okFunc, cancelFunc)`              | _html_ - `String`, required <br/> _okFunc_ - `Function`, optional <br/> _cancelFunc_ - `Function`, optional                                                                                                                                                                             | shows a modal dialog, which is waiting for users confirmation <br/><br/> If user pressed 'OK' button, `okFunc` will be executed <br/><br/> If user pressed 'Cancel' button, `cancelFunc` will be executed. <br/><br/> Both buttons on click will close the window                                                           | `confirm('Are you sure?', runIfOkClicked, runIfCancelClicked)`                                            |
| `modal(html, className)`                         | _html_ - `String`, required <br/> _className_ - `String`, required                                                                                                                                                                                                                      | shows a custom modal dialog which contains **only** value of `html` <br/> You can add styles for your custom modal by class `awn-modal-${className}`, <br/> where `className` is a param which was passed to the function                                                                                                   | `modal('<h2>Your custom title</h2><p>Your custom text</p>', 'custom-class-name')`                         |

## Customization

**Options**

You can pass your own options when you're initializing a library, e.g.

```javascript
var options = {
  labels: {
    tip: "Your custom tip box label"
  }
}
var notifier = new AWN.default(options)
```

**Available options**

All `labels` properties support HTML.

| Name                      | Type      | Default                               | Description                                                                                                                                                                                                                                                       |
| ------------------------- | --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position                  | `String`  | "bottom-right"                        | position of notifications                                                                                                                                                                                                                                         |
| duration                  | `Number`  | 5000                                  | determines how long notification exists, ms                                                                                                                                                                                                                       |
| animationDuration         | `Number`  | 300                                   | determines speed of animation, ms                                                                                                                                                                                                                                 |
| asyncBlockMinDuration     | `Number`  | 500                                   | minimal time to show asyncBlock modal window, prevents blinking, when async function completes too fast                                                                                                                                                           |
| maxNotifications          | `Number`  | 10                                    | max amount of notifications                                                                                                                                                                                                                                       |
| labels                    | `Object`  | _See properties bellow_               | default labels for notifications                                                                                                                                                                                                                                  |
| _labels.tip_              | `String`  | "Tip"                                 | default label for tip toast                                                                                                                                                                                                                                       |
| _labels.info_             | `String`  | "Info"                                | default label for info toast                                                                                                                                                                                                                                      |
| _labels.success_          | `String`  | "Success"                             | default label for success toast                                                                                                                                                                                                                                   |
| _labels.warning_          | `String`  | "Attention"                           | default label for warning toast                                                                                                                                                                                                                                   |
| _labels.alert_            | `String`  | "Error"                               | default label for alert toast                                                                                                                                                                                                                                     |
| _labels.async_            | `String`  | "Loading"                             | default label for async toast                                                                                                                                                                                                                                     |
| _labels.confirm_          | `String`  | "Confirmation required"               | confrim window title                                                                                                                                                                                                                                              |
| icons                     | `Object`  | _See properties bellow_               | default Font Awesome icons for notifications                                                                                                                                                                                                                      |
| _icons.tip_               | `String`  | "question-circle"                     | FontAwesome icon classes for tip toast, first one without `fa-`                                                                                                                                                                                                   |
| _icons.info_              | `String`  | "info-circle"                         | FontAwesome icon classes for info toast, first one without `fa-`                                                                                                                                                                                                  |
| _icons.success_           | `String`  | "check-circle"                        | FontAwesome icon classes for success toast, first one without `fa-`                                                                                                                                                                                               |
| _icons.warning_           | `String`  | "exclamation-circle"                  | FontAwesome icon classes for warning toast, first one without `fa-`                                                                                                                                                                                               |
| _icons.alert_             | `String`  | "warning"                             | FontAwesome icon classes for alert toast, first one without `fa-`                                                                                                                                                                                                 |
| _icons.async_             | `String`  | "cof fa-spin"                         | FontAwesome icon classes for async toast, first one without `fa-`                                                                                                                                                                                                 |
| _icons.confirm_           | `String`  | "warning"                             | FontAwesome icon classes for confirm window, first one without `fa-`                                                                                                                                                                                              |
| _icons.enabled_           | `Boolean` | True                                  | Determines icons existence                                                                                                                                                                                                                                        |
| _icons.prefix_            | `String`  | `"<i class='fa fa-fw fa"`             | HTML before any `icons[value]` (e.g. `icons.tip`)                                                                                                                                                                                                                 |
| _icons.suffix_            | `String`  | `"'></i>"`                            | HTML after any `icons[value]` (e.g. `icons.tip`)                                                                                                                                                                                                                  |
| modal                     | `Object`  | _See properties bellow_               | modal windows settings                                                                                                                                                                                                                                            |
| _modal.okLabel_           | `String`  | "OK"                                  | confirm window success button label                                                                                                                                                                                                                               |
| _modal.cancelLabel_       | `String`  | "Cancel"                              | confirm window cancel button label                                                                                                                                                                                                                                |
| _modal.maxWidth_          | `String`  | "500px"                               | confirm window max-width CSS property                                                                                                                                                                                                                             |
| messages                  | `Object`  | _See properties bellow_               | default messages                                                                                                                                                                                                                                                  |
| _messages.async_          | `String`  | "Please, wait..."                     | default async toast message, supports HTML                                                                                                                                                                                                                        |
| _messages["async-block"]_ | `String`  | "Loading"                             | default asyncBlock modal message, supports HTML                                                                                                                                                                                                                   |
| replacements              | `Object`  | _See properties bellow_               | contains rules of replacement for `html`<br/>each rule is `Object`<br>where **keys** are first param for [replace function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)<br/>and **values** are second param. |
| _replacements.general_    | `Object`  | `{ "<script>": "", "</script>": "" }` | rules for all event types                                                                                                                                                                                                                                         |
| _replacements.tip_        | `Object`  | `""`                                  | rules for tip events                                                                                                                                                                                                                                              |
| _replacements.info_       | `Object`  | `""`                                  | rules for info events                                                                                                                                                                                                                                             |
| _replacements.success_    | `Object`  | `""`                                  | rules for success events                                                                                                                                                                                                                                          |
| _replacements.warning_    | `Object`  | `""`                                  | rules for warning events                                                                                                                                                                                                                                          |
| _replacements.alert_      | `Object`  | `""`                                  | rules for alert events                                                                                                                                                                                                                                            |
| _replacements.async_      | `Object`  | `""`                                  | rules for async events                                                                                                                                                                                                                                            |
| _replacements.asyncBlock_ | `Object`  | `""`                                  | rules for asyncBlock modal window                                                                                                                                                                                                                                 |
| _replacements.modal_      | `Object`  | `""`                                  | rules for custom modal window                                                                                                                                                                                                                                     |
| _replacements.confirm_    | `Object`  | `""`                                  | rules for confirm window                                                                                                                                                                                                                                          |

**Styles**

The most convinient and quick way to change styles is dowload [styles](src/styles) folder which contains `.scss` files. Then you have to edit [variables.scss](src/styles/variables.scss), compile your `scss` to `css` and add new `css` file to your project.

Also, you can just add default `style.css` to your project and override it in your styles file. To learn more about default styles, look at [styles](src/styles) folder.

## Security notes

Make sure that you pass safe HTML to `msg` param. Sending data which can be directly or indirectly edited by user (e.g. name of account), provides a possibility for **HTML Injections**. You can set up `replacements` in options to filter `msg` variable.

## License

This project is licensed under the terms of the [MIT license](LICENSE).

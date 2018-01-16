# Awesome Notifications

It's a lightweight, fully customizable JavaScript library without any dependencies for showing notifications.

**Demo:** https://f3oall.github.io/awesome-notifications/
![Demo gif](docs/demo.gif)

## Install

> **Attention!** This library uses FontAwesome icons, so you either need to make sure that [FontAwesome](http://fontawesome.io/get-started/) is connected to your project, either disable icons, passing the `icons: {enabled: false}` property to options. Also you can preserve icons, setting up a custom template for them via editting `options.icons.template`

**Via NPM**

```
npm install --save awesome-notification
```

**In browser**

Download [index.var.js](dist/index.var.js) and [style.css](dist/style.css), then put them in your html:

```html
<head>
  <link rel="stylesheet" href="path/to/style.css"></link>
  <script src="path/to/index.var.js></script>
</head>
```

**Vue.js version**

You can learn more in the Vue.js version repository: https://github.com/f3oall/vue-awesome-notifications

## Usage

**In browser**

```html
<script>
  var notifier = new AWN.default(options);
</script>
<button onclick="notifier.success('Success message');">Show Success</button>
```

**Available functions**

All `msg` params support HTML.

| Function                                               | Params                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                             | Example                                                                                                                       |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `tip(msg)`                                             | _msg_ - `String`, required                                                                                                                                                                                                                                                   | shows a gray box with specified `msg`                                                                                                                                                                                                                                                   | `tip('First line text<br>Second line text')`                                                                                  |
| `info(msg)`                                            | _msg_ - `String`, required                                                                                                                                                                                                                                                   | shows a blue box with specified `msg`                                                                                                                                                                                                                                                   | `info('<b>You can put any HTML here</b>')`                                                                                    |
| `success(msg)`                                         | _msg_ - `String`, required                                                                                                                                                                                                                                                   | shows a green box with specified `msg`                                                                                                                                                                                                                                                  | `success('Simple none-HTML message')`                                                                                         |
| `warning(msg)`                                         | _msg_ - `String`, required                                                                                                                                                                                                                                                   | shows an orange box with specified `msg`                                                                                                                                                                                                                                                | `warning('Simple none HTML message')`                                                                                         |
| `alert(msg)`                                           | _msg_ - `String`, required                                                                                                                                                                                                                                                   | shows a red box with specified `msg`                                                                                                                                                                                                                                                    | `alert('Simple none HTML message')`                                                                                           |
| `async(promise, onResolve, onReject, msg, successMsg)` | _promise_ - `Promise`, required; <br/> _onResolve_ - `Function`, optional; <br/> _onReject_ - `Function`, optional; <br/> _msg_ - `String`, optional, msg for loading box <br/> _successMsg_ - `String`, optional, if specified will shown as success box on promise resolve | shows a loading gray box with specified `msg` <br/><br/> On promise resolve will run `onResolve` function and show success box if `successMsg` was specified <br/><br/> On promise reject will run `onReject` function and show alert box, where `msg` is a value of promise `reject()` | `alert(somePromise, runIfResolvedFunc, runIfRejectedFunc, 'Custom loading msg', 'Async event successfully finished message')` |
| `confirm(msg, okFunc, cancelFunc)`                     | _msg_ - `String`, required <br/> _okFunc_ - `Function`, optional <br/> _cancelFunc_ - `Function`, optional                                                                                                                                                                   | shows a modal dialog, which is waiting for users confirmation <br/><br/> If user pressed 'OK' button, `okFunc` will be executed <br/><br/> If user pressed 'Cancel' button, `cancelFunc` will be executed. <br/><br/> Both buttons on press will close modal dialog                     | `confirm('Are you sure?', runIfOkClicked, runIfCancelClicked)`                                                                |

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

| Name                      | Type      | Default                         | Description                                                                |
| ------------------------- | --------- | ------------------------------- | -------------------------------------------------------------------------- |
| position                  | `String`  | "bottom-right"                  | position of notifications                                                  |
| duration                  | `Number`  | 5000                            | determines how long notification exists, ms                                |
| animationDuration         | `Number`  | 300                             | determines speed of animation, ms                                          |
| maxNotifications          | `Number`  | 10                              | max amount of notifications                                                |
| asyncDefaultMessage       | `String`  | "Please, wait..."               | default loading box message, supports HTML                                 |
| labels                    | `Object`  | _See properties bellow_         | default labels for notifications                                           |
| _labels.tip_              | `String`  | "Tip"                           | default label for tip box                                                  |
| _labels.info_             | `String`  | "Info"                          | default label for info box                                                 |
| _labels.success_          | `String`  | "Success"                       | default label for success box                                              |
| _labels.warning_          | `String`  | "Attention"                     | default label for warning box                                              |
| _labels.alert_            | `String`  | "Error"                         | default label for alert box                                                |
| _labels.async_            | `String`  | "Loading"                       | default label for async box                                                |
| _labels.confirm_          | `String`  | "Confirmation required"         | confrim window title                                                       |
| icons                     | `Object`  | _See properties bellow_         | default Font Awesome icons for notifications                               |
| _icons.tip_               | `String`  | "question-circle"               | FontAwesome icon classes for tip box, first should be without `fa-`        |
| _icons.info_              | `String`  | "info-circle"                   | FontAwesome icon classes for info box, first should be without `fa-`       |
| _icons.success_           | `String`  | "check-circle"                  | FontAwesome icon classes for success box, first should be without `fa-`    |
| _icons.warning_           | `String`  | "exclamation-circle"            | FontAwesome icon classes for warning box, first should be without `fa-`    |
| _icons.alert_             | `String`  | "warning"                       | FontAwesome icon classes for alert box, first should be without `fa-`      |
| _icons.async_             | `String`  | "cof fa-spin"                   | FontAwesome icon classes for async box, first should be without `fa-`      |
| _icons.confirm_           | `String`  | "warning"                       | FontAwesome icon classes for confirm window, first should be without `fa-` |
| _icons.enabled_           | `Boolean` | True                            | Determines icons existence                                                 |
| _icons.template_          | `Object`  | _See properties bellow_         | Determines icons template                                                  |
| _icons.template.prefix_   | `String`  | `"<span><i class='fa fa-fw fa"` | HTML before any `icons[value]` (e.g. `icons.tip`)                          |
| _icons.template.suffix_   | `String`  | `"'></i></span>"`               | HTML after any `icons[value]` (e.g. `icons.tip`)                           |
| _icons.template_          | `Object`  | _See properties bellow_         | Determines icons template                                                  |
| confirm                   | `Object`  | _See properties bellow_         | confirmation window settings                                               |
| _confirm.successBtnLabel_ | `String`  | "OK"                            | confirm window success button label                                        |
| _confirm.cancelBtnLabel_  | `String`  | "Cancel"                        | confirm window cancel button label                                         |

**Styles**

Most comfortable and quick way to change styles is dowload [styles](src/styles) folder, which containts `.scss` files. Then you have to edit [variables.scss](src/styles/variables.scss), compile your `scss` to `css` and add new `css` file to your project.

Also, you can just add default `style.css` to yout project, and override it in your styles file. To learn more about default styles, look at [styles](src/styles) folder.

## License

This project is licensed under the terms of the [MIT license](LICENSE).

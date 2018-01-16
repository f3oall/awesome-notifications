# Awesome Notifications
It's a lightweight, fully customizable JavaScript library without any dependencies for showing notifications.

**Demo:** https://f3oall.github.io/awesome-notifications/

## Install
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

Function | Params | Description | Example
----- | ------ | ------ | -------
`tip(msg)` | *msg* - `String`, required | shows a gray box with specified `msg` | `tip('First line text<br>Second line text')`
`info(msg)` | *msg* - `String`, required | shows a blue box with specified `msg` | `info('<b>You can put any HTML here</b>')`
`success(msg)` | *msg* - `String`, required | shows a green box with specified `msg` | `success('Simple none-HTML message')`
`warning(msg)` | *msg* - `String`, required | shows an orange box with specified `msg` | `warning('Simple none HTML message')`
`alert(msg)` | *msg* - `String`, required | shows a red box with specified `msg` | `alert('Simple none HTML message')`
`async(promise, onResolve, onReject, msg, successMsg)` | *promise* - `Promise`, required; <br/> *onResolve* - `Function`, optional; <br/> *onReject* - `Function`, optional; <br/> *msg* - `String`, optional, msg for loading box  <br/> *successMsg* - `String`, optional, if specified will shown as success box on promise resolve | shows a loading gray box with specified `msg` <br/><br/> On promise resolve will run `onResolve` function and show success box if `successMsg` was specified <br/><br/> On promise reject will run `onReject` function and show alert box, where `msg` is a value of promise `reject()` | `alert(somePromise, runIfResolvedFunc, runIfRejectedFunc, 'Custom loading msg', 'Async event successfully finished message')`
`confirm(msg, okFunc, cancelFunc)` | *msg* - `String`, required <br/> *okFunc* - `Function`, optional <br/> *cancelFunc* - `Function`, optional | shows a modal dialog, which is waiting for users confirmation <br/><br/> If user pressed 'OK' button, `okFunc` will be executed <br/><br/> If user pressed 'Cancel' button, `cancelFunc` will be executed. <br/><br/> Both buttons on press will close modal dialog | `confirm('Are you sure?', runIfOkClicked, runIfCancelClicked)`

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

Name | Type | Default | Description
----- | ----- | ------ | ---------
position | `String` | "bottom-right" | position of notifications
duration | `Number` | 5000 | determines how long notification exists, ms
animationDuration | `Number` | 300 | determines speed of animation, ms
maxNotifications | `Number` | 10 | max amount of notifications
asyncDefaultMessage | `String` | "Please, wait..." | default loading box message, supports HTML
labels | `Object` | *See properties bellow* | default labels for notifications
*labels.tip* | `String` | "Tip" | default label for tip box, supports HTML
*labels.info* | `String` | "Info" | default label for info box, supports HTML
*labels.success* | `String` | "Success" | default label for success box, supports HTML
*labels.warning* | `String` | "Attention" | default label for warning box, supports HTML
*labels.alert* | `String` | "Error" | default label for alert  box, supports HTML
*labels.async* | `String` | "Loading" | default label for async box, supports HTML
icons | `Object` | *See properties bellow* | default Font Awesome icons for notifications
*icons.tip* | `String` | "question-circle" | FontAwesome icon classes for tip box, first should be without `fa-`
*icons.info* | `String` | "info-circle" | FontAwesome icon classes for info box, first should be without `fa-`
*icons.success* | `String` | "check-circle" | FontAwesome icon classes for success box, first should be without `fa-`
*icons.warning* | `String` | "exclamation-circle" | FontAwesome icon classes for warning box, first should be without `fa-`
*icons.alert* | `String` | "warning" | FontAwesome icon classes for alert box, first should be without `fa-`
*icons.async* | `String` | "cof fa-spin" | FontAwesome icon classes for async box, first should be without `fa-`
confirm | `Object` | *See properties bellow* | confirmation window settings
*confirm.title* | `String` | "Confirmation required" | confrim window title, supports HTML
*confirm.icon* | `String` | "warning" | confirm window icon, only FontAwesome icon classes can be passed, first should be without `fa-`
*confirm.successBtnLabel* | `String` | "OK" | confirm window success button label
*confirm.cancelBtnLabel* | `String` | "Cancel" | confirm window cancel button label

## License
This project is licensed under the terms of the [MIT license](LICENSE.txt).

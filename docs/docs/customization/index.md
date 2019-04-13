---
layout: docs
---

# Customization

One of the essential goals of this library is flexibility. You can customize anything as you need. There're two ways you can do that - **globally** and **per call**.<br><br>

**Global** way should be used during the library initialization, e.g.:
```javascript
let notifier = new AWN(options) // where options is an object with your custom values
```
Defaults will be used, if no options were specified during the initialization. <br><br>

**Per call** is applicable, when you need to change something without effect to the global configuration:
```javascript
notifier.success('Custom message', optionsOverrides) // where optionsOverrides is an object with your custom values
```
In this case globals will be overriden for current call only.


If you think that some customization opportunity is missing, please [open an issue](https://github.com/f3oall/awesome-notifications/issues/new)


## Options object

In next chapters you can find detailed info about each property of this object.

| Key                                             | Type          | Default                                |
| ----------------------------------------------- | ------------- | -------------------------------------- |
| position                                        | `String`      | "bottom-right"                         |
| maxNotifications                                | `Number`      | 10                                     |
| animationDuration                               | `Number`      | 300                                    |
| formatError                                     | `Function`    | [see in source code](/src/defaults.js) |
| durations                                       | `Object`      | _See properties below_                 |
| &nbsp;&nbsp;&nbsp;_durations.global_            | `Number,Null` | 5000                                   |
| &nbsp;&nbsp;&nbsp;_durations.tip_               | `Number,Null` | `null`                                 |
| &nbsp;&nbsp;&nbsp;_durations.info_              | `Number,Null` | `null`                                 |
| &nbsp;&nbsp;&nbsp;_durations.success_           | `Number,Null` | `null`                                 |
| &nbsp;&nbsp;&nbsp;_durations.warning_           | `Number,Null` | `null`                                 |
| &nbsp;&nbsp;&nbsp;_durations.alert_             | `Number,Null` | `null`                                 |
| minDurations                                    | `Object`      | _See properties below_                 |
| &nbsp;&nbsp;&nbsp;_minDurations.async_          | `Number`      | 500                                    |
| &nbsp;&nbsp;&nbsp;_minDurations["async-block"]_ | `Number`      | 500                                    |
| labels                                          | `Object`      | _See properties below_                 |
| &nbsp;&nbsp;&nbsp;_labels.tip_                  | `String`      | "Tip"                                  |
| &nbsp;&nbsp;&nbsp;_labels.info_                 | `String`      | "Info"                                 |
| &nbsp;&nbsp;&nbsp;_labels.success_              | `String`      | "Success"                              |
| &nbsp;&nbsp;&nbsp;_labels.warning_              | `String`      | "Attention"                            |
| &nbsp;&nbsp;&nbsp;_labels.alert_                | `String`      | "Error"                                |
| &nbsp;&nbsp;&nbsp;_labels.async_                | `String`      | "Loading"                              |
| &nbsp;&nbsp;&nbsp;_labels.confirm_              | `String`      | "Confirmation required"                |
| &nbsp;&nbsp;&nbsp;_labels.confirmOk_            | `String`      | "OK"                                   |
| &nbsp;&nbsp;&nbsp;_labels.confirmCancel_        | `String`      | "Cancel"                               |
| icons                                           | `Object`      | _See properties below_                 |
| &nbsp;&nbsp;&nbsp;_icons.enabled_               | `Boolean`     | `true`                                 |
| &nbsp;&nbsp;&nbsp;_icons.prefix_                | `String`      | `"<i class='fas fa fa-fw fa"`          |
| &nbsp;&nbsp;&nbsp;_icons.suffix_                | `String`      | `"'></i>"`                             |
| &nbsp;&nbsp;&nbsp;_icons.tip_                   | `String`      | "question-circle"                      |
| &nbsp;&nbsp;&nbsp;_icons.info_                  | `String`      | "info-circle"                          |
| &nbsp;&nbsp;&nbsp;_icons.success_               | `String`      | "check-circle"                         |
| &nbsp;&nbsp;&nbsp;_icons.warning_               | `String`      | "exclamation-circle"                   |
| &nbsp;&nbsp;&nbsp;_icons.alert_                 | `String`      | "exclamation-triangle"                 |
| &nbsp;&nbsp;&nbsp;_icons.async_                 | `String`      | "cof fa-spin"                          |
| &nbsp;&nbsp;&nbsp;_icons.confirm_               | `String`      | "exclamation-triangle"                 |
| messages                                        | `Object`      | _See properties below_                 |
| &nbsp;&nbsp;&nbsp;_messages.async_              | `String`      | "Please, wait..."                      |
| &nbsp;&nbsp;&nbsp;_messages["async-block"]_     | `String`      | "Loading"                              |
| replacements                                    | `Object`      | _See properties below_                 |
| &nbsp;&nbsp;&nbsp;_replacements.general_        | `Object`      | `{ "<script>": "", "</script>": "" }`  |
| &nbsp;&nbsp;&nbsp;_replacements.tip_            | `Object`      | `null`                                 |
| &nbsp;&nbsp;&nbsp;_replacements.info_           | `Object`      | `null`                                 |
| &nbsp;&nbsp;&nbsp;_replacements.success_        | `Object`      | `null`                                 |
| &nbsp;&nbsp;&nbsp;_replacements.warning_        | `Object`      | `null`                                 |
| &nbsp;&nbsp;&nbsp;_replacements.alert_          | `Object`      | `null`                                 |
| &nbsp;&nbsp;&nbsp;_replacements.async_          | `Object`      | `null`                                 |
| &nbsp;&nbsp;&nbsp;_replacements["asyncBlock"]_  | `Object`      | `null`                                 |
| &nbsp;&nbsp;&nbsp;_replacements.modal_          | `Object`      | `null`                                 |
| &nbsp;&nbsp;&nbsp;_replacements.confirm_        | `Object`      | `null`                                 |

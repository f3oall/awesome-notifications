---
layout: docs
---
# General

### position

**Type:**  `String`  
**Default:** `"bottom-right"`  
**Valid values:** `"bottom-right","bottom-left", "top-right", "top-left"`

Defines the position of toats relative to the window. Technically it sets the position of the toasts wrapper element.
```javascript
options.position = "bottom-left"
```


### maxNotifications

**Type:**  `Number`  
**Default:** `10`  
**Valid values:** Any number > 0

Defines the maximum amount of toasts at one moment on the screen. The lesser is the target screen height, the lesser should be maximum amount.
```javascript
options.maxNotifications = 5
```

### animationDuration

**Type:**  `Number`  
**Default:** `300`  
**Valid values:** Any number > 0

This property defines animations speed in ms. Basically it used for fade in/fade out animation both in toasts and popups.
```javascript
options.animationDuration = 1000
```

### formatError

**Type:**  `Function`  
**Default:**
```javascript
formatError(err) {
  if (err.response) {
    if (!err.response.data) return '500 API Server Error'
    if (err.response.data.errors) {
      return err.response.data.errors.map(o => o.detail).join('<br>')
    }
    if (err.response.statusText) {
      return `${err.response.status} ${err.response.statusText}: ${err.response.data}`
    }
  }
  if (err.message) return err.message
  return err
}
``` 
**Valid values:** Any custom function which accepts any type of value and returns String

This callback is used in every `alert(html)` call to format passed `html`. The goal of the formating is to make it `String`. 
Take attention, that `async()` and `asyncBlock()` functions, calls `alert()` in some cases by default. So this callback will be aplied there as well.

Default function is designed to fit handling of typical **Axios** responses. If you don't need extra formatting, just do something like this:
```javascript
options.formatError = err => err 
```

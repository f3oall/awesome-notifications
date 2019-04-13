---
layout: docs
---
# Durations

Defines showing time for toats. Global time should be valid `Number` only.   
Toasts specific times can be `null`, `0` or any valid `Number`. `null` means taking global value and `0` means no auto hidding.   
For exapmple, you can consider `0` if you want to disable auto hidding of errors (alert toasts).

**Neither of these properties effect on `async` toasts**. Because its showing time is based on time of async action passed to it.

### global

**Type:**  `Number`  
**Default:** `5000`  
**Valid values:** Any number > 0

Defines the showing time in ms for all toasts. It can be overridden for each separate toast through properties bellow.
```javascript
options.durations = {
  global: 10000,
  ...
}
```


### tip

**Type:**  `Number`, `null`  
**Default:** `null`  
**Valid values:** `0`, `null` or any number > 0

Defines the showing time in ms for `tip` toast. `0` means no auto hidding, `null` means taking global value.
```javascript
options.durations = {
  tip: 4000,
  ...
}
```

### info

**Type:**  `Number`, `null`  
**Default:** `null`  
**Valid values:** `0`, `null` or any number > 0

Defines the showing time in ms for `info` toast. `0` means no auto hidding, `null` means taking global value.
```javascript
options.durations = {
  info: 4000,
  ...
}
```

### success

**Type:**  `Number`, `null`  
**Default:** `null`  
**Valid values:** `0`, `null` or any number > 0

Defines the showing time in ms for `success` toast. `0` means no auto hidding, `null` means taking global value.
```javascript
options.durations = {
  success: 4000,
  ...
}
```

### warning

**Type:**  `Number`, `null`  
**Default:** `null`  
**Valid values:** `0`, `null` or any number > 0

Defines the showing time in ms for `warning` toast. `0` means no auto hidding, `null` means taking global value.
```javascript
options.durations = {
  warning: 4000,
  ...
}
```

### alert

**Type:**  `Number`, `null`  
**Default:** `null`  
**Valid values:** `0`, `null` or any number > 0

Defines the showing time in ms for `alert` toast. `0` means no auto hidding, `null` means taking global value.
```javascript
options.durations = {
  alert: 4000,
  ...
}
```

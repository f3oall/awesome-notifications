---
layout: docs
---
# minDurations
Asynchronous requests which complete in time less than a 500 ms cause toast/popup blinking.  
To avoid it, this library use `minDurations` property. It defines minimum lifetime of async elements.

Element blinking badly affects user expirience,
so it's not recomended to set values of this property to less than a 500 ms.


### async-block

**Type:**  `Number`  
**Default:** `500`  
**Valid values:** Any number >= 0

Defines minimum showing time of `asyncBlock` popup. 
```javascript
options.minDurations = {
  "async-block": 1000,
  ...
}
```
### async

**Type:**  `Number`  
**Default:** `500`  
**Valid values:** Any number >= 0

Defines minimum showing time of `async` toast. 
It won't be aplied to `success` or `alert` toasts which by default are being called in the end of `async` lifetime.
```javascript
options.minDurations = {
  async: 1000,
  ...
}
```

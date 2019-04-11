---
layout: docs
---
# Replacements
It used for sanitizing and formatting incoming HTML. By default it removes `<script>` tags only.

All properties of this option are objects, where **keys are strings which need to be replaced**, 
and **values are strings for replacement**.

### general

**Type:**  `Object`  
**Default:** `{"<script>": "","</script>": ""}`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for all elements
```javascript
options.replacements = {
  general: {"error": "failure"}, // replaces all 'error' occurrences with 'failure'
  ...
}
```

### tip

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `tip` toast
```javascript
options.replacements = {
  tip: {"some string": "another string"},
  ...
}
```

### info

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `info` toast
```javascript
options.replacements = {
  info: {"some string": "another string"},
  ...
}
```

### success

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `success` toast
```javascript
options.replacements = {
  success: {"some string": "another string"},
  ...
}
```
### warning

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `warning` toast
```javascript
options.replacements = {
  warning: {"some string": "another string"},
  ...
}
```
### alert

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `alert` toast
```javascript
options.replacements = {
  alert: {"some string": "another string"},
  ...
}
```
### async

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `async` toast
```javascript
options.replacements = {
  async: {"some string": "another string"},
  ...
}
```
### async-block

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `asyncBlock` popup
```javascript
options.replacements = {
  "async-block": {"some string": "another string"},
  ...
}
```

### modal

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `modal` popup
```javascript
options.replacements = {
  modal: {"some string": "another string"},
  ...
}
```
### confirm

**Type:**  `Object`  
**Default:** `null`  
**Valid values:** Object filled by valid key-value pairs

Defines replacement rules for `confirm` popup
```javascript
options.replacements = {
  confirm: {"some string": "another string"},
  ...
}
```


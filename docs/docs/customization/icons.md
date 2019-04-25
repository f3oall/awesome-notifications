---
layout: docs
---
# Icons

### enabled

**Type:**  `Boolean`  
**Default:** `true`  
**Valid values:** `true` or `false`

Defines visibility of icons for all toasts and popups.
```javascript
options.icons = {
  enabled: false,
  ...
}
```

### prefix

**Type:**  `String`  
**Default:** `"<i class='fa fas fa-fw fa-"`  
**Valid values:** Any valid begining of HTML tag

Used internally to create first part of icon element.
```javascript
options.icons = {
  prefix: "<i class='fas fa-fw fa-",
  ...
}
```

### suffix

**Type:**  `String`  
**Default:** `"'></i>"`  
**Valid values:** Any valid ending of HTML tag

Used internally to create third part of icon element.
```javascript
options.icons = {
  suffix: "'></i>",
  ...
}
```

### tip

**Type:**  `String`  
**Default:** `question-circle`  
**Preview:** <i class="fas fa-fw fa-question-circle"></i>  
**Valid values:** Any valid icon name/path

Icon name/path for `tip` toast.
```javascript
options.icons = {
  tip: "question",
  ...
}
```

### info

**Type:**  `String`  
**Default:** `info-circle`  
**Preview:** <i class="fas fa-fw fa-info-circle"></i>  
**Valid values:** Any valid icon name/path

Icon name/path for `info` toast.
```javascript
options.icons = {
  info: "info",
  ...
}
```

### success

**Type:**  `String`  
**Default:** `check-circle`      
**Preview:** <i class="fas fa-fw fa-check-circle"></i>  
**Valid values:** Any valid icon name/path

Icon name/path for `success` toast.
```javascript
options.icons = {
  success: "check",
  ...
}
```

### warning

**Type:**  `String`  
**Default:** `exclamation-circle`   
**Preview:**  <i class="fas fa-fw fa-exclamation-circle"></i>  
**Valid values:** Any valid icon name/path

Icon name/path for `warning` toast.
```javascript
options.icons = {
  warning: "exclamation",
  ...
}
```

### alert

**Type:**  `String`  
**Default:** `exclamation-triangle`  
**Preview:** <i class="fas fa-fw fa-exclamation-triangle"></i>  
**Valid values:** Any valid icon name/path

Icon name/path for `alert` toast.
```javascript
options.icons = {
  alert: "exclamation",
  ...
}
```

### async

**Type:**  `String`  
**Default:** `cog fa-spin`  
**Preview:** <i class="fas fa-fw fa-cog fa-spin"></i>  
**Valid values:** Any valid icon name/path

Icon name/path for `async` toast.
```javascript
options.icons = {
  async: "cog",
  ...
}
```

### confirm

**Type:**  `String`  
**Default:** `exclamation-triangle`  
**Preview:** <i class="fas fa-fw fa-exclamation-triangle"></i>  
**Valid values:** Any valid icon name/path

Icon name/path for `confirm` popup.
```javascript
options.icons = {
  confirm: "exclamation",
  ...
}
```



## Overriding icon template

You're not limited with default icons library. All icons are being build from 3 parts: `icons.prefix`, `icons[typeName]` and `icons.suffix`. 
Where prefix and suffix are common icon library wrapers and `icons[typeName]` is the proper name (or path) of icon itself.   

Bellow you can find some of most popular examples.

### Images
```javascript
options.icons = {
  prefix: "<img src='",
  success: "https://www.examplepath.com/yourimg.svg",
  suffix: "'/>",
  ...
}
```

### Google Icons (Material icons)
```javascript
options.icons = {
  prefix: "<i class='material-icon'>",
  sucess: "face",
  suffix: "</i>",
  ...
}
```

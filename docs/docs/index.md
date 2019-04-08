---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: docs
---


# Installation


### Prerequirements

The library uses FontAwesome 5 as icons source by default, so you have 3 options:
* Make sure that [FontAwesome](https://fontawesome.com/start) is set up in your project
* Disable icons. Pass the `icons: {enabled: false}` options proparty on initialize.
* Set up a custom icons template via editing `options.icons.prefix` and `options.icons.suffix`


### NPM

```
npm i awesome-notifications
```

### Browser

Download [index.var.js](/dist/index.var.js) and [style.css](/dist/style.css), then put them in your html:

```html
<head>
  <link rel="stylesheet" href="path/to/style.css"></link>
  <script src="path/to/index.var.js"></script>
</head>
```

### Vue.js
Install it via NPM:
```
npm i vue-awesome-notifications
```
Then add it to your `main.js`:

```javascript
import Vue from "vue"
import VueAWN from "vue-awesome-notifications"

// Your custom options
let options = {...}

Vue.use(VueAWN, options)
```
Visit Vue.js [repository](https://github.com/f3oall/vue-awesome-notifications) to learn more

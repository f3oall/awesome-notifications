---
layout: docs
---


# Installation


## Prerequirements

The library uses FontAwesome 5 as icons source by default, so you have 3 options:
* Make sure that [FontAwesome](https://fontawesome.com/start) is set up in your project
* Disable icons. Pass the `icons: {enabled: false}` options proparty on initialize.
* Set up a custom icons template via editing `options.icons.prefix` and `options.icons.suffix`


## NPM

```
npm i awesome-notifications
```

## Browser

Download [index.var.js](/dist/index.var.js) and [style.css](/dist/style.css), then add its path to your html:

```html
<head>
  <link rel="stylesheet" href="path/to/style.css"></link>
  <script src="path/to/index.var.js"></script>
</head>
```

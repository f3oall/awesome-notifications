---
layout: docs
---

# Browser compatibility

Library provides two types of JS bundles: **default** and **modern**. Modern bundle is more performant and lightweight.
To compile both bundles library uses Babel, which browser compatibility settings is based on [Browserlist](https://github.com/browserslist/browserslist).

## Default
*Output file:* `/dist/index.js`, `/dist/index.var.js`  
*Browserlist query:* `0.5%, last 2 versions, Firefox ESR, not dead`.

It means that you can safely use it any project.

## Modern
*Output file:* `/dist/modern.js`, `/dist/modern.var.js`  
*Browserlist query:* `> 5%, not ie <= 11`.

This bundle is suitable only for evergreen browsers.  
As you may noticed it doesn't support any version of Internet Explorer.

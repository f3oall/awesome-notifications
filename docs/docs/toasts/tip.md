---
layout: docs
---

# Toasts: Tip
Method `tip()` shows new `tip` toast.


## Syntax
```javascript
AWN.tip(html[,options])
```
### Parameters
`html`  
&nbsp;&nbsp;&nbsp;&nbsp;Any valid HTML or text string  
`options` - *optional*  
&nbsp;&nbsp;&nbsp;&nbsp;[Instance of Options](/docs/customization/), which will override globals for this call

### Return value
A new [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) instance


## Examples

{% include awn-example.md js="new AWN().tip('Custom tip message')" label="Normal use" %}
{% include awn-example.md js="new AWN().tip('Custom tip message', {durations: {tip: 0}})" label="Override globals" %}

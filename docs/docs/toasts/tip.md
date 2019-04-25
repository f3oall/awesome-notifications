---
layout: docs
---

# Toasts: Tip
Method `tip()` shows new `tip` toast.


## Syntax
```javascript
AWN.tip([message,options])
```
### Parameters
{% include param-desc.md optional=true name="message" desc="
  Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
"%}
{% include param-desc.md optional=true name="options" desc="
  [Instance of Options](/awesome-notifications/docs/customization/), which will override globals for this call
"%}

### Return value
A new [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) instance


## Examples

{% include awn-example.md js="new AWN().tip()" label="Use defaults" %}
{% include awn-example.md js="new AWN().tip('Custom tip message', {durations: {tip: 0}})" label="Use custom" %}

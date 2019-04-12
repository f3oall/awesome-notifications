---
layout: docs
---

# Toasts: Async
Method `async()` shows new `async` toast.


## Syntax
```javascript
AWN.async(promise[,onResolve,onReject,html,options])
```
### Parameters
{% include param-desc.md name="promise" desc="
  Any [JavaScript Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
"%}
{% include param-desc.md optional=true name="onResolve" desc="
  Can be `Function` or `String`. Processing of this parameter start after `Promise` resolve.  
  If omitted, `AWN.success(resp)` method will be called.  
  If `String`, `AWN.success(onResolve)` method will be called;  
  If `Function`, it will be called, can take `resp` as optional parameter.
"%}
{% include param-desc.md optional=true secondary=true name="resp" desc="A value returned from passed `Promise` `resolve` function."%}
{% include param-desc.md optional=true name="onReject" desc="
  Can be `Function` or `String`. Processing of this parameter start after `Promise` reject.  
  If omitted, `AWN.alert(err)` method will be called. 
  If `String`, `AWN.alert(onReject)` method will be called;  
  If `Function`, it will be called, can take `err` as optional parameter.
"%}
{% include param-desc.md optional=true secondary=true name="err" desc="A value returned from passed `Promise` `reject` function."%}
{% include param-desc.md optional=true name="html" desc="
  A message of `async` toast. Can be any valid html or text string. Will be set from defaults if omitted.
"%}
{% include param-desc.md optional=true name="options" desc="
  [Instance of Options](/docs/customization/), which will override globals for this call
"%}

### Return value
A new [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) instance


## Examples

{% include awn-example.md js="new AWN().async('Custom async message')" label="Normal use" %}
{% include awn-example.md js="new AWN().async('Custom async message', {durations: {async: 0}})" label="Override globals" %}

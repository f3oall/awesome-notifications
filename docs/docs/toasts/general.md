---
layout: docs
---

# Toasts: General
General methods for all toast types.


## closeToasts() - Syntax  
Closes all visible toasts. Do nothing if there're no visible toasts.
```javascript
AWN.closeToasts()
```
### Parameters
-

### Return value
-


## Examples

{% include awn-example.md js="
  let notifier = new AWN();
  for (let i = 0; i < 5; i++) {
    notifier.tip('All these tips will be closed in 2 seconds');
  }
  setTimeout(() => notifier.closeToasts(), 2000);"  %}

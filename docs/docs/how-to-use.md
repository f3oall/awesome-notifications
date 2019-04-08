---
layout: docs
---

# How to use

### Node.js

```javascript
import AWN from "awesome-notifications"
// Set global options
let globalOptions =  {...}
// Initialize instance of AWN
let notifier = new AWN(globalOptions)

// Set custom options for next call if needed, it will override globals
let nextCallOptions = {...}
// Call one of available functions
notifier.success('Your custom message', nextCallOptions)
```

### Browser

```html
<script>
  let notifier = new AWN(globalOptions);
</script>
<button onclick="notifier.success('Your custom message', nextCallOptions);">Show Success</button>
```

### Vue.js
Inside any component:
```javascript
this.$awn.success('Your custom message', nextCallOptions)
```

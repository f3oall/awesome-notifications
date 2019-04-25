---
layout: docs
---

# How to use

## Node.js

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

## Browser

```html
<script>
  let notifier = new AWN(globalOptions);
</script>
<button onclick="notifier.success('Your custom message', currentCallOptions);">Show Success</button>
```

## Methods Overview

| Method                                             | Description    |
| [`tip()`](/awesome-notifications/docs/toasts/tip)                                           | Show gray toast with any valid HTML you passed in   |
| [`info()`](/awesome-notifications/docs/toasts/info)                                             | Show blue toast with any valid HTML you passed in    |
| [`warning()`](/awesome-notifications/docs/toasts/warning)                                             | Show orange toast with any valid HTML you passed in    |
| [`success()`](/awesome-notifications/docs/toasts/success)                                             | Show green toast with any valid HTML you passed in    |
| [`alert()`](/awesome-notifications/docs/toasts/alert)                                             | Show red toast with any valid HTML you passed in    |
| [`async()`](/awesome-notifications/docs/toasts/async)                                             | Show async toast, until passed Promise will be completed    |
| [`modal()`](/awesome-notifications/docs/popups/modal-window)                                             | Show modal window   |
| [`confirm()`](/awesome-notifications/docs/popups/confirmation-window)                                             | Show  confirmation window   |
| [`asyncBlock()`](/awesome-notifications/docs/popups/async-block)                                             | Show popup which blocks the screen, until passed Promise will be completed   |

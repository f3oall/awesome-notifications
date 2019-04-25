---
layout: docs
---

# Vue Integration
[https://github.com/f3oall/vue-awesome-notifications](https://github.com/f3oall/vue-awesome-notifications)

## Installation
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


## How to use
Inside any component you will have `$awn`, which is AWN library instance.
Use it to call methods described in the docs.
```javascript
this.$awn.success('Your custom message', currentCallOptions)
```

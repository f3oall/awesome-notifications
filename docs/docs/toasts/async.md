---
layout: docs
---

# Toasts: Async
Method `async()` shows new `async` toast.


## Syntax
```javascript
AWN.async(promise[,onResolve,onReject,message,options])
```
### Parameters
{% include param-desc.md name="promise" desc="
  Any [JavaScript Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
"%}
{% include param-desc.md optional=true name="onResolve" desc="
  Can be `Function` or `String`. Processing of this parameter start after `Promise` resolve.  
  If omitted, uses default behavior - `AWN.success(resp)` method will be called.  
  If `String`, `AWN.success(onResolve)` method will be called;  
  If `Function`, it will be called, can take `resp` as optional parameter.  
  If `null`, disables default behavior.  
"%}
{% include param-desc.md optional=true secondary=true name="resp" desc="A value returned from passed `Promise` `resolve` function."%}
{% include param-desc.md optional=true name="onReject" desc="
  Can be `Function` or `String`. Processing of this parameter start after `Promise` reject.  
  If omitted, uses default behavior - `AWN.alert(err)` method will be called.  
  If `String`, `AWN.alert(onReject)` method will be called;  
  If `Function`, it will be called, can take `err` as optional parameter.  
  If `null`, disables default behavior.
"%}
{% include param-desc.md optional=true secondary=true name="err" desc="A value returned from passed `Promise` `reject` function."%}
{% include param-desc.md optional=true name="message" desc="
  A message of `async` toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
"%}
{% include param-desc.md optional=true name="options" desc="
  [Instance of Options](/awesome-notifications/docs/customization/), which will override globals for this call
"%}

### Return value
A [JavaScript Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


## Examples

{% include awn-example.md js="
  let promise = axios.get('https://jsonplaceholder.typicode.com/posts');
  new AWN().async(promise)
" label="Axios GET - success, using defaults" %}

{% include awn-example.md js="
  new AWN().async(
    axios.get('https://jsonplaceholder.typicode.com/posts'),
    'Posts has been loaded',
  )
" label="Axios GET - success, `onResolve` as `String`" %}

{% include awn-example.md js="
  let notifier = new AWN();
  notifier.async(
    axios.get('https://jsonplaceholder.typicode.com/posts'),
    resp => notifier.success(`${resp.data.length} posts has been loaded`),
  );
" label="Axios GET - success, `onResolve` as `Function`, callback style" %}

{% include awn-example.md js="
  new AWN().async(
    axios.get('https://jsonplaceholder.typicode.com/posts'),
    '',  /* omitted onResolve by use of empty string(recomended), defaults will be used */
    undefined, /* omitted onReject by use of undefined(not recomended), defaults will be used */
    'Retrieving posts from 3rd-party API'
  );
" label="Axios GET - success, custom async message" %}

{% include awn-example.md js="
  let promise = axios.get('https://jsonplaceholder.typicode.com/wrong-url');
  new AWN().async(promise)
" label="Axios GET - error, using defaults" %}

{% include awn-example.md js="
  new AWN().async(
     axios.get('https://jsonplaceholder.typicode.com/wrong-url'),
     '', /* omitted onResolve */
     'Something got wrong, contact tech support'
  )
" label="Axios GET - error, `onReject` as `String`" %}

{% include awn-example.md js="
  let notifier = new AWN();
  notifier.async(
     axios.get('https://jsonplaceholder.typicode.com/wrong-url'),
     '', /* omitted onResolve */
     err => notifier.alert(`API responded with code: ${err.response.status}`)
  )
" label="Axios GET - error, `onReject` as `Function`" %}

## Bad practises

{% include awn-example.md js="
  /* When you have to override the default behavior, better use callback style. It will keep your code clean and clear. 
     Besides this, minDuration and animationDuration are not considered if you use promise style. */
  let notifier = new AWN();
  notifier.async(
    axios.get('https://jsonplaceholder.typicode.com/posts'),
    null /* disables default bahaviour */
  ).then(
    resp => notifier.success(`${resp.data.length} posts has been loaded`)
  );
" label="<b class='red'>BAD PRACTISE:</b> Axios GET - success, `onResolve|onReject` as `Function`, promise style" %}

Promise style can be useful when you need to do some extra computions based on async response without overriding default behaviour.

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

---
layout: docs
---

# Popups: Modal Window
Method `modal()` shows new modal window.


## Syntax
```javascript
AWN.modal(message[,className,options])
```
### Parameters
{% include param-desc.md name="message" desc="
  Defines message of the modal window. Can be any valid HTML or text string.
"%}
{% include param-desc.md optional=true name="className" desc="
  Defines modal window DOM element class name, it will be concatenated with default prefix 'awn-popup-'
"%}
{% include param-desc.md optional=true name="options" desc="
  [Instance of Options](/awesome-notifications/docs/customization/), which will override globals for this call
"%}

### Return value
A new [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) instance

### Behaviour
Modal window can be closed by clicking on darkened wrapper area.   
Also you can use `Esc` key to close it.  

Any combination of keys with `Tab` won't work to keep focus trapped.

## Examples

{% include awn-example.md js="new AWN().modal('<b>Custom modal window message</b>')" label="Use defaults" %}
{% include awn-example.md js="
  new AWN().modal(
    '<b>Custom modal window message</b><br>Class name: `awn-popup-modal-tiny`',
    'modal-tiny'
  )
" label="Use custom class name" %}

{% include awn-example.md js="
  let options = {
    replacements: {
      modal: {
        'Class name': 'DOM Class'
      }
    }
  };
  new AWN().modal(
    '<b>Custom modal window message</b><br>Class name: `awn-popup-modal-tiny`',
    'modal-tiny',
    options
  )
" label="Override defaults" %}

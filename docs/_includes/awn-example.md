{% if include.label %}
#### {{include.label}}
{% endif %}

<div markdown="1">
```javascript
{{include.js}}
```
</div>
<button class="btn success margin-top" onclick="{{include.js}}">Run example</button>

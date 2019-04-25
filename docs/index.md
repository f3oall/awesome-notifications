---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
<div id="landing">
  <section class="page-header">
    <div class="wrap">
      <h1 class="project-name">{{ site.title | default: site.github.repository_name }}</h1>
      <h2 class="project-tagline">Lightweight JavaScript library with enhanced asynchronous events support.</h2>
      <div class="project-actions">
        {% if site.github.is_project_page %}
        <a href="{{ site.github.repository_url }}" class="btn transparent info">View on GitHub</a>
        {% endif %} {% if site.show_downloads %}
        <a href="https://github.com/f3oall/awesome-notifications/zipball/master" class="btn transparent info">
          <i class="fa fa-fw fa-download"></i>Download .zip</a>
        <a href="https://github.com/f3oall/awesome-notifications/tarball/master" class="btn transparent info">
          <i class="fa fa-fw fa-download"></i>Download .tar.gz</a>
        {% endif %}
      </div>  
    </div>
  </section>
  <section class="features">
    <div class="wrap">
      <div>
        3 KB
        <b>Gzipped Size</b>
      </div>
      <div>
        ZERO
        <b>Dependencies</b>
      </div>
      <div>
        3000
        <b>Downloads</b>
      </div>
      <div>
        FULLY
        <b>Customizable</b>
      </div>
    </div>
  </section>
  <section class="examples">
    <div class="grid wrap">
      <div class="col-6">
        <h2 class="content-header">Examples</h2>
        <p class="content-desc">Click to the buttons on the right to show toasts or popups</p>
      </div>
      <div class="col-6">
        <div class="buttons">
          <button class="btn" onclick="notifier.tip('This is an example of tip')">Tip</button>
          <button class="btn" onclick="notifier.async(asyncFunc(), 'Async event has been completed successfully')">Async</button>
          <button class="btn" onclick="console.log(notifier.info('This is an example of info').constructor.name)">Info</button>
          <button class="btn" onclick="notifier.success('This is an example of success')">Success</button>
          <button class="btn" onclick="notifier.warning('This is an example of warning')">Warning</button>
          <button class="btn" onclick="notifier.alert('This is an example of alert')">Alert</button>
          <button class="btn" onclick="notifier.confirm('You can put any valid HTML here')">Confirmation</button>
          <button class="btn"
            onclick="notifier.modal(`<h3 style='margin-top: 0;'>This is a modal window without any predefined template and styles</h3><p>Just put your html into the function and add custom styles</p><small>Click outside the modal window to close it.</small>`, 'demo')">Popup</button>
          <button class="btn"
            onclick="notifier.asyncBlock(asyncFunc(), 'Async event has been completed and screen was unlocked')">Async Block</button>
        </div>
        <div class="docs">
          <b>Ready to start?</b>  
          <a href="/awesome-notifications/docs">Read our detailed documentation</a>
        </div>
      </div>
    </div> 
  </section>
  <section class="docs">
   
  </section>
</div> 

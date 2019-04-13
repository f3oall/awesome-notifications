---
layout: docs
---

# Security notes

Since most of library functions accept raw HTML, library becomes vulnarable for [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting).

Therefore it's  **strongly recomended to don't give users an opportunity to affect HTML which you pass to library functions**.
Using HTML which can be directly or indirectly edited by user (e.g. name of account) is unsafe.

You can set up `replacements` in options to filter incoming HTML, but it won't make it 100% safe.

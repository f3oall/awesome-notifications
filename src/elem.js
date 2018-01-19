import { eConsts } from "./constants"

export default class {
  constructor(parent, id, klass, style, html, tag = "div") {
    this.newNode = document.createElement(tag)
    if (id) this.newNode.id = id
    if (klass) this.newNode.className = klass
    if (html) this.newNode.innerHTML = html
    if (style) this.newNode.style.cssText = style
    this.parent = parent
    this.options = {}
  }
  fire(oldEl) {
    if (oldEl) return oldEl.replace(this.newNode, this.type)
    return this.insert()
  }

  beforeInsert() {}
  insert() {
    this.beforeInsert()
    this.el = this.parent.appendChild(this.newNode)
    this.afterInsert()
  }

  replace(node, type) {
    if (!this.getElement()) return
    return this.beforeDelete().then(() => {
      this.type = type
      this.parent.replaceChild(node, this.el)
      this.el = document.getElementById(node.id)
      this.afterInsert()
    })
  }
  afterInsert() {}

  beforeDelete(el = this.el) {
    return new Promise((resolve, reject) => {
      el.classList.add(eConsts.klass.hiding)
      setTimeout(resolve, this.options.animationDuration || 300)
    })
  }

  delete(el = this.el) {
    if (!this.getElement(el)) return null
    return this.beforeDelete(el).then(() => this.parent.removeChild(el))
  }

  getElement(el = this.el) {
    return document.getElementById(el.id)
  }

  addEvent(name, func) {
    this.el.addEventListener(name, func)
  }

  addClass(klass) {
    this.el.classList.add(klass)
  }

  removeClass(klass) {
    this.el.classList.remove(klass)
  }
}

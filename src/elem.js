import {
  eConsts
} from "./constants"

export default class {
  constructor(parent, id, klass, style, html, tag = "div") {
    this.newNode = document.createElement(tag)
    if (id) this.newNode.id = id
    if (klass) this.newNode.className = klass
    if (html) this.newNode.innerHTML = html
    if (style) this.newNode.style.cssText = style
    this.parent = parent
  }
  beforeInsert() {}
  afterInsert() {}
  insert() {
    this.beforeInsert()
    this.el = this.parent.appendChild(this.newNode)
    this.afterInsert()
    return this
  }

  replace(el) {
    if (!this.getElement()) return
    return this.beforeDelete().then(() => {
      this.updateType(el.type)
      this.parent.replaceChild(el.newNode, this.el)
      this.el = this.getElement(el.newNode)
      this.afterInsert()
      return this
    })
  }

  beforeDelete(el = this.el) {
    let timeLeft = 0
    if (this.start) {
      timeLeft = this.options.asyncBlockMinDuration + this.start - Date.now()
      if (timeLeft < 0) timeLeft = 0
    }
    return new Promise(resolve => {
      el.classList.add(eConsts.klass.hiding)
      setTimeout(resolve, this.options.animationDuration + timeLeft)
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

  toggleClass(klass) {
    this.el.classList.toggle(klass)
  }
  updateType(type) {
    this.type = type
    this.duration = this.options.duration(this.type)
  }
}

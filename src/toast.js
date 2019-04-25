import Elem from "./elem"
import Timer from "./timer"

import {
  tConsts,
  eConsts
} from "./constants"

export default class extends Elem {
  constructor(msg, type, options, parent) {
    super(
      parent,
      `${tConsts.prefix}-${Math.floor(Date.now() - Math.random() * 100)}`,
      `${tConsts.prefix} ${tConsts.prefix}-${type}`,
      `animation-duration: ${options.toSecs(options.animationDuration)};`,
      options
    )
    this.updateType(type)
    this.setInnerHtml(msg)
  }

  setInnerHtml(html) {
    if (this.type === 'alert' && html) html = this.options.formatError(html)
    html = this.options.applyReplacements(html, this.type)
    this.newNode.innerHTML = `<div class="awn-toast-wrapper">${this.progressBar}${this.label}<div class="${tConsts.klass.content}">${html}</div><span class="${tConsts.klass.icon}">${this.options.icon(this.type)}</span></div>`
  }

  beforeInsert() {
    if (this.parent.childElementCount >= this.options.maxNotifications) {
      let elements = Array.from(this.parent.getElementsByClassName(tConsts.prefix))
      this.delete(elements.find(e => !this.isDeleted(e)))
    }
  }
  afterInsert() {
    if (this.type == "async") return this.start = Date.now()

    this.addEvent("click", () => this.delete())

    if (this.duration <= 0) return
    this.timer = new Timer(() => this.delete(), this.duration)
    for (const e of ["mouseenter", "mouseleave"]) {
      this.addEvent(e, () => {
        if (this.isDeleted()) return
        this.toggleClass(tConsts.klass.progressBarPause)
        this.timer.toggle()
      })
    }
  }

  isDeleted(el = this.el) {
    return el.classList.contains(eConsts.klass.hiding)
  }
  get progressBar() {
    if (this.duration <= 0 || this.type === 'async') return ""
    return `<div class='${tConsts.klass.progressBar}' style="animation-duration:${this.options.toSecs(this.duration)};"></div>`
  }
  get label() {
    return `<b class="${tConsts.klass.label}">${this.options.label(this.type)}</b>`
  }

}

import Elem from "./elem"
import Timer from "./timer"

import { tConsts, eConsts } from "./constants"

export default class extends Elem {
  constructor(html, type, options, parent) {
    super(
      parent,
      `${tConsts.prefix}-${Math.floor(Date.now() - Math.random() * 100)}`,
      `${tConsts.prefix} ${tConsts.prefix}-${type}`,
      `animation-duration: ${options.getSecs("animationDuration")};`
    )
    this.options = options
    this.type = type
    this.setInnerHtml(html)
  }

  setInnerHtml(html) {
    html = this.options.applyReplacements(html, this.type)
    let progressBar = ""
    if (this.type !== "async") {
      progressBar = `<div class='${
        tConsts.klass.progressBar
      }' style="animation-duration:${this.options.getSecs("duration")};"></div>`
    }
    this.newNode.innerHTML = `
    ${progressBar}
    ${this.getLabel()}
    <div class="${tConsts.klass.content}">${html}</div>
    <span class="${tConsts.klass.icon}">${this.options.icon(this.type)}</span>
    `
  }

  beforeInsert() {
    if (this.parent.childElementCount >= this.options.maxNotifications) {
      let elements = Array.from(
        this.parent.getElementsByClassName(tConsts.prefix)
      )
      this.delete(elements.find(e => !this.isDeleted(e)))
    }
  }
  afterInsert() {
    if (this.type == "async") return
    this.timer = new Timer(() => this.delete(), this.options.duration)

    this.addEvent("click", () => this.delete())
    this.addEvent("mouseenter", () => {
      if (!this.isDeleted()) {
        this.addClass(tConsts.klass.progressBarPause)
        this.timer.pause()
      }
    })
    this.addEvent("mouseleave", () => {
      if (!this.isDeleted()) {
        this.removeClass(tConsts.klass.progressBarPause)
        this.timer.resume()
      }
    })
  }
  isDeleted(el = this.el) {
    return el.classList.contains(eConsts.klass.hiding)
  }

  getLabel() {
    return `<b class="${tConsts.klass.label}">${this.options.label(
      this.type
    )}</b>`
  }
}

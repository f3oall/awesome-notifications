import Elem from "./elem"
import {
  mConsts
} from "./constants"

export default class extends Elem {
  constructor(msg, type = 'modal', options, onOk, onCancel) {
    let animationDuration = `animation-duration: ${options.toSecs(options.animationDuration)};`
    super(document.body, mConsts.ids.wrapper, null, animationDuration, options)
    this[mConsts.ids.confirmOk] = onOk
    this[mConsts.ids.confirmCancel] = onCancel
    this.className = `${mConsts.prefix}-${type}`
    if (!['confirm', 'async-block', 'modal'].includes(type)) type = 'modal'
    this.updateType(type)
    this.setInnerHtml(msg)
    this.insert()
  }

  setInnerHtml(html) {
    let innerHTML = this.options.applyReplacements(html, this.type)
    switch (this.type) {
      case "confirm":
        let buttons = [`<button class='${mConsts.klass.button} ${mConsts.klass.successBtn}'id='${mConsts.ids.confirmOk}'>${this.options.labels.confirmOk}</button>`]
        if (this[mConsts.ids.confirmCancel] !== false) {
          buttons.push(`<button class='${mConsts.klass.button} ${mConsts.klass.cancelBtn}'id='${mConsts.ids.confirmCancel}'>${this.options.labels.confirmCancel}</button>`)
        }
        innerHTML = `${this.options.icon(this.type)}<div class='${mConsts.klass.title}'>${this.options.label(this.type)}</div><div class="${mConsts.klass.content}">${innerHTML}</div><div class='${mConsts.klass.buttons} ${mConsts.klass.buttons}-${buttons.length}'>${buttons.join('')}</div>`
        break
      case "async-block":
        innerHTML = `${innerHTML}<div class="${mConsts.klass.dotAnimation}"></div>`
    }
    this.newNode.innerHTML = `<div class="${mConsts.klass.body} ${this.className}">${innerHTML}</div>`
  }

  keyupListener(e) {
    if (this.type === 'async-block') return e.preventDefault()
    switch (e.code) {
      case 'Escape':
        e.preventDefault()
        this.delete()
      case 'Tab':
        e.preventDefault()
        if (this.type !== 'confirm' || this[mConsts.ids.confirmCancel] === false) return true
        let next = this.okBtn
        if (e.shiftKey) {
          if (document.activeElement.id == mConsts.ids.confirmOk) next = this.cancelBtn
        } else if (document.activeElement.id !== mConsts.ids.confirmCancel) next = this.cancelBtn
        next.focus()
    }
  }
  afterInsert() {
    this.listener = e => this.keyupListener(e)
    window.addEventListener("keydown", this.listener)
    switch (this.type) {
      case 'async-block':
        this.start = Date.now()
        break
      case 'confirm':
        this.okBtn.focus()
        this.addEvent("click", e => {
          if (e.target.nodeName !== "BUTTON") return false
          this.delete()
          if (this[e.target.id]) this[e.target.id]()
        })
        break
      default:
        document.activeElement.blur()
        this.addEvent("click", e => {
          if (e.target.id === this.newNode.id) this.delete()
        })
    }
  }

  afterDelete() {
    window.removeEventListener("keydown", this.listener)
  }

  get okBtn() {
    return document.getElementById(mConsts.ids.confirmOk)
  }

  get cancelBtn() {
    return document.getElementById(mConsts.ids.confirmCancel)
  }
}

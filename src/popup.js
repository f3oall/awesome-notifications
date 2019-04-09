import Elem from "./elem"
import {
  mConsts
} from "./constants"

export default class extends Elem {
  constructor(html, type, options, onOk, onCancel) {
    let animationDuration = `animation-duration: ${options.toSecs(options.animationDuration)};`
    super(document.body, mConsts.ids.wrapper, null, animationDuration)
    this.options = options
    this[mConsts.ids.confirmOk] = onOk
    this[mConsts.ids.confirmCancel] = onCancel
    this.updateType(type)
    this.setInnerHtml(html)
    this.insert()
  }

  setInnerHtml(html) {
    let innerHTML = this.options.applyReplacements(html, this.type)
    switch (this.type) {
      case "confirm":
        innerHTML = `${this.options.icon(this.type)}
                    <div class='${mConsts.klass.title}'>
                      ${this.options.label(this.type)}
                    </div>
                    <div class="${mConsts.klass.content}">${innerHTML}</div>
                    <div class='${mConsts.klass.buttons}'>
                      <button class='${mConsts.klass.button} ${mConsts.klass.successBtn}'
                              id='${mConsts.ids.confirmOk}'>
                        ${this.options.labels.confirmOk}
                      </button>
                      <button class='${mConsts.klass.button} ${mConsts.klass.cancelBtn}'
                              id='${mConsts.ids.confirmCancel}'>
                        ${this.options.labels.confirmCancel}
                      </button>
                    </div>`
        break
      case "async-block":
        innerHTML = `${innerHTML}<div class="${mConsts.klass.dotAnimation}"></div>`
    }
    this.newNode.innerHTML = `<div class="${mConsts.klass.body} ${mConsts.prefix}-${this.type}">
                                ${innerHTML}
                              </div>`
  }

  afterInsert() {
    switch (this.type) {
      case 'async-block':
        this.start = Date.now()
        break
      case 'confirm':
        this.addEvent("click", e => {
          if (e.target.nodeName !== "BUTTON") return false
          this.delete()
          if (this[e.target.id]) this[e.target.id]()
        })
        break
      default:
        this.addEvent("click", e => {
          if (e.target.id === this.newNode.id) this.delete()
        })
    }
  }
}

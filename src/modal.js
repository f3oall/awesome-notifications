import Elem from "./elem"
import { mConsts } from "./constants"

export default class extends Elem {
  constructor(html, type, options) {
    super(
      document.body,
      mConsts.ids.wrapper,
      null,
      `animation-duration: ${options.getSecs("animationDuration")};`
    )
    this.options = options
    this.type = type
    this.setInnerHtml(html)
    this.insert()
  }

  setInnerHtml(html) {
    let innerHTML = this.options.applyReplacements(html, this.type)
    switch (this.type) {
      case "confirm":
        innerHTML = `
          ${this.options.icon(this.type)}
          <div class='${mConsts.klass.title}'>
            ${this.options.label(this.type)}
          </div>
          <div class="${mConsts.klass.content}">${innerHTML}</div>
          <div class='${mConsts.klass.buttons}'>
            <button class='${mConsts.klass.button} ${
          mConsts.klass.successBtn
        }' id='${mConsts.ids.confirmOk}'>${this.options.modal.okLabel}</button>
            <button class='${mConsts.klass.button} ${
          mConsts.klass.cancelBtn
        }' id='${mConsts.ids.confirmCancel}'>${
          this.options.modal.cancelLabel
        }</button>
          </div>
       `
        break
      case "async-block":
        innerHTML = `${innerHTML}<div class="${
          mConsts.klass.dotAnimation
        }"></div>`
    }
    this.newNode.innerHTML = `
      <div class="${mConsts.klass.body} ${mConsts.prefix}-${
      this.type
    }" style="max-width: ${this.options.modal.maxWidth};">
        ${innerHTML}
      </div>
     `
  }
  hideAsync(start) {
    let takenTime = Date.now() - start
    return new Promise((resolve, reject) => {
      if (takenTime >= this.options.asyncBlockMinDuration) {
        this.delete()
        resolve()
      } else {
        setTimeout(() => {
          this.delete()
          resolve()
        }, this.options.asyncBlockMinDuration - takenTime)
      }
    })
  }
}

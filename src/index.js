import Options from "./options"
import Toast from "./toast"
import Popup from "./popup"
import Elem from "./elem"

import {
  tConsts
} from "./constants"

export default class Notifier {
  constructor(options = {}) {
    this.options = new Options(options)
  }

  tip(msg, options) {
    return this._addToast(msg, "tip", options).el
  }

  info(msg, options) {
    return this._addToast(msg, "info", options).el
  }

  success(msg, options) {
    return this._addToast(msg, "success", options).el
  }

  warning(msg, options) {
    return this._addToast(msg, "warning", options).el
  }

  alert(msg, options) {
    return this._addToast(msg, "alert", options).el
  }

  async (promise, onResolve, onReject, msg, options) {
    let asyncToast = this._addToast(msg, "async", options)
    return this._afterAsync(promise, onResolve, onReject, options, asyncToast)
  }

  confirm(msg, onOk, onCancel, options) {
    return this._addPopup(msg, "confirm", options, onOk, onCancel)
  }

  asyncBlock(promise, onResolve, onReject, msg, options) {
    let asyncBlock = this._addPopup(msg, "async-block", options)
    return this._afterAsync(promise, onResolve, onReject, options, asyncBlock)
  }

  modal(msg, className, options) {
    return this._addPopup(msg, className, options)
  }

  closeToasts() {
    let c = this.container
    while (c.firstChild) {
      c.removeChild(c.firstChild)
    }
  }

  // Tools
  _addPopup(msg, className, options, onOk, onCancel) {
    return new Popup(msg, className, this.options.override(options), onOk, onCancel)
  }

  _addToast(msg, type, options, old) {
    options = this.options.override(options)
    let newToast = new Toast(msg, type, options, this.container)
    if (old) {
      if (old instanceof Popup) return old.delete().then(() => newToast.insert())
      let i = old.replace(newToast)
      return i
    }
    return newToast.insert()
  }

  _afterAsync(promise, onResolve, onReject, options, oldElement) {
    return promise.then(
      this._responseHandler(onResolve, "success", options, oldElement),
      this._responseHandler(onReject, "alert", options, oldElement)
    )
  }

  _responseHandler(payload, toastName, options, oldElement) {
    return result => {
      switch (typeof payload) {
        case 'undefined':
        case 'string':
          let msg = toastName === 'alert' ? payload || result : payload
          this._addToast(msg, toastName, options, oldElement)
          break
        default:
          oldElement.delete().then(() => {
            if (payload) payload(result)
          })
      }
    }
  }

  _createContainer() {
    return new Elem(document.body, tConsts.ids.container, `awn-${this.options.position}`).insert().el
  }

  get container() {
    return document.getElementById(tConsts.ids.container) || this._createContainer()
  }
}

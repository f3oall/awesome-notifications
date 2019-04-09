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

  tip(html, options) {
    this._addToast(html, "tip", options)
  }

  info(html, options) {
    this._addToast(html, "info", options)
  }

  success(html, options) {
    this._addToast(html, "success", options)
  }

  warning(html, options) {
    this._addToast(html, "warning", options)
  }

  alert(html, options) {
    this._addToast(html, "alert", options)
  }

  async (promise, onResolve, onReject, html, options) {
    let asyncToast = this._addToast(html, "async", options)
    return this._afterAsync(promise, onResolve, onReject, options, asyncToast)
  }

  confirm(html, onOk, onCancel, options) {
    return this._addPopup(html, "confirm", options, onOk, onCancel)
  }

  asyncBlock(promise, onResolve, onReject, html, options) {
    let asyncBlock = this._addPopup(html, "async-block", options)
    return this._afterAsync(promise, onResolve, onReject, options, asyncBlock)
  }

  popup(html, className, options) {
    return this._addPopup(html, className, options)
  }

  // Tools
  _addPopup(html, className, options, onOk, onCancel) {
    return new Popup(html, className, this.options.override(options), onOk, onCancel)
  }

  _addToast(html, type, options, old) {
    options = this.options.override(options)
    let newToast = new Toast(html, type, options, this.container)
    if (old) {
      if (old instanceof Popup) return old.delete().then(() => newToast.insert())
      return old.replace(newToast)
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
      if (typeof payload === "function") {
        if (oldEleement) oldElement.delete()
        payload(result)
      } else {
        this._addToast(payload || response, toastName, options, oldElement)
      }
      if (toastName === 'alert') return Promise.reject(result)
      return result
    }
  }

  _createContainer() {
    return new Elem(document.body, tConsts.ids.container, this.options.position).insert().el
  }

  get container() {
    return document.getElementById(tConsts.ids.container) || this._createContainer()
  }
}

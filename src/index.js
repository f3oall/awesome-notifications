import Options from "./defaults"
import Toast from "./toast"
import Modal from "./modal"
import Elem from "./elem"

import {
  mConsts,
  eConsts,
  tConsts
} from "./constants"

export default class Notifier {
  constructor(options = {}) {
    this.options = new Options(options)
  }

  tip(html = this._required("html"), options) {
    this.notify(html, "tip", options)
  }

  info(html = this._required("html"), options) {
    this.notify(html, "info", options)
  }

  success(html = this._required("html"), options) {
    this.notify(html, "success", options)
  }

  warning(html = this._required("html"), options) {
    this.notify(html, "warning", options)
  }

  alert(html = this._required("html"), options) {
    this.notify(html, "alert", options)
  }

  async (
    promise = this._required("promise"),
    onResolve,
    onReject,
    html,
    options
  ) {
    let asyncToast = this.notify(html, "async", options)
    return promise.then(
      result => this._runFunction(onResolve, result, options, false, asyncToast),
      err => Promise.reject(this._runFunction(onReject, err, options, true, asyncToast))
    )
  }

  notify(html, type, options, oldElement) {
    options = this.options.override(options)
    if (type === 'alert') html = options.formatError(html)
    let newEl = new Toast(html, type, options, this._getContainer())
    newEl.fire(oldElement)
    return newEl
  }

  confirm(html = this._required("html"), onOk, onCancel, options) {
    let confirm = this.modal(html, "confirm", options)
    confirm.addEvent("click", e => {
      if (e.target.nodeName !== "BUTTON") return false
      confirm.delete()
      switch (e.target.id) {
        case mConsts.ids.confirmOk:
          return this._runFunction(onOk, null, options)
        case mConsts.ids.confirmCancel:
          return this._runFunction(onCancel, null, options, true)
      }
    })
  }

  asyncBlock(
    promise = this._required("promise"),
    onResolve,
    onReject,
    html,
    options
  ) {
    let asyncBlock = new Modal(html, "async-block", options)
    let start = Date.now()
    return promise.then(
      result => asyncBlock.hide(start).then(() => this._runFunction(onResolve, result, options)),
      err => asyncBlock.hide(start).then(() => Promise.reject(this._runFunction(onReject, err, options, true)))
    )
  }

  modal(
    html = this._required("html"),
    className = this._required("className"),
    options
  ) {
    options = this.options.override(options)
    let modal = new Modal(html, className, this.options)
    modal.addEvent("click", e => {
      if (e.target.id === modal.el.id) modal.delete()
    })
    return modal
  }

  // Tools
  _required(paramName) {
    throw Error(`'${paramName}' is mandatory parameter for this function`)
  }
  _getContainer() {
    if (!this.container) {
      this.container =
        document.getElementById(tConsts.ids.container) ||
        this._createContainer()
    }
    return this.container
  }
  _createContainer() {
    let positions = this.options.position.split("-")
    let klass = positions[0] === "top" ? `${eConsts.lib}-top` : ``
    if (positions[1] === "left") {
      klass = `${klass} ${eConsts.lib}-left`
    }
    let container = new Elem(document.body, tConsts.ids.container, klass)
    container.insert()
    return container.el
  }

  _runFunction(payload, response, options, isError, oldElement) {
    if (typeof payload === "function") {
      if (oldElement) oldElement.delete()
      return payload(param)
    } else {
      let html = payload || response
      let type = isError ? "alert" : "success"
      this.notify(html, type, options, oldElement)
    }
    return response
  }
}

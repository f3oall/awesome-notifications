import Options from "./defaults"
import Toast from "./toast"
import Modal from "./modal"
import Elem from "./elem"

import { mConsts, eConsts, tConsts } from "./constants"

export default class Notifier {
  constructor(options = {}) {
    this.options = new Options(options)
  }
  _err(msg) {
    throw Error(msg)
  }
  tip(html = this._err("missing 'html' parameter")) {
    this.notify(html, "tip")
  }

  info(html = this._err("missing 'html' parameter")) {
    this.notify(html, "info")
  }

  success(html = this._err("missing 'html' parameter")) {
    this.notify(html, "success")
  }

  warning(html = this._err("missing 'html' parameter")) {
    this.notify(html, "warning")
  }

  alert(html = this._err("missing 'html' parameter")) {
    this.notify(html, "alert")
  }

  async(
    promise = this._err("missing 'promise' parameter"),
    onResolve,
    onReject,
    html
  ) {
    let async = this.notify(html, "async")
    return promise.then(
      result => this._runFunction(true, onResolve, result, async),
      err => this._runFunction(false, onReject, err, async)
    )
  }

  notify(html, type, oldEl) {
    let newEl = new Toast(html, type, this.options, this._getContainer())
    newEl.fire(oldEl)
    return newEl
  }

  confirm(html = this._err("missing 'html' parameter"), onOk, onCancel) {
    let confirm = new Modal(html, "confirm", this.options)
    confirm.addEvent("click", e => {
      if (e.target.nodeName !== "BUTTON") return false
      confirm.delete()
      switch (e.target.id) {
        case mConsts.ids.confirmOk:
          return this._runFunction(true, onOk)
        case mConsts.ids.confirmCancel:
          return this._runFunction(true, onCancel)
      }
    })
  }

  asyncBlock(
    promise = this._err("missing 'promise' parameter"),
    onResolve,
    onReject,
    html
  ) {
    let asyncBlock = new Modal(html, "async-block", this.options)
    let start = Date.now()
    return promise.then(
      result => {
        asyncBlock
          .hideAsync(start)
          .then(() => this._runFunction(true, onResolve, result))
      },
      err => {
        asyncBlock
          .hideAsync(start)
          .then(() => this._runFunction(false, onReject, err))
      }
    )
  }
  modal(
    html = this._err("missing 'html' parameter"),
    className = this._err("missing className parameter")
  ) {
    let modal = new Modal(html, className, this.options)
    modal.addEvent("click", e => {
      if (e.target.id === modal.el.id) modal.delete()
    })
  }

  // Tools
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
  _runFunction(success, arg, param, oldEl) {
    if (this.options.handlers.enabled) {
      param = success
        ? this.options.handlers.onResolve(param)
        : this.options.handlers.onReject(param)
    }
    let alertMsg = param
    switch (typeof arg) {
      case "function":
        return arg(param)
      case "string":
        if (!success) {
          alertMsg = arg
        } else {
          this.notify(arg, "success", oldEl)
        }
        return param
    }
    if (!success) this.notify(param, "alert", oldEl)
  }
}

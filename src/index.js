import setDefaults from "./defaults"
import Timer from "./timer"

export default class Notifier {
  constructor(options = {}) {
    this.options = setDefaults(options)
    this.labels = this.options.labels
    this.icons = this.options.icons
    this.maxNotifications = this.options.maxNotifications
    this.timers = {}
    this.deleted = {}
  }

  tip(msg) {
    this._addNotification(msg, "tip")
  }

  info(msg) {
    this._addNotification(msg, "info")
  }

  success(msg) {
    this._addNotification(msg, "success")
  }

  warning(msg) {
    this._addNotification(msg, "warning")
  }

  alert(msg) {
    this._addNotification(msg, "alert")
  }

  async(promise, onResolve, onReject, msg, successMsg) {
    msg = msg || this.options.asyncDefaultMessage
    return this._addAsyncNotification(
      promise,
      onResolve,
      onReject,
      msg,
      successMsg
    )
  }

  confirm(msg, okFunc, cancelFunc) {
    this._showConfirm(msg, okFunc, cancelFunc)
  }

  _showConfirm(msg, okFunc, cancelFunc) {
    let newEl = document.createElement("div")
    newEl.id = "awn-confirm"
    newEl.style.animationDuration = this._msToS(this.options.animationDuration)
    let icon = this._getIcon(this.icons["confirm"])
    newEl.innerHTML = `
        <div class='awn-confirm-body'>
          ${icon}
          <div class='awn-confirm-title'>
            ${this.labels.confirm}
          </div>
          ${msg}
          <div class='awn-buttons'>
            <button class='awn-btn awn-btn-success' id='awn-btn-success'>${
              this.options.confirm.successBtnLabel
            }</button>
            <button class='awn-btn awn-btn-cancel' id='awn-btn-cancel'>${
              this.options.confirm.cancelBtnLabel
            }</button>
          </div>
        </div>
       `
    newEl = document.body.appendChild(newEl)
    document.getElementById("awn-btn-success").addEventListener("click", () => {
      this._deleteConfirm(newEl)
      if (typeof okFunc === "function") {
        okFunc()
      }
    })
    document.getElementById("awn-btn-cancel").addEventListener("click", () => {
      this._deleteConfirm(newEl)
      if (typeof cancelFunc === "function") {
        cancelFunc()
      }
    })
  }

  _deleteConfirm(el) {
    this._beforeDelete(el).then(() => {
      document.body.removeChild(el)
    })
  }

  async _addAsyncNotification(promise, onResolve, onReject, msg, successMsg) {
    let asyncEl = await this._insertEl(msg, "async")
    return promise.then(
      result => {
        if (successMsg) {
          this._addNotification(successMsg, "success", asyncEl)
        } else {
          this._deleteEl(asyncEl)
        }
        if (typeof onResolve === "function") {
          return onResolve(result)
        }
      },
      err => {
        this._addNotification(err, "alert", asyncEl)
        if (typeof onReject === "function") {
          return onReject(err)
        }
      }
    )
  }

  _addNotification(msg, type, oldEl) {
    // _addNotification depending on the presense of oldEl, adds new or replaces existent notification
    if (oldEl) {
      this._replaceEl(msg, type, oldEl).then(newEl => {
        this._addListeners(newEl)
      })
    } else {
      this._insertEl(msg, type).then(newEl => {
        this._addListeners(newEl)
      })
    }
  }

  _addListeners(el) {
    // _addListeners adds event listeners and set a timer for self-destruction for the element.
    this.timers[el.id] = new Timer(() => {
      this._deleteEl(el)
    }, this.options.duration)
    el.addEventListener("click", () => {
      this._deleteEl(el)
    })
    el.addEventListener("mouseenter", () => {
      if (!this.deleted[el.id]) {
        el.classList.add("awn-progress-bar-paused")
        this.timers[el.id].pause()
      }
    })
    el.addEventListener("mouseleave", () => {
      if (!this.deleted[el.id]) {
        el.classList.remove("awn-progress-bar-paused")
        this.timers[el.id].resume()
      }
    })
  }

  _beforeInsert() {
    if (this._getContainer().childElementCount >= this.maxNotifications) {
      let elements = Array.from(
        this._getContainer().getElementsByClassName("awn-event")
      )
      let el = elements.find(e => {
        return !this.deleted[e.id]
      })
      if (el) {
        this._deleteEl(el)
      }
    }
  }

  _insertEl(msg, type) {
    // _insertEl creates and puts an element into the DOM.
    return new Promise((resolve, reject) => {
      this._beforeInsert()
      resolve(this._getContainer().appendChild(this._newEl(msg, type)))
    })
  }

  _replaceEl(msg, type, oldEl) {
    // _replaceEl creates element and put it in place of specified old element.
    return new Promise((resolve, reject) => {
      if (!document.getElementById(oldEl.id)) return
      let newEl = this._newEl(msg, type)
      this._beforeDelete(oldEl).then(() => {
        this._getContainer().replaceChild(newEl, oldEl)
        resolve(document.getElementById(newEl.id))
      })
    })
  }

  _newEl(msg, type) {
    // _newEl creates a new element with specified message and type. It doesn't put element into the DOM.
    const id = `awn-${Math.floor(Date.now() - Math.random() * 100)}`
    let progressBar =
      type === "async"
        ? ""
        : `<div class='awn-progress-bar' style="animation-duration:${this._msToS(
            this.options.duration
          )};"></div>`
    let icon = this._getIcon(this.icons[type])
    let newEl = document.createElement("div")
    newEl.className = `awn-event awn-${type}`
    newEl.id = id
    newEl.style.animationDuration = this._msToS(this.options.animationDuration)
    newEl.innerHTML = `${progressBar}<b>${this.labels[type]}</b>${msg}${icon}`

    return newEl
  }

  _beforeDelete(el) {
    // _beforeDelete makes a delay before removing element from the DOM. It's needed for proper animation.
    return new Promise((resolve, reject) => {
      el.classList.add("awn-hiding")
      setTimeout(resolve, this.options.animationDuration)
    })
  }

  _clearTimers(el) {
    if (this.timers[el.id]) {
      this.timers[el.id].pause()
      this.timers[el.id] = null
    }
  }

  _deleteEl(el) {
    if (!el.parentNode) return
    this._clearTimers(el)
    this.deleted[el.id] = true
    this._beforeDelete(el).then(() => {
      el.parentNode.removeChild(el)
      this.deleted[el.id] = null
    })
  }
  _getContainer() {
    if (!this.container) {
      let container = document.getElementById("awn-container")
      if (container) {
        this.container = container
      } else {
        this.container = this._createContainer(this.options.position)
      }
    }
    return this.container
  }
  _createContainer(position) {
    let container = document.createElement("div")
    container.id = "awn-container"
    switch (position) {
      case "top-left":
        container.className = "awn-left awn-top"
        break
      case "bottom-left":
        container.className = "awn-left"
        break
      case "top-right":
        container.className = "awn-top"
    }
    return document.body.appendChild(container)
  }
  _getIcon(value) {
    return this.options.icons.enabled
      ? this.options.icons.template.prefix +
          value +
          this.options.icons.template.suffix
      : ""
  }
  _msToS(ms) {
    return `${ms / 1000}s`
  }
}

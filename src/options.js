const defaults = {
  maxNotifications: 10,
  animationDuration: 300,
  position: "bottom-right",
  labels: {
    tip: "Tip",
    info: "Info",
    success: "Success",
    warning: "Attention",
    alert: "Error",
    async: "Loading",
    confirm: "Confirmation required",
    confirmOk: "OK",
    confirmCancel: "Cancel"
  },
  icons: {
    tip: "question-circle",
    info: "info-circle",
    success: "check-circle",
    warning: "exclamation-circle",
    alert: "exclamation-triangle",
    async: "cog fa-spin",
    confirm: "exclamation-triangle",
    prefix: "<i class='fa fas fa-fw fa-",
    suffix: "'></i>",
    enabled: true
  },
  replacements: {
    tip: null,
    info: null,
    success: null,
    warning: null,
    alert: null,
    async: null,
    "async-block": null,
    modal: null,
    confirm: null,
    general: {
      "<script>": "",
      "</script>": ""
    }
  },
  messages: {
    tip: "",
    info: "",
    success: "Action has been succeeded",
    warning: "",
    alert: "Action has been failed",
    confirm: "This action can't be undone. Continue?",
    async: "Please, wait...",
    "async-block": "Loading"
  },
  formatError(err) {
    if (err.response) {
      if (!err.response.data) return '500 API Server Error'
      if (err.response.data.errors) {
        return err.response.data.errors.map(o => o.detail).join('<br>')
      }
      if (err.response.statusText) {
        return `${err.response.status} ${err.response.statusText}: ${err.response.data}`
      }
    }
    if (err.message) return err.message
    return err
  },
  durations: {
    global: 5000,
    success: null,
    info: null,
    tip: null,
    warning: null,
    alert: null
  },
  minDurations: {
    async: 1000,
    "async-block": 1000
  },
}
export default class Options {
  constructor(options = {}, global = defaults) {
    Object.assign(this, this.defaultsDeep(global, options))
  }

  icon(type) {
    if (this.icons.enabled) return `${this.icons.prefix}${this.icons[type]}${this.icons.suffix}`
    return ''
  }

  label(type) {
    return this.labels[type]
  }

  duration(type) {
    let duration = this.durations[type]
    return duration === null ? this.durations.global : duration
  }

  toSecs(value) {
    return `${value / 1000}s`
  }

  applyReplacements(str, type) {
    if (!str) return this.messages[type] || ""
    for (const n of ['general', type]) {
      if (!this.replacements[n]) continue
      for (const k in this.replacements[n]) {
        str = str.replace(k, this.replacements[n][k])
      }
    }
    return str
  }

  override(options) {
    if (options) return new Options(options, this)
    return this
  }

  defaultsDeep(defaults, overrides) {
    let result = {}
    for (const k in defaults) {
      if (overrides.hasOwnProperty(k)) {
        result[k] = typeof defaults[k] === "object" && defaults[k] !== null ? this.defaultsDeep(defaults[k], overrides[k]) : overrides[k]
      } else {
        result[k] = defaults[k]
      }
    }
    return result
  }
}

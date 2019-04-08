const defaults = {
  labels: {
    tip: "Tip",
    info: "Info",
    success: "Success",
    warning: "Attention",
    alert: "Error",
    async: "Loading",
    confirm: "Confirmation required"
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
    tip: "",
    info: "",
    success: "",
    warning: "",
    alert: "",
    async: "",
    "async-block": "",
    modal: "",
    confirm: "",
    general: {
      "<script>": "",
      "</script>": ""
    }
  },
  modal: {
    okLabel: "OK",
    cancelLabel: "Cancel",
    maxWidth: "500px"
  },
  messages: {
    async: "Please, wait...",
    "async-block": "Loading"
  },
  formatError(err) {
    if (err.response) {
      if (err.response.data) {
        if (err.response.data.errors) {
          return err.response.data.errors.map(o => o.detail).join('<br>')
        }
        return `${err.response.status} ${err.response.statusText}: ${err.response.data}`
      }
      return '500 API Server Error'
    }
    if (err.message) return err.message
    return err
  },
  maxNotifications: 10,
  animationDuration: 300,
  asyncBlockMinDuration: 500,
  position: "bottom-right",
  durations: {
    global: 5000,
    success: null,
    info: null,
    tip: null,
    warning: null,
    alert: null
  }
}
export default class {
  constructor(options = {}) {
    this.override(options, defaults)
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

  getSecs(value) {
    return `${value / 1000}s`
  }

  applyReplacements(str, type) {
    if (!str) {
      return this.messages[type] || ""
    }
    for (const k in this.replacements.general) {
      str = str.replace(k, this.replacements.general[k])
    }
    if (this.replacements[type]) {
      for (const k in this.replacements[type]) {
        str = str.replace(k, this.replacements[type][k])
      }
    }
    return str
  }

  override(options, defaults = this) {
    if (options) {
      Object.assign(this, this.defaultsDeep(defaults, options))
    }
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

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
    alert: "warning",
    async: "cog fa-spin",
    confirm: "warning",
    prefix: "<i class='fa fa-fw fa-",
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
    general: { "<script>": "", "</script>": "" }
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
  handleReject(value) {
    if (typeof value !== "string")
      throw Error(
        `promise.reject() returning value should be a string, Given ${typeof value} ${value}`
      )
    return value
  },
  maxNotifications: 10,
  animationDuration: 300,
  asyncBlockMinDuration: 500,
  position: "bottom-right",
  duration: 5000
}
export default class {
  constructor(options = {}) {
    Object.assign(this, defaultsDeep(defaults, options))
  }

  icon(type) {
    return this.icons.enabled
      ? `${this.icons.prefix}${this.icons[type]}${this.icons.suffix}`
      : ""
  }
  label(type) {
    return this.labels[type]
  }

  getSecs(name) {
    return `${this[name] / 1000}s`
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
}

function defaultsDeep(source, value) {
  let defaults = {}
  for (const k in source) {
    if (value.hasOwnProperty(k)) {
      if (typeof source[k] === "object") {
        defaults[k] = defaultsDeep(source[k], value[k])
      } else {
        defaults[k] = value[k]
      }
    } else {
      defaults[k] = source[k]
    }
  }
  return defaults
}

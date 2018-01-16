import defaultsDeep from "lodash.defaultsdeep"

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
    template: {
      prefix: "<span><i class='fa fa-fw fa",
      suffix: "'></i></span>"
    },
    disable: false
  },
  confirm: {
    successBtnLabel: "OK",
    cancelBtnLabel: "Cancel"
  },
  maxNotifications: 10,
  asyncDefaultMessage: "Please, wait...",
  animationDuration: 300,
  position: "bottom-right",
  duration: 5000
}
export default function(options) {
  return defaultsDeep(options, defaults)
}

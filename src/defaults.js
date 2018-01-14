import defaultsDeep from "lodash.defaultsdeep"

const defaults = {
  labels: {
    tip: "Tip",
    info: "Info",
    success: "Success",
    warning: "Attention",
    alert: "Error",
    async: "Loading"
  },
  icons: {
    tip: "question-circle",
    info: "info-circle",
    success: "check-circle",
    warning: "exclamation-circle",
    alert: "warning",
    async: "cog fa-spin"
  },
  confirm: {
    title: "Confirmation required",
    icon: "warning",
    successBtnLabel: "OK",
    cancelBtnLabel: "Cancel"
  },
  maxNotifications: 10,
  asyncDefaultMessage: "Please, wait...",
  animationDuration: 300,
  position: "bottom-right"
}
export default function(options) {
  return defaultsDeep(options, defaults)
}

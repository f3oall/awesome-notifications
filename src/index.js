import Notifications from "./notifications"

export default function install(Vue, options) {
  Vue.prototype.$awn = new Notifications(options)
}

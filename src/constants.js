const libName = "awn"
const prefix = {
  popup: `${libName}-popup`,
  toast: `${libName}-toast`,
  btn: `${libName}-btn`,
  confirm: `${libName}-confirm`
}

// Constants for toasts
export const tConsts = {
  prefix: prefix.toast,
  klass: {
    label: `${prefix.toast}-label`,
    content: `${prefix.toast}-content`,
    icon: `${prefix.toast}-icon`,
    progressBar: `${prefix.toast}-progress-bar`,
    progressBarPause: `${prefix.toast}-progress-bar-paused`
  },
  ids: {
    container: `${prefix.toast}-container`
  }
}

// Constants for popups
export const mConsts = {
  prefix: prefix.popup,
  klass: {
    buttons: `${libName}-buttons`,
    button: prefix.btn,
    successBtn: `${prefix.btn}-success`,
    cancelBtn: `${prefix.btn}-cancel`,
    title: `${prefix.popup}-title`,
    body: `${prefix.popup}-body`,
    content: `${prefix.popup}-content`,
    dotAnimation: `${prefix.popup}-loading-dots`
  },
  ids: {
    wrapper: `${prefix.popup}-wrapper`,
    confirmOk: `${prefix.confirm}-ok`,
    confirmCancel: `${prefix.confirm}-cancel`
  }
}

export const eConsts = {
  klass: {
    hiding: `${libName}-hiding`
  },
  lib: libName
}

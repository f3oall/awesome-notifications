const libName = "awn"
const prefix = {
  modal: `${libName}-modal`,
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
  ids: { container: `${prefix.toast}-container` }
}

// Constants for modals

export const mConsts = {
  prefix: prefix.modal,
  klass: {
    buttons: `${libName}-buttons`,
    button: prefix.btn,
    successBtn: `${prefix.btn}-success`,
    cancelBtn: `${prefix.btn}-cancel`,
    title: `${prefix.modal}-title`,
    body: `${prefix.modal}-body`,
    content: `${prefix.modal}-content`,
    dotAnimation: `${prefix.modal}-loading-dots`
  },
  ids: {
    wrapper: `${prefix.modal}-wrapper`,
    confirmOk: `${prefix.confirm}-ok`,
    confirmCancel: `${prefix.confirm}-cancel`
  }
}

export const eConsts = { klass: { hiding: `${libName}-hiding` }, lib: libName }

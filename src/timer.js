export default class {
  constructor(callback, delay) {
    this.callback = callback
    this.remaining = delay
    this.resume()
  }
  pause() {
    this.paused = true
    window.clearTimeout(this.timerId)
    this.remaining -= new Date() - this.start
  }
  resume() {
    this.paused = false
    this.start = new Date()
    window.clearTimeout(this.timerId)
    this.timerId = window.setTimeout(() => {
      window.clearTimeout(this.timerId)
      this.callback()
    }, this.remaining)
  }
  toggle() {
    if (this.paused) this.resume()
    else this.pause()
  }
}

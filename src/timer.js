export default class {
  constructor(callback, delay) {
    this.callback = callback
    this.remaining = delay
    this.resume()
  }
  pause() {
    window.clearTimeout(this.timerId)
    this.remaining -= new Date() - this.start
  }
  resume() {
    this.start = new Date()
    window.clearTimeout(this.timerId)
    this.timerId = window.setTimeout(() => {
      window.clearTimeout(this.timerId)
      this.callback()
    }, this.remaining)
  }
}

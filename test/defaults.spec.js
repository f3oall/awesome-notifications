import "chai/register-should"
import Options from "../src/defaults"

describe("Defaults", () => {
  function newOptions() {
    return new Options({
      duration: 1000,
      replacements: { general: { "<script>": "2" } }
    })
  }
  let options
  before(() => {
    options = newOptions()
  })
  describe("constructor()", () => {
    it("should make an assignment to class instance", () => {
      should.exist(options.duration)
    })
    it("should set defaults", () => {
      should.equal(options.animationDuration, 300)
    })
    it("should override defaults", () => {
      should.equal(options.duration, 1000)
    })
    it("should override only specified defaults", () => {
      should.equal(options.replacements.general["<script>"], "2")
      should.equal(options.replacements.general["</script>"], "")
    })
  })
  describe("icon()", () => {
    it("should return empty string if icons disabled", () => {
      options.icons.enabled = false
      should.equal(options.icon(), "")
    })
    it("should get proper type of icon", () => {
      options.icons.enabled = true
      should.equal(
        options.icon("tip"),
        "<i class='fa fa-fw fa-question-circle'></i>"
      )
    })
  })
  describe("label()", () => {
    it("should get proper type of label", () => {
      should.equal(options.label("async"), "Loading")
    })
  })
  describe("getSecs()", () => {
    it("should return time in seconds as string", () => {
      should.equal(options.getSecs("animationDuration"), "0.3s")
    })
  })
  describe("applyReplacements()", () => {
    it("should return default message if string is empty", () => {
      should.equal(options.applyReplacements("", "async-block"), "Loading")
    })
    it("should apply general replacements", () => {
      should.equal(
        options.applyReplacements("<script>Bad JS</script>", "async-block"),
        "2Bad JS"
      )
    })
    it("should apply specific type replacements", () => {
      options.replacements["async-block"] = { "2": "" }
      should.equal(
        options.applyReplacements("<script>Bad JS</script>", "async-block"),
        "Bad JS"
      )
    })
  })
})

import "jsdom-global/register"
import "chai/register-should"
import Modal from "../src/popup"
import Options from "../src/options"

describe("Popup", function () {
  const modalDefaults = {
    html: "test-message",
    type: "confirm",
    parent: document.body
  }
  const defaults = new Options()
  this.timeout((defaults.duration + defaults.animationDuration) * 2)

  function newmodal() {
    return new Modal(modalDefaults.html, modalDefaults.type, defaults)
  }

  function clearParent() {
    while (modalDefaults.parent.firstChild) {
      modalDefaults.parent.removeChild(modalDefaults.parent.firstChild)
    }
  }
  let modal
  before(() => {
    clearParent()
  })
  describe("constructor()", () => {
    before(() => {
      modal = newmodal()
    })
    it("should make a newNode", () => {
      should.exist(modal.newNode)
    })
    it("should set a parent", () => {
      should.equal(modal.parent, modalDefaults.parent)
    })
    describe("newNode", () => {
      it("should have id", () => {
        should.exist(modal.newNode.id)
      })
      it("should have style.cssText", () => {
        should.exist(modal.newNode.style.cssText)
      })
      it("should have innerHTML", () => {
        should.exist(modal.newNode.innerHTML)
      })
      it("should have proper nodeName", () => {
        should.equal(modal.newNode.nodeName, "DIV")
      })
      it("should be in the DOM", () => {
        should.exist(document.getElementById(modal.newNode.id))
      })
    })
  })
})

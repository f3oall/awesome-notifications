import "jsdom-global/register"
import "chai/register-should"
import Toast from "../src/toast"
import Options from "../src/options"
import {
  tConsts,
  eConsts
} from "../src/constants"

describe("Toast", function () {
  const toastDefaults = {
    html: "test-message",
    type: "success",
    parent: document.body
  }
  const defaults = new Options()

  function newToast() {
    return new Toast(
      toastDefaults.html,
      toastDefaults.type,
      defaults,
      toastDefaults.parent
    )
  }

  function clearParent() {
    while (toastDefaults.parent.firstChild) {
      toastDefaults.parent.removeChild(toastDefaults.parent.firstChild)
    }
  }
  let toast
  this.timeout(10000)
  before(() => {
    clearParent()
  })
  describe("constructor()", () => {
    before(() => {
      toast = newToast()
    })
    it("should make a newNode", () => {
      should.exist(toast.newNode)
    })
    it("should set a parent", () => {
      should.equal(toast.parent, toastDefaults.parent)
    })
    describe("newNode", () => {
      it("should have id", () => {
        should.exist(toast.newNode.id)
      })
      it("should have className", () => {
        should.equal(
          toast.newNode.className,
          `${tConsts.prefix} ${tConsts.prefix}-${toastDefaults.type}`
        )
      })
      it("should have style.cssText", () => {
        should.exist(toast.newNode.style.cssText)
      })
      it("should have innerHTML", () => {
        should.exist(toast.newNode.innerHTML)
      })
      it("should have proper nodeName", () => {
        should.equal(toast.newNode.nodeName, "DIV")
      })
      it("shouldn't be in the DOM", () => {
        should.not.exist(document.getElementById(toast.newNode.id))
      })
    })
  })
  // describe("beforeInsert()", (done) => {
  //   it("should remove toast if their amount more than allowed by options", (done) => {

  //     // toastDefaults.parent.childNodes.should.be.empty
  //     for (let i = 0; i < defaults.maxNotifications * 2; i++) {
  //       newToast().insert()
  //     }
  //     console.log(toastDefaults.parent.childElementCount, defaults.maxNotifications)
  //     // should.equal(toastDefaults.parent.childElementCount, defaults.maxNotifications)
  //     setTimeout(() => {
  //       console.log(toastDefaults.parent.childElementCount, defaults.maxNotifications)
  //       should.equal(toastDefaults.parent.childElementCount, defaults.maxNotifications)
  //       done()
  //     }, 3000)
  //   })
  // })
  // describe("afterInsert()", () => {
  //   before(() => {
  //     clearParent()
  //   })
  //   it("should remove toast after some time", async () => {
  //     let elem = newToast()
  //     await new Promise((resolve, reject) => {
  //       elem.insert()
  //       setTimeout(
  //         resolve,
  //         (defaults.duration + defaults.animationDuration) * 1.2
  //       )
  //     })
  //     should.not.exist(elem.getElement())
  //   })
  // })
  // after(() => {
  //   clearParent()
  // })
})

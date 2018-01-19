import "jsdom-global/register"
import "chai/register-should"
import Elem from "../src/elem"
import { eConsts } from "../src/constants"

describe("Elem", () => {
  const defaults = {
    id: "test-elem-id",
    klass: "test-elem-class",
    style: "text-align: left;",
    html: "<b>test html</b>",
    tag: "SPAN"
  }
  defaults.parent = document.body
  function newElem() {
    return new Elem(
      defaults.parent,
      defaults.id,
      defaults.klass,
      defaults.style,
      defaults.html,
      defaults.tag
    )
  }
  let elem
  before(() => {
    elem = newElem()
  })
  describe("constructor()", () => {
    it("should make a newNode", () => {
      should.exist(elem.newNode)
    })
    it("should set a parent", () => {
      should.equal(elem.parent, defaults.parent)
    })
    describe("newNode", () => {
      it("should have id", () => {
        should.equal(elem.newNode.id, defaults.id)
      })
      it("should have className", () => {
        should.equal(elem.newNode.className, defaults.klass)
      })
      it("should have style.cssText", () => {
        should.equal(elem.newNode.style.cssText, defaults.style)
      })
      it("should have innerHTML", () => {
        should.equal(elem.newNode.innerHTML, defaults.html)
      })
      it("should have proper nodeName", () => {
        should.equal(elem.newNode.nodeName, defaults.tag)
      })
      it("shouldn't be in the DOM", () => {
        should.not.exist(document.getElementById(elem.newNode.id))
      })
    })
  })
  describe("insert()", () => {
    let newEl
    before(() => {
      elem.insert()
      newEl = document.getElementById(elem.newNode.id)
    })
    it("should inserts into the DOM", () => {
      should.exist(newEl)
    })
    it("should inserts into the parent", () => {
      should.equal(newEl.parentNode, elem.parent)
    })
    it("should set an element", () => {
      should.equal(newEl.id, elem.el.id)
    })
  })
  describe("replace()", () => {
    let elem2
    before(async () => {
      elem2 = new Elem(document.body, defaults.id + 1)
      await elem.replace(elem2.newNode, elem2.type)
    })
    it("should remove old element", () => {
      should.not.exist(document.getElementById(defaults.id))
    })
    it("should insert new element", () => {
      should.exist(document.getElementById(defaults.id + 1))
    })
    after(async () => await elem.delete())
  })
  describe("fire()", () => {
    it("should insert new element, if old element didn't specified", async () => {
      elem = new Elem(document.body, defaults.id)
      await elem.fire()
      should.equal(elem.getElement(), elem.el)
    })
    it("should replace old element with new element, if old element specified", async () => {
      let elem2 = new Elem(document.body, defaults.id + 1)
      await elem2.fire(elem)
      should.equal(elem.getElement().id, elem2.newNode.id)
    })
  })

  describe("beforeDelete()", () => {
    it(`should add ${eConsts.klass.hiding} to the element`, () => {
      elem.getElement().className.should.not.include(eConsts.klass.hiding)
      elem.beforeDelete()
      elem.getElement().className.should.include(eConsts.klass.hiding)
    })
  })
  describe("delete()", () => {
    it(`should remove element from DOM`, async () => {
      should.exist(elem.getElement())
      await elem.delete()
      should.not.exist(elem.getElement())
    })
    it(`shouldn't try to remove element if it's not in the DOM`, () => {
      should.not.exist(elem.getElement())
      should.equal(elem.delete(), null)
    })
  })
  describe("getElement()", () => {
    it("should be an alias for getElementById", () => {
      should.not.exist(document.getElementById(defaults.id))
      elem = newElem()
      elem.insert()
      should.exist(document.getElementById(defaults.id))
      should.equal(
        elem.getElement().id,
        document.getElementById(defaults.id).id
      )
    })
  })
  describe("addClass()", () => {
    it("should be an alias for classList.add()", () => {
      let el = document.getElementById(defaults.id)
      should.exist(el)
      el.classList.contains("awn-test").should.be.false
      elem.addClass("awn-test")
      el.classList.contains("awn-test").should.be.true
    })
  })
  describe("removeClass()", () => {
    it("should be an alias for classList.remove()", () => {
      let el = document.getElementById(defaults.id)
      should.exist(el)
      el.classList.contains("awn-test").should.be.true
      elem.removeClass("awn-test")
      el.classList.contains("awn-test").should.be.false
    })
  })
})

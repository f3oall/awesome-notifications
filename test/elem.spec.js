import "jsdom-global/register"
import "chai/register-should"
import Elem from "../src/elem"
import {
  eConsts
} from "../src/constants"
import Options from "../src/options"

const options = new Options()

describe("Elem", () => {
  const defaults = {
    id: "test-elem-id",
    klass: "test-elem-class",
    style: "text-align: left;"
  }
  defaults.parent = document.body

  function newElem() {
    return new Elem(
      defaults.parent,
      defaults.id,
      defaults.klass,
      defaults.style,
      options
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
  describe("beforeDelete()", () => {
    it(`should add ${eConsts.klass.hiding} to the element`, async () => {
      elem.getElement().className.should.not.include(eConsts.klass.hiding)
      await elem.beforeDelete()
      elem.getElement().className.should.include(eConsts.klass.hiding)
    })
  })
  describe("replace()", () => {
    let elem2
    before(async () => {
      elem2 = new Elem(document.body, defaults.id + 1)
      await elem.replace(elem2)
    })
    it("should remove old element", () => {
      should.not.exist(document.getElementById(defaults.id))
    })
    it("should insert new element", () => {
      should.exist(document.getElementById(defaults.id + 1))
    })
    after(async () => await elem.delete())
  })
  describe("delete()", () => {
    before(() => {
      elem.insert()
    })
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
  describe("toggleClass()", () => {
    it("should toggle class", () => {
      let el = document.getElementById(defaults.id)
      should.exist(el)
      el.classList.contains("awn-test").should.be.false
      elem.toggleClass("awn-test")
      el.classList.contains("awn-test").should.be.true
      elem.toggleClass("awn-test")
      el.classList.contains("awn-test").should.be.false
    })
  })
  describe("updateType()", () => {
    it("should update type", () => {
      elem.updateType('tip')
      should.equal(elem.type, 'tip')
    })
    it("should set duration", () => {
      should.equal(elem.duration, elem.options.durations.global)
    })
  })
})

import {
    eConsts
} from "./constants"

export default class {
    constructor(parent, id, klass, style, options) {
        this.newNode = document.createElement('div')
        if (id) this.newNode.id = id
        if (klass) this.newNode.className = klass
        if (style) this.newNode.style.cssText = style
        this.parent = parent
        this.options = options
    }
    beforeInsert() {}
    afterInsert() {}
    insert() {
        this.beforeInsert()
        this.el = this.parent.appendChild(this.newNode)
        this.afterInsert()
        return this
    }

    replace(el) {
        if (!this.getElement()) return
        return this.beforeDelete().then(() => {
            this.updateType(el.type)
            this.parent.replaceChild(el.newNode, this.el)
            this.el = this.getElement(el.newNode)
            this.afterInsert()
            return this
        })
    }

    beforeDelete(el = this.el) {
        let timeLeft = 0
        if (this.start) {
            timeLeft = this.options.minDurations[this.type] + this.start - Date.now()
            if (timeLeft < 0) timeLeft = 0
        }

        return new Promise(resolve => {
            setTimeout(() => {
                el.classList.add(eConsts.klass.hiding)
                setTimeout(resolve, this.options.animationDuration)
            }, timeLeft)
        })
    }

    delete(el = this.el) {
        if (!this.getElement(el)) return null
        return this.beforeDelete(el).then(() => {
            el.remove()
            this.afterDelete()
        })
    }
    afterDelete() {}

    getElement(el = this.el) {
        if (!el) return null
        return document.getElementById(el.id)
    }

    addEvent(name, func) {
        this.el.addEventListener(name, func)
    }

    toggleClass(klass) {
        this.el.classList.toggle(klass)
    }
    updateType(type) {
        this.type = type
        this.duration = this.options.duration(this.type)
    }
}
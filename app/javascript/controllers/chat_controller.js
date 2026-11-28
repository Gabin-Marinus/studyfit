import { Controller } from "@hotwired/stimulus"

const FILED_FLAG = "sf:just-filed"
const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)"
const EASE_IN_OUT = "cubic-bezier(0.77, 0, 0.175, 1)"

// The interview: one question card on stage, answers filed into a drawer.
// Sending works exactly as a plain form post; this only adds feedback.
export default class extends Controller {
  static targets = ["question", "body", "writing", "form", "input", "send", "sendLabel",
                    "drawer", "files", "front", "count", "slots", "empty", "cardTemplate"]
  static values = { filed: Number, goal: Number }

  connect() {
    this.sending = false
    this.desktop = window.matchMedia("(min-width: 1024px)")
    this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    this.syncDrawer = this.syncDrawer.bind(this)
    this.desktop.addEventListener("change", this.syncDrawer)
    this.syncDrawer()
    this.resize()
    this.filesTarget.scrollTop = this.filesTarget.scrollHeight

    if (this.consumeFlag()) this.enterQuestion()
    if (window.matchMedia("(hover: hover)").matches) this.inputTarget.focus({ preventScroll: true })
  }

  disconnect() {
    this.desktop.removeEventListener("change", this.syncDrawer)
  }

  // Drawer ------------------------------------------------------------------

  syncDrawer() {
    const open = this.desktop.matches || this.drawerTarget.classList.contains("is-open")
    this.frontTarget.setAttribute("aria-expanded", String(open))
    this.frontTarget.tabIndex = this.desktop.matches ? -1 : 0
  }

  toggleDrawer() {
    if (this.desktop.matches) return
    this.drawerTarget.classList.toggle("is-open")
    this.syncDrawer()
    if (this.drawerTarget.classList.contains("is-open")) {
      this.filesTarget.scrollTop = this.filesTarget.scrollHeight
    }
  }

  get drawerVisible() {
    return this.desktop.matches || this.drawerTarget.classList.contains("is-open")
  }

  // Composer ----------------------------------------------------------------

  keydown(event) {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
      event.preventDefault()
      this.formTarget.requestSubmit()
    }
  }

  resize() {
    const input = this.inputTarget
    input.style.height = "auto"
    input.style.height = `${Math.min(input.scrollHeight, 240)}px`
  }

  submit(event) {
    const text = this.inputTarget.value.trim()
    if (!text || this.sending) {
      event.preventDefault()
      return
    }
    this.sending = true

    const from = this.inputTarget.getBoundingClientRect()
    const card = this.buildCard(text)
    this.fileCard(card, from)
    this.bumpCount()

    // the question steps back while the reply is written
    this.bodyTarget.classList.add("is-pending")
    this.writingTarget.hidden = false

    try { sessionStorage.setItem(FILED_FLAG, "1") } catch {}

    // let Turbo collect the form data before the field is cleared and locked
    setTimeout(() => {
      this.inputTarget.value = ""
      this.resize()
      this.inputTarget.readOnly = true
      this.sendTarget.disabled = true
      this.sendLabelTarget.textContent = "Sending"
    }, 0)
  }

  // Filing ------------------------------------------------------------------

  buildCard(text) {
    const fragment = this.cardTemplateTarget.content.cloneNode(true)
    const card = fragment.firstElementChild
    card.querySelector("[data-slot=label]").textContent = `Card ${String(this.filedValue + 1).padStart(2, "0")}`
    card.querySelector("[data-slot=text]").textContent = text
    return card
  }

  fileCard(card, from) {
    if (this.hasEmptyTarget) this.emptyTarget.remove()
    this.filesTarget.append(card)
    this.filesTarget.scrollTop = this.filesTarget.scrollHeight

    if (this.drawerVisible) {
      // FLIP: start where the answer was typed, land in the drawer
      const to = card.getBoundingClientRect()
      if (this.reduced) {
        card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, easing: "ease" })
        return
      }
      const scale = Math.min(from.width / to.width, 1.6)
      card.style.transformOrigin = "top left"
      card.animate([
        { transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${scale})`, opacity: 0.35 },
        { transform: "translate(0, 0) scale(1)", opacity: 1 }
      ], { duration: 520, easing: EASE_IN_OUT })
    } else {
      // phones: a ghost of the card shrinks into the drawer front
      if (this.reduced) return
      const target = this.frontTarget.getBoundingClientRect()
      const ghost = card.cloneNode(true)
      ghost.classList.add("sf-filecard--ghost")
      Object.assign(ghost.style, {
        left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`
      })
      document.body.append(ghost)
      const dx = target.left + target.width * 0.18 - from.left
      const dy = target.top + target.height / 2 - from.top
      ghost.animate([
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(0.18)`, opacity: 0.2 }
      ], { duration: 480, easing: EASE_IN_OUT, fill: "forwards" }).finished.then(() => ghost.remove())
    }
  }

  bumpCount() {
    this.filedValue += 1
    this.countTarget.textContent = String(this.filedValue).padStart(2, "0")
    const slot = this.slotsTarget.children[this.filedValue - 1]
    if (!slot) return
    slot.classList.add("is-filled")
    if (!this.reduced) {
      slot.animate([{ transform: "translateY(45%)" }, { transform: "translateY(0)" }],
        { duration: 320, delay: this.drawerVisible ? 300 : 380, easing: EASE_OUT, fill: "backwards" })
    }
  }

  // Next question -----------------------------------------------------------

  consumeFlag() {
    try {
      const flagged = sessionStorage.getItem(FILED_FLAG)
      sessionStorage.removeItem(FILED_FLAG)
      return flagged === "1"
    } catch {
      return false
    }
  }

  enterQuestion() {
    const frames = this.reduced
      ? [{ opacity: 0.4 }, { opacity: 1 }]
      : [
          { transform: "translateY(18px) scale(0.985)", opacity: 0.3, filter: "blur(4px)" },
          { transform: "translateY(0) scale(1)", opacity: 1, filter: "blur(0)" }
        ]
    this.questionTarget.animate(frames, { duration: this.reduced ? 200 : 440, easing: EASE_OUT })

    const newest = this.filesTarget.lastElementChild
    if (newest && !this.reduced) {
      newest.animate([{ outline: "2px solid rgba(201, 162, 99, 1)", outlineOffset: "2px" }, { outline: "2px solid rgba(201, 162, 99, 0)", outlineOffset: "2px" }],
        { duration: 900, easing: "ease" })
    }
  }
}

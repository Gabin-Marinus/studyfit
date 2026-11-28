---
name: StudyFit
description: An AI study coach whose plan is filed from your own answers, set as a library card catalogue.
colors:
  drawer-deep: "#0b1d16"
  drawer: "#10261e"
  drawer-raised: "#173329"
  drawer-line: "#2a4a3d"
  on-drawer: "#eef2ec"
  on-drawer-soft: "#a9bdb2"
  card: "#f7f6f1"
  card-shade: "#ebe9e1"
  card-edge: "#dcd9cd"
  ink: "#1a2621"
  ink-soft: "#4e5d56"
  rule-red: "#c23b30"
  rule-blue: "#c3d3e4"
  brass: "#c9a263"
  brass-soft: "#8f7446"
  red: "#c4332b"
  red-deep: "#a62821"
  on-red: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 5.1rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 104"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 104"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.3vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 104"
  question:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.05rem)"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 102"
  plate:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 115"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-strong:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.2
  label:
    fontFamily: "Courier Prime, Courier New, Courier, monospace"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
  entry:
    fontFamily: "Courier Prime, Courier New, Courier, monospace"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  holder: "2px"
  plate: "3px"
  card: "6px"
  tab: "8px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  ruling: "2rem"
  card-head: "3.25rem"
  stack: "2rem"
  section: "clamp(4rem, 10vw, 8rem)"
  container: "82rem"
  reading-column: "46rem"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.card}"
    padding: "1rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.on-red}"
  button-primary-compact:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.card}"
    padding: "0.7rem 1.2rem"
  plate:
    textColor: "{colors.on-drawer}"
    typography: "{typography.plate}"
    rounded: "{rounded.plate}"
    padding: "0.45rem 0.85rem 0.45rem 0.6rem"
  plate-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.drawer-deep}"
  plate-quiet:
    textColor: "{colors.on-drawer-soft}"
    typography: "{typography.plate}"
    rounded: "{rounded.plate}"
  index-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  answer-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "0.55rem 1.15rem 0.6rem"
  composer:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "0.6rem 1.15rem 0.85rem"
  origin-ticket:
    textColor: "{colors.rule-red}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    height: "1.6rem"
    padding: "0 0.4rem"
  origin-ticket-hover:
    backgroundColor: "{colors.rule-red}"
    textColor: "{colors.card}"
  drawer-holder:
    backgroundColor: "{colors.drawer-deep}"
    textColor: "{colors.brass}"
    typography: "{typography.label}"
    rounded: "{rounded.holder}"
    padding: "0.35rem 1rem"
  guide-tab:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.plate}"
    rounded: "{rounded.tab}"
    width: "11rem"
  nav-link:
    textColor: "{colors.on-drawer-soft}"
    typography: "{typography.body-strong}"
  nav-link-hover:
    textColor: "{colors.on-drawer}"
---

# Design System: StudyFit

## Overview

**Creative North Star: "The Library Card Catalogue"**

StudyFit is a reading room after hours. The ground is the deep green of a catalogue drawer's interior; everything the student says is filed on it as an ivory index card with a red header rule and pale blue ruling, typed in a typewriter face. The plan is a card too, and each of its lines carries a small red origin ticket naming the answer card it came from. The system exists to make one idea visible: your plan is filed from your own answers.

The register is calm, warm and tactile without costume. Depth comes from real paper behaviour: cards sit on the drawer with a soft cast shadow, rear cards in a stack read slightly narrower and darker, and motion is damped, like a card sliding into a drawer rather than a UI element animating. Brass is hardware: it labels and frames (the wordmark plate, the drawer holder, the focus ring, text selection), it never shouts. Red is reserved for the one action on a screen and for the card's own red ink.

Density is generous and reading-first. Body copy is Atkinson Hyperlegible at 17px with 1.6 leading and measures held between 34ch and 46ch, because many readers have dyslexia, ADHD or anxiety. The direction explicitly refuses the split SaaS hero with a floating app mockup and three equal step cards.

**Key Characteristics:**
- Dark reading-room green ground; light ivory card stock as the only light surface.
- Index cards are ruled: a 1.5px red header rule, then pale blue lines on a fixed pitch that text sits on.
- Three typefaces with strict jobs: Archivo engraves, Atkinson reads, Courier Prime types.
- Brass for hardware and focus; red for the single primary action and card ink.
- Damped, physical motion; everything collapses to near-instant under reduced motion.

## Colors

A two-material palette: green drawer and ivory card, with brass hardware and red ink as the only accents.

### Primary
- **Catalogue Red** (`red`): the primary action button fill, and only that. One per screen (hero and closing card on home; Send in chat).
- **Pressed Catalogue Red** (`red-deep`): hover state of the primary button.

### Secondary
- **Header-Rule Red** (`rule-red`): the card's own red ink. The 1.5px header rule on every index card, origin tickets, typed example answers, the composer caret, and the outline on a lifted source card.
- **Ruling Blue** (`rule-blue`): the pale horizontal ruling on card stock, drawn on a fixed pitch (2rem by default) that text baselines sit on.

### Tertiary
- **Label Brass** (`brass`): the wordmark plate border and rivet, the drawer label holder, the sender label above coach messages, the focus ring, text selection, and the Turbo progress bar.
- **Tarnished Brass** (`brass-soft`): the 1.5px top rule over each principle on the drawer ground.

### Neutral
- **Drawer Deep** (`drawer-deep`): the darkest green; label-holder fill, selection text, scrollbar track.
- **Reading-Room Green** (`drawer`): the page ground and sticky bar backgrounds. Also the browser `theme-color`.
- **Drawer Front** (`drawer-raised`): the raised drawer front under the hero card stack.
- **Drawer Seam** (`drawer-line`): 1px dividers on the ground (chat bar, footer), quiet plate border, unfilled progress pips, scrollbar thumb.
- **Lamplight** (`on-drawer`): primary text on the ground (headlines, current question).
- **Faded Lamplight** (`on-drawer-soft`): secondary text on the ground (leads, notes, earlier coach messages, nav links).
- **Card Stock** (`card`): every index card, guide card, and the composer.
- **Card Shade / Card Edge** (`card-shade`, `card-edge`): reserved tints of the stock for edges and pressed paper.
- **Typewriter Ink** (`ink`): text on card stock.
- **Faded Ink** (`ink-soft`): typed labels and secondary text on card stock.

### Named Rules
**The Two Materials Rule.** Every surface is either drawer (green ground) or card (ivory stock). There is no third surface colour, no grey panel, no gradient fill.

**The One Red Button Rule.** Catalogue Red fills exactly one action per screen. Everything else that needs emphasis uses brass hardware or card ink, never a second red fill.

**The Brass Is Hardware Rule.** Brass outlines, labels and rings; it does not fill large areas or carry body text. A plate may fill with brass only on hover.

## Typography

**Display Font:** Archivo (variable weight and width; with Helvetica Neue, Arial)
**Body Font:** Atkinson Hyperlegible (400, 700; with Segoe UI, system-ui)
**Label/Mono Font:** Courier Prime (400, 700; with Courier New, Courier)

**Character:** Archivo, set heavy and slightly widened, reads like an engraved drawer label; Atkinson Hyperlegible carries every sentence a student must read; Courier Prime is the typewriter that filled the cards in.

### Hierarchy
- **Display** (Archivo 800, width 104%, clamp 2.6rem to 5.1rem, line-height 0.98, -0.03em): the hero headline only, max 11.5ch, balanced.
- **Headline** (Archivo 800, width 104%, clamp 2rem to 3rem, 1.02, -0.025em): section titles on the ground; the closing card title runs to 3.25rem at 1.12.
- **Title** (Archivo 800, width 104%, 1.5rem to 2rem, 1.1, -0.02em): guide card headings and the plan card title (1.6rem). Principle headings drop to 700 at 1.3rem.
- **Question** (Archivo 600, width 102%, clamp 1.5rem to 2.05rem, 1.22): the current short coach question in chat, which takes the stage.
- **Plate** (Archivo 700 to 800, width 115%, 0.875rem, 0.14em, uppercase): the wordmark plate and guide-card tabs.
- **Body** (Atkinson 400, 1.0625rem, 1.6): all reading text. Leads rise to 1.125rem to 1.3rem. Measures: 34ch to 46ch on home, 40rem for coach messages.
- **Label** (Courier Prime 700, 0.8125rem, 0.06em, uppercase, Faded Ink): typed card labels ("Card 03 · Sharpest", "You", "Your answer"); 0.75rem inside small cards.
- **Entry** (Courier Prime 400, 1.0625rem): typed entries on answer cards and example questions; example answers switch to 700 in Header-Rule Red.

### Named Rules
**The Three Jobs Rule.** Archivo engraves headings and labels-as-hardware, Atkinson carries every sentence meant to be read, Courier Prime only types onto cards (labels and entries). Never set paragraphs in Courier Prime or headings in Atkinson.

**The Typed Label Belongs To A Card Rule.** Uppercase Courier labels name a card or its field. They sit in a card's header band above the red rule (or as the sender line over a coach message), never as a decorative tag above a page section headline.

## Layout

A single centred container of 82rem with a fluid side gutter (`gutter`, 1rem to 3.5rem) carries every home section; the chat narrows to a 46rem reading column. The hero is a 5:6 two-column grid (copy left, card drawer right at about half width), vertically centred within the first viewport (capped at 56rem). Sections breathe with fluid vertical padding (4rem to 8rem). Guide cards stack in one column with 4.25rem between them so each card's tab has room to rise above it; the tab steps a third of the way across the card each time. Principles sit in three columns under brass rules.

Card interiors are governed by the ruling: a header band (`card-head`, about 3.25rem; tuned per card from 2.4rem to 4.1rem) above the red rule, then lines on a fixed pitch (`ruling`, 2rem; 1.85rem to 2.6rem per card). Text line-height matches the pitch so baselines sit on the blue lines.

Chat is a column of turns 2rem apart: coach messages set straight on the ground at left, answers filed as cards tucked right (max 32rem). The top bar and composer are sticky, padded for safe-area insets.

Breakpoints: at 960px the hero, guide bodies and principles collapse to one column; at 560px the hero type drops to 2.4rem, the card stack tightens, guide tabs shrink to 6.5rem, and the composer's keyboard hint hides.

## Elevation & Depth

Depth is physical and shadow-based, always soft and cast downward like paper resting on a drawer floor. The ground itself is flat; only card stock lifts. Within the hero stack, depth is also expressed by scale and brightness: each card further back is about 2.8% narrower and 3.5% darker.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 1px 1px rgba(5,16,12,0.35), 0 14px 28px -14px rgba(3,12,8,0.65)`): every index card and guide card.
- **Plan card** (`box-shadow: 0 1px 1px rgba(5,16,12,0.4), 0 -10px 24px -14px rgba(3,12,8,0.55), 0 30px 50px -24px rgba(3,12,8,0.8)`): the front card of a stack, casting both up onto the cards behind and down onto the drawer.
- **Composer** (`box-shadow: 0 1px 1px rgba(5,16,12,0.4), 0 -6px 30px -10px rgba(3,12,8,0.7)`): the sticky composer card, shadow cast upward over the thread.
- **Drawer front** (`box-shadow: inset 0 1px 0 rgba(238,242,236,0.08), 0 18px 30px -18px rgba(0,0,0,0.8)`): the raised green drawer front.
- **Red action glow** (`box-shadow: 0 1px 0 rgba(255,255,255,0.18) inset, 0 10px 22px -12px rgba(196,51,43,0.9)`): the primary button only.

### Named Rules
**The Paper Rests Rule.** Shadows are soft, negative-spread and fall downward. No hard offset shadows, no glows on the ground except the red button's own.

**The Lift Means Citation Rule.** A card moves up out of its stack only to answer "where did this come from?": hovering or focusing an origin ticket lifts its source card 1.1rem, outlines it in Header-Rule Red and dims the rest.

## Shapes

Gently softened paper corners (`card`, 6px) on every card, the composer and the primary button. Hardware is crisper: plates and tickets at 3px, the drawer holder at 2px. Guide-card tabs round only their top corners (8px) and the first guide card squares its top-left corner where the tab joins it. Borders are 1.5px throughout (plate, ticket, holder, brass rules, red rule) and 1px only for ground dividers. The brass plate carries a single 5px round rivet at its left edge.

## Components

### Buttons
Confident, warm and singular: the red button is the only filled colour block on the ground.
- **Shape:** softened paper corner (6px).
- **Primary:** Catalogue Red with white Atkinson 700 at 1.0625rem, padding 1rem 1.6rem, a trailing 1.1em SVG arrow, and the red action glow.
- **Hover / Focus:** fill deepens to Pressed Catalogue Red over 160ms and the arrow nudges 3px right (hover-capable pointers only); press scales to 0.97; focus shows the 2px brass ring at 3px offset.
- **Compact:** the Send button in the composer (padding 0.7rem 1.2rem, 1rem text).
- **Disabled / sending:** 60% opacity with a progress cursor.

### Index Cards
The system's signature surface.
- **Corner Style:** 6px.
- **Background:** Card Stock with a 1.5px Header-Rule Red line at the header height and Ruling Blue lines on the pitch below, drawn as background gradients so content sits on the lines.
- **Shadow Strategy:** card rest (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** tight top (0.55rem to 1.15rem) so the typed label sits in the header band; 1rem to 1.5rem sides.
- **Variants:** answer card (chat, right-tucked), filed card (hero stack, absolutely stacked with depth scaling), plan card (front of stack, taller head and pitch), closing card (centred CTA), guide card (unruled text half plus a ruled sample half, with a rising tab).

### Inputs / Fields
- **Style:** the composer is itself an index card: typed "Your answer" label in the header band, red rule, and a borderless, backgroundless textarea that carries its own blue ruling (scrolls with content) and a red caret. Placeholder in a mid ink grey.
- **Focus:** the textarea drops its outline; the whole composer card gains a 2px brass ring.
- **Disabled:** read-only text fades to Faded Ink while a reply is pending.

### Navigation
- **Wordmark plate:** brass-bordered label holder, Archivo 700 at 115% width, uppercase, 0.14em tracking, with a brass rivet. On hover it fills with brass and the text and rivet turn Drawer Deep (180ms). A quiet variant uses Drawer Seam for border and rivet in the footer.
- **Nav link:** Atkinson 700 at 0.9375rem in Faded Lamplight; hover brightens to Lamplight and underlines.
- **Chat bar:** sticky, Reading-Room Green with a Drawer Seam bottom line; plate left, "N answers filed" right with a ten-pip progress drawer whose pips fill with Card Stock.

### Origin Ticket
A small stub (min 2.35rem by 1.6rem) with a 1.5px Header-Rule Red border and Courier Prime 700 number, sitting at the end of each plan line. Hover or focus fills it red with card-coloured text and lifts its cited card in the stack. Each ticket carries visually hidden text naming the source answer.

### Drawer Front and Holder
A raised Drawer Front panel overlaps the bottom of the card stack; centred on it, a brass-bordered holder on Drawer Deep labels the example honestly ("Example plan") in Courier Prime 700 brass.

### Coach Message
Set directly on the ground, no bubble: a brass typed sender line, then Atkinson body in Faded Lamplight. The current message brightens to Lamplight; when it is short (under 320 characters) it takes the stage in the Question style.

### Writing Indicator and Alert
Three 0.5rem Faded Lamplight dots that breathe in sequence (1.2s). Errors appear as a 6px-cornered panel with a soft red border over a 12% red wash, a bold title, and a hint telling the student their answer was saved.

### Motion
Two easings: `cubic-bezier(0.22, 1, 0.36, 1)` for state changes and `cubic-bezier(0.16, 1, 0.3, 1)` (damped) for cards. Cards file in from above (stagger 60ms), the plan card rises into place, new chat items drop 0.9rem with weight. Transitions run 160ms to 420ms. Under `prefers-reduced-motion` every animation and transition collapses to 1ms.

## Do's and Don'ts

### Do:
- **Do** put every student answer, plan and input on ivory Card Stock with the red header rule and blue ruling; set text line-height equal to the ruling pitch.
- **Do** keep exactly one Catalogue Red filled action per screen.
- **Do** use brass for hardware only: the wordmark plate, label holders, focus rings (2px, 3px offset), selection and progress.
- **Do** set Courier Prime only for typed card labels and entries, Archivo for engraved headings and plates, Atkinson for everything read.
- **Do** cite answers with origin tickets wherever a plan choice is shown, and lift the cited card on hover and focus.
- **Do** keep body copy at 1.0625rem or larger with measures between 34ch and 46ch.
- **Do** use the damped easing for card movement and honour reduced motion.

### Don't:
- **Don't** build a split SaaS hero with a floating app mockup, or three equal step cards.
- **Don't** introduce a third surface colour, grey panels or gradient fills beyond the card ruling and the composer's fade into the ground.
- **Don't** add a second red filled button or use red for decoration on the ground.
- **Don't** use hard offset shadows or glows; paper shadows are soft and fall downward.
- **Don't** put typed Courier labels above page section headlines as decorative tags.
- **Don't** set paragraphs in Courier Prime or body text in Archivo.
- **Don't** show testimonials, user counts or outcome numbers; proof is the mechanism, with example data labelled as such.

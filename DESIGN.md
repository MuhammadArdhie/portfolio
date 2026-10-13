---
name: "Drafting Mat Scrapbook & Engineering Field Dossier"
description: "Tactile, collage-driven engineer's field desk with polaroid cutouts, washi tape, and typewriter notes"
colors:
  canvas: "#0b0f17"
  surface-polaroid: "#ffffff"
  surface-mat: "#111827"
  surface-blueprint: "#1e3a5f"
  surface-hover: "#172236"
  border: "#1e293b"
  border-hover: "#334155"
  text-primary: "#f8fafc"
  text-secondary: "#cbd5e1"
  text-tertiary: "#94a3b8"
  accent-crimson: "#ef4444"
  accent-blueprint: "#38bdf8"
  tape-amber: "rgba(251, 191, 36, 0.7)"
  tape-cyan: "rgba(56, 189, 248, 0.6)"
  sticky-yellow: "#fef08a"
  sticky-text: "#713f12"
  white: "#ffffff"
typography:
  display:
    fontFamily: "'Besley', Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "'Besley', Georgia, serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Besley', Georgia, serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  typewriter:
    fontFamily: "'Courier Prime', 'Courier New', monospace"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.xs}"
    padding: "10px 22px"
  button-secondary:
    backgroundColor: "{colors.surface-mat}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xs}"
    padding: "10px 22px"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.accent-crimson}"
    rounded: "{rounded.xs}"
    padding: "4px 8px"
---

# Drafting Mat Scrapbook & Engineering Field Dossier

## Overview
A tactile, collage-driven engineering portfolio that models an engineer's physical drafting desk. The canvas is a deep obsidian workbench (`#0b0f17`) upon which authentic physical ephemera are laid out: polaroid-framed architectural specimens, frosted washi tape strips, yellow typewriter sticky notes, and red ink verification stamps.

## Colors
- **Canvas Base (`#0b0f17`)**: Deep industrial drafting desk mat with subtle grid lines.
- **Polaroid Photo Surface (`#ffffff`)**: Pure white photo paper for mounted architectural mockups.
- **Surface Mat (`#111827`)**: Subtly lifted slate panel for technical dossiers and indices.
- **Blueprint Fragment (`#1e3a5f`)**: Deep cyanotype architectural scrap with cyan text (`#38bdf8`).
- **Sticky Note (`#fef08a`)**: Goldenrod memo paper with dark brown typewriter ink (`#713f12`, 10:1 contrast).
- **Text Hierarchy on Canvas**:
  - `text-primary`: `#f8fafc` (16.5:1 ratio)
  - `text-secondary`: `#cbd5e1` (11:1 ratio)
  - `text-tertiary`: `#94a3b8` (8.5:1 ratio)
- **Accents**:
  - `accent-crimson` (`#ef4444`): Rubber ink verification stamps and seal badges.
  - `accent-blueprint` (`#38bdf8`): Drafting guidelines.
  - `tape-amber` (`rgba(251, 191, 36, 0.7)`): Frosted drafting tape.
  - `tape-cyan` (`rgba(56, 189, 248, 0.6)`): Frosted electrical / blueprint tape.

## Typography
- **Display & Headings**: `Besley` — robust antique slab serif (1845 Clarendon revival) offering rich editorial craftsmanship.
- **Typewriter Field Notes**: `Courier Prime` — authentic mechanical typewriter typography for margin annotations and lab notes.
- **Technical & Metrics**: `JetBrains Mono` — mathematical monospaced typeface for code schemas, routes, and tabular numbers.

## Layout & Composition
- **Open Drafting Canvas**: No generic nested cards! Project plates sit directly in flow on the drafting surface.
- Asymmetrical Z-pattern layout with slight physical tilts (`-1.5deg` to `+2deg`) on polaroids and sticky notes.
- Layered collage: Drafting mat &rarr; Tilted polaroid specimen &rarr; Translucent washi tape &rarr; Overlapping pinned sticky note.

## Elevation & Depth
- Diffuse paper drop shadows simulating physical paper layers resting on a desk surface.
- Crisp 1px drafting borders.

## Do's and Don'ts
- **DO**: Treat the page as a physical collage desk spread.
- **DO**: Ensure all text passes WCAG AAA contrast requirements.
- **DON'T**: Do not nest cards inside cards.
- **DON'T**: Do not use thick colored border-left as an AI cliché.
- **DON'T**: Do not use warm cream/beige backgrounds that trigger generic AI defaults.

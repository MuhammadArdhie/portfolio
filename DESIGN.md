---
name: "Tactile Studio Cutting Mat & Engineer's Physical Scrapbook"
description: "Vibrant physical scrapbook workbench on a green cutting mat with Dymo labels, highlighter titles, handwritten margin notes, and taped paper sheets"
colors:
  canvas: "#1E5B4D"
  surface-grid-paper: "#F2F4EE"
  surface-kraft: "#C9A06B"
  surface-polaroid: "#FBFBF7"
  surface-sticky: "#FFE066"
  dymo-black: "#14211C"
  highlight-yellow: "#FFE45C"
  text-light: "#F0F6F1"
  text-dark: "#14211C"
  text-muted: "#3E4E47"
  accent-crimson: "#EF4444"
  tape-pink: "rgba(242, 139, 168, 0.9)"
  tape-amber: "rgba(244, 211, 94, 0.9)"
  tape-cyan: "rgba(124, 195, 232, 0.9)"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  heading:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Bricolage Grotesque', 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  typewriter:
    fontFamily: "'Special Elite', 'Courier New', monospace"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
  handwriting:
    fontFamily: "'Caveat', cursive"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.88rem"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "-0.01em"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "16px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "80px"
components:
  dymo-label:
    backgroundColor: "{colors.dymo-black}"
    textColor: "{colors.surface-polaroid}"
    fontFamily: "{typography.typewriter.fontFamily}"
    rounded: "{rounded.none}"
    padding: "6px 14px"
  button-scrapbook:
    backgroundColor: "{colors.highlight-yellow}"
    textColor: "{colors.dymo-black}"
    fontFamily: "{typography.body.fontFamily}"
    rounded: "{rounded.none}"
    padding: "12px 28px"
    border: "2px solid {colors.dymo-black}"
  sticky-note:
    backgroundColor: "{colors.surface-sticky}"
    textColor: "{colors.dymo-black}"
    fontFamily: "{typography.handwriting.fontFamily}"
    rounded: "{rounded.none}"
    padding: "16px"
---

# Tactile Studio Cutting Mat & Engineer's Physical Scrapbook

## Overview
A tactile, human-crafted engineering portfolio for **Muhammad Ardhie** ([MuhammadArdhie](https://github.com/MuhammadArdhie)). Rather than merely framing images, the physical scrapbook concept permeates the **entire interface—especially typography, headings, labels, tags, and annotations**:
- **Studio Green Cutting Mat (`#1E5B4D`)**: Classic self-healing crafting workbench textured with measurement millimeter and centimeter grids.
- **Dymo Embossed Labels**: Black label strips (`#14211C`) with punchy white typewriter letters (`Special Elite`) identifying sections and categories.
- **Marker Highlighter Titles**: Vivid yellow highlighter strokes (`#FFE45C`) sweeping under and through hero and section titles.
- **Handwritten Marginalia (`Caveat`)**: Engineer's casual margin scribbles, arrows, and observations pinned across the layout.
- **Paper Sheet Dossiers**: Content modules formatted as physical graph paper sheets (`#F2F4EE`) and kraft cardstock (`#C9A06B`) taped to the workbench with translucent washi tape.
- **Tactile Paper Tags**: Skill and stack badges formatted as individual cut paper slips with organic micro-rotations (`-1.5deg`, `+1deg`, `-0.5deg`).

## Real Technical Grounding
- **Laravel Backend Engine**: Real architecture, B-tree indexing, Redis cache-aside invalidation, transactional consistency, sub-40ms response latency ([backendportfolio](https://github.com/MuhammadArdhie/backendportfolio)).
- **React & Node.js Systems**: State boundary isolation, optimistic UI mutations, high-throughput telemetry panels ([Reload Brand Portal](https://github.com/Reload-Brand-Portal-Digital-Archive)).
- **Android Kotlin Mobile**: MVVM/MVI Clean Architecture, Room SQLite disk persistence, offline-first WorkManager background daemon ([MuhammadArdhie](https://github.com/MuhammadArdhie)).
- **Figma Design Systems**: 3-tier token taxonomies (primitive &rarr; semantic &rarr; component), exhaustive 140+ component state matrix.

## Typography Palette
- **Headings & Display**: `Bricolage Grotesque` (bold, quirky, high personality).
- **Typewriter & Dymo Labels**: `Special Elite` (authentic ink-bleed mechanical typewriter).
- **Marginalia & Scribbles**: `Caveat` (warm, natural felt-pen handwriting).
- **Code & Latency Telemetry**: `JetBrains Mono` (precise monospaced code).

## Mechanical Detector Discipline
- WCAG AAA contrast ratios verified across both cutting mat and paper sheets.
- No faux multi-vertex organic clip-paths (strictly geometric and paper borders).
- No wide tracking on body text.
- 100% static zero-framework delivery.

---
name: "Technical Precision & Swiss Monospace Design System"
description: "Authoritative, zero-slop design system for Muhammad Ardhie's software engineering portfolio"
colors:
  canvas: "#0b0f17"
  surface: "#111827"
  surface-hover: "#172236"
  surface-elevated: "#1e293b"
  border: "#1e293b"
  border-hover: "#334155"
  text-primary: "#f8fafc"
  text-secondary: "#cbd5e1"
  text-tertiary: "#94a3b8"
  accent-blue: "#1d4ed8"
  accent-blue-hover: "#1e40af"
  accent-light: "#60a5fa"
  accent-tint: "rgba(59, 130, 246, 0.12)"
  status-active: "#10b981"
  status-active-tint: "rgba(16, 185, 129, 0.15)"
  white: "#ffffff"
typography:
  display:
    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
rounded:
  xs: "2px"
  sm: "6px"
  md: "12px"
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
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  badge:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.accent-blue}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
---

# Technical Precision Design System

## Overview
A purpose-built, high-clarity visual language engineered for Muhammad Ardhie's software engineering portfolio. The design is disciplined, architectural, and grounded in technical rigor. It delivers high information density without visual clutter, prioritizing readable code artifacts, clear structural schemas, and tangible project evidence over decorative superficiality.

## Colors
- **Canvas Base (`#0b0f17`)**: Deep obsidian dark canvas providing maximum focus and battery-friendly OLED contrast.
- **Surface Layer (`#111827`)**: Slightly lifted panel tone for cards, project sections, and navigation bars.
- **Surface Lifted (`#1e293b`)**: Dedicated elevated tone for interactive controls, badges, and code snippets.
- **Border Architecture (`#1e293b` & `#334155`)**: Crisp 1px structural dividers framing data grids without soft messy drop halos.
- **Text Hierarchy**:
  - `text-primary`: `#f8fafc` (high-contrast title and value reading, 16.5:1 ratio).
  - `text-secondary`: `#cbd5e1` (supporting descriptions, technical specs, body paragraphs, 11:1 ratio).
  - `text-tertiary`: `#94a3b8` (metadata, timestamps, architectural notes, 8.5:1 ratio).
- **Functional Semantics**:
  - `accent-blue` (`#1d4ed8`): Primary action triggers meeting WCAG AA 5.9:1 against white text.
  - `status-active` (`#10b981`): Verified production status, live availability indicator.

## Typography
- **Primary & Display**: `Outfit` — distinct geometric sans with high personality and exceptional legibility across screen sizes.
- **Monospace Technical**: `JetBrains Mono` — used strictly where technical discipline is needed: metrics, tech tags, parameters, file trees, and terminal snippets.
- **Reading Measure**: Constrained to 65–75 characters per line for body copy to prevent visual fatigue.
- **Letter Spacing**: Constrained to `-0.025em` to `-0.01em` on headlines. Never exceeding `-0.04em`.

## Layout
- **Page Container**: Max-width of `1180px` centered with fluid responsive gutters (`clamp(1.25rem, 5vw, 2.5rem)`).
- **Grid Discipline**:
  - Asymmetric 12-column engineering grid for case studies (6/6 splits or 7/5 editorial showcases).
  - Single-column linear flow for mobile viewports with tight visual rhythm.
- **Vertical Spacing**: Strict hierarchical rhythm with more breathing room above section titles (`margin-top: 5rem`) than below them (`margin-bottom: 2rem`).

## Elevation & Depth
- **Depth Paradigm**: Single-elevation discipline. We do not stack a 1px border on top of an exaggerated fuzzy drop shadow.
- **Cards & Surfaces**: Clean 1px solid border (`#1e293b`) with clean background surface (`#111827`).
- **Interactive Hover**: Transition subtle border color shift to `#334155` with soft 4px translateY lift. No gratuitous zero-blur neobrutalist block shadows or neon glows.

## Shapes
- **Container Radius**: `12px` to `16px` for structural cards.
- **Control Radius**: `6px` for buttons, input fields, and technical badges.
- **Status Pills**: `9999px` for active availability badges and pill indicators.

## Components
- **Navbar**: Clean horizontal status bar with calm static availability beacon, brand monogram, and page links. Sticky with subtle `backdrop-filter: blur(12px)`.
- **Project Showcase Panels**: Asymmetrical layout pairing technical problem/solution context with an authored SVG schematic or device frame mockup.
- **Tech Stack Matrix**: Logical cluster grouping (Backend/Database, Frontend/Reactive, Mobile Native, Product Design) rather than an unorganized pile of floating icons.
- **Toast Notification**: Snappy bottom-right slide-in acknowledging copied email address (`m.ardhie5325@gmail.com`).
- **Footer Colophon**: Engineering metadata (build mode, hosting environment, accessibility compliance, direct links).

## Do's and Don'ts
- **DO**: Use real technical terminology (MVVM, REST API, Coroutines, Auto-layout, Relational Schema).
- **DO**: Theme browser surfaces: custom styled scrollbars, custom text selection (`::selection`), explicit `:focus-visible` outline.
- **DON'T**: Do not use kicker/eyebrow labels above headings. Let the headings speak for themselves.
- **DON'T**: Do not use cheesy gradient text or purple neon glow cards.
- **DON'T**: Do not use identical card grids of icon + heading + text across the entire page.
- **DON'T**: Do not use emojis in place of an icon system; use authored 2px stroke SVG icons.
- **DON'T**: Do not use decorative pulsing dots for static status indicators; calm static indicators are honest.

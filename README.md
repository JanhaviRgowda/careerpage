# KodNest Premium Build System – Design System

This repository contains a framework-agnostic design system for a premium B2C SaaS experience called **KodNest Premium Build System**. It focuses on calm, intentional, coherent, and confident interfaces with a strict layout and spacing structure.

## Philosophy

- Calm, intentional, coherent, confident
- No gradients, glassmorphism, neon colors, or noisy animations
- Disciplined color, typography, and spacing – one system applied everywhere

## Files

- `index.html` – Demonstration page implementing the global layout:
  - Top Bar
  - Context Header
  - Primary Workspace (70%)
  - Secondary Panel (30%)
  - Proof Footer
- `styles.css` – Design tokens and components:
  - Color system (background, text, accent, success, warning)
  - Typography (serif headings, sans-serif body)
  - Spacing scale (8, 16, 24, 40, 64)
  - Layout primitives, cards, buttons, inputs, banners, proof footer
- `script.js` – Minimal interactions:
  - Copyable prompt box in the secondary panel
  - Proof footer checklist that requires a note or link per checkbox

## Usage

Open `index.html` in a browser to explore the design system. Treat this page as a reference surface when implementing additional product pages:

1. Keep the 4-region structure on every screen.
2. Reuse tokens and component classes from `styles.css`.
3. When adding new states or components, follow the same colors, radii, and motion:
   - Deep red for primary actions
   - Muted success and warning feedback
   - 150–200ms, `ease-in-out` transitions, no bounce or parallax

## Dependencies

This is a static HTML/CSS/JS system and does not require any runtime dependencies or build tools. Any modern browser is sufficient to use and extend it.


---
name: Warm Minimalist Editorial
colors:
  surface: '#fef9f2'
  surface-dim: '#ded9d3'
  surface-bright: '#fef9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ec'
  surface-container: '#f2ede6'
  surface-container-high: '#ece7e1'
  surface-container-highest: '#e7e2db'
  on-surface: '#1d1b17'
  on-surface-variant: '#55433d'
  inverse-surface: '#32302c'
  inverse-on-surface: '#f5f0e9'
  outline: '#88726c'
  outline-variant: '#dbc1b9'
  surface-tint: '#99462a'
  primary: '#99462a'
  on-primary: '#ffffff'
  primary-container: '#d97757'
  on-primary-container: '#541400'
  inverse-primary: '#ffb59e'
  secondary: '#8c4e33'
  on-secondary: '#ffffff'
  secondary-container: '#feae8c'
  on-secondary-container: '#793f25'
  tertiary: '#6f5a4e'
  on-tertiary: '#ffffff'
  tertiary-container: '#a58d80'
  on-tertiary-container: '#37271d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#390b00'
  on-primary-fixed-variant: '#7a2f15'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb596'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#6f371e'
  tertiary-fixed: '#f9ddce'
  tertiary-fixed-dim: '#dcc1b3'
  on-tertiary-fixed: '#27180f'
  on-tertiary-fixed-variant: '#564338'
  background: '#fef9f2'
  on-background: '#1d1b17'
  surface-variant: '#e7e2db'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 80px
---

## Brand & Style

The design system is centered on a warm, ultra-minimalist editorial aesthetic that prioritizes readability and calm. It targets a sophisticated audience that values long-form content and high-quality photography. By blending **Minimalism** with **Material Design 3** tonal logic, the UI achieves a balance between functional utility and literary elegance.

The emotional response should be one of "quiet focus." This is achieved through generous whitespace (breathing room), a warm-skewing color palette that reduces eye strain, and a strict adherence to a geometric grid. Interactions should feel deliberate and soft, avoiding aggressive transitions in favor of subtle opacity shifts and gentle transforms.

## Colors

The palette utilizes a "Warm-White" foundation to move away from the sterile feel of pure hex white. 

- **Primary (#D97757):** Reserved for high-emphasis actions, brand identity markers, and critical states.
- **Secondary (#E89B7A):** Used for active navigation states, category tags, and secondary interactive elements.
- **Surface Tiers:** 
    - `Background`: #F6F1EA provides the base canvas.
    - `Surface-Bright`: #FBF8F4 used for subtle section differentiation or large container backgrounds.
    - `Surface-Container`: #F3D7C8 provides soft contrast for cards, pull quotes, or highlighted metadata blocks.
- **Typography:** Text uses a deep charcoal-brown (#2A2624) instead of pure black to maintain the warmth and reduce contrast harshness.

## Typography

This design system uses **Plus Jakarta Sans** (as a modern, highly legible alternative to Google Sans) to drive the editorial feel. The type hierarchy is strictly enforced to create a clear scan pattern.

- **Headings:** Use Bold (700) weights with slightly tightened letter-spacing for a "masthead" appearance.
- **Navigation/Labels:** Use Medium (500) weights to differentiate from body text without the visual weight of headlines.
- **Body:** Use Regular (400) with a generous line-height (1.6x) to ensure maximum readability in long-form articles.
- **Micro-copy:** Small labels use increased letter-spacing and Medium weights to maintain legibility at reduced sizes.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for editorial content to maintain line-length integrity, while using fluid behavior for galleries and landing pages.

- **Grid:** A 12-column grid on desktop (1120px max-width). 4 columns on mobile.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Whitespace:** Large vertical gaps (`section-gap`) are used between major content blocks to emphasize the "Ultra-minimalist" narrative.
- **Margins:** Desktop uses wide 64px margins to frame content as a focused column, while mobile tightens to 20px to maximize screen real estate.

## Elevation & Depth

Consistent with Material Design 3, this design system avoids heavy shadows in favor of **Tonal Layers**.

- **Level 0:** Main background (#F6F1EA).
- **Level 1:** Cards and surface elements use #F3D7C8 (Surface-Container) with no shadow. 
- **Level 2 (Interactive):** Elements that are hovered or active may use an extremely soft, diffused ambient shadow (8% opacity of #D97757) to suggest lift without breaking the flat editorial aesthetic.
- **Dividers:** Use low-contrast 1px strokes in a slightly darker shade of the background color rather than harsh grays.

## Shapes

The shape language is **Soft**. This keeps the interface approachable while maintaining the structure required for an editorial grid.

- **Standard Components:** Buttons, inputs, and small chips use a 0.25rem (4px) radius.
- **Large Components:** Featured image containers and article cards use a 0.5rem (8px) radius.
- **Full-Bleed:** Large hero sections and footer containers remain sharp (0px) to anchor the layout to the viewport edges.

## Components

- **Buttons:** Primary buttons are filled with #D97757 with white text. Secondary buttons use a #E89B7A outline or tonal fill. Shapes are consistently 4px rounded.
- **Cards:** Use #F3D7C8 backgrounds with 8px corner radii. Content inside cards should have generous internal padding (min 24px) to avoid visual crowding.
- **Input Fields:** Minimalist "flat" style. Background is #FBF8F4 with a bottom-border only, or a very light 1px border. Focus state shifts the border to #D97757.
- **Chips/Tags:** Used for categories. Small caps, Medium weight, with #E89B7A tonal background and #2A2624 text.
- **Lists:** Clean typography with 1px dividers. Use #D97757 for bullet points or numbering to tie back to the primary brand color.
- **Navigation:** Top-tier navigation uses Medium (500) weight with #2A2624. Active links are indicated by a subtle #D97757 underline or a weight shift.
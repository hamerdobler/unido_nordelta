---
name: Lakeside Nikkei Narrative
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#4d463d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#7f766b'
  outline-variant: '#d0c5b9'
  surface-tint: '#6e5b41'
  primary: '#6e5b41'
  on-primary: '#ffffff'
  primary-container: '#b8a183'
  on-primary-container: '#483821'
  inverse-primary: '#dbc3a3'
  secondary: '#526256'
  on-secondary: '#ffffff'
  secondary-container: '#d2e4d5'
  on-secondary-container: '#56675b'
  tertiary: '#6c5c3f'
  on-tertiary: '#ffffff'
  tertiary-container: '#b6a280'
  on-tertiary-container: '#46391e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f9dfbe'
  primary-fixed-dim: '#dbc3a3'
  on-primary-fixed: '#261905'
  on-primary-fixed-variant: '#55442c'
  secondary-fixed: '#d5e7d8'
  secondary-fixed-dim: '#b9cbbd'
  on-secondary-fixed: '#101f16'
  on-secondary-fixed-variant: '#3a4a3f'
  tertiary-fixed: '#f6e0ba'
  tertiary-fixed-dim: '#d9c4a0'
  on-tertiary-fixed: '#251a04'
  on-tertiary-fixed-variant: '#534529'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  title-lg:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

The design system is built upon a **Modern-Rustic Minimalist** aesthetic, specifically tailored for a premium "beach house" dining experience. It balances the precision of Japanese culinary tradition with the organic warmth of Peruvian landscapes. 

The visual narrative avoids the cluttered, high-energy interfaces of mass-market food apps, opting instead for a high-end editorial feel. Key characteristics include:
- **Atmospheric Whitespace:** Generous margins and open layouts to mirror the expansive views of the Nordelta lagoon.
- **Organic Materiality:** UI elements reference physical textures—marble surfaces, light wood grains, and woven wicker.
- **Architectural Precision:** Thin, charcoal-colored strokes (black iron details) provide structure against soft, creamy backgrounds.
- **Sophisticated Calm:** Interactions should feel deliberate and smooth, evoking the rhythmic flow of water.

## Colors

The palette is rooted in a natural, desaturated spectrum that reflects the restaurant's physical environment.

- **Surface & Base:** The primary background is an off-white cream (#F8F6F1), providing a softer, more premium foundation than pure white.
- **Primary Accent (Sand Beige):** Used for key brand moments and active states, derived directly from the logo.
- **Secondary Accent (Lagoon Green):** Reserved for organic highlights, sustainability notes, or subtle call-to-actions, grounding the design in its waterfront location.
- **Background Wood:** Utilized for secondary containers or distinct section breaks to add warmth.
- **Typography & Details:** Soft Charcoal (#2B2620) is used for all text and structural borders to maintain high legibility without the harshness of true black.

## Typography

This design system employs a sophisticated typographic pairing to signal the fusion of cultures.

- **The Serif (Libre Caslon Text):** Used for headlines and display text. It conveys heritage and editorial elegance. Use it for dish names and section titles.
- **The Sans (Archivo Narrow):** A clean, condensed grotesque that matches the logo's utilitarian wordmark. This is used for body copy, menus, and functional labels.
- **Styling Note:** Use uppercase styling with increased letter spacing for labels and sub-headers to create a modern, organized feel.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop to maintain the editorial "magazine" feel, transitioning to a flexible fluid system on mobile.

- **Rhythm:** A base 4px unit governs all spacing.
- **Desktop:** A 12-column grid with wide 64px margins. Content is often offset or centered with significant whitespace to emphasize the "Lakeside" openness.
- **Mobile:** A 4-column grid with 20px margins. 
- **Breathing Room:** Components should never feel cramped. Vertical rhythm is intentionally loose to encourage a slow, "lifestyle" browsing experience.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layers** and **Structural Outlines**.

- **Flat Depth:** Depth is created by layering different neutral tones (e.g., a Wood #D9C4A0 card on a Cream #F8F6F1 background).
- **Ironwork Details:** Elements are separated by thin 1px borders in Soft Charcoal (#2B2620) at low opacity (10-15%), mimicking the restaurant’s black iron fixtures.
- **The Marble Effect:** For high-end cards or modals, a very subtle, high-opacity white inner glow can be used to simulate polished stone surfaces.
- **Zero Elevation:** Do not use drop shadows for buttons or cards; maintain a flat, architectural profile.

## Shapes

The shape language is **Rectilinear and Softened**. 

While the "beach house" aesthetic is organic, the "Japanese" influence demands precision. We use a "Soft" (0.25rem) corner radius for most functional elements like buttons and input fields. Large imagery (portraits of dishes or the lagoon) should remain sharp (0px) to feel like framed art pieces.

## Components

- **Buttons:** Primary buttons use a solid Soft Charcoal background with Cream text, using the "Soft" radius. Secondary buttons are outlined in 1px Charcoal with a "Warm Sand" text color. 
- **Menu Lists:** Use a clean horizontal layout with the Serif font for the dish name and the Sans for the price/description. Use a thin dotted line or simple whitespace for separation—never heavy dividers.
- **Cards:** Cards should be "Ghost" style (transparent background with a 1px Charcoal border) or "Material" style (Light Wood background).
- **Input Fields:** Minimalist design with only a bottom border in Charcoal, or a full border with a Cream background. Labels are always uppercase Archivo Narrow.
- **Chips/Tags:** Used for dietary labels (e.g., "GF", "Vegan"). Use a circular or pill shape with the "Lagoon Green" for text and a very light tint of the same green for the background.
- **Imagery:** All food photography should be high-key, using natural light and featuring marble or wood textures as the backdrop.
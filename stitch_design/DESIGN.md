---
name: Imperial Chai & Co. Design System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d3c3c0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8d8b'
  outline-variant: '#504442'
  surface-tint: '#e3beb8'
  primary: '#e3beb8'
  on-primary: '#422a26'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#745853'
  secondary: '#ffb77a'
  on-secondary: '#4c2700'
  secondary-container: '#d7790d'
  on-secondary-container: '#432100'
  tertiary: '#ffb779'
  on-tertiary: '#4c2700'
  tertiary-container: '#472400'
  on-tertiary-container: '#d08235'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77a'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#ffb779'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6c3a00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  margin-safe: 5vw
  gutter: 32px
  section-gap: 128px
---

## Brand & Style

This design system is a fusion of heritage and high-modernity, capturing the "Monsoon Chai" ritual through a hyper-premium lens. The visual language is deeply immersive, leaning into a **Luxury Editorial** style characterized by cinematic lighting and extreme atmospheric depth. 

The aesthetic leverages **Glassmorphism** to represent the translucency of tea and the steam of a hot brew, while grounding the digital experience in **Tactile Materiality**. It utilizes the physical metaphors of handcrafted clay (Kulhad), polished brass, and organic paper textures. The emotional response is one of warmth, prestige, and sensory indulgence—evoking the feeling of a royal hospitality experience.

## Colors

The palette is rooted in the rich, tonal world of Indian tea culture. 

- **Deep Chai Brown (#3E2723)** serves as the primary canvas, providing a sophisticated alternative to standard blacks.
- **Saffron Gold (#FF9933)** and **Masala Bronze (#CD7F32)** are reserved for "light-source" elements, interactive highlights, and royal accents.
- **Matte Black (#1A1A1A)** is used for deep shadows and extreme contrast grounding.
- **Warm Cream (#FFF9F0)** and **Soft Earthy Beige (#F5F5DC)** provide the tactile "paper" feel for content areas.
- **Forest Tea Green (#2E4632)** is an occasional accent used to represent the origin and raw leaves.

The default mode is **Dark**, emphasizing the "cinematic lighting" where light seems to glow from within the UI.

## Typography

The typography strategy relies on the high-contrast pairing of a classic editorial serif and a clean, spacious geometric sans-serif.

- **Headlines:** Use **Playfair Display**. For large display moments, use generous letter spacing (tracking) and high-contrast weights to evoke a fashion-editorial feel.
- **Body:** Use **Montserrat**. To maintain the "premium" feel, lean into lighter weights (300/400) and increased line height (1.8) to create a sense of breathability and calm.
- **Labels:** Use Montserrat in all-caps with significant letter spacing for navigation, small sub-headers, and metadata.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop, centered within the viewport to maintain an intentional, gallery-like presentation. 

The spacing rhythm is "Atmospheric," meaning we prioritize large gaps between sections to allow the cinematic imagery to breathe. 
- Use a **12-column grid** with wide gutters (32px).
- Content should be framed by generous **5vw safe margins**.
- Vertical rhythm follows an 8px base unit, but key sections are separated by massive "Section Gaps" (128px+) to signify shifts in the sensory narrative.

## Elevation & Depth

Depth is the core of this system's "cinematic" feel. It is achieved through:

1.  **Glassmorphism:** Secondary UI panels use a 40% opacity Deep Chai Brown background with a 20px backdrop blur and a 1px inner border in Cinnamon Amber (#E2725B) at 20% opacity to simulate light catching the edge of glass.
2.  **Cinematic Shadows:** Use multi-layered, ultra-diffused shadows. Instead of neutral greys, shadows should be tinted with #1A1A1A (Matte Black) but with a subtle #3E2723 (Chai Brown) core.
3.  **Amber Glows:** Key interactive elements or "hero" products should have a soft, outer radial glow using Saffron Gold (#FF9933) at low opacity (10-15%) to simulate warmth and heat.
4.  **Organic Overlays:** Texture overlays (subtle paper grain or clay speckle) should be applied to the base background layer to remove digital flatness.

## Shapes

The shape language reflects **Organic Handcrafting**. While the grid is structured, individual components avoid harsh industrial sharpness.

- **Primary Elements:** Use a 0.5rem (8px) radius to maintain a sophisticated modern edge.
- **Feature Cards:** Use a larger 1rem (16px) radius to feel more like smooth clay or polished stones.
- **Buttons:** Use a pill-shape or a soft 1rem radius to contrast against the rigid editorial typography.
- **Curves:** Incorporate custom SVG masks with organic, slightly asymmetric waves to divide sections, mimicking flowing liquid or swirling steam.

## Components

- **Buttons:** 
    - *Primary:* Solid Masala Bronze (#CD7F32) with white or cream text. No border, but a soft amber glow on hover.
    - *Secondary:* Ghost style with a 1px Saffron Gold border and a subtle glass blur background.
- **Input Fields:** Bottom-border only (Editorial style), using Masala Bronze. Focus state triggers a soft Saffron Gold glow beneath the text.
- **Cards:** 
    - *Product Cards:* "Glass" surfaces with deep Chai Brown backgrounds and 20px blurs. The product image should break the container (overflow) to create 3D depth.
- **Chips/Tags:** Small, pill-shaped labels with Soft Earthy Beige backgrounds and Chai Brown text, using the `label-caps` typography.
- **Checkboxes & Radios:** Hand-drawn aesthetic or custom brass-styled circular elements.
- **The "Steaming" Loader:** A custom loading component featuring a minimalist animation of rising steam using Cinnamon Amber gradients.
- **Navigation:** Floating glass bar at the top or bottom of the screen with a high backdrop-blur and a subtle brass-tinted border.
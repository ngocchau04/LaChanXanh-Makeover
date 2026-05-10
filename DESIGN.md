---
name: Lá Chắn Xanh Design System
colors:
  surface: '#f4fbf8'
  surface-dim: '#d4dcd9'
  surface-bright: '#f4fbf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f2'
  surface-container: '#e8efec'
  surface-container-high: '#e2eae7'
  surface-container-highest: '#dde4e1'
  on-surface: '#161d1b'
  on-surface-variant: '#3c4a46'
  inverse-surface: '#2b3230'
  inverse-on-surface: '#ebf2ef'
  outline: '#6b7a76'
  outline-variant: '#bacac5'
  surface-tint: '#006b5f'
  primary: '#006b5f'
  on-primary: '#ffffff'
  primary-container: '#2dd4bf'
  on-primary-container: '#00574d'
  inverse-primary: '#3cddc7'
  secondary: '#006e2f'
  on-secondary: '#ffffff'
  secondary-container: '#6bff8f'
  on-secondary-container: '#007432'
  tertiary: '#8d4f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffac5a'
  on-tertiary-container: '#744000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#62fae3'
  primary-fixed-dim: '#3cddc7'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#6bff8f'
  secondary-fixed-dim: '#4ae176'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005321'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb875'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#f4fbf8'
  on-background: '#161d1b'
  surface-variant: '#dde4e1'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 16px
  margin-mobile: 20px
---

## Brand & Style

The brand personality is protective, educational, and optimistic. The design system targets a youthful Vietnamese audience, aiming to transform a serious subject (drug prevention) into an engaging, non-threatening learning experience. 

The aesthetic follows a **Modern Educational** style, blending professional reliability with approachable friendliness. It utilizes high-quality whitespace to reduce cognitive load and emphasizes a "safe space" through soft edges and organic color transitions. The visual language centers on the "Shield" (Lá Chắn) metaphor—representing strength, community protection, and personal resilience.

## Colors

The palette is rooted in nature and safety.
- **Primary (Mint Green):** Used for primary actions, progress bars, and active states. It evokes freshness and modern tech.
- **Secondary (Vibrant Green):** Used for the "Shield" identity and success states. It represents growth and health.
- **Emergency (Red):** Strictly reserved for SOS buttons, high-risk warnings, and immediate help resources.
- **Highlight (Orange/Yellow):** Used for gamification elements, including stars, achievement badges, and reward streaks.
- **Neutrals:** Pure white is used for the main canvas and card backgrounds to maintain a "clean" feel. Soft slates are used for secondary text to ensure high legibility without the harshness of pure black.

## Typography

This design system utilizes **Be Vietnam Pro** for its excellent Vietnamese diacritic support and contemporary, friendly letterforms. 

The hierarchy is structured to be "Scan-first," with bold headlines that quickly communicate core educational concepts. Body text maintains generous line height (1.5x) to ensure comfortable reading of long-form prevention guides. Display styles are reserved for module titles and personal progress milestones.

## Layout & Spacing

The layout uses a **Fluid Grid** model with a focus on vertical rhythm. 
- **Mobile:** 4-column grid with 20px side margins. Elements typically span the full width or 2 columns for card-based grids.
- **Spacing Logic:** An 8pt spacing system is applied to maintain consistency. 
- **Whitespace:** Generous padding (minimum 24px) is required inside containers to emphasize the "clean and light" aesthetic, preventing the content from feeling claustrophobic or stressful.

## Elevation & Depth (Shadows)

Hierarchy is established through **Ambient Shadows** and tonal layering. 
- **Surface Level 0:** The main background (Pure White or #F8FAFC).
- **Surface Level 1 (Cards):** White cards with a 12% opacity shadow (0px 4px 20px) tinted with the Secondary Green. This makes cards feel like they are floating gently above the base.
- **Interactive Depth:** Buttons utilize a slight "pressed" state where the shadow Y-offset reduces, simulating a physical push. 
- **Backdrop Blurs:** Used sparingly for modal overlays to keep the user focused on the educational content while maintaining context of the app underneath.

## Shapes (Border Radius)

The shape language is defined by **Extreme Roundedness (2xl)**.
- **Primary Containers:** 24px (1.5rem) corner radius for main content cards and lesson modules.
- **Buttons:** 16px (1rem) corner radius to provide a friendly, pill-like appearance without being fully circular.
- **The Shield:** The core icon identity should avoid sharp points, using soft curves at the top and base of the shield symbol to align with the "friendly protector" theme.

## Components

- **Buttons (Nút):** Primary buttons use a Mint-to-Green horizontal gradient. SOS buttons are solid Red with white text, significantly rounded.
- **Cards (Thẻ bài):** Large, white, and spacious. Lesson cards include a Mint Green progress bar at the bottom edge.
- **Iconography:** Use rounded-cap strokes (2px weight). The primary identity is the Green Shield (Lá Chắn), used as a progress marker or "Verified Info" badge.
- **Rewards (Phần thưởng):** Star icons and badges use the vibrant Orange/Yellow palette with a subtle outer glow to simulate "shining."
- **Inputs (Trường nhập liệu):** Use a light gray background with a Mint Green border on focus. All corners follow the 12px-16px roundedness rule.
- **Progress Bars (Tiến trình):** Thick, rounded tracks (8px height) with a Mint Green fill against a soft grey background.

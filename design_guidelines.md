# Design Guidelines: TwoClicks Media

## Design Philosophy
**Brand Personality:** Bold, Dark, Data-Driven, Conversion-Obsessed
- Dark-first design with high contrast
- Aggressive, confident messaging ("Stop Guessing. Start Scaling.")
- Data visualization and metrics as social proof
- Green accent for CTAs, highlights, and data emphasis

## Color System

### Primary Palette (Dark-First)
- **Deep Black:** #0A0A0A (primary background)
- **Charcoal:** #111111 (card backgrounds, secondary surfaces)
- **Light sections:** #F5F5F5 (alternating light sections for contrast)

### Secondary Neutrals
- **Border Gray:** #1F1F1F (borders, dividers)
- **Muted Text:** #888888 (secondary text, captions)
- **White:** #FFFFFF (primary text on dark)

### Accent Colors
- **Conversion Green:** #3EE98A (PRIMARY ACCENT - CTAs, gradient text, metrics, charts)
  - Use for: Headline gradients, buttons, data highlights, active states
  - More prominent than before - this is the brand signature color
- **Green Glow:** rgba(62, 233, 138, 0.1) for subtle backgrounds

## Typography

### Primary Font: Inter
- **Hero Headlines:** Weight 700, large sizes (48-72px), gradient text effect
- **Section Headlines:** Weight 600-700, 32-40px
- **Body:** Weight 400-500, 16-18px, line-height 1.6
- **Data/Stats:** Weight 700, often in green

### Gradient Text Effect
Apply to key headlines using:
```css
background: linear-gradient(135deg, #3EE98A, #ffffff);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## Layout & Spacing

### Section Pattern
- Alternating dark/light sections for visual rhythm
- Dark sections: Deep black background
- Light sections: Off-white/cream background
- Cards with subtle borders, dark backgrounds

### Container Strategy
- Full-width sections with inner max-w-7xl
- Generous padding: py-20 to py-32

## Component Design

### Hero Section
- Dark background with subtle gradient glow
- Green gradient headline text ("Stop Guessing. Start Scaling.")
- Tagline below in muted text
- Two CTAs: Primary (green) + Secondary (outline)
- Partner/client logos strip below

### Stats/Metrics Display
- Large green numbers
- Bar charts with green bars
- Comparison tables with green checkmarks

### Cards (Feature Cards)
- Dark background (#111111)
- Subtle border (#1F1F1F)
- Icon with green accent
- Clean typography

### Comparison Table
- "TwoClicks vs Others" format
- Green checkmarks for TwoClicks
- Gray X marks for competitors
- Clear visual hierarchy

### Process Steps
- Numbered circles (1, 2, 3, 4)
- Green accent on numbers
- Step title + description
- Horizontal or vertical layout

### CTAs
- **Primary:** Solid green background (#3EE98A), dark text
- **Secondary:** Outline with green border or ghost
- **Sticky header CTA:** Always visible

## Section Types

### Dark Sections
- Background: #0A0A0A
- Text: White primary, gray secondary
- Cards: #111111 with border

### Light Sections  
- Background: #F5F5F5
- Text: Dark primary, gray secondary
- Cards: White with subtle shadow

## Data Visualization

### Bar Charts
- Green bars on dark background
- Axis labels in muted gray
- Clean, minimal design

### Metrics Display
- Large percentage/number in green
- Supporting text in white/gray
- Often with upward arrow icons

### Before/After Comparisons
- Side-by-side or overlay format
- Clear labels and metrics
- Green for improvements

## Animation Guidelines
- Subtle fade-in on scroll
- No aggressive animations
- Smooth hover transitions on cards
- Green glow effects on hover for CTAs

## Key Design Principles
1. **Dark-first:** Default to dark backgrounds, light sections for contrast
2. **Green as signature:** Use generously for data, CTAs, gradients
3. **Data-driven proof:** Show metrics, charts, comparisons
4. **Aggressive confidence:** Bold claims backed by numbers
5. **High contrast:** White text on dark, clear hierarchy

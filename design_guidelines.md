# Design Guidelines for Rehan's Portfolio Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio sites like Stripe's developer pages and Linear's product site, with emphasis on gradient effects, glassmorphism, and smooth animations. The design prioritizes visual impact while maintaining professional credibility.

## Core Design Principles
1. **Bold Visual Identity**: Strong use of gradient effects and glassmorphism to create depth
2. **Kinetic Energy**: Subtle animations that convey dynamism without distraction
3. **Professional Polish**: Clean layouts balanced with creative flair
4. **Interactive Engagement**: Cursor-responsive elements and smooth section transitions

---

## Typography System

### Font Hierarchy
- **Primary Headings (H1)**: 3.75rem (60px) / 4.5rem (72px) desktop, bold weight, tight leading
- **Section Headings (H2)**: 3rem (48px), bold weight, gradient text treatment
- **Subsection Headings (H3)**: 1.5rem (24px), bold weight
- **Body Large**: 1.25rem (20px), regular weight for hero descriptions
- **Body Regular**: 1rem (16px), regular weight, relaxed leading (1.625)
- **Small Text**: 0.875rem (14px) for metadata and secondary information

### Text Treatments
- Apply gradient text effects to primary headings and key phrases
- Use semi-transparent text (opacity 0.7-0.9) for secondary content
- Maintain high contrast for body text readability

---

## Layout System

### Spacing Primitives
Use Tailwind spacing units: **4, 6, 8, 12, 16, 32**
- Micro spacing: 4 units (1rem) - between related elements
- Component padding: 8 units (2rem) - card interiors
- Section spacing: 32 units (8rem) vertical between major sections
- Container max-width: 7xl (1280px) for full sections, 6xl (1152px) for content sections

### Grid Structure
- **Two-column layouts** for hero and content-heavy sections
- **Three-column grids** for skills and feature showcases
- **Four-column grids** for icon/stat displays
- Mobile: Always collapse to single column
- Tablet: Maximum 2 columns
- Gaps: 8 units for cards, 12 units for major grid items

---

## Component Library

### Navigation Bar
- Fixed position, full-width with backdrop blur effect
- Height: 80px (py-4 with padding)
- Horizontal navigation items with underline hover animation
- Logo: Text-based with gradient treatment
- Border: Subtle bottom border with semi-transparent treatment

### Hero Section
**Layout**: Two-column split (text left, visual right on desktop)
- Minimum height: Full viewport (min-h-screen)
- Contains: Greeting text, name with gradient, professional title, description paragraph, CTA button group
- **Profile Visual**: 320px circular frame with dashed rotating border ring (384px)
- **Floating Icons**: Four 64px circular badges positioned absolutely around profile, each with staggered float animation
- **CTA Buttons**: Primary gradient-filled, secondary outline style, both rounded-full, px-8 py-3
- **Scroll Indicator**: Chevron icon at bottom center with bounce animation

### Card Components (Glassmorphism Style)
- Background: Semi-transparent with backdrop blur
- Border: 1px subtle border with enhanced hover state
- Border radius: 2xl (1rem)
- Padding: 8 units (2rem) interior
- Hover effects: Increase border opacity, add subtle shadow
- Icon treatment: 32px icons in brand accent, mb-4 spacing

### Section Containers
- Full-width with max-w-6xl or max-w-7xl inner container
- Vertical padding: py-32 (8rem) for major sections
- Section headings: Centered, mb-16, gradient text treatment

### Skill Lists
- Bullet style: Small circular indicators (w-2 h-2 rounded-full)
- List items: Flex row with gap-3, text left-aligned
- Spacing: space-y-3 between items

### Projects Section
- Grid layout: 2 columns desktop, 1 column mobile
- Project cards: Same glassmorphism treatment as other cards
- Include: Project icon, title, description, tech tags, link icon

### Contact Section
- Center-aligned layout
- Contact methods displayed as icon + text combinations
- Social icons: Clickable with hover lift effect
- Spacing: gap-6 between contact items

---

## Interactive Elements

### Animations & Transitions
**Sparingly Used**:
- Page load: Subtle fade-in for hero content
- Scroll indicator: Gentle bounce animation
- Floating icons: Slow vertical float with staggered delays (0.5s, 1s, 1.5s intervals)
- Background orbs: Very slow pulse animation (3-4s duration)
- Rotating border: Extremely slow spin (spin-slow class, ~20s)

**On Interaction**:
- Navigation underline: Width expansion from 0 to full (300ms)
- Buttons: Scale transform (1.05) with shadow enhancement on hover
- Cards: Border opacity change and shadow addition (300ms transition)

### Cursor Effects
- Custom cursor glow: 384px radial gradient that follows mouse
- Glow intensity: 15% opacity, very soft falloff
- Movement: Smooth with 100ms transition lag

### Background Treatment
- Fixed position overlay with three large gradient orbs
- Orbs: 384px diameter, positioned off-canvas partially
- Blur: Extremely heavy (blur-3xl)
- Blend mode: Multiply for depth
- Opacity: 20% maximum
- Animation: Staggered pulse at 1s intervals

---

## Images

**Hero Section Image**: 
- Profile placeholder (can be replaced with professional headshot)
- Format: Circular crop, 320x320px minimum
- Treatment: Gradient overlay (orange to red, 20% opacity)
- Border: 4px semi-transparent accent border with outer glow

**No additional images required** - The design relies on iconography and gradient treatments for visual interest.

---

## Accessibility Considerations
- Maintain WCAG AA contrast ratios for all body text
- Ensure interactive elements have minimum 44x44px touch targets
- Smooth scroll behavior with reduce-motion media query fallback
- Keyboard navigation support for all interactive elements
- Semantic HTML structure with proper heading hierarchy

---

## Responsive Behavior
- **Mobile (< 768px)**: Single column, reduced heading sizes (scale down by ~40%), stack CTA buttons vertically, hide floating decorative icons
- **Tablet (768px - 1024px)**: Two-column maximum, adjust padding to py-20
- **Desktop (> 1024px)**: Full multi-column layouts, maximum decorative effects, generous whitespace
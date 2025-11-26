Updated Plan

Final Color Scheme
Dark Mode (Default):

Background: bg-gray-900 (almost black)
Surface: bg-gray-800 (cards, sections)
Primary: bg-green-500 / text-green-400 (CTAs, accents)
Text: text-gray-100 (primary text)
Text Secondary: text-gray-400
Borders: border-gray-700

Light Mode:

Background: bg-gray-50 (soft white)
Surface: bg-white (cards, sections)
Primary: bg-green-600 / text-green-600 (CTAs, accents)
Text: text-gray-900 (primary text)
Text Secondary: text-gray-600
Borders: border-gray-200

Accent Colors:

Success/Highlight: green-500/600
Hover states: Slightly lighter/darker green
Shadows: Subtle green tint on hover

Revised Structure with CSS Files
src/
├── components/
│ ├── layout/
│ │ ├── Navbar.tsx
│ │ ├── Navbar.css
│ │ ├── Footer.tsx
│ │ └── Footer.css
│ ├── home/
│ │ ├── Hero.tsx
│ │ └── Hero.css
│ └── ui/
│ ├── ProgramCard.tsx
│ ├── ProgramCard.css
│ ├── CoachCard.tsx
│ ├── CoachCard.css
│ ├── PricingCard.tsx
│ └── PricingCard.css
├── pages/
│ ├── Home.tsx
│ ├── Programs.tsx
│ ├── Programs.css
│ ├── Coaches.tsx
│ ├── Coaches.css
│ ├── Membership.tsx
│ ├── Membership.css
│ ├── Contact.tsx
│ └── Contact.css
├── styles/
│ └── globals.css // Global styles, animations, utilities
├── store/
│ └── useUIStore.ts
├── data/
│ ├── programs.ts
│ ├── coaches.ts
│ └── memberships.ts
└── router/
└── index.tsx

CSS Architecture
globals.css - Global Utilities
css/_ CSS Custom Properties for theming _/
/_ Smooth transitions _/
/_ Reusable animations (fade-in, slide-up) _/
/_ Utility classes for consistent spacing _/
Component CSS Files - Scoped Styles
css/_ BEM methodology for class naming _/
/_ Example: .navbar, .navbar**link, .navbar**button--primary _/
/_ Keeps components clean and maintainable _/

Best Practices I'll Follow

1. Component Structure
   typescript// Clean imports
   import { Link } from 'react-router-dom';
   import './ComponentName.css';

// Interface/Type definitions at top
interface Props {
// ...
}

// Component function
export default function ComponentName({ props }: Props) {
// Hooks at top
// Event handlers
// Render logic

return (
<div className="component-name">
{/_ Clean JSX _/}
</div>
);
} 2. CSS Organization
css/_ Component base styles _/
.component-name { }

/_ Component variants _/
.component-name--variant { }

/_ Component children (BEM) _/
.component-name\_\_element { }

/_ Responsive styles at bottom _/
@media (min-width: 768px) { } 3. Code Quality

✅ Single Responsibility Principle
✅ DRY (Don't Repeat Yourself)
✅ Semantic HTML
✅ Accessible (ARIA labels where needed)
✅ TypeScript strict types
✅ Consistent naming conventions
✅ Clean component separation

4. Mock Data
   typescript// Obvious placeholders
   name: "Trainer Name #1"
   description: "Lorem ipsum placeholder text..."
   price: 99 // Round numbers

Implementation Order
Phase 1: Foundation

globals.css - Theme variables, animations
useUIStore.ts - Dark mode + UI state
App.tsx - Layout wrapper with theme

Phase 2: Layout

Navbar.tsx + Navbar.css
Footer.tsx + Footer.css

Phase 3: Home Page

Hero.tsx + Hero.css
Home.tsx - Assemble hero

Phase 4: UI Components

ProgramCard.tsx + ProgramCard.css
CoachCard.tsx + CoachCard.css
PricingCard.tsx + PricingCard.css

Phase 5: Pages + Data

Mock data files (programs.ts, coaches.ts, memberships.ts)
Programs.tsx + Programs.css
Coaches.tsx + Coaches.css
Membership.tsx + Membership.css
Contact.tsx + Contact.css

Phase 6: Router

Update router/index.tsx with all routes
Update index.html title

Key Features
Must-Haves (This Round):

Dark mode default with toggle
Responsive navigation with mobile menu
Hero section with CTAs
Programs page (6 cards)
Coaches page (4-6 cards)
Membership pricing (3-4 tiers)
Contact form (non-functional)
Professional footer
Smooth CSS animations
Fully responsive design

Nice-to-Haves (Next Round):

Testimonials carousel
Membership comparison table
Gallery page
Workout program demo UI

Visual Polish

✨ Fade-in animations on page load
✨ Hover effects on all interactive elements
✨ Smooth color transitions for dark mode
✨ Card hover lift effects
✨ Green accent glows on CTAs
✨ Mobile-first responsive breakpoints

Clean Code Standards
TypeScript:

Strict types, no any
Interface over type when possible
Explicit return types on functions

CSS:

BEM naming convention
Mobile-first media queries
Logical property grouping
Comments for complex sections

React:

Functional components only
Custom hooks for reusable logic
Props destructuring
Early returns for conditionals

Ready to Build!
This plan gives you:

🎨 Clean, separated concerns (CSS files per component)
🏗️ Scalable architecture
🎯 Production-like simulation
🧹 Best practices throughout
🚀 Professional, client-ready demo

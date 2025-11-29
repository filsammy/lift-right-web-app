# LiftRight — Frontend MVP Plan

**Goal:** Create a fully navigable, visually polished demo so the client can see what the final app will feel like — without backend functionality yet.

---

## Project Structure Overview

    src/
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx            // Sticky nav with logo & links
    │   │   └── Footer.tsx            // Contact info, hours, socials
    │   ├── home/
    │   │   ├── Hero.tsx              // Main landing hero section
    │   │   └── Testimonials.tsx      // Optional testimonials carousel
    │   └── ui/
    │       ├── ProgramCard.tsx       // Reusable card for programs
    │       ├── CoachCard.tsx         // Reusable card for trainers
    │       └── PricingCard.tsx       // Reusable card for memberships
    ├── pages/
    │   ├── Home.tsx                  // Landing page (Hero + sections)
    │   ├── Programs.tsx              // Services/programs grid
    │   ├── Coaches.tsx               // Trainers showcase
    │   ├── Membership.tsx            // Pricing tiers
    │   └── Contact.tsx               // Contact form + map
    ├── store/
    │   └── useUIStore.ts             // Zustand: dark mode, UI state
    ├── data/
    │   ├── programs.ts               // Mock program data
    │   ├── coaches.ts                // Mock trainer data
    │   └── memberships.ts            // Mock pricing data
    └── router/
        └── index.tsx                 // Updated routes

---

## MUST-HAVE MVP FEATURES (Frontend Only)

### 1. Landing Page (Hero Section)
A strong, modern, animated hero section featuring:

- **Gym name:** `LiftRight`  
- **Core tagline:** "Train Smart. Lift Right."  
- Gym highlight image or looped video (optional)  
- CTA buttons (e.g., View Memberships, Explore Programs)

➡ *This is the most important page for the demo.*

---

### 2. Navigation Bar
A clean, sticky navigation bar with:

- Logo  
- Links: Home, Programs, Coaches / Trainers, Memberships, Contact  
- **"Join Now"** highlighted button

---

### 3. Footer
Footer should include:

- Address  
- Operating hours  
- Contact number  
- Email  
- Social links  
- Copyright

Adds immediate legitimacy and professionalism.

---

### 4. Programs / Services Page
A page showcasing what the gym offers (use cards with icons and short descriptions):

- Strength Training  
- Weight Loss  
- Group Classes  
- Personal Training  
- Powerlifting  
- Functional Fitness

Use placeholder icons/images and short copy for each card.

---

### 5. Coaches / Trainers Page
Display trainer profiles with:

- Photo (placeholder)  
- Specialization  
- Years of experience  
- Short bio

Use mock data (JSON or Zustand store) and placeholder images.

---

### 6. Membership Pricing Page
Pricing table/cards with 3–4 tiers (non-functional CTAs):

- Basic  
- Standard  
- Premium  
- VIP / Personal Training Access

Each card should show:

- Price  
- Key features / perks  
- CTA button (e.g., "Select Plan") — UI only

---

### 7. Contact Page
Simple contact UI with:

- Name input  
- Email input  
- Message textarea  
- Submit button (non-functional)

Optional: Google Maps embed, address, hours.

---

### 8. Scroll Animations / Micro-interactions
Polish with:

- Basic CSS transitions (hover, focus)  
- Framer Motion for entrance/scroll animations (optional)  
- Micro-interactions for buttons, cards, nav link active states

---

## NICE-TO-HAVE EXTRAS (Optional but Impressive)

Add any of these to elevate the MVP:

- **Membership Comparison Table:** side-by-side features grid.  
- **Testimonials Section:** carousel or static cards.  
- **Gallery Page:** grid of facility images (placeholder).  
- **Workout Program Demo UI:** visual-only dashboard with Day 1/Day 2 program cards.  
- **Light/Dark Mode Toggle:** easy with Zustand + Tailwind; small feature, big perceived value.

---

## Internal Structure Suggestions

### Zustand Usage (Frontend Only)
Use a small global store for UI bits:

- dark mode toggle  
- active nav state  
- selected membership plan  
- toast / modal state

Keep it tiny — UI only, no auth or backend logic.

### React Router Structure
Minimum route set:

- `/` → Home  
- `/programs` → Programs  
- `/coaches` → Coaches  
- `/membership` → Membership  
- `/contact` → Contact

Use route-based code splitting for faster demo loads.

---

## Visual / Design Notes (Quick)
- Tailwind CSS for fast styling.  
- Use a consistent color system: primary (accent), neutral, success, danger.  
- Use large hero typography and bold CTAs.  
- Images: use royalty-free placeholders (Unsplash, Pexels) during prototyping.  
- Icons: Heroicons / Tabler icons for program & feature cards.

---

## Mock Data Guidance
Create small mock files under `src/data/`:

- `programs.ts` — array of `{ id, title, category, shortDesc, icon }`  
- `coaches.ts` — array of `{ id, name, specialty, years, avatar, bio }`  
- `memberships.ts` — array of `{ id, name, price, features[] }`

These keep components decoupled and make swapping to a real API easy later.

---

## What Your Client Will Experience
With this MVP the client will be able to:

- Browse gym offerings visually  
- See the brand identity and tone  
- Navigate pages like a real product  
- Understand membership tiers and pricing visually  
- Preview trainers and trust signals

**In short:** a polished, realistic prototype that feels almost production-ready — ideal for user feedback and stakeholder sign-off.

---

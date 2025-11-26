🚀 LiftRight — Frontend MVP Plan

Goal: Create a fully navigable, visually polished demo so the client can see what the final app will feel like — without backend functionality yet.

Project Structure Overview

src/
├── components/
│ ├── layout/
│ │ ├── Navbar.tsx // Sticky nav with logo & links
│ │ └── Footer.tsx // Contact info, hours, socials
│ ├── home/
│ │ ├── Hero.tsx // Main landing hero section
│ │ └── Testimonials.tsx // Optional testimonials carousel
│ └── ui/
│ ├── ProgramCard.tsx // Reusable card for programs
│ ├── CoachCard.tsx // Reusable card for trainers
│ └── PricingCard.tsx // Reusable card for memberships
├── pages/
│ ├── Home.tsx // Landing page (Hero + sections)
│ ├── Programs.tsx // Services/programs grid
│ ├── Coaches.tsx // Trainers showcase
│ ├── Membership.tsx // Pricing tiers
│ └── Contact.tsx // Contact form + map
├── store/
│ └── useUIStore.ts // Zustand: dark mode, UI state
├── data/
│ ├── programs.ts // Mock program data
│ ├── coaches.ts // Mock trainer data
│ └── memberships.ts // Mock pricing data
└── router/
└── index.tsx // Updated routes

✅ MUST-HAVE MVP FEATURES (Frontend Only)

These are the minimum components needed to impress the client and clearly show the product vision.

1. Landing Page (Hero Section)

A strong, modern, animated hero section featuring:

Gym name: “LiftRight”

Core tagline: “Train Smart. Lift Right.”

Gym highlight image or looped video (optional)

CTA buttons (e.g., View Memberships, Explore Programs)

➡ This is the most important page for the demo.

2. Navigation Bar

A clean, sticky navigation bar with:

Logo

Links:

Home

Programs

Coaches / Trainers

Memberships

Contact

“Join Now” highlighted button

3. Footer

Footer should include:

Address

Operating hours

Contact number

Email

Social links

Copyright

Adds immediate legitimacy and professionalism.

4. Programs / Services Page

A page showcasing what the gym offers:

Strength Training

Weight Loss

Group Classes

Personal Training

Powerlifting

Functional Fitness

Use cards with icons and short descriptions.

5. Coaches / Trainers Page

Display:

Trainer photos

Specialization

Experience

Short description

Great for trust-building.
Use placeholder images and mock data (Zustand or simple JSON).

6. Membership Pricing Page

Pricing table with 3–4 tiers:

Basic

Standard

Premium

VIP / Personal Training Access

Each card includes:

Price

Features

CTA button (non-functional for MVP)

7. Contact Page

Simple UI for:

Name

Email

Message

Submit button (non-functional)

Optional:

Google Maps embed

Gym address + hours

8. Scroll Animations / Micro-interactions

Use basic CSS transitions or Framer Motion to create a polished, modern feel.

⭐ NICE-TO-HAVE EXTRAS (Optional but Impressive)

If you want to elevate the MVP:

A. Membership Comparison Table

Side-by-side comparison chart — clients love this.

B. Testimonials Section

Carousel or static cards with (placeholder) member feedback.

C. Gallery Page

A grid of gym facility images.

D. Workout Program Demo UI

A “sample dashboard” featuring mock workout program cards, e.g.:

Day 1: Chest & Triceps

Day 2: Legs

Day 3: Back & Biceps

Purely visual demo.

E. Light/Dark Mode Toggle

Very easy with Zustand + Tailwind.
Small feature, huge perceived value.

🔧 Internal Structure Suggestions

To keep the project clean and backend-ready:

Zustand Usage (Frontend Only)

Global UI state

Dark mode toggle

Active navbar state

Selected membership plan

React Router Structure

Minimum routing:

/
|-- /programs
|-- /coaches
|-- /membership
|-- /contact

🎯 What Your Client Will Experience

With this MVP, the client will be able to:

Browse gym offerings

See the brand identity

Understand app structure

Visualize memberships & pricing

Preview trainers

Navigate the site like a real product

In short: a polished, realistic prototype that feels almost production-ready.

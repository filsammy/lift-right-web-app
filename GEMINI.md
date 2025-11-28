# Project: LiftRight Frontend

This document provides a comprehensive overview of the LiftRight frontend codebase for future development and maintenance.

## Project Overview

LiftRight is a modern, responsive web application for a gym, built as a frontend MVP to showcase the final app's look and feel without backend functionality.

**Key Technologies:**

*   **Framework:** React
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS with a component-based CSS architecture
*   **State Management:** Zustand
*   **Routing:** React Router

**Architecture:**

The project follows a component-based architecture with a clear separation of concerns.

*   `src/components`: Reusable UI components, categorized into `layout`, `home`, and `ui`.
*   `src/pages`: Top-level page components corresponding to the application's routes.
*   `src/router`: Defines the application's routes using React Router.
*   `src/store`: Global state management using Zustand.
*   `src/data`: Mock data for programs, coaches, and memberships.
*   `src/styles`: Global styles, animations, and utilities.

## Building and Running

### Prerequisites

*   Node.js and npm (or a compatible package manager)

### Installation

```bash
npm install
```

### Development

To start the development server with hot-reloading:

```bash
npm run dev
```

### Build

To build the application for production:

```bash
npm run build
```

This will create a `dist` folder with the optimized and minified assets.

### Lint

To lint the codebase for potential errors and style issues:

```bash
npm run lint
```

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Development Conventions

### CSS

*   **BEM Methodology:** The project uses the BEM (Block, Element, Modifier) naming convention for CSS classes to maintain a clean and scalable stylesheet.
*   **Component-Scoped CSS:** Each component has its own corresponding CSS file for scoped styling.
*   **Global Styles:** Global styles, animations, and utilities are defined in `src/styles/global.css`.

### Theming

The application supports both light and dark modes, controlled by a Zustand store. The color scheme is defined in `README_plan.md` and should be implemented using CSS custom properties for easy theme switching.

### State Management

Global UI state, such as the dark mode toggle and active navbar state, is managed using Zustand in `src/store/useUIStore.ts`.

### Coding Style

*   **TypeScript:** The project uses strict TypeScript with a preference for interfaces over types.
*   **React:** Functional components are used exclusively, with a focus on clean code and single responsibility.
*   **Best Practices:** The codebase aims to follow best practices such as semantic HTML, accessibility (ARIA labels), and consistent naming conventions.

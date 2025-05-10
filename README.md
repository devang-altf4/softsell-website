# SoftSell Prototype

## Features Implemented
- Modern web application built with Next.js 15 and React 19
- Modular UI components using Radix UI primitives and custom components (e.g., Dialog, Command Palette, Carousel, Chart, Form, etc.)
- Responsive design with Tailwind CSS and utility-first styling
- Theme support via next-themes
- Form handling with React Hook Form and Zod validation
- Data visualization with Recharts
- Carousel functionality with Embla Carousel
- Accessible UI patterns (dialogs, tooltips, accordions, etc.)
- Animations with Framer Motion and tailwindcss-animate
- TypeScript for type safety
- Linting and formatting scripts

## Main Design Choices
- **Next.js**: Chosen for its hybrid static & server rendering, routing, and scalability.
- **Radix UI**: Provides accessible, unstyled primitives for building custom UI components.
- **Tailwind CSS**: Enables rapid, consistent, and responsive styling.
- **Component-Driven Architecture**: UI is broken down into reusable, isolated components for maintainability and scalability.
- **TypeScript**: Ensures type safety and better developer experience.
- **Form & Validation**: React Hook Form and Zod for robust, scalable forms.
- **Data Visualization**: Recharts for easy-to-use, customizable charts.
- **Accessibility**: Focus on keyboard navigation and ARIA attributes via Radix and best practices.

## Project Structure
- `/app`: Application entry, layouts, and pages
- `/components`: Reusable UI and feature components
- `/components/ui`: Atomic UI primitives (dialog, command, button, etc.)
- `/hooks` and `/lib`: Custom hooks and utility functions
- `/public`: Static assets
- `/styles`: Global and component styles

## Time Spent
- **Initial setup (Next.js, Tailwind, TypeScript, config):** ~1 hour
- **UI component development:** ~2-3 hours
- **Feature integration (forms, charts, carousel, theming):** ~3 hours
- **Testing, polish, and documentation:** ~1 hour
- **Ai chatbot server is down so hardcode if i am selected ill add it with premium**
- **Total:** ~8-9 hours

## Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

---


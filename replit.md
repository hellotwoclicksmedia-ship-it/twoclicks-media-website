# TwoClicks Media - Shopify CRO Agency Website

## Overview

TwoClicks is a marketing website for a Shopify conversion rate optimization (CRO) agency targeting DTC (direct-to-consumer) founders. The site showcases services, case studies, retainer offerings, and a learning hub with educational content. The primary conversion goal is driving audit requests and retainer inquiries through strategically placed CTAs.

The application follows a modern full-stack architecture with a React frontend, Express backend, and in-memory storage for the MVP.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state, React Context for theme
- **Styling**: Tailwind CSS with CSS custom properties for theming (dark/light mode support)
- **UI Components**: shadcn/ui component library (Radix UI primitives + Tailwind)
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints under `/api/*` prefix
- **Storage**: In-memory storage (MemStorage) for MVP, easily upgradeable to PostgreSQL

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect (schema definitions)
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Abstraction**: Interface-based storage pattern (`IStorage`) with in-memory implementation

### Pages & Routes
1. **/** - Homepage with 11 sections (Hero, Problem, Stats, Philosophy, Services, Process, Case Studies, Retainers, Ideal Client, Learning, Final CTA)
2. **/services** - Detailed services page
3. **/retainers** - Retainer tiers and benefits
4. **/case-studies** - Case studies index
5. **/case-studies/:slug** - Individual case study detail
6. **/learning** - Blog/articles index with category filtering
7. **/learning/:slug** - Individual article detail
8. **/audit** - Audit request form
9. **/about** - Company philosophy and approach
10. **/contact** - Contact form
11. **/privacy** - Privacy policy
12. **/terms** - Terms of service

### API Endpoints
- **POST /api/audit-requests** - Submit audit request form
- **GET /api/audit-requests** - List audit requests
- **POST /api/contact** - Submit contact form
- **GET /api/contact** - List contact submissions

### Key Design Patterns
1. **Monorepo Structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) in single repository
2. **Path Aliases**: `@/` for client source, `@shared/` for shared modules, `@assets/` for attached assets
3. **Component Organization**: Feature-based components in `components/home/`, layout components in `components/layout/`, UI primitives in `components/ui/`
4. **Static Data**: Case studies, blog articles, and services defined in `client/src/lib/data.ts`

### Brand Design System (Dark-First)
- **Theme Default**: Dark mode is default (#0A0A0A background)
- **Primary Accent**: Conversion green (#3EE98A) used prominently for CTAs, gradient text, data highlights
- **Typography**: Inter font family, bold weight (700) for headlines with gradient text effect
- **Layout**: max-w-7xl containers, generous vertical rhythm (py-20 to py-32)
- **Philosophy**: Bold, dark, data-driven, conversion-obsessed aesthetic
- **Visual Elements**: Comparison tables, data visualization (bar charts, metrics), numbered process steps
- **Messaging**: Aggressive, confident copy ("Stop Guessing. Start Scaling.")

### Key CSS Utilities
- `.text-gradient`: Green-to-white gradient text effect for headlines
- `.bg-gradient-glow`: Subtle green glow effect for backgrounds

## External Dependencies

### UI/Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tabs, toast, etc.)
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

### Form & Validation
- **React Hook Form**: Form state management with @hookform/resolvers
- **Zod**: Runtime type validation, integrated with Drizzle schemas

### Build & Development
- **Vite**: Development server and production builds
- **esbuild**: Server-side production bundling
- **TypeScript**: Full type coverage across client and server

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay during development
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)

## Recent Changes

### January 8, 2026
- Major design overhaul: Pivoted from calm/premium to dark-first, bold, data-driven aesthetic
- Updated default theme to dark mode
- Added gradient text utilities (.text-gradient, .bg-gradient-glow) in index.css
- Redesigned all 11 homepage sections with new design language
- Updated all page headers with gradient text and bold messaging
- Added partner logos section to hero
- Implemented comparison table in Philosophy section
- Added data visualization (bar charts, metrics displays) throughout
- Updated CTAs to "Book Free Audit" for consistency
- Updated design_guidelines.md to reflect new design language
- Initial build of complete TwoClicks Media website
- Implemented all 12 pages with responsive design
- Created theme provider with dark/light mode toggle
- Set up form handling with React Hook Form and Zod validation
- Implemented API endpoints for audit and contact form submissions

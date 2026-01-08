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
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode support)
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

### Brand Design System
- **Colors**: Primary black (#0B0D10), soft white (#F7F8FA), conversion green (#3EE98A) as accent
- **Typography**: Inter font family, sentence case for headlines, weight 500-700 for headings
- **Layout**: max-w-7xl containers, generous vertical rhythm (py-16 to py-24)
- **Philosophy**: Minimal, calm, premium feel - accent color used sparingly (<8% of page surface)
- **Dark Mode**: Full support via CSS custom properties and class-based switching

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
- Initial build of complete TwoClicks Media website
- Implemented all 12 pages with responsive design
- Created theme provider with dark/light mode toggle
- Set up form handling with React Hook Form and Zod validation
- Implemented API endpoints for audit and contact form submissions
- Applied brand design system with conversion green accent
- Added comprehensive data-testid attributes for testing

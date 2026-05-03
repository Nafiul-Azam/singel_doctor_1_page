# Project Structure Documentation

## 📁 Directory Organization

### `/src/components` - React Components

Organized by component type for easy maintenance and scalability.

#### `/src/components/ui` - Base UI Components

Reusable primitive components used throughout the application.

- **Button.tsx** - Versatile button with variants (primary, secondary, outline, ghost) and sizes (sm, md, lg)
- **Input.tsx** - Text input with error handling, validation states, and helper text
- **Select.tsx** - Dropdown select with error states and accessibility features
- **Textarea.tsx** - Multi-line text input with auto-resize and error handling
- **Modal.tsx** - Flexible modal dialog with customizable sizes and header/footer
- **index.ts** - Unified exports for easy imports

**Usage:**

```typescript
import { Button, Input, Modal } from "@/components";
// or
import { Button } from "@/components/ui";
```

#### `/src/components/cards` - Card Components

Specialized components for displaying content in card layouts.

- **DoctorCard.tsx** - Display doctor information with specialty badge and experience
- **BlogCard.tsx** - Blog post preview with category, date, and excerpt
- **ServiceCard.tsx** - Service card with icon, description, and call-to-action
- **TestimonialCard.tsx** - Customer review/testimonial display with star rating
- **index.ts** - Unified exports

#### `/src/components/layout` - Layout Components

Page structure and navigation components.

- **Container.tsx** - Max-width wrapper for consistent page margins
- **Navbar.tsx** - Sticky header with navigation links and mobile menu
- **Footer.tsx** - Premium footer with multiple sections and contact info
- **MobileMenu.tsx** - Mobile navigation drawer (dropdown menu)
- **PremiumGlassNavbar.tsx** - Alternative glass-morphism navbar
- **index.ts** - Unified exports

#### `/src/components/forms` - Form Components

Form-related utilities and components.

- **FormField.tsx** - Wrapper for form labels with error and helper text support
- **SubmitButton.tsx** - Submit button with loading state and spinner
- **index.ts** - Unified exports

#### `/src/components/shared` - Shared Components

Common components used across multiple features.

- **CTASection.tsx** - Call-to-action section with multiple style variants
- **EmptyState.tsx** - Display when no data is available with optional action
- **PageBanner.tsx** - Page header with title and description
- **SectionHeader.tsx** - Section title with subtitle and highlight badge
- **index.ts** - Unified exports

#### `/src/components/index.ts` - Main Export

Central hub for importing any component from the application.

---

### `/src/lib` - Utility Functions & Helpers

#### Core Utilities

- **api-response-handler.ts** - Handle, parse, and validate API responses
- **http-client.ts** - HTTP request helpers (GET, POST, PUT, DELETE, PATCH)
- **backend-integration-guide.ts** - API endpoints, constants, and error messages
- **index.ts** - Unified exports for all utilities

#### Existing Utilities

- **utils/cn.ts** - Class name combining utility (Tailwind CSS helper)
- **utils/date.ts** - Date formatting and manipulation functions
- **utils/format.ts** - String formatting utilities
- **config/env.ts** - Environment configuration
- **config/site.ts** - Site-wide configuration

---

### `/src/services` - API Services

Service layer for backend API integration.

Each service file handles API calls for a specific domain:

- **appointment.service.ts** - Appointment-related API calls
- **blog.service.ts** - Blog post API calls
- **doctor.service.ts** - Doctor information API calls
- **contact.service.ts** - Contact form submissions
- **review.service.ts** - Review/testimonial API calls
- **services.service.ts** - Healthcare services API calls
- **schedule.service.ts** - Schedule-related API calls
- **chamber.service.ts** - Chamber/clinic information API calls

**Pattern:**

```typescript
import { httpGet, httpPost } from "@/lib";
import { API_ENDPOINTS } from "@/lib/backend-integration-guide";

export class DoctorService {
  static async getDoctors() {
    return httpGet(API_ENDPOINTS.DOCTORS.LIST);
  }
  // ...
}
```

---

### `/src/types` - TypeScript Definitions

Type definitions for all data models and API responses.

- **api.types.ts** - Generic API response types
- **appointment.types.ts** - Appointment data structures
- **blog.types.ts** - Blog post types
- **doctor.types.ts** - Doctor information types
- **service.types.ts** - Healthcare service types
- **review.types.ts** - Review/testimonial types
- **contact.types.ts** - Contact form types
- **common.types.ts** - Shared types used across multiple domains

**Example:**

```typescript
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experienceYears: number;
}
```

---

### `/src/constants` - Application Constants

- **routes.ts** - URL route definitions
- **navigation.ts** - Navigation menu items
- **queryKeys.ts** - React Query cache keys
- **emergency.ts** - Emergency information constants

**Usage:**

```typescript
import { ROUTES, NAV_LINKS } from "@/constants";

// Use in navigation
<Link href={ROUTES.appointment}>Book Now</Link>
```

---

### `/src/data` - Static Data & Mocks

#### `/src/data/mock` - Mock Data

Temporary data for development and testing. Replace with real API calls:

- **doctor.mock.ts** - Mock doctor data
- **blog.mock.ts** - Mock blog posts
- **service.mock.ts** - Mock services
- **review.mock.ts** - Mock testimonials
- **appointment.mock.ts** - Mock appointments
- **schedule.mock.ts** - Mock schedules
- **homepage.mock.ts** - Mock homepage data

---

### `/src/features` - Feature-Specific Components

Page-level components organized by feature/page.

#### Structure:

```
features/
├── home/
│   └── sections/
│       ├── HomeHeroSection.tsx
│       ├── HomeDoctorPreviewSection.tsx
│       ├── HomeServicesPreviewSection.tsx
│       ├── HomeBlogPreviewSection.tsx
│       ├── HomeTestimonialsSection.tsx
│       ├── HomeEmergencySection.tsx
│       └── HomeAppointmentCTASection.tsx
├── appointment/
│   ├── components/
│   └── sections/
├── blog/
│   └── sections/
├── doctor/
│   ├── components/
│   └── sections/
├── services/
│   └── sections/
├── contact/
│   ├── components/
│   └── sections/
├── reviews/
│   └── sections/
├── schedule/
│   └── sections/
├── chamber/
│   └── sections/
├── about/
│   └── sections/
├── emergency/
│   └── sections/
└── online-consultation/
    └── sections/
```

Each feature can have:

- **components/** - Feature-specific reusable components
- **sections/** - Page sections/blocks

---

### `/src/hooks` - Custom React Hooks

- **useBreakpoint.ts** - Responsive breakpoint detection
- **useDebounce.ts** - Debounce values for search, filters
- **usePagination.ts** - Pagination logic

**Usage:**

```typescript
import { useBreakpoint, useDebounce } from "@/hooks";

const isMobile = useBreakpoint("md");
const debouncedSearch = useDebounce(searchTerm, 300);
```

---

### `/src/providers` - React Context Providers

- **AppProviders.tsx** - Root providers for the application

---

### `/src/app` - Next.js App Router

#### Root Layout

- **layout.tsx** - Root layout with providers
- **globals.css** - Global styles

#### Pages

- **page.tsx** - Homepage
- **loading.tsx** - Loading skeleton
- **not-found.tsx** - 404 page

#### Route Groups

- **/app/(public)** - Public pages
  - **about/** - About doctor
  - **blog/** - Blog listings and post details
  - **doctor/** - Doctor profile
  - **services/** - Services listing
  - **reviews/** - Reviews/testimonials
  - **appointment/** - Appointment booking
  - **contact/** - Contact form
  - **chamber/** - Chamber information
  - **emergency/** - Emergency information
  - **online-consultation/** - Online consultation
  - **schedule/** - Schedule/availability

#### API Routes

- **/app/api/health** - Health check endpoint

---

## 🔄 Data Flow

### Example: Display Doctors

1. **Component** → Imports from `/components`

   ```typescript
   import { DoctorCard } from "@/components";
   ```

2. **Service Layer** → Handles API calls

   ```typescript
   import { DoctorService } from "@/services";
   const response = await DoctorService.getDoctors();
   ```

3. **Type Safety** → Uses types from `/types`

   ```typescript
   import type { Doctor } from "@/types/doctor.types";
   ```

4. **Constants** → Uses routes and endpoints
   ```typescript
   import { ROUTES } from "@/constants";
   import { API_ENDPOINTS } from "@/lib";
   ```

---

## 📋 Import Patterns

### Recommended Imports

✅ **Good:**

```typescript
// From index files
import { Button, DoctorCard, Container } from "@/components";

// From utilities
import { cn, httpGet } from "@/lib";

// From constants
import { ROUTES, API_ENDPOINTS } from "@/constants";
import { ERROR_MESSAGES } from "@/lib";

// From services
import { DoctorService } from "@/services";

// From types
import type { Doctor } from "@/types/doctor.types";
```

❌ **Avoid:**

```typescript
// Direct imports (use index files instead)
import { Button } from "@/components/ui/Button";
```

---

## 🚀 Component Usage Examples

### Using UI Components

```typescript
"use client";

import { Button, Input, Modal } from "@/components";

export function MyComponent() {
  return (
    <>
      <Button variant="primary" size="lg">
        Click Me
      </Button>
      <Input placeholder="Enter name" />
    </>
  );
}
```

### Using Card Components

```typescript
import { DoctorCard } from "@/components";
import type { Doctor } from "@/types/doctor.types";

export function DoctorsList({ doctors }: { doctors: Doctor[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}
```

### Using Layout Components

```typescript
import { Container, Navbar, Footer } from "@/components";

export default function RootLayout() {
  return (
    <html>
      <body>
        <Navbar />
        <Container>{/* Page content */}</Container>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 🔌 Backend Integration

See `BACKEND_INTEGRATION.md` for detailed backend integration instructions.

**Quick Summary:**

1. Define API endpoints in `backend-integration-guide.ts`
2. Create service classes extending API calls
3. Use in components with proper error handling
4. Replace mock data gradually

---

## 📚 Best Practices

1. **Always use index files** for imports
2. **Keep components focused** and single-responsibility
3. **Use TypeScript** types for all props and data
4. **Follow the established patterns** for new files
5. **Document complex components** with JSDoc comments
6. **Test API integration** thoroughly
7. **Handle errors gracefully** with user-friendly messages

---

## 🎯 Maintenance & Scalability

### Adding New Components

1. Create component in appropriate folder
2. Add export to `index.ts`
3. Use in other components

### Adding New Features

1. Create folder in `/features`
2. Create `components/` and `sections/` subdirectories
3. Create service in `/services`
4. Create types in `/types`
5. Reference constants and routes

### Updating API Integration

1. Update `API_ENDPOINTS` in `backend-integration-guide.ts`
2. Update service class
3. Update component to use new service
4. Remove mock data

---

## 📞 Quick Reference

| Need             | Location         | Import                                               |
| ---------------- | ---------------- | ---------------------------------------------------- |
| UI Button        | `/components/ui` | `import { Button } from "@/components"`              |
| API Call         | `/services`      | `import { DoctorService } from "@/services"`         |
| Type Definition  | `/types`         | `import type { Doctor } from "@/types/doctor.types"` |
| Route URL        | `/constants`     | `import { ROUTES } from "@/constants"`               |
| Utility Function | `/lib`           | `import { cn, httpGet } from "@/lib"`                |
| Custom Hook      | `/hooks`         | `import { useBreakpoint } from "@/hooks"`            |

---

Last Updated: May 2024

## CarePoint Clinic Starter

Next.js (App Router) + TypeScript based scalable doctor/clinic website architecture.
This project starts with mock/demo content and is structured to migrate smoothly to backend API, database, and CMS data.

## Run Locally

Install and start development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build and lint:

```bash
npm run lint
npm run build
```

Health route:

`GET /api/health`

## Key Architecture

- `src/app`: App Router routes, route groups, layouts, API route handlers
- `src/components`: Shared reusable UI/layout/cards/forms
- `src/features`: Page/feature specific sections and components
- `src/services`: Data access layer (mock now, API later)
- `src/data/mock`: Static demo data for current frontend phase
- `src/types`: TypeScript interfaces/contracts
- `src/validations`: Zod schemas for forms
- `src/lib`: Utilities, config, and shared low-level helpers
- `src/constants`: Routes/navigation/query keys/emergency constants

## Main Pages

- Home: `/`
- About: `/about`
- Doctor: `/doctor` and `/doctor/[slug]`
- Services: `/services` and `/services/[slug]`
- Chamber: `/chamber`
- Schedule: `/schedule`
- Appointment: `/appointment`
- Reviews: `/reviews`
- Blog: `/blog` and `/blog/[slug]`
- Contact: `/contact`
- Emergency: `/emergency`
- Online Consultation: `/online-consultation`

## Data Migration Path

Current setup:

- UI calls `services/*.service.ts`
- service files return data from `src/data/mock`

Future migration:

1. Keep the same service function names/signatures.
2. Replace mock return with API calls in the same service files.
3. Add DTO-to-UI mappers if backend response shape differs.
4. Keep pages/components unchanged.

## Naming Rules

- Components: `PascalCase.tsx`
- Hooks: `useX.ts`
- Services: `feature.service.ts`
- Schemas: `feature.schema.ts`
- Types: `feature.types.ts`
- Route files: `page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`, `route.ts`

## Next Step Suggestions

1. Add React Query in `src/providers` and `src/features/*/queries`.
2. Add admin route group: `src/app/(admin)`.
3. Add backend endpoints and replace mock services incrementally.

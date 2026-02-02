# Transaction Insights Dashboard

A modern, responsive **Transaction Insights Dashboard** built with **Next.js 14 (App Router)**, **TypeScript**, **TanStack Query (React Query)**, and **Tailwind CSS**.  
It consumes a paginated mock API, implements infinite scrolling, client-side filtering/search (with debounce), and real-time aggregated insights.

## Features

- Infinite scrolling with skeleton loaders and "no more results" state
- Debounced search by name / transaction ID
- Multi-select status filter
- Real-time derived aggregations:
  - Total transactions loaded
  - Total successful amount
  - Success rate (%)
  - Top spending category
- Clean separation of concerns (hooks, components, utils, api layer)
- Error handling & loading states
- Fully typed with TypeScript

## Tech Stack

| Layer         | Technology                           |
| ------------- | ------------------------------------ |
| Framework     | Next.js 14 (App Router)              |
| Language      | TypeScript                           |
| Data Fetching | TanStack Query v5 (infinite queries) |
| Styling       | Tailwind CSS                         |
| State         | React hooks + TanStack Query         |
| UI Components | Custom (no external UI library)      |

## Project Structure (Clean Architecture)

## Setup Instructions

### 1. Clone the repository

```bash
cd transaction-insights-dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Features

- Infinite scrolling with pagination (MockAPI)
- Debounced search by name / transaction ID
- Multi-select status filter
- Real-time derived insights:
  - Total transactions
  - Total successful amount
  - Success rate (%)
  - Top spending category
- Responsive design (mobile + desktop)
- Skeleton loaders & loading states
- Error handling & clean component structure
- No external UI libraries — pure Tailwind + custom primitives

## Architecture & Design Decisions

| Decision                                               | Reasoning / Benefit                                                                                                  |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Next.js 14 App Router + Server/Client boundaries       | Modern file-system routing, built-in streaming, automatic code-splitting, improved DX with `"use client"` directives |
| TanStack Query v5 (React Query) for data fetching      | Excellent handling of pagination, infinite scrolling, caching, background updates, error states and retries          |
| Custom UI components (no external component library)   | Demonstrates deep understanding of Tailwind + React composition, zero extra bundle size, full styling control        |
| Client-side filtering & aggregation                    | MockAPI has very limited query/filter capabilities → client-side gives consistent & fast UX                          |
| `useDebounce` custom hook for search input             | Prevents unnecessary re-renders and API calls during rapid typing, improves performance & perceived speed            |
| IntersectionObserver + ref for infinite scroll trigger | More performant and battery-friendly than scroll event listeners, precise ~70% visibility threshold                  |
| Memoization (`useMemo`) for aggregations               | Avoids expensive recalculations on every render when new pages are appended                                          |
| Dedicated `QueryProvider` client component             | Prevents non-serializable object errors when passing `QueryClient` instance across server → client boundary          |
| Separation of concerns                                 | Clear layers: `api/`, `hooks/`, `utils/`, `components/ui/`, `components/*` domains – easy to maintain & test         |
| TypeScript strict mode + path aliases (`@/*`)          | Catches errors early, improves refactoring safety and IDE autocompletion                                             |

## Trade-offs Considered

| Aspect / Choice                                           | Advantage                                               | Downside / Trade-off                                                  | Why Accepted                                       |
| --------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------- |
| Client-side filtering & search                            | Instant feedback, no complex backend query logic needed | Transfers more data than necessary, slower for very large result sets | MockAPI limitations + small page size (15 items)   |
| No server-side total count / hasMore flag                 | Simple implementation, works with any paginated API     | Infinite scroll stops only when last page returns < limit items       | Good enough for demo / mock environment            |
| No external date-range picker (yet)                       | Zero extra dependencies, keeps bundle small             | Less convenient / precise date filtering                              | Assignment minimalism & focus on core requirements |
| Basic error UI (no retry button / toast)                  | Quick to implement, keeps code surface small            | Less polished recovery experience                                     | Prioritized working core features                  |
| No sorting / advanced filtering (category dropdown, etc.) | Reduced scope & complexity                              | Missing common dashboard features                                     | Time-boxed interview task                          |
| No authentication / protected routes                      | Straightforward public demo                             | No security / user context                                            | Out of scope for this assignment                   |
| No unit / integration tests                               | Faster delivery, focus on functionality                 | Harder to refactor confidently later                                  | Typical for take-home UI-focused assignments       |
| MockAPI-specific stopping condition                       | Works without needing total count metadata              | Not future-proof for real APIs with proper pagination metadata        | Fits the given API constraints perfectly           |

These decisions aim to balance:

- clean & maintainable code structure
- good performance characteristics
- demonstration of modern frontend best practices
- adherence to the assignment constraints (MockAPI, no external UI libs)

while keeping the implementation realistic for a time-constrained interview task.

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

#### Decision,Reason / Benefit

"Next.js App Router + ""use client""","Modern routing, server components where possible, streaming support"
TanStack Query for infinite scrolling,"Handles pagination, caching, background refetch, optimistic updates out-of-box"
Custom UI components (no shadcn/ui),"Demonstrate pure Tailwind + React skills, no extra dependencies"
Client-side filtering & aggregation,MockAPI has very limited server-side filtering → consistent UX + fast feedback
useDebounce hook,"Prevents excessive API calls during typing, improves performance & UX"
QueryProvider wrapper,"Prevents ""non-serializable"" error when passing QueryClient to client boundary"
Memoized aggregations,Avoids recalculating totals on every render → better performance with many items
IntersectionObserver for infinite load,More performant & precise than scroll event listeners

#### Feature / Choice,Trade-off / Downside,Accepted Because

Client-side filtering instead of API,"More data transferred, slower for huge datasets","MockAPI limitations, small page size (15 items)"
No server-side search/filter reset,"Full page reload not needed, better perceived performance",SPA feel is prioritized
No real date-range picker,Less precise date filtering,Keeps dependencies minimal
No error retry button / toast system,Basic error display only,Focus on core requirements
MockAPI → no total count,Infinite scroll stops when page returns < limit items,Good enough for demo purposes
No authentication / protected routes,Public dashboard,Assignment scope

```

```

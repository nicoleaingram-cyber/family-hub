# Family Hub

Family Hub is a small home base for a family. This version is the app shell and the home screen: a welcome for the household, and large links to the photo gallery, family calendar, and member list. Those three areas are marked **Coming soon** and stay on the home screen. They are not built yet.

The sample household is local mock data ("The Maple Family"), so the app runs with no accounts, database, or API keys.

## Stack

- **Next.js (App Router)** — file-based pages and a shared root layout, so later screens can be added as routes without changing the shell.
- **TypeScript** — shared types for the family profile and the home links.
- **Tailwind CSS** — mobile-first styling with a small, consistent spacing and color scale.
- **shadcn/ui** — accessible button, card, and badge components that live in this repo. Nothing is loaded from a paid UI service.

No hosting setup and no paid services. There is no `.env` file; the data layer is in-memory.

## Setup and run

You need Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run lint
npm run build
npm start
```

`npm start` serves the production build from `npm run build`.

## Folder structure

```
app/                 Home page, root layout, and global styles
components/          Shared UI
  layout/            App shell, header, and navigation
  home/              Home-screen sections
  ui/                shadcn/ui button, card, and badge
lib/                 Shared types and the local data layer
  types.ts           FamilyProfile, FeatureLink, and FamilyDataSource
  data.ts            getFamilyData() — the entry point UI code should call
  mock-family-data.ts
                     In-memory sample data implementing FamilyDataSource
  utils.ts           Class name helper used by the UI components
```

`FamilyDataSource` is the seam for later work. New screens should read and write through `getFamilyData()` (adding methods on that interface) instead of importing the mock directly.

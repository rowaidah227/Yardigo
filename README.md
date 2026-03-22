# Yardigo – Construction Classifieds MVP

A clean, structured web marketplace for construction surplus, materials, equipment, and labor. Built for contractors, crews, suppliers, yards, and owner-operators.

**Current version:** v0.1.0 (Mock MVP)

---

## Product Overview

**What is Yardigo?**

Yardigo is like Craigslist for construction, but cleaner, more structured, and built around how contractors actually work. Users can post and find:

- Surplus materials (steel, lumber, concrete products)
- Fill dirt, aggregate, topsoil
- Leftover concrete from pours
- Equipment for rent or sale
- Hauling and transportation services
- Labor, crews, and trade services

**Design Philosophy**

Not trendy. Not pastel. Built to be:
- **Rugged & practical** – industrial aesthetic, dense information
- **Fast & organized** – strong category structure, useful filters
- **Trustworthy** – clear seller types, verification badges, urgency indicators
- **Contractor-friendly** – forms and listings designed by construction use cases, not generic e-commerce

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Data:** Mock data only (no backend)

---

## Project Structure

```
yardigo/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Landing page
│   ├── globals.css
│   ├── (auth)/
│   │   ├── signin/page.tsx        # Sign in page
│   │   └── signup/page.tsx        # Create account page
│   ├── listings/
│   │   ├── page.tsx               # Browse/search listings
│   │   └── [id]/page.tsx          # Listing detail page
│   ├── post/
│   │   └── page.tsx               # Post a listing (dynamic form)
│   └── dashboard/
│       └── page.tsx               # User dashboard
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── SearchBar.tsx              # Search with mobile filter toggle
│   ├── FilterSidebar.tsx          # Category, type, price filters
│   ├── ListingCard.tsx            # Reusable listing card component
│   ├── CategoryGrid.tsx           # Category grid on homepage
│   ├── FormInput.tsx              # Reusable text input
│   ├── FormSelect.tsx             # Reusable select field
│   └── FormTextarea.tsx           # Reusable textarea
├── lib/
│   ├── types.ts                   # TypeScript types
│   └── mockData.ts                # 18+ mock listings & categories
├── public/                        # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .gitignore
```

---

## Pages & Features

### 1. **Landing Page** (`/`)

- Hero section: "Move surplus fast"
- Value propositions (fast, built for construction, get it gone today)
- Category grid: 6 main categories
- "How it works" section
- Featured listings preview
- CTA sections to browse or post

### 2. **Browse Listings** (`/listings`)

- Search bar with live filter toggle for mobile
- Desktop sidebar filters:
  - Category (with hierarchical subcategories)
  - Listing type (For Sale, Wanted, For Rent, Service Available/Needed)
  - Price range (min/max)
- Listing grid with cards showing:
  - Image placeholder
  - Title with urgency badge
  - Category & subcategory pills
  - Price (when available)
  - Quantity & unit
  - Location & posted time
  - Seller type badge
- Sort options: Recent, Price Low/High, Distance
- Empty state with filter reset
- Responsive mobile layout with slide-out filter panel

### 3. **Listing Detail** (`/listings/[id]`)

- Large image placeholder
- Full title, price, category badges, urgency indicator
- Key details grid (quantity, condition, availability)
- Full description
- Location with distance
- Sidebar:
  - Seller info & posted time
  - "Contact Seller" CTA
  - Save/Heart button
  - Share listing button
  - Safety tip
- Related listings in same category

### 4. **Post a Listing** (`/post`)

**Most important page – demonstrates Yardigo's structure advantage**

Dynamic form that shows only relevant fields based on listing type and category.

**General Section (always shown):**
- Listing type dropdown
- Category dropdown
- Subcategory (hierarchical, populated from category)
- Title
- Description
- Price type: Fixed / Negotiable / Contact
- Price input (hidden if "contact")
- Location, postal code
- Contact name, phone, email

**Material-Specific Fields** (shown for Materials category, non-Wanted):
- Material type
- Condition dropdown
- Quantity & unit
- Dimensions
- Checkboxes: Pickup only, Delivery available, Palletized

**Dirt & Aggregate Fields:**
- Material type (Clean fill, topsoil, gravel, etc.)
- Estimated volume
- Haul distance notes
- Checkboxes: Loading available, Dump truck access, Ready now
- Contamination/quality notes

**Concrete Fields:**
- Mix type
- Volume remaining
- Delivery window
- Checkboxes: Pump required, Short load

**Equipment Fields:**
- Equipment type
- Make/model
- Year
- Pricing type (hourly/daily/weekly/monthly)
- Checkboxes: With operator, Delivery available

**Hauling Fields:**
- Truck type dropdown
- Load capacity
- Service radius
- Available dates
- Haul type (dirt, concrete, demolition, general)
- Checkboxes: Operator included, Same day available

**Labor & Crew Fields:**
- Trade
- Crew size
- Certifications
- Minimum booking
- Travel radius
- Checkbox: Fully insured

Form dynamically updates field visibility based on category + listing type combinations.

### 5. **Dashboard** (`/dashboard`)

- Quick stats: Active listings, saved listings, profile views, messages
- Tabbed interface:
  - **My Listings** – User's posted listings with edit/pause controls (placeholder)
  - **Saved** – Bookmarked listings
  - **Drafts** – Saves in progress (feature placeholder)
  - **Messages** – Inquiry and conversation threads (feature placeholder)

### 6. **Auth Pages**

- **Sign In** (`/auth/signin`) – Email/password form (mocked)
- **Sign Up** (`/auth/signup`) – Name, email, user type, company, password (mocked)

Mock pages show "This is mocked" messages. No actual authentication in v0.1.

---

## Mock Data

### Listings (19 total)

All listings are realistic construction scenarios:

1. **80 CY Clean Fill Dirt – SE Calgary** (Materials, Dirt & Aggregate, For Sale, Urgent)
2. **14 CY 32 MPa Concrete** (Concrete, For Sale, Today)
3. **Used Symons Steel Forms** (Materials, For Sale)
4. **3 Bundles #6 Rebar** (Materials, For Sale)
5. **3/4" Crushed Gravel** (Dirt & Aggregate, For Sale)
6. **Skid Steer with Operator** (Equipment, For Rent, This Week)
7. **Tri-Axle Dump Truck Hauling** (Hauling, Service Available)
8. **Small Concrete Finishing Crew** (Labor & Crews, Service Available, This Week)
9. **24 LF Steel Pipe Offcuts** (Materials, For Sale)
10. **40 Sheets 3/4" Plywood** (Materials, For Sale)
11. **Mini Excavator for Rent** (Equipment, For Rent)
12. **Wanted: Topsoil 50+ CY** (Dirt & Aggregate, Wanted, Urgent)
13. **Wanted: Demolition Labor Today** (Labor & Crews, Service Needed, Today)
14. **50 Bags Type 10 Cement** (Materials, For Sale)
15. **Flatbed Trailer for Lease** (Equipment, For Rent)
16. **Framing Crew Available** (Labor & Crews, Service Available, This Week)
17. **Wanted: Used Formwork** (Materials, Wanted)
18. **Excavator with Operator** (Equipment, Service Available, This Week)
19. **10 Pallets Mixed Concrete Pavers** (Materials, For Sale)

Each has realistic details: seller type, location, distance, urgency, pricing, quantities, conditions, and construction-specific descriptions.

### Categories

```
- Materials
- Dirt & Aggregate
- Concrete
- Equipment
- Hauling
- Labor & Crews
```

Each with 4-8 subcategories.

---

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- Git (optional, for version control)

### 1. Install Dependencies

```bash
cd c:\Users\mrowa\Yardigo
npm install
```

This will install:
- `next` – React framework
- `react` & `react-dom` – UI library
- `lucide-react` – Icons
- `tailwindcss` – CSS framework
- TypeScript, ESLint, etc.

### 2. Run Development Server

```bash
npm run dev
```

Server will start at: **http://localhost:3000**

### 3. Open in Browser

Navigate to:
- **http://localhost:3000** – Landing page
- Click "Browse Listings" or nav links to explore

---

## Development & Build

### Dev Commands

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## What Is Mocked (v0.1.0)

### ✓ Implemented & Fully Functional

- ✅ All pages and routes
- ✅ Mock data (19 listings in `lib/mockData.ts`)
- ✅ Filtering & search (client-side only)
- ✅ Form structure (all fields, dynamic display)
- ✅ Responsive mobile layout
- ✅ Component library
- ✅ TypeScript types
- ✅ Tailwind styling (industrial aesthetic)
- ✅ Category hierarchy
- ✅ Urgency indicators

### ❌ Not Implemented (v0.1.0)

- ❌ **Backend API** – No server endpoints
- ❌ **Database** – No data persistence (mock only)
- ❌ **Authentication** – Sign in/create account pages exist but are mocked
- ❌ **File uploads** – Image uploading (placeholders only)
- ❌ **Messaging** – Chat system not implemented
- ❌ **Payments** – No payment processing
- ❌ **Maps/Geolocation** – Distance calculated from mock data only
- ❌ **Email notifications** – No email delivery
- ❌ **User profiles** – Dashboard shows placeholders
- ❌ **Analytics** – No tracking

**All form submissions** display "success" messages but don't save data.

---

## Next Build Steps (After v0.1)

### Phase 2: Backend Setup

- [ ] Set up Supabase or PostgreSQL database
- [ ] Create database schema (listings, users, emails, etc.)
- [ ] Build API routes (`/api/listings`, `/api/users`, etc.)
- [ ] Implement authentication (Supabase Auth or NextAuth.js)
- [ ] Add server-side data persistence

### Phase 3: User Management

- [ ] Real user accounts with email verification
- [ ] User profiles with verification badges
- [ ] Seller ratings/reviews system
- [ ] Dashboard updates (edit/delete/pause listings)
- [ ] Saved listings persistence

### Phase 4: Core Features

- [ ] Image upload to cloud storage (AWS S3 or Supabase)
- [ ] Messaging/chat system
- [ ] Notification system (email, in-app)
- [ ] Advanced search (map view, saved searches)
- [ ] Listing analytics dashboard

### Phase 5: Admin & Trust

- [ ] Admin dashboard for moderation
- [ ] Verification system (phone, business license)
- [ ] Dispute resolution
- [ ] Reporting spam/abuse
- [ ] Featured listings (paid boost option)

### Phase 6: Mobile & Growth

- [ ] Native iOS app (React Native)
- [ ] Native Android app
- [ ] Push notifications
- [ ] Offline functionality
- [ ] Analytics & SEO

---

## File-by-File Architecture

### Types & Data

- **`lib/types.ts`** – TypeScript interfaces for Listing, User, SearchFilters, etc.
- **`lib/mockData.ts`** – 19 realistic construction listings + categories

### Components (Reusable)

All components are:
- Client-side (`'use client'`)
- Functional components with hooks
- Fully typed with TypeScript
- Tailwind-styled
- Responsive mobile-first

| Component | Purpose |
|-----------|---------|
| Header | Sticky nav with logo, links, mobile menu |
| SearchBar | Search input with mobile filter toggle |
| FilterSidebar | Category/type/price filtering |
| ListingCard | Displays listing preview in grid |
| CategoryGrid | 6 category pills for browsing |
| FormInput | Wrapped `<input>` with label, validation |
| FormSelect | Wrapped `<select>` with label |
| FormTextarea | Wrapped `<textarea>` with label |

### Pages

| Page | Route | Features |
|------|-------|----------|
| Landing | `/` | Hero, categories, featured listings |
| Browse | `/listings` | Search, filters, grid, mobile responsive |
| Detail | `/listings/[id]` | Full listing, related items, save/contact |
| Post | `/post` | Dynamic form (shows fields based on category) |
| Dashboard | `/dashboard` | Stats, tabs (listings, saved, drafts, messages) |
| Sign In | `/auth/signin` | Email/password (mocked) |
| Sign Up | `/auth/signup` | User type + details (mocked) |

---

## Design System & Styling

### Colors (Tailwind)

- **Neutral palette:** Slate (50-900)
- **Minimal accent:** Used for CTAs and urgency only
- **No rainbow:** Keeps industrial focus

### Urgency Badges

| Urgency | Color | Usage |
|---------|-------|-------|
| Urgent | Red-100 text / Red-700 | Same day only, must move today |
| Today | Orange-100 text / Orange-700 | Posted recently, posted today |
| This Week | Blue-100 text / Blue-700 | Available this week |
| Flexible | Gray-100 text / Gray-700 | Standard availability |

### Spacing & Typography

- **Consistent padding:** 4, 6, 8px increments (Tailwind)
- **Font sizes:** XS (12px) → 3XL (30px)
- **Line heights:** Tighter on mobile, breathing room on desktop
- **No oversized whitespace:** Contractors scan listings fast

### Responsive Breakpoints

- **Mobile-first design**
- **md (768px):** Sidebar appears, grid changes
- **lg (1024px):** Hero expands, max-width containers

---

## How to Extend

### Add a New Listing Type

1. Update `ListingType` in `lib/types.ts`
2. Add to `listingTypes` array in `/post/page.tsx`
3. Add corresponding form section (copy/adapt existing patterns)

### Add a New Category

1. Update `Category` type in `lib/types.ts`
2. Add to `mockCategories` array in `lib/mockData.ts`
3. Add subcategories to `mockSubcategories` object
4. Form will auto-populate due to dynamic structure

### Add Mock Listings

1. Add object to `mockListings` array in `lib/mockData.ts`
2. Ensure all required `Listing` fields are populated
3. They will immediately appear in browse, search, and featured sections

### Style Changes

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Per-component: Inline Tailwind classes

---

## Common Questions

**Q: Why is all data mocked?**
A: This is intentionally a skeleton for rapid prototyping. Backend integration is the first next step.

**Q: Can I deploy this?**
A: Yes! Deploy to Vercel (fastest). Data won't persist between deploys (mocked). Add a database before production use.

**Q: How do I customize copy?**
A: All text is in JSX. Search for phrases and edit directly. Landing page copy is in `app/page.tsx`.

**Q: Can I change the color scheme?**
A: Yes. Edit `tailwind.config.ts` or inline Tailwind classes. Current palette is intentionally industrial (grays, minimal accents).

**Q: Is the form actually doing anything?**
A: Form submissions show success messages but don't save. All form data management is in-component state. No backend integration.

---

## Deployment

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow prompts. Your MVP will be live at a `.vercel.app` domain.

### Or Self-Host

```bash
npm run build
npm run start
```

Runs on `localhost:3000` by default. Configure PORT env var as needed.

---

## Support & Feedback

This is a product engineering prototype. Questions?

- Check component files for implementation details
- Compare with `lib/mockData.ts` for data structure examples
- Update `next.config.js` or `tsconfig.json` for project settings

---

## Quick Links

- **Product Docs:** See this README
- **Design System:** Tailwind config + Landing page
- **Mock Data:** `lib/mockData.ts`
- **Form Logic:** `app/post/page.tsx`
- **Filters:** `components/FilterSidebar.tsx`

---

**Yardigo MVP v0.1.0**  
Built for contractors. Designed for speed. Ready to extend.

When you're ready to add a backend, you'll already have:
- ✓ Complete UI/UX
- ✓ Type-safe data structures
- ✓ Component library
- ✓ Responsive layouts
- ✓ Form structure

Just connect the API calls and plug in your database.

Good building! 🚀

# Vibra V1.O.0
This is a personal project by **Matías Diaconchuk** showcasing a responsive web app that lets users browse upcoming events by country. It uses **Next.js**, **React**, and **Tailwind CSS** and integrates with the **Ticketmaster API**.

---

## Features

- Browse events by country
- Search bar to filter events by name
- Responsive **Event Cards** with images, venue, date, and ticket price
- Highlight the soonest upcoming event
- Pagination to navigate through all events
- Footer with personal links (LinkedIn, GitHub, Email, Portfolio)
- Smooth animations and hover effects

---

## Tech Stack

- **Next.js 15.4.5** - React framework with App Router
- **React 18+** - UI library
- **TypeScript** - Strongly typed development
- **Tailwind CSS** - Styling
- **Heroicons** - Icons for UI
- **Ticketmaster API** - Events data
- **React Context** - Global state for country selection
- **Session Storage** - Caching events to avoid repeated API calls

---

## Components Overview

### 1. `Header`
- Contains **SearchBar** and **CountrySelect**.
- Responsive: different layout for desktop vs mobile.
- Handles passing `query` state down to `SearchBar`.

### 2. `SearchBar`
- Controlled input connected to parent `Home` state.
- Updates search query in real-time to filter events.

### 3. `EventFetcher`
- Fetches events from Ticketmaster API based on selected country.
- Caches results in session storage.
- Sorts events by date.
- Implements **pagination** (8 events per page).
- Filters events by search query.
- Passes events to `EventCard`.

### 4. `EventCard`
- Displays event details: image, name, date, venue, and ticket price.
- Highlights the soonest event with a badge.
- Responsive and clickable to open Ticketmaster page.

### 5. `Footer`
- Contains copyright
- Links to personal LinkedIn, GitHub, Email, and Portfolio.

---

## Getting Started

Step 1: Clone the repository:

git clone https://github.com/yourusername/event-finder.git
cd event-finder

Step 2: Install dependencies:

npm install
or
yarn install

Step 3: Create a .env.local file in the root with your Ticketmaster API key:

NEXT_PUBLIC_CONSUMER_KEY=YOUR_API_KEY_HERE

Step 4: Run the development server:

npm run dev
or
yarn dev

Step 5: Open http://localhost:3000 to view in browser.
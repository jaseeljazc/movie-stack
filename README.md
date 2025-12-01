#  MovieStack

> A sleek, high-performance movie discovery web application built with Next.js 14, React, and the TMDB API.

Browse thousands of movies, explore curated collections, and find your next favorite film with ease.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)

---

## 📦 Dataset & API

### Data Source
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/)
- **Base URL**: `https://api.themoviedb.org/3`
- **Images CDN**: `https://image.tmdb.org/t/p`

### Data Collection Method
MovieStack uses **real-time API calls** instead of pre-scraped datasets for always up-to-date content.

### API Endpoints

| Feature | Endpoint |
|---------|----------|
| **Trending movies** | `/trending/movie/week` |
| **Top rated** | `/movie/top_rated?page={page}` |
| **Search** | `/search/movie?query={term}&page={page}` |
| **Genre list** | `/genre/movie/list` |
| **Discover by genre** | `/discover/movie?with_genres={genreId}&sort_by=vote_average.desc` |
| **Movie details** | `/movie/{id}` |

### Data Structure

Each movie object includes:

- **Basic Info** → `id`, `title`, `overview`, `tagline`
- **Media** → `poster_path`, `backdrop_path`
- **Metadata** → `release_date`, `runtime`, `status`
- **Ratings** → `vote_average`, `vote_count`, `popularity`
- **Classification** → genre IDs & names

---

## ⚙️ Tech Stack

### Core Framework
- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**

### Styling & UI
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Icons** - Icon library

### API & Data Management
- **TMDB API** - Movie data
- **ISR Caching** - Next.js Incremental Static Regeneration

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Geist Font** - Modern typography

---

## 🎨 Design Inspiration

### Visual Style
- Dark theme inspired by **Netflix**
- Clean typography using **Geist Sans** + **Bebas Neue**
- Yellow highlight accent: `#FBBF24`
- Black/Zinc-based backgrounds

### UI/UX References
- **Netflix** - Hover card layout
- **IMDb** - Rating style
- **Dribbble** - Movie app concepts

### Key Design Decisions
-  Smooth hover scale effects
-  Responsive grid (2–6 columns)
-  Micro-interactions
-  Accessible semantic HTML

---

##  AI Prompts Used

### Prompt 1 – Component Architecture
```
Create a MovieCard component that:
- Uses TypeScript interfaces
- Shows poster (lazy loaded), title, rating, year
- Uses Tailwind + Lucide icons
- Includes hover scale + gradient overlay
- Links to detail page
```

### Prompt 2 – API Integration Pattern
```
Create TMDB integration module with:
- Next.js fetch + ISR (1 hour revalidate)
- Error handling
- Pagination support
- TypeScript interfaces
- Export trending, top-rated, search, genres
```

---

##  Future Improvements

- [ ] Full Movie Details Page with trailers, cast, crew, and recommendations
- [ ] Watchlist/Favorites system (LocalStorage or Database)
- [ ] User authentication for personal lists
- [ ] Infinite scrolling pagination


---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- TMDB API Key ([Get one here](https://www.themoviedb.org/settings/api))

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/moviestack.git
cd moviestack
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set environment variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
```

### 5. Open in browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
moviestack/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── movies/
│   │   ├── page.tsx            # Movies listing
│   │   └── [id]/page.tsx       # Movie details
│   ├── lists/
│   │   ├── page.tsx            # Lists overview
│   │   └── [id]/page.tsx       # List details
│   ├── shows/page.tsx          # TV shows page
│   ├── about/page.tsx          # About page
│   ├── error.tsx               # Error boundary
│   ├── loading.tsx             # Loading state
│   └── globals.css             # Global styles
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer component
│   ├── MovieCard.tsx           # Movie card component
│   └── ui/                     # Reusable UI components
├── lib/
│   ├── tmdb.ts                 # TMDB API integration
│   └── utils.ts                # Utility functions
├── public/
│   ├── sitemap.xml             # SEO sitemap
│   └── robots.txt              # Robots file
├── hooks/                      # Custom React hooks
├── .env.local                  # Environment variables
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

---

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

---

## 📄 License

This project is licensed under the MIT License.

---

# CineVerse Clean

CineVerse Clean is a premium, state-of-the-art movie streaming and discovery dashboard simulator built using a futuristic **Cyberpunk Glassmorphism** design system.

The application is completely self-contained and functions entirely offline without requiring any TMDB API keys. It runs on a local, high-fidelity mock database engine with simulated network latencies to show real-world skeleton loading shimmers and page transitions.

---

## ✨ Features 

- **🚀 Zero Configuration**: Works instantly out-of-the-box. No TMDB API keys, setups, or login modals required.
- **🎨 Premium Cyberpunk UI**: Sleek dark theme (`#050816`), neon purple and pink accent glow borders, backdrop blur filters, and dynamic layout scaling.
- **🎭 Particle Canvas**: Ambient floating particle animations in the background.
- **📱 Fully Responsive Shell**: Features a vertical collapsible glass sidebar for navigation and a floating responsive header navbar.
- **🔍 Intelligent Live Search**: Fast keyword query matcher with auto-updating instant dropdown suggestions as you type.
- **🎬 Movie Reels**: Smooth, draggable touch carousels powered by Swiper JS.
- **📺 Ambient Streaming Theatre**: Video playback screen containing simulated ambient background lighting that bleeds color matchings from the movie backdrop.
- **💖 Local Watchlist**: Instant watchlist manager syncing to browser `localStorage` with custom events.

---

## 🛠️ Technology Stack 

- **Core**: React JS (v19), Javascript, HTML5, Vanilla CSS
- **Bundler**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Sliders**: Swiper JS
- **Icons**: React Icons (Fa, Fi)
- **HTTP Client**: Axios

---

## 📂 Project Directory Structure

```text
cineverse-clean/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and local logos
│   ├── components/         # Reusable layouts and widgets
│   │   ├── BackgroundParticles/  # Floating particles background
│   │   ├── carousel/       # Swiper carousel slides
│   │   ├── footer/         # Cyberpunk footer
│   │   ├── hero/           # Cinematic featured spotlight banner
│   │   ├── movieCard/      # Poster cards with watchlist quick actions
│   │   ├── navbar/         # Search bar, alerts dropdown, profile menu
│   │   ├── sidebar/        # Collapsible navigator
│   │   ├── Skeleton/       # Pulse shimmer loading placeholders
│   │   └── trailer/        # Iframe YouTube trailer modal player
│   ├── pages/              # Routing page views
│   │   ├── About.jsx       # Offline capabilities overview
│   │   ├── Home.jsx        # Landing dashboard and movie carousels
│   │   ├── MovieDetails.jsx# Synopsis details, cast, similar recommendations
│   │   ├── Movies.jsx      # Genre filter tab sheets grid
│   │   ├── SearchPage.jsx  # Multi-facet keyword movie browser
│   │   ├── Trending.jsx    # Filterable daily/weekly charts
│   │   ├── Watchlist.jsx   # Local storage library catalog
│   │   └── WatchPage.jsx   # Simulated movie player theater
│   ├── routes/             # Path routing configurations
│   │   └── AppRoutes.jsx   # Dynamic path router with Framer Motion page routes
│   ├── services/           # Data services layer
│   │   ├── moviesData.js   # 16 detailed movie profiles & cast metadata
│   │   └── movieService.js # Simulated asynchronous latency database endpoints
│   ├── App.jsx             # Shell wrapper assembly
│   ├── App.css             # Main layout positioning stylesheet
│   ├── index.css           # Global typography, color scheme tokens, helper styles
│   └── main.jsx            # React root mount script
├── package.json            # Manifest file and packages dependencies
└── vite.config.js          # Vite config specifications
```

---

## 🚀 Getting Started

### 1. Installation
Install all package dependencies using your package manager:
```bash
npm install
```

### 2. Run Locally (Development Server)
Launch the development server:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your web browser.

### 3. Production Build
Compile the optimized production bundles:
```bash
npm run build
```
The compiled build output will be exported to the `dist/` directory.

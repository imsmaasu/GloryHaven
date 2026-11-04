# Glory Haven — React Application

A modular, structured React rebuild of the **Glory Haven** luxury fragrance store, powered by Vite.

---

## 📁 Project Architecture

```
glory-haven-react/
├── public/
│   └── Data/                      # High-resolution perfume images & brand assets
├── src/
│   ├── components/
│   │   ├── About/                 # Brand story section
│   │   ├── Cart/                  # Side cart drawer with live badge & WhatsApp checkout
│   │   ├── Contact/               # WhatsApp concierge & share links
│   │   ├── FAQ/                   # Collapsible accordion FAQ
│   │   ├── FloatingWhatsApp/      # Bottom-right quick WhatsApp button
│   │   ├── Footer/                # Social links and copyright
│   │   ├── Hero/                  # Hero section with animated headings
│   │   ├── Modal/                 # Quick View details modal
│   │   ├── Navbar/                # Sticky navbar with mobile hamburger & active scroll spy
│   │   ├── Products/              # Products grid & individual product cards
│   │   ├── Quiz/                  # Interactive 3-step Scent Finder questionnaire
│   │   └── Reviews/               # Customer review carousel with auto-play
│   ├── context/
│   │   └── CartContext.jsx        # Global Cart state (items, quantity, localStorage, checkout)
│   ├── data/
│   │   └── perfumes.js            # Fragrance catalog, quiz database, reviews, and FAQs
│   ├── App.jsx                    # Root application layout
│   ├── index.css                  # Global luxury theme variables and keyframe animations
│   └── main.jsx                   # React entry point with CartProvider
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## ✨ Features Rebuilt & Improved
- **Exact Visual Match**: Retains the luxury gold (`#d4af37`) and deep dark (`#0f0f0f`) aesthetic, typography (`Playfair Display` + `Poppins`), and hover animations.
- **Context API Cart Management**: Persistent cart with `localStorage`, quantity increment/decrement, real-time badge updates, and automated formatted WhatsApp checkout.
- **Interactive Scent Finder**: 3-question fragrance recommendation quiz that matches customers to their perfume with direct WhatsApp order links.
- **Customer Reviews Carousel**: Auto-rotating testimonials with pause/advance controls.
- **Interactive Quick View Modal**: Detailed fragrance notes (Top, Heart, Base notes, longevity).
- **Responsive Mobile Navigation**: Clean slide-down menu with automatic section scroll highlighting.

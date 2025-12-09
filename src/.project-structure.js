// Project Structure Reference
// This file is for internal reference only - describes the folder organization

/*
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer, Layout)
│   └── common/           # Reusable common components (Button, Card, etc.)
├── pages/                # Page components (Home, About, Services, Contact, etc.)
├── config/               # Configuration files (theme.js)
├── constants/            # Constants and static data (index.js - company info, services, nav items)
├── hooks/                # Custom React hooks
├── utils/                # Utility functions and helpers
├── assets/               # Static assets (images, icons, etc.)
├── App.jsx               # Main App component with routing
├── main.jsx              # Application entry point
├── index.css             # Global styles with Tailwind
└── App.css               # App-specific styles

Key Files:
- tailwind.config.js      # Tailwind configuration with custom color scheme
- postcss.config.js       # PostCSS configuration
- vite.config.js          # Vite build configuration
- package.json            # Dependencies and scripts
*/

// Usage Notes:
// - All styling uses Tailwind CSS utility classes
// - Custom color scheme defined in tailwind.config.js
// - Routing handled by React Router v6
// - Layout wrapper provides consistent Header/Footer across pages

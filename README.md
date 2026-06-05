# Tours - React Travel Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern travel website built with React and styled using Tailwind CSS. This project showcases a collection of tours with detailed information, providing users with an intuitive browsing experience.

## 📋 Project Overview

Tours is a single-page React application that displays travel tour packages. Users can browse through various tours, view details such as pricing, duration, and descriptions, and remove tours they're not interested in. The app demonstrates core React concepts including state management, component composition, props handling, and conditional rendering.

### Features

- Browse a curated list of travel tours
- View detailed information for each tour (price, description, location, etc.)
- Expand/collapse tour descriptions
- Remove tours from the list
- Refresh to reload tours
- Fully responsive design

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Frontend UI library for building component-based interfaces |
| **Tailwind CSS** | Utility-first CSS framework for rapid and responsive styling |
| **Vite** | Build tool and development server for fast hot module replacement |

### Dependencies

- **React** (v18+) - Core library
- **React DOM** - DOM rendering
- **Tailwind CSS** (v3+) - Styling
- **Vite** - Build tooling
- **Autoprefixer** & **PostCSS** - CSS processing

## 🎨 Design System Overview

The Tours project follows a clean, minimal design aesthetic optimized for travel content:

### Color Palette

- **Primary Background**: White/Cream tones for a clean, airy feel
- **Card Background**: White with subtle shadow for depth
- **Accent Color**: Blue tones for interactive elements and headings
- **Text Color**: Dark gray/charcoal for readability
- **Price Badge**: Green tint for pricing highlights
- **Remove Button**: Red tones for clear delete actions

### Typography

- **Headings**: Bold, larger font sizes with a clean sans-serif stack
- **Body**: Readable medium-weight text with proper line-height
- **Prices**: Accented with distinct styling to stand out

### Component Architecture

```
App
├── Header (Title + logo)
├── ToursList
│   ├── TourCard (repeated)
│   │   ├── TourImage
│   │   ├── TourInfo
│   │   │   ├── TourTitle
│   │   │   ├── TourPrice
│   │   │   └── TourDescription (expandable)
│   │   └── RemoveButton
│   └── RefreshButton (shown when no tours remain)
```

### Responsive Design

- **Mobile**: Single column layout with full-width cards
- **Tablet**: Two-column grid layout
- **Desktop**: Three-column grid layout with optimal spacing

## 📁 Folder Structure

```
tours/
├── public/                  # Static assets
│   └── favicon.ico
├── src/
│   ├── assets/             # Images and media files
│   │   └── tours/          # Tour images
│   ├── components/         # React components
│   │   ├── Header.jsx      # App header/title component
│   │   ├── ToursList.jsx   # Main container for tour cards
│   │   ├── TourCard.jsx    # Individual tour display card
│   │   └── RefreshButton.jsx # Button to reload tours
│   ├── data/               # Data files
│   │   └── tours.js        # Tour data array
│   ├── styles/             # Custom CSS files
│   │   └── index.css       # Global styles (extends Tailwind)
│   ├── App.jsx             # Root application component
│   ├── App.css             # App-level styles
│   ├── main.jsx            # Application entry point
│   └── index.css           # Tailwind imports and base styles
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation (this file)
```

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (v16 or later)
- **npm** or **yarn** (package manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/fakersbe-jpg/tours.git
   cd tours
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**

   Using npm:
   ```bash
   npm run dev
   ```

   Using yarn:
   ```bash
   yarn dev
   ```

   The application will start on `http://localhost:5173` (Vite's default port).

### Build for Production

```bash
npm run build
```

This generates a `dist/` folder with optimized production-ready files.

### Preview Production Build

```bash
npm run preview
```

## 🧪 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 📄 License

This project is for educational and portfolio purposes.

---

Built with ❤️ using React + Tailwind CSS
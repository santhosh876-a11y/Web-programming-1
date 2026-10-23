# RigForge - Gaming PC Builder Website

A complete, responsive, modern **Gaming PC Builder** web application developed for the college **Web Programming** subject using **React.js, Bootstrap 5, JavaScript (ES6+), HTML5, and CSS3**.

---

## 🚀 Quick Start Options

You have two convenient ways to run this project:

### Option 1: Instant Interactive Browser Preview (Zero Installation)
Simply open the included `preview.html` file directly in any modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox):
- Double-click `preview.html` in your file explorer.
- **That's it!** All features—including component selection, price calculations in INR (₹), 18% GST toggle, budget planner, compatibility verification, preset loading, build comparison, and LocalStorage—are fully functional immediately!

---

### Option 2: Vite React Development Server (Recommended for Submission)

Follow these steps to run the modular Vite React project:

#### 1. Prerequisites
Ensure **Node.js** (v18 or higher) is installed on your computer.
- If you don't have Node.js installed, download it from [https://nodejs.org](https://nodejs.org) (LTS version recommended).

#### 2. Open Terminal in the Project Directory
Open PowerShell, Command Prompt, or VS Code Terminal in `d:\Downloads\web program`:
```bash
cd "d:\Downloads\web program"
```

#### 3. Install Required Dependencies
Run the install command:
```bash
npm install
```
This installs:
- `react` & `react-dom`
- `react-router-dom`
- `bootstrap` & `bootstrap-icons`
- `vite` & `@vitejs/plugin-react`

#### 4. Start the Development Server
Run:
```bash
npm run dev
```

#### 5. Open in Your Browser
The terminal will display the local development URL (usually `http://localhost:3000` or `http://localhost:5173`).
Open that link in your browser to explore the web application.

#### 6. Build for Production (Optional)
To generate an optimized production bundle:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

---

## 🛠️ Project Structure

```
web program/
├── package.json              # Project dependencies and npm scripts
├── vite.config.js            # Vite configuration with React plugin
├── index.html                # Main entry HTML file with Google Fonts
├── preview.html              # Standalone interactive zero-install preview
├── README.md                 # Setup & running instructions
├── PROJECT_REPORT.md         # College project documentation and viva Q&A
├── public/
│   └── favicon.svg           # Neon gaming rig SVG brand icon
└── src/
    ├── main.jsx              # React DOM mounting
    ├── App.jsx               # Application routes and layout
    ├── index.css             # Dark gaming cyber theme styling
    ├── context/
    │   └── BuilderContext.jsx# React Context for cross-page state
    ├── data/
    │   ├── componentsData.js # 8 component categories with specs & prices
    │   └── presetBuilds.js   # 4 curated gaming PC configurations
    ├── utils/
    │   ├── priceCalculator.js# INR currency formatting & tax logic
    │   ├── compatibilityChecker.js # Sockets, RAM, case & PSU checks
    │   └── storage.js        # LocalStorage persistence utility
    ├── components/
    │   ├── Navbar.jsx        # Navigation bar with active build counter
    │   ├── Footer.jsx        # Academic footer with tech badges
    │   ├── HeroSection.jsx   # Landing banner with CTA buttons
    │   ├── ComponentCard.jsx # Hardware product card with image & badges
    │   ├── ComponentSelector.jsx # Category pills, search & hardware grid
    │   ├── PriceSummary.jsx  # Real-time subtotal, GST & grand total
    │   ├── BudgetPlanner.jsx # Budget presets, custom input & progress bar
    │   ├── CompatibilityChecker.jsx # Real-time hardware validation
    │   ├── SavedBuilds.jsx   # Saved builds list with load/delete
    │   ├── BuildComparison.jsx # Side-by-side comparison table
    │   └── SearchFilters.jsx # Search by name/brand & price sort
    └── pages/
        ├── Home.jsx          # Landing page
        ├── PCBuilder.jsx     # Main builder workstation
        ├── SavedConfigurations.jsx # Saved builds manager
        ├── CompareBuilds.jsx # Side-by-side comparison page
        └── BuildSummary.jsx  # Printable specification sheet
```

---

## 🌟 Key Features

1. **8 Core Hardware Categories:** CPU, GPU, Motherboard, RAM, Storage, PSU, Cabinet, and CPU Cooler.
2. **Real-time Compatibility Verification:**
   - CPU and Motherboard socket match (LGA1700, AM4, AM5).
   - DDR4 vs DDR5 RAM type validation against motherboard slots.
   - Motherboard form factor (ATX, Micro-ATX) vs PC Cabinet size.
   - Power supply wattage vs estimated power draw.
3. **Live Price Calculator:**
   - Individual component costs in Indian Rupees (`₹`).
   - Configurable 18% GST toggle.
   - Subtotal and grand total.
4. **Interactive Budget Planner:**
   - Quick preset budgets (₹50k, ₹75k, ₹1L, ₹1.5L) or custom user input.
   - Color-coded progress bar (Green, Yellow, Red).
   - Live remaining balance or over-budget alert.
5. **Prebuilt Gaming PC Presets:**
   - Budget Esports Rig (~₹51,000)
   - 1080p Ultra Gaming PC (~₹81,000)
   - Mid-Range 1440p Powerhouse (~₹1,35,000)
   - High-End 4K Enthusiast PC (~₹2,30,000)
6. **Search & Filtering:**
   - Search by name or brand.
   - Filter by brand.
   - Sort by price (low to high, high to low).
7. **LocalStorage Persistence:**
   - Save custom configurations with custom titles.
   - Rename, load, or delete saved configurations.
8. **Build Comparison:**
   - Side-by-side comparison table highlighting differences between two configurations.
9. **Build Summary & Print Invoice:**
   - Clean hardware specification sheet.
   - Print/Save as PDF via `window.print()` with custom print styles.
   - One-click copy build specifications to clipboard.

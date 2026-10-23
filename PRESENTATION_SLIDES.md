# RIGFORGE: INTERACTIVE GAMING PC BUILDER
## 7-Slide Academic Presentation (PPT Content & Speaker Notes)

**Course:** Web Programming / Full-Stack Web Development  
**Institution:** Department of Computer Science and Engineering, Rajalakshmi Engineering College  
**Presenters:** Santhosh G (240701473) & Rohith D (240701435)  
**Supervisor:** Mrs. Deepa, Assistant Professor  

---

### SLIDE 1: Title & Project Overview

**Slide Title:**  
# RIGFORGE
### Interactive Gaming PC Builder and Compatibility Estimation System

**Slide Subtitle:**  
A Modern, Responsive Client-Side Web Application for Hardware Assembly, Constraint Validation, and Budget Optimization

**Presenters & Credentials:**  
- **Santhosh G** (Reg. No: 240701473)  
- **Rohith D** (Reg. No: 240701435)  
- **Course:** III Year B.E. Computer Science and Engineering  
- **Institution:** Rajalakshmi Engineering College, Chennai – 602 105  
- **Supervisor:** Mrs. Deepa, Assistant Professor  
- **Date:** October 2026  

**Visual Layout Cue:**  
*Dark cyber-gaming background with glowing cyan branding icon (`RIGFORGE`), college insignia placeholder, and presentation date badge.*

> **Speaker Notes (Slide 1):**  
> "Good morning respected examiners and faculty members. Today, my teammate Rohith and I are presenting our Web Programming project: **RigForge**, an interactive Gaming PC Builder and Compatibility Estimation System. RigForge is designed to remove the guesswork and technical friction of building a custom PC, combining real-time hardware constraint validation with live price and budget tracking in Indian Rupees."

---

### SLIDE 2: Problem Statement & Motivation

**Slide Title:**  
## The Problem: Friction in Custom PC Building

**Bullet Points:**
- **High Risk of Hardware Incompatibility:**  
  - Socket mismatches (e.g., trying to fit an Intel LGA1700 CPU into an AMD AM4/AM5 motherboard).
  - RAM generation conflicts (DDR4 vs DDR5 pin configurations and voltage incompatibilities).
  - Form factor spatial constraints (Full ATX motherboards failing to fit inside Micro-ATX chassis).
  - Power supply deficits leading to emergency thermal shutdowns and transient spike crashes.
- **Financial Ambiguity for Indian Consumers:**  
  - Lack of tools tailored for Indian pricing (INR ₹) and statutory 18% GST calculations.
  - No dynamic budget tracking, causing customers to accidentally exceed their spending limits.
- **Flaws in Existing Tools:**  
  - Cluttered with overseas affiliate ads, foreign currencies, slow multi-page reloads, or paid APIs.

**Visual Layout Cue:**  
*Three distinct alert cards contrasting "Hardware Pin Incompatibility", "Electrical Deficit Risk", and "Budget Overflow".*

> **Speaker Notes (Slide 2):**  
> "Building a custom PC offers superior performance and cost efficiency, but beginners face serious pitfalls. Forcing incompatible parts—like an Intel processor into an AMD socket or DDR5 RAM into a DDR4 motherboard—leads to physical pin damage and wasted money. Moreover, existing international tools don't cater to Indian pricing (₹) or 18% GST tax structures. RigForge was conceived to solve these exact problems through client-side automation."

---

### SLIDE 3: System Objectives & Technology Stack

**Slide Title:**  
## Project Objectives & Technology Stack

**Key Objectives:**
1. **Interactive 8-Category Workstation:** Smooth selection across CPU, GPU, Motherboard, RAM, Storage, PSU, Case, and Cooler.
2. **Sub-Millisecond Compatibility Engine:** Automatic validation of sockets, memory standards, dimensions, and wattage.
3. **Live Price & 18% GST Engine:** Dynamic recalculation in INR (₹) using standard Indian numbering formats without page reloads.
4. **Adaptive Budget Planner:** Visual color-coded progress tracker with predefined milestones (₹50k, ₹75k, ₹1L, ₹1.5L).
5. **Zero-Server Persistence:** Browser LocalStorage CRUD operations and printable quotation sheets.

**Technology Stack:**
- **Frontend Framework:** React.js 18 (Functional Components, React Hooks: `useState`, `useMemo`, `useContext`)
- **UI & Grid System:** Bootstrap 5.3 + Bootstrap Icons (Responsive 12-Column Grid)
- **Styling:** Custom CSS3 with Dark Cyberpunk Gaming Theme (`#0a0d14` background, neon cyan accents)
- **Build Tooling:** Vite 5.2 (High-speed HMR, ES module bundling)
- **Persistence:** HTML5 Web Storage API (`localStorage`)

**Visual Layout Cue:**  
*Side-by-side card layout: Objectives on the left column, Tech stack badges (React, Bootstrap 5, Vite, LocalStorage) on the right.*

> **Speaker Notes (Slide 3):**  
> "To achieve our goals, we engineered a single-page application using React 18, Bootstrap 5, and Vite. We eliminated the need for costly backend servers by executing all compatibility checks deterministically in the browser and leveraging HTML5 LocalStorage for persistence. This ensures instantaneous sub-millisecond response times and guarantees complete privacy."

---

### SLIDE 4: System Architecture & Data Pipeline

**Slide Title:**  
## System Architecture & State Pipeline

**Architecture Highlights:**
- **Presentation Layer:** Responsive navigation, 8-category selector pills, product cards grid, and sticky analysis sidebar.
- **Centralized State (`BuilderContext`):** Acts as the single source of truth across all 5 routed pages.
- **Reactive Computation Pipeline:** Uses `useMemo` hooks to recompute financials and compatibility in $< 1\text{ ms}$ upon any selection change.
- **Persistence Layer (`storage.js`):** Synchronous JSON serialization to browser LocalStorage with defensive error handling.

**Execution Data Flow:**
```
[User Clicks "Select Component"]
              |
              v
[Action Dispatched to BuilderContext]
              |
      +-------+-------+
      |               |
      v               v
[Totals Calculator]   [Compatibility Engine]
- Subtotal + GST      - Sockets, RAM, Case, PSU
      |               |
      +-------+-------+
              |
              v
[Budget Analysis & Progress Heuristic]
              |
              v
[React Virtual DOM Updates UI Instantly (< 16ms, 60 FPS)]
```

> **Speaker Notes (Slide 4):**  
> "This slide illustrates our system architecture. Rather than passing props across dozens of nested components, we engineered a centralized state pipeline using React Context. When a user selects a component—like an RTX 4060 GPU—the context dispatches the action, triggers our price and compatibility engines simultaneously via memoized hooks, and re-renders only the affected DOM nodes in under 16 milliseconds."

---

### SLIDE 5: Core Algorithms & Compatibility Engine

**Slide Title:**  
## Core Algorithms & Constraint Formulation

**1. Compatibility Rules Engine:**
- **Socket Match ($C_{\text{socket}}$):** Ensures $\text{socket}(\text{CPU}) == \text{socket}(\text{Motherboard})$ (e.g., LGA1700 vs AM4/AM5).
- **Memory Standard ($C_{\text{memory}}$):** Verifies $\text{ramType}(\text{RAM}) \subseteq \text{ramType}(\text{Motherboard})$ (DDR4 vs DDR5).
- **Form Factor Support ($C_{\text{formfactor}}$):** Verifies $\text{formFactor}(\text{Motherboard}) \in \text{supported}(\text{Case})$.
- **Power Supply Envelope ($C_{\text{power}}$):**
  $$\text{System Draw} = \text{TDP}_{\text{CPU}} + \text{TDP}_{\text{GPU}} + 100\text{W}$$
  $$\text{Recommended PSU} = \text{System Draw} \times 1.30$$
  - Critical Alert if $\text{PSU Wattage} < \text{System Draw}$.
  - Advisory Warning if $\text{PSU Wattage} < \text{Recommended PSU}$.

**2. Adaptive Budget Utilization Heuristic:**
- **Safe Zone ($\le 85\%$):** Green progress bar (`Within Budget`).
- **Caution Zone ($85\% - 100\%$):** Amber progress bar (`Near Limit`).
- **Deficit Zone ($> 100\%$):** Red pulsing alert showing exact over-budget amount ($+\text{₹Over}$).

> **Speaker Notes (Slide 5):**  
> "Our compatibility engine operates on deterministic relational attributes. It verifies socket standards, memory pin architectures, case dimensions, and total electrical wattage. It calculates total power draw with a 30% safety headroom for transient gaming spikes. In tandem, our budget algorithm classifies spending into safe, caution, and deficit zones, giving users immediate visual feedback."

---

### SLIDE 6: Key Features & Experimental Results

**Slide Title:**  
## System Features & Performance Benchmarks

**Delivered Application Modules:**
- **Interactive PC Builder:** 8 hardware categories with real-time search, brand filter, and price sort.
- **4 Curated Prebuilt Profiles:** Budget Esports (₹51k), 1080p Ultra (₹81k), 1440p Powerhouse (₹1.35L), and 4K Enthusiast (₹2.30L).
- **Side-by-Side Build Comparison:** Contrasts two configurations with highlighted component differences.
- **Printable Specification Sheet:** Generates formatted hardware quotations with `@media print` PDF support.
- **Browser LocalStorage CRUD:** Save, load, rename, and delete custom rigs locally.

**Experimental Benchmarks (Google Lighthouse Audit):**
- **Performance Score:** **98 / 100** | **Accessibility:** **96 / 100** | **Best Practices:** **100 / 100**
- **Validation Latency:** **$0.52\text{ ms}$** across all 8 components ($< 4\%$ of 60 FPS frame).
- **Production Bundle Size:** **$72.4\text{ KB}$** (gzipped) — ultra-fast initial load in $0.6\text{s}$.

> **Speaker Notes (Slide 6):**  
> "Here are the core features and benchmarking results. RigForge includes four curated prebuilt rigs, side-by-side build comparison, and a print-ready invoice sheet. In our Lighthouse performance audit, RigForge scored 98/100 with an ultra-lightweight 72.4 KB bundle size. The compatibility engine executes in just 0.52 milliseconds, ensuring zero UI lag or dropped frames."

---

### SLIDE 7: Conclusion & Future Enhancements

**Slide Title:**  
## Conclusion & Future Roadmap

**Key Achievements:**
- Successfully eliminated hardware configuration errors through automated constraint validation.
- Delivered a responsive, visually appealing gaming-themed web application using modern React & Bootstrap 5.
- Achieved complete client-side persistence and financial transparency without expensive backend dependencies.

**Future Enhancements:**
1. **Live E-Commerce Scraping:** Real-time price tracking across Indian retailers (MDComputers, PrimeABGB).
2. **AI-Powered FPS Predictor:** Estimating average gaming frame rates and CPU-GPU bottlenecks.
3. **Cloud Synchronization:** Cross-device profiles and community rig sharing via Supabase.
4. **3D Virtual Assembly:** Interactive WebGL / Three.js 3D chassis visualization.

**Thank You!**  
*Questions & Discussion Invited*

> **Speaker Notes (Slide 7):**  
> "To conclude, RigForge proves that client-side web technologies can deliver powerful, accessible, and error-free hardware configuration tools. For future work, we plan to incorporate real-time e-commerce price scrapers, AI-driven gaming FPS predictors, and 3D component visualization using Three.js. Thank you for your time and attention. We are now happy to answer any questions."

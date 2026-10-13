# Rajath Nayak — Monumental Cinematic Portfolio

An award-winning, Awwwards-level interactive portfolio website for **Rajath Nayak**, a Computer Science Engineering undergraduate at Sahyadri College of Engineering and Management, Mangaluru, and full-stack developer.

Heavily inspired by the monumental visual presentation, dominant photography, and fluid hover-driven identity reveals of [landonorris.com](https://landonorris.com/) paired with the progressive editorial storytelling of [abhishekworks.com](https://www.abhishekworks.com/).

---

## 🌟 Key Overhauls & Architectural Features

### 1. Monumental Hero & Fluid Identity Reveal (Lando Norris-Inspired)
- **Dominant Portrait Presence**: Occupies **75–82% of desktop viewport height** (`h-[80vh]`), rising organically from the canvas without small boxed borders or generic cards.
- **Monumental Typography**: Giant `RAJATH NAYAK` typography (`15vw`) layered behind and across the portrait.
- **Fluid Cursor Mask Reveal**:
  - The formal navy suit photograph appears first as the default presentation.
  - Hovering activates an expansive, velocity-reactive organic feathered mask (radius 320px–480px) revealing the casual red polo tea plantation photo.
  - Smooth spring/lerp physics provide natural momentum and fluid inertia.
  - Both photographs are calibrated independently (`scale`, `object-position`) to preserve exact facial identity and facial alignment without morphing.
  - Mobile touch support: Tap or toggle pill provides instantaneous switching.

### 2. Full-Width Rich Visual Showcases (No Plain Text Cards)
- **01 // HACKHUB (Futuristic Electric Blue)**:
  - Realistic browser workstation featuring 4 interactive live screens:
    1. *Discovery Radar*: Live hackathons, prize pools, and countdown timers.
    2. *AI Matchmaker*: Radar matching complementary skills with match confidence ratings.
    3. *Squad War Room*: Collaborative Kanban milestones & branch synchronizations.
    4. *AI Pitch Copilot*: Terminal generating system blueprints in real-time.
  - Verified repository: [github.com/Rajath-nayakk/hackhub](https://github.com/Rajath-nayakk/hackhub).
- **02 // FIN PILOT (Premium Emerald & Charcoal)**:
  - High-density FinTech workstation featuring 3 interactive views:
    1. *Predictive Analytics*: Savings velocity gauge, monthly expenditure ceiling slider, and cashflow charts.
    2. *AI Auto-Classifier*: Live parsing of raw UPI/NEFT narration strings with confidence scores.
    3. *Wealth Copilot*: Proactive insights engine diagnosing subscription pruning.
  - Verified repository: [github.com/Ujwalushettigar/AI-Personal-Finance-Coach](https://github.com/Ujwalushettigar/AI-Personal-Finance-Coach).
- **03 // CINEMATIX (Crimson & Obsidian)**:
  - Cinema booking workstation featuring 3 interactive views:
    1. *Auditorium Seat Engine*: Interactive curved cinema screen with clickable SVG seats, VIP tiers, and real-time total calculator.
    2. *Showtime Radar*: Film showcase with IMAX 3D / Dolby Atmos screenings.
    3. *Digital Ticket Pass*: Contactless boarding pass with QR code generation.
  - Verified repository: [github.com/Rajath-nayakk](https://github.com/Rajath-nayakk).

### 3. Asymmetric Editorial Layout (Chapter Narrative)
- **Chapter 01 — Manifesto**: Asymmetrical layout, biometric academic credentials at Sahyadri College, and side-by-side formal/casual philosophy comparisons.
- **Chapter 02 — Work**: Full-bleed immersive showcases.
- **Chapter 03 — Toolkit**: Interactive categorized visual matrix with live category pills.
- **Chapter 04 — Journey**: Chronological editorial milestone timeline.
- **Chapter 05 — Transmission**: Direct inquiry terminal with confetti celebration, printable CV preview modal, and verified contact links.

---

## 📬 Verified Personal Information

All personal contact details are centralized in [`src/data/portfolioData.ts`](file:///c:/Users/Rajath%20Nayak/OneDrive/Desktop/Portfolio/src/data/portfolioData.ts):
- **Email**: [rajathnayk2006@gmail.com](mailto:rajathnayk2006@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/rajath-nayak-601678335/](https://www.linkedin.com/in/rajath-nayak-601678335/)
- **GitHub**: [https://github.com/Rajath-nayakk](https://github.com/Rajath-nayakk)
- **Academic Affiliation**: Sahyadri College of Engineering and Management, Mangaluru (B.E. Computer Science & Engineering, 3rd Year)

---

## 🚀 Deploy to Vercel (1-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRajath-nayakk%2Frajath-portfolio)

### Quick Steps to Publish Live:
1. Click the **Deploy with Vercel** button above or visit [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account (`Rajath-nayakk`) and import `rajath-portfolio`.
3. Keep default settings (`Framework: Next.js`, root directory `./`).
4. Click **Deploy**. In under 60 seconds, your site will be live at `https://rajath-portfolio.vercel.app`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & CSS Custom Properties
- **Motion & Physics**: Framer Motion & GSAP ScrollTrigger
- **Smooth Scroll**: Lenis Smooth Scrolling
- **Audio Feedback**: Synthesized Web Audio API Drone
- **Icons**: Custom SVG Icons & Lucide React

---

## 💻 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build optimized production bundle
npm run build
```

The local development server runs at `http://localhost:3000`.

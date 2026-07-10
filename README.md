# Janvi Kachhadiya - Interactive Portfolio (React + Tailwind CSS)

Welcome to your newly upgraded, highly attractive portfolio website! This project has been rebuilt from a static HTML site into a state-of-the-art **React + Vite + Tailwind CSS** application.

## 🚀 How to Run the Project Locally

Because of terminal system environment limits during our pair-programming session, we could not run `npm install` directly on your behalf. However, all configuration and source files are fully set up and ready to run.

To start the local development server:

1. **Open your terminal** in the project directory (`d:\Janvi's portfolio`).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local server URL (usually `http://localhost:3000`).

---

## 🎨 Design Features & System

- **Premium Dark Mode**: Built with deep dark background colors, featuring glowing accent gradient blobs (neon teal, deep indigo, violet) in the background.
- **Glassmorphism**: Sticky navigation bars, info panels, form modules, and timeline cards have backdrop blurs, subtle borders, and glowing shadows.
- **Micro-Animations**: Underlined navigation link indicators on scroll, hover-scale effects on tech badges, and responsive button glow transitions.
- **Custom Typing Hook**: A custom-written React typing simulator on the Hero banner that cycles through your titles without external package bloat.

---

## 📂 Project Structure

The project has been organized according to modern React best practices:

```text
├── index.html                  # Mount entry point for Vite/React
├── package.json                # Project dependencies (Vite, React, Tailwind, Lucide Icons)
├── vite.config.js              # Vite bundler configurations
├── tailwind.config.js          # Tailwind styling design tokens (fonts, colors, keyframes)
├── postcss.config.js           # PostCSS configuration for compiling Tailwind
├── janvi.jpg                   # Your profile picture (referenced by the Hero component)
├── README.md                   # Setup guide (this file)
└── src/
    ├── main.jsx                # React DOM render entry
    ├── index.css               # Core styling imports & background blob animations
    ├── App.jsx                 # Master page assembler containing global layout
    └── components/             # Reusable UI sections:
        ├── Navbar.jsx          # Mobile-responsive glass header with active-link highlights
        ├── Hero.jsx            # Banner containing typing hook, custom profile frame & socials
        ├── About.jsx           # Short bio with interactive stats cards (CGPA, Projects, etc.)
        ├── Skills.jsx          # Categorized, tab-filtered skill grids with progress trackers
        ├── Experience.jsx      # Chronological timeline cards detailing corporate milestones
        ├── Projects.jsx        # Cards for featured applications with gradient header visuals
        ├── Education.jsx       # Timeline separating academic degrees and technical training
        ├── Certifications.jsx  # Four-column showcase of technical course credentials
        ├── Contact.jsx         # Contact forms with state validated success states & details
        └── Footer.jsx          # Bottom section with back-to-top buttons & quick links
```

---

## 📝 Credentials & Details Included (from your Resume)

- **Work Experience**:
  - **Loggix** (Remote Freelance Vue.js & JS Developer)
  - **Wilysion Technology** (Frontend Web Developer - 1.3 Years)
- **Technical Skills**:
  - Categorized under: Frontend, Backend, Databases, Languages, Cloud & DevOps, Tools, and Core Concepts.
- **Projects**:
  - **E-GAMESCOUT** (eSports Scouting Platform)
  - **FarmStayHub** (Booking Platform)
  - **GLS FDP Portal** (Faculty Development Program Portal)
  - **DFarm React Template** (Agriculture Frontend Template)
- **Education**:
  - **GLS University** (M.Sc IT, 2025–2027)
  - **Saurashtra University** (B.Sc IT, CGPA 9+, 2022–2025)
  - **Creative Design & Multimedia Institute** (Master in Full Stack, Grade A+, 2022–2024)
  - **IACT Education** (Computer Master Course, Grade A, 2022)
- **Certifications**:
  - AWS S3 for Web Hosting, Figma Introduction, GLS Hackathon 2025, Code Wars Coding Competition.

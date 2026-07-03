# Kadhiravan A - Professional Data Scientist & AI Engineer Portfolio

An ultra-premium, cinematic portfolio website built to position Kadhiravan A as a top-tier Data Scientist, AI Engineer, and GenAI Developer. 

This website features custom dark/light modes (defaulting to dark), cinematic particle backdrops, typewriter role rotators, interactive statistics counters, detailed skills and projects showcases, a vertical experience timeline, a verification portal for certifications, an inline resume PDF previewer, and a fully functional Formspree contact form.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- `npm` (included with Node.js)

### Installation & Setup

1. **Navigate to the project folder:**
   ```bash
   cd C:\Users\Lenovo\.gemini\antigravity\scratch\kadhiravan-portfolio
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

3. **Build the production bundle:**
   ```bash
   npm run build
   ```

---

## 🛠️ Folder Structure

```text
kadhiravan-portfolio/
├── public/
│   ├── images/              # Custom AI-generated illustration assets
│   │   ├── hero_illustration.webp
│   │   ├── hr_dashboard.webp
│   │   ├── zomato_map.webp
│   │   ├── sales_prediction.webp
│   │   ├── titanic.webp
│   │   ├── movie_rating.webp
│   │   └── hostelsync.webp
│   └── resume.pdf           # Placeholder PDF (Replace with your actual resume)
├── src/
│   ├── app/
│   │   ├── globals.css      # Core styles, variables, glows & animations
│   │   ├── layout.js        # Root SEO layout with Inter & JetBrains Mono fonts
│   │   └── page.js          # Home assembly page (handles loader, back to top)
│   ├── components/
│   │   ├── About.jsx        # Professional narrative & animated stats counters
│   │   ├── BrandIcons.jsx   # Custom SVG icons for Github & LinkedIn
│   │   ├── Certifications.jsx # Verification portal layout
│   │   ├── Contact.jsx      # Formspree contact form with honeypot & alerts
│   │   ├── Experience.jsx   # Alternating vertical career timeline
│   │   ├── Footer.jsx       # Brand monogram footer with top cyan glow line
│   │   ├── Hero.jsx         # Rotating typewriter role & links
│   │   ├── LoadingScreen.jsx# Pulsing loader with particle emergence
│   │   ├── Navbar.jsx       # Sticky glassmorphic navbar with active section observer
│   │   ├── Projects.jsx     # Showcase of 6 projects with tech stacks
│   │   ├── Resume.jsx       # Resume download and iframe lightbox modal
│   │   └── Skills.jsx       # Categorized skill cards with hover effects
│   ├── hooks/
│   │   └── useActiveSection.js # IntersectionObserver hook for navbar tracking
│   └── lib/
│       └── constants.js     # Central copy database (names, roles, text)
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## ⚙️ Customization Guide

### 1. Update Contact Form (Formspree ID)
To receive emails directly through Formspree, navigate to [src/components/Contact.jsx](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/kadhiravan-portfolio/src/components/Contact.jsx):
1. Sign up for a free account at [Formspree](https://formspree.io).
2. Create a new form and get your **Form ID** (e.g. `xqkgnpzo`).
3. Replace the placeholder endpoint at line 9:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```

### 2. Replace the Resume PDF
Replace the placeholder PDF located at:
- [public/resume.pdf](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/kadhiravan-portfolio/public/resume.pdf)
with your actual updated resume. Make sure it is named exactly `resume.pdf`.

### 3. Update Certifications Verification links
In [src/lib/constants.js](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/kadhiravan-portfolio/src/lib/constants.js), update the `verifyUrl` parameter for each certification in the `CERTIFICATIONS` array to link to your actual credential PDFs or verification URLs.

### 4. Text, Skills & Project Edits
To modify your bio, statistics, skill category lists, project names, and experience achievements, simply edit [src/lib/constants.js](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/kadhiravan-portfolio/src/lib/constants.js). All text contents are unified in this file to make updating extremely simple.

---

## 🎨 Technology Stack
* **Framework:** Next.js v16+ (App Router)
* **Styling:** Tailwind CSS v4+
* **Animations:** Framer Motion
* **Icons:** Lucide React & Custom Brand SVGs
* **Typography:** Inter & JetBrains Mono (Google Fonts)

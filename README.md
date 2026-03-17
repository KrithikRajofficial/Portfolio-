# Krithik Raj — Robotics Portfolio

World-class animated portfolio built with **Next.js 14 + Three.js + Tailwind CSS + GSAP + Framer Motion**.

## ✨ Features

- 🌌 **3D Morphing Particle Sphere** — Three.js sphere that morphs into a torus, mouse parallax
- 🪪 **Animated ID Card** — 3D tilt, holographic sheen, scanning line, animated barcode
- 📋 **Services-Style Projects** — Accordion with ↗ arrow expand, smooth Framer Motion animations
- ⚙️ **Skills Grid** — Hover lift + glow effects
- 📅 **Experience Timeline** — Scroll-animated growing line with staggered cards
- 📧 **Contact Form** — Full form with links
- 🖱️ **Custom Cursor** — Violet dot + trailing ring, grows on hover
- 🎨 **Full Dark Theme** — Violet/Cyan/Lime design system

## 🚀 Quick Start

### Option A — GitHub Codespaces (no local setup)
1. Go to `https://github.com/KrithikRajofficial/Portfolio-`
2. Click **Code** → **Codespaces** → **Create codespace on main**
3. In the terminal that opens:
```bash
npm install
npm run dev
```
4. Click **Open in Browser** when prompted

### Option B — Local Setup
```bash
git clone https://github.com/KrithikRajofficial/Portfolio-.git
cd Portfolio-
npm install
npm run dev
```
Open `http://localhost:3000`

## 📁 Project Structure

```
Portfolio-/
├── app/
│   ├── layout.tsx       ← Root layout + metadata
│   ├── page.tsx         ← Main page (all sections)
│   └── globals.css      ← Design system + Tailwind
├── components/
│   ├── ui/
│   │   ├── Cursor.tsx   ← Custom cursor
│   │   └── Navbar.tsx   ← Fixed nav + scroll detection
│   ├── sections/
│   │   ├── Hero.tsx     ← 3D sphere + typed text
│   │   ├── About.tsx    ← ID card + bio
│   │   ├── Projects.tsx ← Accordion project list
│   │   ├── Skills.tsx   ← Skills grid
│   │   ├── Experience.tsx ← Timeline
│   │   └── Contact.tsx  ← Contact form
│   └── three/
│       └── SphereScene.tsx ← React Three Fiber sphere
├── lib/
│   └── utils.ts         ← All data (projects, skills, experience)
├── public/
│   └── assets/
│       └── resume/      ← Put Krithik_Raj_Resume.pdf here
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## 🌐 Deploy to Vercel

1. Push this repo to `github.com/KrithikRajofficial/Portfolio-`
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import `KrithikRajofficial/Portfolio-`
4. Vercel auto-detects Next.js → Click **Deploy**
5. Live at `portfolio-.vercel.app` (rename in Vercel settings)

Every `git push` auto-redeploys. Free tier.

## 🎨 Customisation

All content lives in `lib/utils.ts`:
- `PROJECTS` — Edit your project titles, descriptions, links
- `SKILLS` — Add/remove skills
- `EXPERIENCE` — Update your work history

Colors in `app/globals.css`:
```css
--violet: #8B5CF6;
--cyan:   #06B6D4;
--lime:   #A3E635;
```

## 🔧 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | Framework |
| React Three Fiber | 8.x | Three.js in React |
| Three.js | 0.167 | 3D particle sphere |
| Framer Motion | 11.x | Section animations |
| Tailwind CSS | 3.4 | Styling |
| TypeScript | 5.x | Type safety |

## 📝 Add Your Resume

Place your PDF at:
```
public/assets/resume/Krithik_Raj_Resume.pdf
```
The Resume button in the hero will link to it automatically.

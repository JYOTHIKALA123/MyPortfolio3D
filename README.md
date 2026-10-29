# Jyothikala V — 3D Developer Portfolio

A responsive, recruiter-focused portfolio built with **React + Vite**, with an interactive 3D hero made using
**Three.js (React Three Fiber + Drei)**. It is a plain static website: no backend, no API keys, no secrets.

---

## 1. Run it on your computer

You need **Node.js 18 or newer** (download the LTS version from https://nodejs.org).

```bash
npm install        # downloads the libraries (only the first time)
npm run dev        # starts the site at http://localhost:5173
```

Other commands:

```bash
npm run build      # creates the production site in the "dist" folder
npm run preview    # shows the built "dist" site locally (to test before deploying)
```

---

## 2. Make it yours

**Almost everything you can edit is in ONE file: `src/data/siteData.js`.** It is already filled in from your resume
(contact details, skills, projects, experience, education, certifications). Things still to finish:

| What | Where in `siteData.js` | Notes |
| --- | --- | --- |
| BCA college name | `education[1].institution` | Not on your resume. Add it, or delete that card |
| Project GitHub links | `projects[...].github` | A GitHub button appears automatically once you add a link |
| Project live demos | `projects[...].demo` | Only BookBazaar has one so far |
| Hide your phone number | `contact.phone` | Set to `''` to remove the phone row |

Anything left as a placeholder is marked **“Placeholder”** on the page and shows a message instead of a broken link.

**Files:**

- **Resume PDF** → `src/assets/resume/` already contains your resume. To update it, replace the file (keep only one PDF there)
  and restart `npm run dev` or rebuild.
- **Profile photo** (optional) → copy one `.jpg/.png/.webp` (square, under ~300 KB) into `src/assets/profile/`.
- **Favicon** → replace `public/favicon.svg`. **Social preview image** → replace `public/og-image.png` (1200×630).

**After deploying**, open `index.html` and change `og:image` / `twitter:image` to your full live URL, for example
`https://your-site.vercel.app/og-image.png`, so link previews work on LinkedIn/WhatsApp.

---

## 3. Put it on GitHub

1. Create a free account at https://github.com if you don’t have one.
2. Click **New repository**, name it (for example `portfolio`), and create it **without** a README.
3. In this project folder run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

GitHub will ask you to sign in through its own login flow. **Never share your password or tokens with anyone,
including an AI assistant.** Before pushing, check `siteData.js` contains only details you are happy to make public.

---

## 4. Deploy for free on Vercel (recommended)

1. Go to https://vercel.com and choose **Sign Up → Continue with GitHub**.
2. Click **Add New… → Project** and import your `portfolio` repository.
3. Vercel detects Vite automatically. Confirm: **Build command** `npm run build`, **Output directory** `dist`.
4. Click **Deploy**. After about a minute you get a live URL such as `https://portfolio-xxxx.vercel.app`.
5. Every future `git push` redeploys automatically.

The free “Hobby” plan is intended for personal, non-commercial sites like a portfolio. Limits and terms can change,
so check https://vercel.com/pricing. A custom domain (e.g. `jyothikala.dev`) is optional and costs money
through a domain registrar; Vercel’s *Settings → Domains* page shows what to set up.

### Alternative: Netlify

Sign in at https://app.netlify.com with GitHub → **Add new site → Import an existing project** → pick the repo →
Build command `npm run build`, Publish directory `dist` → Deploy.

`public/404.html` is used automatically as the custom “page not found” page on both Vercel and Netlify.

---

## 5. How the project is organised

```
index.html                 SEO title, description, social-sharing tags
public/                    favicon, 404 page, og-image, robots.txt
src/
  data/siteData.js         ← ALL your editable content
  App.jsx                  page layout (all sections in order)
  components/
    Navbar, Hero, About, Skills, Projects, Experience, Education, Contact, Footer
    HeroVisual.jsx         decides: 3D scene, loading state, or CSS fallback
    HeroScene.jsx          the React Three Fiber 3D scene (lazy-loaded)
    SceneFallback.jsx      CSS-only version when WebGL is unavailable
    SmartLink, ResumeButton, ResumeHelpDialog, Toast, Reveal …
  hooks/                   useReducedMotion, useActiveSection
  lib/                     asset discovery (resume/photo), WebGL check, notifications
  styles/global.css        all styling (colour tokens at the top)
  assets/resume, assets/profile   drop your PDF / photo here
```

### 3D, performance and accessibility notes

- The 3D code (~240 KB gzipped) loads in a **separate chunk**, only after the page appears, so the site is usable
  immediately. A loading indicator shows meanwhile.
- If WebGL is missing, fails, or the GPU context is lost, a **CSS fallback** is shown automatically.
- Rendering **pauses when the scene is off-screen**, uses a lower pixel ratio on phones, and honours
  `prefers-reduced-motion` (static scene, no scroll animations).
- Semantic HTML, a skip link, keyboard navigation, visible focus rings, and `aria-current` on the active nav item.
- Fonts (Inter, Space Grotesk) come from Google Fonts; if they can’t load, system fonts are used.

---

## 6. Troubleshooting

- **Blank page after deploy on a sub-folder host:** the project already uses relative paths (`base: './'`).
- **Resume button shows instructions instead of downloading:** the PDF must be inside `src/assets/resume/` and end with `.pdf`;
  restart the dev server (or rebuild) after adding it.
- **3D scene looks plain/slow on an old device:** it falls back or reduces quality automatically; you can also
  lower `count` in `HeroScene.jsx`.

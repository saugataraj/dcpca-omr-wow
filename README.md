# DCPCA Official Website (Astro + Tailwind + GSAP)

Modern, ultra-fast, scrollytelling website for **Dakshin Chennai Prabasi Cultural Association (DCPCA)** (`www.dcpca.in`).

## 🌟 Key Highlights
- **100% Free Hosting:** Optimized for GitHub Pages with automatic GitHub Actions deployment.
- **Apple-grade Scrollytelling:** High-performance Canvas animation using GSAP ScrollTrigger.
- **Tagorean Philosophy:** Grounded in Rabindranath Tagore's *উৎসব (Utsab)* and cultural synthesis.
- **Next-Gen Heritage Focus:** Dedicated hubs for Bengali literature, music, and thought leaders.
- **Multilingual Ready:** Lightweight Google Translation integration (Bengali, Tamil, Hindi, English).
- **Instant Google Auth Ready:** Configured for seamless Google/Firebase sign-in and Google Sheets backend syncing.

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev

# 3. Build for production (Static Site Generation)
npm run build
```

## 📦 Deploying to GitHub Pages
1. Push this code to your GitHub repository: `main` branch.
2. In your GitHub Repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Push to `main` and the workflow (`.github/workflows/deploy.yml`) will automatically build and publish to `www.dcpca.in`.

## 🎨 Architecture
- **Framework:** Astro 5.x (SSG)
- **Styling:** Tailwind CSS
- **Animation:** GSAP ScrollTrigger
- **DNS / CDN:** Cloudflare Free + GitHub Pages

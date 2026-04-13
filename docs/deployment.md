# Deployment Guide — BugSweepingTSCM.com

## Hosting Strategy

**Platform:** Vercel (Free Tier — Hobby Plan)  
**Cost to client:** ₹0/month — Free lifetime hosting  
**Why Vercel:**
- Built by the creators of Next.js — perfect integration
- Free SSL certificate (HTTPS) automatically
- Global CDN — fast load times across India and worldwide
- Automatic deploys from GitHub on every push
- Custom domain support on free tier

---

## Step 1: Push Code to GitHub

```bash
# One-time setup — initialize git in your project
cd d:/bug_sweeping_website_next.js
git init
git add .
git commit -m "Initial commit — BugSweepingTSCM Next.js website"

# Create a new repo on github.com (e.g., "bugsweepingtscm-website")
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/bugsweepingtscm-website.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy on Vercel

1. Go to **vercel.com** and sign up/login with your GitHub account
2. Click **"Add New Project"**
3. Import your `bugsweepingtscm-website` repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **"Deploy"**

Your site will be live at `https://bugsweepingtscm-website.vercel.app` within ~2 minutes.

---

## Step 3: Add Custom Domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add domain: `bugsweepingtscm.com`
3. Also add: `www.bugsweepingtscm.com`
4. Vercel will show you DNS records to add — **see dns-migration.md for full details**

---

## Automatic Deploys

Every time you push to `main` branch on GitHub, Vercel automatically:
- Builds the new version
- Runs Next.js static generation
- Deploys globally via CDN
- Zero downtime (atomic deploys)

---

## Local Development

```bash
cd d:/bug_sweeping_website_next.js
npm run dev
# Open http://localhost:3000
```

## Production Build Test

```bash
npm run build
# Verifies all pages generate successfully
# Check for any TypeScript or build errors
```

---

## Future Upgrade Path (if needed)

If traffic grows significantly or backend features are needed:

| Option | Cost | When to use |
|--------|------|-------------|
| Vercel Pro | ~$20/month | >100GB bandwidth or team features |
| AWS Amplify | ~$5–20/month | AWS ecosystem preference |
| AWS S3 + CloudFront | ~$2–10/month | Pure static, maximum control |

**For now, Vercel free tier is more than sufficient** for a service website like this.
The site is fully static (SSG) — no server needed, no database — just HTML/CSS/JS files
served from Vercel's edge network.

---

## Environment Variables — Contact Form Setup

The contact form sends to `info@bugsweepingtscm.com` via **Web3Forms** (free, no backend needed).

**Step 1:** Sign up free at https://web3forms.com and add `info@bugsweepingtscm.com`

**Step 2:** Get your Access Key from Web3Forms dashboard

**Step 3 (local):** Create `.env.local` in project root:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_key_here
```

**Step 3 (Vercel):** In Vercel dashboard → Project → Settings → Environment Variables:
```
Name: NEXT_PUBLIC_WEB3FORMS_KEY
Value: your_actual_key_here
```

Until the key is set, form submissions will show an error. The form UI works fine, only sending requires the key.
Free Web3Forms allows unlimited form submissions with no monthly limits.

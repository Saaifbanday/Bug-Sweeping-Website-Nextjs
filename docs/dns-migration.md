# DNS Migration Guide — WordPress to Vercel

## Overview

The domain `bugsweepingtscm.com` is currently pointing to the WordPress hosting.
When ready to go live, you'll update the DNS records to point to Vercel instead.

**Important:** DNS changes take 24–48 hours to fully propagate worldwide, but usually
work within 1–6 hours. Plan the migration for a low-traffic time (e.g., late night).

---

## Before You Start

**Do NOT change DNS until:**

- [ ] Next.js website is fully deployed and tested on Vercel's preview URL
- [ ] Client has approved the design on the preview URL
- [ ] All pages load correctly
- [ ] Contact info, email, phone are all correct

---

## Step 1: Get Your Vercel DNS Records

After adding the custom domain in Vercel (Settings → Domains):

Vercel will show you one of two options:

**Option A — If you're using Vercel Nameservers (recommended):**

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B — If keeping your current DNS provider, add these records:**

```
Type: A
Name: @ (or bugsweepingtscm.com)
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Step 2: Find Your Domain Registrar

Log into wherever the domain was registered (GoDaddy / Namecheap / BigRock / etc.)
and navigate to **DNS Management** or **Nameservers**.

---

## Step 3A: Update Nameservers (Recommended — Simplest)

If using Vercel nameservers:

1. In your domain registrar, find **"Nameservers"** or **"Custom DNS"**
2. Delete existing nameservers
3. Add:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
4. Save. Wait 1–48 hours.

**Benefit:** Vercel manages SSL automatically and renewals are free forever.

---

## Step 3B: Keep Existing DNS Provider (Advanced)

If you want to keep your current DNS (e.g., Cloudflare, GoDaddy DNS):

1. Find **DNS Records** section
2. Delete or update the existing `A` record for `@`
3. Add new records:

```
Type  | Name | Value              | TTL
------|------|--------------------|------
A     | @    | 76.76.21.21        | 3600
CNAME | www  | cname.vercel-dns.com | 3600
```

4. Save changes

**Note:** If using Cloudflare, set proxy status to **DNS only** (grey cloud, not orange)
for the A record, at least initially.

---

## Step 4: Verify SSL Certificate

After DNS propagates, Vercel automatically provisions a free SSL certificate.
Visit `https://bugsweepingtscm.com` — you should see the padlock icon.

If SSL shows error, wait a few more hours and check Vercel dashboard → Domains.

---

## Maintaining WordPress During Migration (Zero Downtime)

To avoid downtime:

1. Deploy Next.js site to Vercel (live on Vercel subdomain)
2. Test thoroughly on the Vercel preview URL
3. Only then change DNS to point to Vercel
4. Keep WordPress hosting active for 1–2 weeks after switch (backup)
5. After confirming everything works, cancel WordPress hosting

---

## Email Records — IMPORTANT

If the client uses `@bugsweepingtscm.com` email (e.g., `info@bugsweepingtscm.com`),
the MX records must be preserved when switching DNS.

**Before changing nameservers:**

1. Document existing MX records from current DNS provider
2. After switching to Vercel nameservers, re-add those MX records in Vercel DNS dashboard

Common MX records to preserve:

```
Type: MX  | Priority: 10 | Value: mail.bugsweepingtscm.com  (example)
Type: TXT | Name: @     | Value: v=spf1 ...                 (SPF record)
```

---

## Rollback Plan

If anything goes wrong after DNS switch:

1. Log back into domain registrar
2. Change nameservers back to previous values (note them down before switching!)
3. The WordPress site will be live again within a few hours

Keep the WordPress hosting active for at least 2 weeks after migration as a safety net.

---

## DNS Propagation Checker

After making changes, check propagation at:

- https://dnschecker.org — enter `bugsweepingtscm.com`
- Look for green checkmarks across global locations

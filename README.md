# Walk in Himalayas (Next.js)

Production-ready site for a Himalayan trekking, camping, expeditions, and tours business.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- MDX blog engine
- JSON-LD schema + SEO helpers

## Setup

```bash
npm install
npm run dev
```

## Environment variables

Create `.env.local` with:

```
NEXT_PUBLIC_DOMAIN=walkinhimalayas.com
NEXT_PUBLIC_EMAIL=hello@walkinhimalayas.com
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/...
NEXT_PUBLIC_GBP_URL=https://g.page/...
NEXT_PUBLIC_ADDRESS=Dalhousie, Himachal Pradesh
NEXT_PUBLIC_BUSINESS_HOURS=Daily 7am-8pm
```

Email delivery placeholder (not wired yet):

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

## Content updates

- Treks: `src/data/treks.ts`
- Tours: `src/data/tours.ts`
- Regions: `src/data/regions.ts`
- Blog posts (MDX): `content/blog/*.mdx`
- Global business info: `src/config/site.ts`

### Add a new trek

1. Add a new object in `src/data/treks.ts`.
2. Add placeholder images in `public/images/` or reuse existing placeholders.
3. The trek page auto-generates at `/treks/[slug]`.

### Add a new blog post

1. Create a new MDX file in `content/blog/` with frontmatter.
2. Include internal links to treks and destinations.

## SEO checklist

- Update `NEXT_PUBLIC_DOMAIN`.
- Replace placeholders in `src/config/site.ts` (BMC institute/year, address).
- Replace `public/og-default.svg` and `public/images/*.svg` with real imagery.
- Add real reviews in `/reviews` and update schema if needed.
- Ensure GBP/Instagram URLs are set.

## Deployment (Vercel)

1. Push to GitHub.
2. Import into Vercel.
3. Add `.env` variables.
4. Deploy.

## Notes

- All forms use basic rate limiting + honeypot. Hook SMTP or a form provider in the API routes.
- Analytics placeholder is ready for Plausible or GA. Replace script as needed.

# Falcor Surfaces Website

Production-oriented Next.js static-export website for Falcor Surfaces. Product data is centralized in `lib/data.ts`, with reusable product, case-study and quote components.

## Deployment

Netlify should build the `main` branch using `npm run build` and publish the `out/` directory. Netlify exposes the deployment URL as `URL`; a custom production domain can also be supplied with `NEXT_PUBLIC_SITE_URL` so canonical URLs, sitemap entries and structured data use the final domain.

## Forms

The quote/contact flow is wired for Netlify Forms under the form name `falcor-quote`. Configure submission notifications in Netlify once the business inquiry email is supplied.

## Source content

Content and product specifications are based on the connected Falcor Google Drive folder and the `falcor` tab of the Kertiles private label spreadsheet. Product photography is only used where source imagery was confirmed. Marimol Silk, Onyx Dawn and Gold Phoenix currently use neutral placeholders pending confirmed photography.

## Remaining launch inputs

- Falcor business phone number
- Falcor inquiry email
- Final production domain, if different from the Netlify URL

# Dr Ruting Wang — academic website

Professional academic website designed and built by [JS Insights](https://jsinsights.co.uk/services/academic-websites/).

## Start here

The client-friendly handover guide explains, step by step:

- how to move the website to Ruting Wang's own GitHub account;
- how to connect it to Cloudflare Pages;
- how to add, edit and remove Talks;
- how to update publications, contact details, teaching and CV files;
- which files should not be changed without technical support.

Open the Chinese [client handover guide](docs/Ruting-Wang-Website-Handover-Guide-ZH.md). A formatted PDF and an English reference edition are included in the delivery package.

## Local preview

```sh
npm install
npm run dev
```

The local website is normally available at `http://localhost:4321/`.

## Production build

```sh
npm run build
```

Cloudflare Pages settings:

- Production branch: `main`
- Build command: `npm run build`
- Build directory: `dist`
- Environment variable `BASE_PATH`: `/`
- Environment variable `SITE_URL`: the final `https://...` website address

## CV files

The source CV PDF is in `cv/`. Website downloads are served from `public/docs/`. Copy the current CV into the website download location with:

```sh
npm run cv:build
```

## Support

JS Insights: [contact@jsinsights.co.uk](mailto:contact@jsinsights.co.uk) · [Academic website services](https://jsinsights.co.uk/services/academic-websites/)

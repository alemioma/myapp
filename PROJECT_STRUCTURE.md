# Project Structure

.
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── PROJECT_STRUCTURE.md
├── README.md
├── tsconfig.json
├── .husky/
├── messages/
│   ├── en.json
│   ├── es.json
│   ├── sv.json
│   ├── en/
│   │   ├── about.json
│   │   ├── banner.json
│   │   ├── footer.json
│   │   ├── header.json
│   │   ├── homePage.json
│   │   └── plans.json
│   ├── es/
│   │   ├── about.json
│   │   ├── banner.json
│   │   ├── footer.json
│   │   ├── header.json
│   │   ├── homePage.json
│   │   └── plans.json
│   └── sv/
│       ├── about.json
│       ├── banner.json
│       ├── footer.json
│       ├── header.json
│       ├── homePage.json
│       └── plans.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    ├── middleware.ts
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── [locale]/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── about/
    │   │   │   └── page.tsx
    │   │   └── plans/
    │   │       └── [slug]/
    │   │           └── page.tsx
    ├── components/
    │   ├── banner.tsx
    │   ├── container.tsx
    │   ├── esflag.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── hero.tsx
    │   ├── homescard.tsx
    │   ├── LayoutShell.tsx
    │   ├── logo.tsx
    │   ├── plantable.tsx
    │   ├── resources.tsx
    │   ├── svflag.tsx
    │   ├── theme-provider.tsx
    │   ├── Toggle.tsx
    │   ├── ukflag.tsx
    │   ├── custom/
    │   │   ├── banner.module.css
    │   │   └── homescard.css
    │   └── ui/
    │       ├── button.tsx
    │       └── dropdown-menu.tsx
    ├── i18n/
    │   ├── navigation.ts
    │   ├── request.ts
    │   └── routing.ts
    └── lib/
        └── utils.ts
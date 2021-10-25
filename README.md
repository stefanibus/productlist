# REST API, Dynamic product list, component based CSS with Next JS 11+, Tailwind CSS 2.0 and TypeScript

###### Demo on Vercel: https://productlist.vercel.app/products/ 

[![Sponsor Next JS Boilerplate](https://raw.githubusercontent.com/stefanibus/productlist/main/public/assets/images/rest-api.png?raw=true)](https://productlist.vercel.app/products/)

🚀 Next.js, Tailwind CSS and TypeScript ⚡️ ESLint, Prettier, Husky, Lint-Staged, VSCode, Vercel.

### Features

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode)
- 💅 PostCSS for processing Tailwind CSS and integrated to `styled-jsx`
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/stefanibus/productlist.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
📦src
 ┣ 📂components
 ┃ ┣ 📂buttons
 ┃ ┃ ┗ 📂back
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂productlist
 ┃ ┃ ┣ 📂productlistOne
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂productlistTwo
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂the_challenge
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂layout
 ┃ ┗ 📜Meta.tsx
 ┣ 📂pages
 ┃ ┣ 📂projectinfo
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂products
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜[productID].tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜_document.tsx
 ┣ 📂styles
 ┃ ┗ 📜main.css
 ┣ 📂templates
 ┃ ┗ 📜Main.tsx
 ┗ 📂utils
 ┃ ┗ 📜AppConfig.ts

```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [make-mobile.de](https://make-mobile.de)

// index.tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

import { useRouter } from 'next/router'

import { Meta } from '../../layout/Meta'
import { Main } from '../../templates/Main'

const Index = () => {
  const router = useRouter()

  return (
    <Main
      meta={
        <Meta
          title="Home of the dynamic product list Portal"
          description="Homepage"
        />
      }
    >
      <div className="max-w-2xl  m-auto">
        &nbsp;
        <a href="https://github.com/stefanibus/Next-js-Boilerplate">
          <img
            src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
            alt="Nextjs starter banner"
          />
        </a>
        <h1 className="font-bold text-2xl">
          This Boilerplate got used for this project. The Boilerplate is running
          on Next.js and uses Tailwind CSS and TypeScript. Look for more
          information{' '}
          <a href="https://github.com/stefanibus/bolierplateNextjs">
            on GitHub
          </a>
        </h1>
        <p>
          <span role="img" aria-label="rocket">
            🚀
          </span>
          Next.js Boilerplate is a starter code for Next js projects.
          <span role="img" aria-label="zap">
            ⚡️
          </span>{' '}
          It is containing with Next.js, TypeScript, ESLint, Prettier, Husky,
          Lint-Staged, VSCode, Netlify, PostCSS, Tailwind CSS.
        </p>
        <h2 className="font-semibold text-lg">Next js Boilerplate Features</h2>
        <p>Developer experience first:</p>
        <ul>
          <li>
            <span role="img" aria-label="fire">
              🔥
            </span>{' '}
            <a href="https://nextjs.org" rel="nofollow">
              Next.js
            </a>{' '}
            for Static Site Generator
          </li>
          <li>
            <span role="img" aria-label="art">
              🎨
            </span>{' '}
            Integrate with{' '}
            <a href="https://tailwindcss.com" rel="nofollow">
              Tailwind CSS
            </a>
          </li>
          <li>
            <span role="img" aria-label="nail_care">
              💅
            </span>{' '}
            PostCSS for processing Tailwind CSS
          </li>
          <li>
            <span role="img" aria-label="tada">
              🎉
            </span>{' '}
            Type checking Typescript
          </li>
          <li>
            <span role="img" aria-label="pencil2">
              ✏️
            </span>{' '}
            Linter with{' '}
            <a href="https://eslint.org" rel="nofollow">
              ESLint
            </a>
          </li>
          <li>
            <span role="img" aria-label="hammer_and_wrench">
              🛠
            </span>{' '}
            Code Formatter with{' '}
            <a href="https://prettier.io" rel="nofollow">
              Prettier
            </a>
          </li>
          <li>
            <span role="img" aria-label="fox_face">
              🦊
            </span>{' '}
            Husky for Git Hooks
          </li>
          <li>
            <span role="img" aria-label="no_entry_sign">
              🚫
            </span>{' '}
            Lint-staged for running linters on Git staged files
          </li>
          <li>
            <span role="img" aria-label="no_entry_sign">
              🗂
            </span>{' '}
            VSCode configuration: Debug, Settings, Tasks and extension for
            PostCSS, ESLint, Prettier, TypeScript
          </li>
          <li>
            <span role="img" aria-label="robot">
              🤖
            </span>{' '}
            SEO metadata, JSON-LD and Open Graph tags with Next SEO
          </li>
          <li>
            <span role="img" aria-label="robot">
              ⚙️
            </span>{' '}
            <a
              href="https://www.npmjs.com/package/@next/bundle-analyzer"
              rel="nofollow"
            >
              Bundler Analyzer
            </a>
          </li>
          <li>
            <span role="img" aria-label="rainbow">
              🌈
            </span>{' '}
            Include a FREE minimalist theme
          </li>
          <li>
            <span role="img" aria-label="hundred">
              💯
            </span>{' '}
            Maximize lighthouse score
          </li>
        </ul>
        <p>Built-in feature from Next.js:</p>
        <ul>
          <li>
            <span role="img" aria-label="coffee">
              ☕
            </span>{' '}
            Minify HTML &amp; CSS
          </li>
          <li>
            <span role="img" aria-label="dash">
              💨
            </span>{' '}
            Live reload
          </li>
          <li>
            <span role="img" aria-label="white_check_mark">
              ✅
            </span>{' '}
            Cache busting
          </li>
        </ul>
        <h2 className="font-semibold text-lg">Our Stater code Philosophy</h2>
        <ul>
          <li>Minimal code</li>
          <li>SEO-friendly</li>
          <li>
            <span role="img" aria-label="rocket">
              🚀
            </span>{' '}
            Production-ready
          </li>
        </ul>
      </div>
    </Main>
  )
}

export default Index

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch(
    'https://run.mocky.io/v3/60c5b7f8-fe73-4e9b-8626-e2c806b173c2',
  )
  const json = await res.json()

  return {
    props: {
      productlist: json.products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 100 seconds
    revalidate: 100, // In seconds
  }
}

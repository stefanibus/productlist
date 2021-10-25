// Main.tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

import { ReactNode } from 'react'

import Link from 'next/link'

import { AppConfig } from '../utils/AppConfig'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-6xl mx-auto px-2 sm:px-8">
      <div className="pt-10">
        <div className="pt-16 pb-8 text-center hidden">
          <div className="font-bold text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl justify-center">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-700 border-b-4 hover:border-red-900">
                  Home / The Challenge
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/products/">
                <a className="text-gray-700  border-b-4 hover:border-red-900 ">
                  The Result
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/projectinfo">
                <a className="text-gray-700  border-b-4 hover:border-red-900 ">
                  Projectinfo
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="text-gray-700  border-b-4 hover:border-red-900 "
                href="https://github.com/stefanibus/bolierplateNextjs"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        <div>
          © Copyright {new Date().getFullYear()}
          <br />
          &nbsp;({AppConfig.title})
        </div>
        Powered with&nbsp;
        <span role="img" className="text-red-900" aria-label="Love">
          ♥
        </span>
        &nbsp; by <a href="https://make-mobile.de">make-mobile.de</a>
      </div>
    </div>
  </div>
)

export { Main }

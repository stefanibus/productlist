// index.tsx parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()

  return (
    <ul className="flex flex-wrap text-xl justify-center">
      <li className={`mr-6 ${router.pathname === '/' ? 'active' : ''}`}>
        <Link href="/">
          <a className="text-gray-700 border-b-4 hover:border-red-900">
            Home / The Challenge
          </a>
        </Link>
      </li>
      <li className={`mr-6 ${router.pathname === '/products' ? 'active' : ''}`}>
        <Link href="/products/">
          <a className="text-gray-700  border-b-4 hover:border-red-900 ">
            The Result
          </a>
        </Link>
      </li>
      <li
        className={`mr-6 ${router.pathname === '/projectinfo' ? 'active' : ''}`}
      >
        <Link href="/projectinfo">
          <a className="text-gray-700  border-b-4 hover:border-red-900 ">
            Projectinfo
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <a
          className="text-gray-700  border-b-4 hover:border-red-900 "
          target="_blank"
          rel="noreferrer"
          href="https://github.com/stefanibus/productlist"
        >
          GitHub
        </a>
      </li>
    </ul>
  )
}
export default Nav

// index.tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

import { AppProps } from 'next/app'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default MyApp

// document.tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

import Document, { Html, Head, Main, NextScript } from 'next/document'

import { AppConfig } from '../utils/AppConfig'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

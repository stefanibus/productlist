// index.tsx parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

import TheChallenge from '../components/the_challenge'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const Challenge = () => (
  <Main
    meta={
      <Meta
        title="Challenge Definition Title"
        description="Challenge Definition"
      />
    }
  >
    <div className="max-w-3xl  m-auto">
      <TheChallenge />
    </div>
  </Main>
)

export default Challenge

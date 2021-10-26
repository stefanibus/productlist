// index.tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

import ProductlistOne from '../../components/productlist/productlistOne'
import ProductlistTwo from '../../components/productlist/productlistTwo'
import { Meta } from '../../layout/Meta'
import { Main } from '../../templates/Main'

const Products = ({ productlist }: any) => {
  return (
    <>
      <Main
        meta={<Meta title="Products Result-List" description="Productlist" />}
      >
        <h2 className="text-center pt-10 font-bold text-gray-900 text-4xl">
          recommended products * best *
        </h2>
        <ProductlistTwo productlist={productlist} />
        <div className="pt-96">
          <h2 className="text-xl pb-5 text-center font-bold text-gray-900">
            products * first *
          </h2>
          <ProductlistOne productlist={productlist} />
        </div>

        <p className="text-center">
          Read the&nbsp;
          <a href="../challenge">Challenge-Definition</a>
          &nbsp;for more information.
        </p>
      </Main>
    </>
  )
}

export default Products

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

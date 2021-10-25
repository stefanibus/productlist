// [productID].tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

import Backbutton from '../../components/buttons/back'

// Template Features Values unchanged
const features = [
  {
    name: 'Durable',
    description:
      'The leather cover and machined steel disc binding stand up to daily use for years to come.',
  },
  {
    name: 'Refillable',
    description:
      'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
  },
  {
    name: 'Thoughtfully designed',
    description:
      'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
  },
  {
    name: 'Locally made',
    description:
      'Responsibly and sustainably made real close to wherever you are, somehow.',
  },
]

const ProductTwo = ({ singleProduct }: any) => {
  // Img-URLs are missing in mocky.io-array!
  // This is a quick workaround
  // to reassign some values manually
  if (singleProduct.id === 3) {
    singleProduct['product-photo'] = '../../assets/images/knife.jpg'
  } else if (singleProduct.id === 2) {
    singleProduct['product-photo'] = '../../assets/images/parfum.jpg'
  } else if (singleProduct.id === 1) {
    singleProduct['product-photo'] = '../../assets/images/watch.jpg'
  }
  // else {
  //   console.log(
  //     'this demo only has three objects, we end up on a 404-page here: ',
  //     singleProduct.id,
  //   )
  // }

  return (
    <div className="bg-white   px-4  sm:px-40 max-w-7xl m-auto">
      <div className="text-center lg:text-right p-10 lg:absolute right-1  z-10  font-sans ">
        <a href="../">
          <Backbutton buttontext="Back to Overview" />
        </a>
      </div>
      <br />
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-3 overflow-hidden sm:aspect-w-2 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <img
            src={singleProduct['product-photo']}
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-center object-cover lg:h-full lg:w-full"
          />
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              {/* Leatherbound Daily Journal */}
              {singleProduct['short-description']}
            </h2>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight leading-10 ">
              {/* All in the Details */}
              {singleProduct.label}
            </p>
            <p className="mt-4 text-gray-500">
              {/* We've obsessed over every detail of this handcrafted journal to
              bring you the best materials for daily use.  */}

              {singleProduct.price}
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductTwo

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await fetch(
    'https://run.mocky.io/v3/60c5b7f8-fe73-4e9b-8626-e2c806b173c2',
  )
  const productlist = await res.json()

  // Get the paths we want to pre-render based on productlist
  const paths = productlist.products.map((productItem: { id: any }) => ({
    params: { productID: productItem.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps = async (context: {
  params: { productID: any }
}) => {
  // the id-value here is defined as productID minus 1 due to the array starting at ZERO. Thereby pageid equals the object Id in productlist.products
  const pageid = context.params.productID - 1

  // the entire object is fetched although we merely need one Product-Object
  // mocky.io does not offer an endpoint  to only fetch a specific object
  // specific object might be retrieved via  graphql
  // ps: the specific object has the name: 'singleProduct' in this file
  const res = await fetch(
    'https://run.mocky.io/v3/60c5b7f8-fe73-4e9b-8626-e2c806b173c2',
  )
  const productlist = await res.json()
  // reduce the array down to our relevant object (singleProduct),
  // it would have been nicer to fetch() only this object from mocky.io
  const singleProduct = productlist.products[pageid]

  return {
    props: {
      singleProduct,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 100 seconds
    revalidate: 100, // In seconds
  }
}

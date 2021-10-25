// index.tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

const ProductlistTwo = ({ productlist }: any) => {
  // Img-URLs are missing in mocky.io-array!
  // This is a quick workaround
  // to reassign some values manually
  productlist[0]['product-photo'] = '../assets/images/watch.jpg'
  productlist[1]['product-photo'] = '../assets/images/parfum.jpg'
  productlist[2]['product-photo'] = '../assets/images/knife.jpg'

  const listProducts = () => {
    return productlist.map((product: any) => (
      <div key={product.id}>
        <div className="group relative">
          <div className="relative w-full h-72 rounded-lg overflow-hidden  group-hover:opacity-75 ">
            <img
              src={product['product-photo']}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative mt-4 text-center text-gray-800 ">
            <h3 className="text-xl font-medium text-gray-700 uppercase overflow-hidden whitespace-nowrap overflow-ellipsis ">
              {product.label}
            </h3>
            {/* <div className="mt-1 text-sm text-gray-500">
            {product.sale ? 'for sale' : 'view product'}
          </div> */}
            <div className="mt-2 text-sm text-gray-500">
              {product['short-description']}
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            <div className="relative text-lg font-semibold text-white">
              {product.price}
            </div>
          </div>
        </div>
        <div className="mt-3">
          <a
            href={product.id}
            className=" flex  border border-transparent   py-2 px-8 items-center justify-center text-sm font-medium text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          >
            {product.sale ? 'for sale' : 'view'}
            <span className="sr-only">, sr-only {product.sale}</span>
          </a>
        </div>
      </div>
    ))
  }

  return (
    <div className="bg-white">
      <div className="mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {listProducts()}
          {listProducts()}
        </div>
      </div>
    </div>
  )
}
export default ProductlistTwo

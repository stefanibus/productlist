// index.tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

const ProductlistOne = ({ productlist }: any) => {
  // Img-URLs are missing in mocky.io-array!
  // This is a quick workaround
  // to reassign some values manually
  productlist[0]['product-photo'] = '../assets/images/watch.jpg'
  productlist[1]['product-photo'] = '../assets/images/parfum.jpg'
  productlist[2]['product-photo'] = '../assets/images/knife.jpg'

  const listProducts = () => {
    return productlist.map((product: any) => (
      <div key={product.id} className="relative group">
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product['product-photo']}
            alt={product.imageAlt}
            className="object-center object-cover"
          />
          <div
            className="flex items-end opacity-0 p-4 group-hover:opacity-100"
            aria-hidden="true"
          >
            <div className="w-full bg-indigo-500 bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
              {product.sale ? 'FOR SALE' : 'View Product'}
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
          <h3>
            <a
              href={product.id}
              className="text-gray-600 capitalize  hover:border-transparent "
            >
              <span aria-hidden="true" className="absolute inset-0 " />
              {product.label}
            </a>
          </h3>
          <div>{product.price}</div>
        </div>

        <div className="mt-1 text-sm text-gray-500">
          {product['short-description']}
        </div>
      </div>
    ))
  }
  return (
    <div className="bg-white">
      <div className="mx-auto py-7 px-4 sm:px-6 lg:max-w-3xl lg:px-8">
        <div className="flex items-center justify-between space-x-4" />
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {listProducts()}
          {listProducts()}
        </div>
      </div>
    </div>
  )
}
export default ProductlistOne

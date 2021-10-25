// index.tsx: parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

const Backbutton = ({ buttontext }: any) => {
  return (
    <button
      type="button"
      className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
    >
      <svg className="w-4 h-4 mr-3 fill-current  rotate-90" viewBox="0 0 20 20">
        <path
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>

      <span>{buttontext}</span>
      <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
        <path
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>
    </button>
  )
}

export default Backbutton

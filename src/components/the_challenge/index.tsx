// index.tsx parsing error on the first line of this document, see --> https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint

const TheChallenge = () => (
  <>
    <blockquote>
      <p>The task is about Frontend Development:</p>
    </blockquote>
    <h1 id="task-componentdevelopment-professional-level" className="mt-8">
      REST API, Dynamic product list, component based CSS
      {/* <br />
      Component Development Professional Level */}
    </h1>
    {/* <h2 id="dynamic-product-list-component-based-css-and-rest-api-integration">
      Dynamic product list, component based CSS and REST API integration
    </h2> */}
    <p>
      In this task, the page DOM will initially be almost empty. Only resources
      and maybe a template with some static content for a component may be coded
      in the page.
    </p>
    <p>Data will be provided via the REST API we built for this purpose.</p>
    <p>
      The Goal is to have the product list dynamically loaded into the page, by
      using a API call. Aside from JavaScript logic, the result should be coded
      by using a component based approach (f.e.&nbsp;
      <a href="http://atomicdesign.bradfrost.com/table-of-contents/">
        Atomic design
      </a>
      ).
    </p>
    <h2 id="design">Design</h2>
    <p>
      <a href="../assets/images/rest-api.png" target="_blank">
        Design
      </a>
      <img src="../assets/images/rest-api.png" alt="" />
    </p>
    <h2 id="rest-api">REST API</h2>
    <p>
      The API can be prepared and implemented with&nbsp;
      <a href="https://github.com/typicode/json-server">json-server</a>.
    </p>
    <p>There will be 2 end points:</p>
    <ul className="list-inside ">
      <li className="list-none md:list-disc ">
        <a href="../products" className="bg-blue-200">
          http://localhost:3000/products
        </a>
      </li>
      <li className="list-none md:list-disc">
        <a href="../products/1" className="bg-blue-200">
          http://localhost:3000/products/product-id
        </a>
      </li>
    </ul>
    <p>
      The first endpoint returns the list of products. The second endpoint
      returns one product. It requires the product id.
    </p>
    <h2 id="json-structure">JSON structure</h2>
    <p>
      You can use a working mook API from here:&nbsp;
      <a href="https://run.mocky.io/v3/60c5b7f8-fe73-4e9b-8626-e2c806b173c2">
        Mock
      </a>
      &nbsp; or use the static JSON. See <a href="db.json">db.json</a>
    </p>
    <h2 id="assignment">Assignment</h2>
    <ul>
      <li>
        Split the Product list in components, following a component based
        pattern.
      </li>
      <li>Consider: It&#39;s Responsive Web Design</li>
      <li>
        Style the components following a component based concept (f.e.&nbsp;
        <a href="http://getbem.com/">BEM</a>)
      </li>
      <li>
        Write the JavaScript logic to fetch the data from REST API and populate
        the components.
      </li>
    </ul>
    <h2 id="presentation">Presentation</h2>
    <p>
      The Purpose of the presentation is to explain your approach and
      implementation to our team. The Technical solution is always important but
      we will evaluate the approach even more. Your ability to communicate the
      outcome, pros and cons of it and overall challenges is highly valuable.
    </p>
    <p>
      If there is time left explain how you would implement a combination of an
      CMS and an eCommerce Platform. Assumption: the eCommerce part has an REST
      API.
    </p>
    <h2 id="time-frame">Time frame</h2>
    <p>
      You will have 1.5 hours for implementation. Do not rush, that time period
      sounds like tight deadline but we do not expect production ready outcome.
    </p>
  </>
)

export default TheChallenge

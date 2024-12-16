import React from "react"
const footer = () => {
  return (

    <footer className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first text-black">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <p className="text-gray-500 text-base">
              400 University Drive Suite 200 Coral <br /> Gables, <br />
              FL 33134 USA
            </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Links
            </h2>
            <div className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Shop</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Countect</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Help
            </h2>
            <div className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Payment Option </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Return</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Privacy policies</a>
                </li>
               </ul>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Newsletter
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                
              </div>
              
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Enter Your Email Address
              <br className="lg:block hidden" />
              -----------------------------------
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            2022 Meubel House. All rights reverved
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default footer
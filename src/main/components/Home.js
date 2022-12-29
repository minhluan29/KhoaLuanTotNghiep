import React from "react";
import { images, cards } from "../data/homedata";
import Carousel from "./Carousel";
import Category from "./Category";
// import titlebackground from "../data/homedata";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <div>
        <img src={images.background1} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-5 container mx-auto px-0">
        {cards.map((item, index) => {
          return (
            <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span className="sr-only">Open dropdown</span>
                </button>
              </div>
              <div className="flex flex-col items-center pb-10">
                <img src={item.image} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.price}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    ĐẶT HÀNG
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    MUA
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

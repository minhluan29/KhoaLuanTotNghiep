import React, { useEffect, useState } from "react";
import { images, cards } from "../data/homedata";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import axios from "axios";
// import titlebackground from "../data/homedata";
const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6969/api/getAllItem").then((res) => {
      let data = res.data.data;
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <Carousel />
      <Category />
      <div>
        <img src={images.background1} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-5 container mx-auto px-0">
        {product.map((item, index) => {
          return (
            <div
              key={index}
              class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="flex flex-col items-center pb-10">
                <img
                  class="w-400 h-72 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                  src={item.image}
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {item.originalPrice}
                </span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    ĐẶT HÀNG
                  </a>
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

import React from "react";
import { category } from "../data/homedata";

const Category = () => {
  return (
    <div className="flex justify-around mb-6">
      {category.map((item, index) => {
        return (
          <div
            key={index}
            className="border-8 border-white drop-shadow-xl py-14 px-20 fill-inherit bg-gray-900 bg-opacity-40"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* <img className="w-[250px]" src={item.image} /> */}
            <h1 className=" text-center object-center text-white text-3xl font-bold ">
              {item.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};
export default Category;

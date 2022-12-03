import React from "react";
import { category } from "../data/homedata";

const Category = () => {
  return (
    <div className="flex justify-around mb-6">
      {category.map((item, index) => {
        return (
          <div key={index} className="border-8 border-white drop-shadow-xl">
            <img className="w-[250px]" src={item} />
          </div>
        );
      })}
    </div>
  );
};
export default Category;

import React, { useEffect, useState } from "react";
import { images, cards } from "../data/homedata";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Cart from "../components/Cart";
const Home = () => {
  let [render, setRender] = useState(0);

  const handleRender = () => {
    console.log("check ++");

    setRender(Math.random());
  };

  console.log("check render", render);
  return (
    <div>
      <Carousel />
      <Category />
      <div>
        <img src={images.background1} />
      </div>

      <Cart handleRender={() => handleRender()} />
    </div>
  );
};

export default Home;

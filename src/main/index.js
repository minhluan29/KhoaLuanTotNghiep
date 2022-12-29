import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pagination from "./components/Pagination";

import "./style.css";
import ButtonOnTop from "./components/ButtonOnTop";

const Main = () => {
  let [render, setRender] = useState(0);

  const hadleRender = () => {
    console.log("check ++");

    setRender(Math.random());
  };

  console.log("check render", render);
  return (
    <div>
      <Header />
      <Home handleRender={() => hadleRender()} />
      <Pagination />
      <Footer />
    </div>
  );
};
export default Main;

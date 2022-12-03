import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pagination from "./components/Pagination";

import "./style.css";
const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <Pagination />
      <Footer />
    </div>
  );
};
export default Main;

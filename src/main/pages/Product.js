import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { images } from "../data/homedata";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div>
      <Header />

      <Navbar />

      <div style={{ textAlign: "-webkit-center" }}>
        <img src={images.bgevent} />
      </div>

      <Footer />
    </div>
  );
};
export default Product;

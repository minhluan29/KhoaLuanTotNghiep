import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { images } from "../data/homedata";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";
import Pagination from "../components/Pagination";
import CategoryLayout from "../components/CategoryLayout";
import ButtonOnTop from "../components/ButtonOnTop";
const Product = () => {
  return (
    <div>
      <Header />

      <Navbar />

      <div className="mt-4" style={{ textAlign: "-webkit-center" }}>
        <img src={images.bgevent} />
      </div>

      <CategoryLayout />

      <Footer />
    </div>
  );
};
export default Product;

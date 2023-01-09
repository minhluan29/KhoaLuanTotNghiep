import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { cards } from "../data/homedata";
import ProductDetail from "./ProductDetail";

const Cart = ({ handleRender }) => {
  console.log("check env :   ", process.env.REACT_APP_BACKEND_URL);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [showCartModal, setShowCartModal] = React.useState(false);
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [checkLog, setCheckLog] = useState(null);
  const [state, setState] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("currentUser"));
    if (items) {
      setUser(items);
    }
  }, [setUser]);

  const closeModal = () => {
    // setCheckLog(null);
    setShowCartModal(false);
  };

  const toggleModal = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllItem`)
      .then((res) => {
        let data = res.data.data;
        setProduct(data);
        setCheckLog(null);
      });

    setShowCartModal(!showCartModal);
  };

  useEffect(() => {
    const getData = getDataStore();
    setState(getData);
  }, [setState]);

  const getDataStore = () => {
    let getData = JSON.parse(localStorage.getItem("product"));
    if (getData) {
      return getData;
    }
  };

  const handleAddCart = (data) => {
    // localStorage.getItem("product", JSON.stringify(Arr));
    if (state && state.length > 0) {
      let test = state.find((item) => {
        return item.id === data.id;
      });

      if (test === undefined) {
        let raBien = state;
        localStorage.setItem("product", JSON.stringify([...raBien, data]));
        setState([...raBien, data]);
      } else {
        console.log("Co tim thay ne: ", test);
      }
    } else {
      let Arr = [];
      if (data) {
        Arr.push(data);
      }
      localStorage.setItem("product", JSON.stringify(Arr));
      setState(Arr);
    }
  };

  const handleBuy = (data) => {
    if (user && user.email !== null) {
      if (state && state.length > 0) {
        let test = state.find((item) => {
          return item.id === data.id;
        });

        if (test === undefined) {
          let raBien = state;
          localStorage.setItem("product", JSON.stringify([...raBien, data]));
          setState([...raBien, data]);
          navigate("/shopping");
        } else {
          console.log("Co tim thay ne: ", test);
          navigate("/shopping");
        }
      } else {
        let Arr = [];
        if (data) {
          Arr.push(data);
        }
        localStorage.setItem("product", JSON.stringify(Arr));
        setState(Arr);
      }
    } else {
      navigate("/signInUser");
      toast.error("Vui lòng đăng nhập");
    }
    // localStorage.getItem("product", JSON.stringify(Arr));
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllItem`)
      .then((res) => {
        let data = res.data.data;
        setProduct(data);
      });
  }, []);

  const handleDetail = (id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getOneItem?id=${id}`)
      .then((res) => {
        if (res.data.errCode === 0) {
          setCheckLog(res.data.data);
          setShowCartModal(true);
        } else {
          toast.error(res.data.errMessage);
        }
      });
  };

  const handleShopping = (id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getOneItem?id=${id}`)
      .then((res) => {
        if (res.data.errCode === 0) {
          setUpdate(res.data.data);
          setShowCartModal(true);
        } else {
          toast.error(res.data.errMessage);
        }
      });
  };
  console.log("sao lỗi quài z :  ", product);

  return (
    <div>
      {showCartModal ? (
        <>
          <ProductDetail
            closeModal={() => closeModal()}
            data={checkLog}
            toggleModal={() => toggleModal()}
          />
        </>
      ) : null}

      <div className="flex flex-wrap items-center justify-start gap-4 container mx-auto px-0">
        {product === undefined && !product ? (
          <div className="text-center text-red-500">
            Không tìm thấy sản phẩm
          </div>
        ) : (
          <>
            {product.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex flex-col items-center pb-10">
                    <img
                      className="w-400 h-72 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                      src={item.image}
                      onClick={() => handleDetail(item.id)}
                    />
                    <h5 className="mb-1 uppercase text-xl mt-5 font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.originalPrice.toLocaleString()} vnđ
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                      <button
                        onClick={() =>
                          handleAddCart({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            originalPrice: item.originalPrice,
                            brandName: item.Brand.name,
                            cateName: item.Categorie.name,
                          })
                        }
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                      >
                        ĐẶT HÀNG
                      </button>
                      <button
                        onClick={() => {
                          handleBuy({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            originalPrice: item.originalPrice,
                            brandName: item.Brand.name,
                            cateName: item.Categorie.name,
                          });
                        }}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        MUA
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

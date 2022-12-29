import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import { Link } from "react-router-dom";
import { images, shoppingData } from "../data/homedata";

const ShoppingCart = () => {
  const [Loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const [nonTotal, setNonTotal] = useState();

  const [vatPrice, setVatPrice] = useState();

  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let res = getDataStore();
    if (res && res.length > 0) {
      handleTotalPrice(res);
      setData(res);
    }
  }, []);

  const handleTotalPrice = (data) => {
    let arr = [];
    data.forEach((item) => {
      arr.push(item.originalPrice);

      return arr;
    });
    if (arr && arr.length > 0) {
      let total = arr.reduce((bienNho, thangHienTai) => {
        return bienNho + thangHienTai;
      });
      setNonTotal(total);
      setVatPrice((total * 10) / 100);
      setTotalPrice((total * 10) / 100 + total);
    }
  };
  const getDataStore = () => {
    let getData = JSON.parse(localStorage.getItem("product"));
    if (getData) {
      return getData;
    }
  };

  const handleDelete = async () => {
    localStorage.setItem("product", JSON.stringify(null));
    const items = JSON.parse(localStorage.getItem("product"));
    if (items) {
      setData(items);
    }
  };

  // const [count, setCount] = useState(1);
  // const handlePlus = () => {
  //   let amount = count + 1;
  //   setCount(amount);
  // };
  // const handleMinus = () => {
  //   if (count >= 2) {
  //     let amount = count - 1;
  //     setCount(amount);
  //   }
  // };

  console.log("data bh la gi? ", data);

  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Thanh Toán
              <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
            </h1>
            <form action="" className="mt-10 flex flex-col space-y-4">
              <div>
                <label
                  for="email"
                  className="text-xs font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.capler@fang.com"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="relative">
                <label
                  for="card-number"
                  className="text-xs font-semibold text-gray-500"
                >
                  Số Thẻ
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234-5678-XXXX-XXXX"
                  className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
                <img
                  src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-4"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">
                  Ngày hết hạn
                </p>
                <div className="mr-6 flex flex-wrap">
                  <div className="my-1">
                    <label for="month" className="sr-only">
                      Select expiration month
                    </label>
                    <select
                      name="month"
                      id="month"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Tháng</option>
                    </select>
                  </div>
                  <div className="my-1 ml-3 mr-6">
                    <label for="year" className="sr-only">
                      Select expiration year
                    </label>
                    <select
                      name="year"
                      id="year"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Năm</option>
                    </select>
                  </div>
                  <div className="relative my-1">
                    <label for="security-code" className="sr-only">
                      Mã bảo mật
                    </label>
                    <input
                      type="text"
                      id="security-code"
                      name="security-code"
                      placeholder="Mã bảo mật"
                      className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label for="card-name" className="sr-only">
                  Tên trên thẻ
                </label>
                <input
                  type="text"
                  id="card-name"
                  name="card-name"
                  placeholder="Tên trên thẻ"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </form>
            <p className="mt-10 text-center text-sm font-semibold text-gray-500">
              Bằng cách đặt hàng này, bạn đồng ý với{" "}
              <a
                href="#"
                className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
              >
                Điều khoản và Điều kiện
              </a>
            </p>
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
            >
              Đặt Hàng
              <span className="px-3 text-sm">
                {totalPrice === undefined ? null : (
                  <>- {totalPrice.toLocaleString()} vnđ</>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* INFO PRODUCT */}
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="sr-only">Order summary</h2>
          <div>
            <img
              src={images.checkout1}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-80"></div>
          </div>{" "}
          <div className="relative">
            {data && data.length > 0 ? (
              <>
                {data.map((item, index) => {
                  return (
                    <ul className="space-y-5" key={index}>
                      <li className="flex justify-between py-2">
                        <div className="inline-flex">
                          <img
                            src={item.image}
                            alt=""
                            className="max-h-16 w-24"
                          />
                          <div className="ml-3">
                            <p className="text-base font-semibold text-white">
                              {item.name}
                            </p>
                            <p className="text-sm font-medium text-white text-opacity-80">
                              {item.brandName}, {item.cateName}
                            </p>
                            <button
                              onClick={() => handleDelete()}
                              className="text-red-700 font-bold "
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-white">
                          {item.originalPrice.toLocaleString()} vnđ
                        </p>
                      </li>
                    </ul>
                  );
                })}
              </>
            ) : null}

            <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
            <div className="space-y-2">
              <p className="flex justify-between text-sm font-medium text-white">
                <span>Giá tổng sản phẩm:</span>
                <span>
                  {nonTotal === undefined ? (
                    <>0đ</>
                  ) : (
                    <>{nonTotal.toLocaleString()} vnđ</>
                  )}
                </span>
              </p>
              <p className="flex justify-between text-sm font-medium text-white">
                <span>Vat: 10%</span>
                <span>
                  {vatPrice === undefined ? (
                    <>0đ</>
                  ) : (
                    <>{vatPrice.toLocaleString()} vnđ</>
                  )}
                </span>
              </p>
              <p className="flex justify-between text-sm font-bold text-white">
                <span>Tổng tiền:</span>
                <span>
                  {totalPrice === undefined ? (
                    <>0đ</>
                  ) : (
                    <>{totalPrice.toLocaleString()} vnđ</>
                  )}
                </span>
              </p>
            </div>
          </div>
          <div className="relative mt-10 text-white">
            <h3 className="mb-5 text-lg font-bold">Support</h3>
            <p className="text-sm font-semibold">
              +01 653 235 211{" "}
              <span className="font-light">(International)</span>
            </p>
            <p className="mt-1 text-sm font-semibold">
              support@nanohair.com <span className="font-light">(Email)</span>
            </p>
            <p className="mt-2 text-xs font-medium">
              Call us now for payment related issues
            </p>
          </div>
          <div className="relative mt-10 flex">
            <p className="flex flex-col">
              <span className="text-sm font-bold text-white">
                Money Back Guarantee
              </span>
              <span className="text-xs font-medium text-white">
                within 30 days of purchase
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

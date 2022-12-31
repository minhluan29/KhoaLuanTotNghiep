import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillApple } from "react-icons/ai";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { images, shoppingData } from "../data/homedata";

const ShoppingCart = () => {
  const navigate = useNavigate();
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

  const handleOnCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Đặt hàng thành công !");
      navigate("/");
      handleDelete();
    }, 1000);
  };

  return (
    <div className="relative mx-auto w-full bg-white">
      {/* INFO PRODUCT */}
      <div className="relative col-span-full flex flex-col  lg:px-96 md:px-60 sm:py-12  py-6 lg:col-span-4 lg:py-40">
        <h2 className="sr-only">Order summary</h2>
        <div>
          <img
            src={images.checkout1}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-80"></div>
        </div>{" "}
        <div
          className="relative flex gap-4 text-red-600 text-base font-medium uppercase "
          onClick={() => navigate(-1)}
        >
          <svg
            width={14}
            height={8}
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-center"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.1665 4L4.49984 7.33333"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.1665 4.00002L4.49984 0.666687"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>back go home</p>
        </div>
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
            +01 653 235 211 <span className="font-light">(International)</span>
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
        <p className="relative mt-10 text-center text-sm font-semibold text-white">
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
          onClick={() => handleOnCart()}
          className="relative mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
        >
          <span className="absolute inset-y-0 flex left-0 items-center pl-3  ">
            {Loading === true ? (
              <>
                {" "}
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 group-hover:text-indigo-400mr-2  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            ) : (
              <></>
            )}
          </span>
          Đặt Hàng
          <span className="px-3 text-sm">
            {totalPrice === undefined ? null : (
              <>- {totalPrice.toLocaleString()} vnđ</>
            )}
          </span>
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ShoppingCart;

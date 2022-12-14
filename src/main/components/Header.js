import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FiShoppingCart } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [cartNumber, setCartNumber] = useState(0);
  const [state, setState] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("currentUser"));
    if (items) {
      setState(items);
    }
  }, [setState]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("product"));
    let checkData = getData;
    if (checkData) {
      setCartNumber(getData.length);
    }
  }, [setCartNumber]);
  // console.log("getdata la gi cho nay k co? ", getData);

  const logoutUser = async () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: null,
        fullName: null,
      })
    );
    const items = JSON.parse(localStorage.getItem("currentUser"));
    if (items) {
      setState(items);
    }
  };
  const hanldeOnCart = () => {
    if (state && state.email !== null) {
      navigate("/shopping");
    } else {
      navigate("/signInUser");
      toast.error("Vui lòng đăng nhập");
    }
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link
              to={"/"}
              className="items-center gap-3 ml-3  flex text-xl font-extrabold tracking-tight"
            >
              <SiShopware />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                ShopBike
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <div
                onClick={() => hanldeOnCart()}
                className="lg:p-2 hover:bg-gray-50 rounded-lg relative"
              >
                <FiShoppingCart className="text-xl" />
                {cartNumber === 0 ? null : (
                  <>
                    <div className="inline-flex absolute top-0 right-0 justify-center items-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                      {cartNumber}
                    </div>
                  </>
                )}
              </div>

              {state && state.email !== null ? (
                <>
                  <p>
                    Xin chào{" "}
                    <span className="text-red-500 font-medium">
                      {" "}
                      {`${state.fullName}`}
                    </span>{" "}
                  </p>
                  <h2
                    className="cursor-pointer bg-red-500  text-base text-white rounded-2xl ml-4 py-2 px-6 hover:bg-red-700"
                    onClick={() => logoutUser()}
                  >
                    Đăng xuất
                  </h2>
                </>
              ) : (
                <>
                  <Link
                    to="/SignInUser"
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/SignUpUser"
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Sign Up
                  </Link>
                </>
              )}

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    TRANG CHỦ
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/product"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    XE
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/brand"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    HÃNG XE
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    DUCATI
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    CHỊU TRÁCH NHIỆM
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    LIÊN HỆ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <header className="fixed w-full drop-shadow-10xl top-0 z-50">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link
              to={"/"}
              className="items-center gap-3 ml-3  flex text-xl font-extrabold tracking-tight"
            >
              <SiShopware />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                ShopBike
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <div
                onClick={() => hanldeOnCart()}
                className="lg:p-2 hover:bg-gray-50 rounded-lg relative"
              >
                <FiShoppingCart className="text-xl" />
                {cartNumber === 0 ? null : (
                  <>
                    <div className="inline-flex absolute top-0 right-0 justify-center items-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                      {cartNumber}
                    </div>
                  </>
                )}
              </div>

              {state && state.email !== null ? (
                <>
                  <p>
                    Xin chào{" "}
                    <span className="text-red-500 font-medium">
                      {" "}
                      {`${state.fullName}`}
                    </span>{" "}
                  </p>
                  <h2
                    className="cursor-pointer bg-red-500  text-base text-white rounded-2xl ml-4 py-2 px-6 hover:bg-red-700"
                    onClick={() => logoutUser()}
                  >
                    Đăng xuất
                  </h2>
                </>
              ) : (
                <>
                  <Link
                    to="/SignInUser"
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/SignUpUser"
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Sign Up
                  </Link>
                </>
              )}

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    TRANG CHỦ
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/product"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    XE
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/brand"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    HÃNG XE
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    DUCATI
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    CHỊU TRÁCH NHIỆM
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    LIÊN HỆ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;

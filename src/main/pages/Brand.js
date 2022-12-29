import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { brand, brandinfo, images } from "../data/homedata";
import { AiOutlineSearch } from "react-icons/ai";
import Brandcard from "../components/Brandcard";

const Brand = () => {
  return (
    <div>
      <Header />

      <Navbar />

      <div className="bg-gray-100 py-5">
        <div className="pb-5" style={{ textAlign: "-webkit-center" }}>
          <img src={images.bgevent} />
        </div>

        <div className="bg-white mx-[125px] text-[10px] py-2 lg:text-base">
          <div className="p-3">
            <h2>TÌM XE THEO HÃNG XE</h2>
          </div>
          <div className="p-3 flex flex-wrap grid-cols-8 justify-start gap-2 ">
            {brandinfo.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border bg-gray-100 w-[10%] py-2"
                  style={{ textAlign: "-webkit-center" }}
                >
                  <img className="w-4 lg:w-6 " src={item.image} />
                  <h2 className="text-[8px] pt-2 lg:text-base ">
                    {item.title}
                  </h2>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between px-4">
            <div className="text-14 font-medium">
              <p>
                Bạn có thể thu hẹp tìm kiếm của mình bằng cách kiểm tra tên nhà
                sản xuất.
              </p>
              <p className="text-gray-500">
                (Chỉ có thể chọn tối đa 5 hãng xe)
              </p>
            </div>
            <div className="flex text-sm">
              <div className="px-2">
                <button className="flex gap-2 button bg-primary-600 text-white font-semibold p-4">
                  <AiOutlineSearch />
                  HIỂN THỊ KẾT QUẢ ĐÃ CHỌN
                </button>
              </div>
              <div className="px-2">
                <button className="button bg-orange-600 text-white font-semibold p-4">
                  BỎ TẤT CẢ CHỌN
                </button>
              </div>
            </div>
          </div>

          <hr className="m-4" />

          <Brandcard />
          {/* Card brand  */}
          {/* <div className="flex justify-start">
            {
              (brand.map = (item, index) => {
                return (
                  <div className="px-6" key={index}>
                    <div className="inline-flex gap-4 items-center py-3">
                      <div>
                        <img src={item.image} />
                      </div>

                      <h1>{item.name}</h1>
                      <h2 className="text-gray-500 text-14 font-medium">
                        {item.amount}
                      </h2>
                    </div>
                    {
                      (item.card.map = (card) => {
                        <div className="flex gap-3 py-3">
                          <div className="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center">
                              <div className="bg-stone-800 max-w-full">
                                <img
                                  className="w-14 h-14 m-[10px] rounded-full shadow-lg"
                                  src={card.image}
                                />
                              </div>
                              <div>
                                <h5 className="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                                  {card.title}
                                </h5>
                                <span className="text-sm text-black dark:text-gray-400">
                                  {card.amount}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>;
                      })
                    }
                  </div>
                );
              })
            }
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brand;

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { brandinfo, images } from "../data/homedata";

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
                <button className="button bg-primary-600 text-white font-semibold p-4">
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

          {/* Card brand  */}
          <div className="flex  justify-start">
            {/* Nhật  */}
            <div className="px-6">
              <div className="inline-flex gap-4 items-center py-3">
                <div>
                  <img src={images.japan} />
                </div>

                <h1>NHẬT BẢN</h1>
                <h2 className="text-gray-500 text-14 font-medium">
                  (123456 xe)
                </h2>
              </div>

              <div className="flex gap-3 py-3">
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.honda}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        HONDA
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        19.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.yamaha}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        YAMAHA
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        3.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.suzuki}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        SUZUKI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        1.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.kawasaki}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        KAWASAKI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        4.505 xe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Ý  */}
            <div className="px-6">
              <div className="inline-flex gap-4 items-center py-3">
                <div>
                  <img src={images.italy} />
                </div>

                <h1>Ý</h1>
                <h2 className="text-gray-500 text-14 font-medium">
                  (123456 xe)
                </h2>
              </div>

              <div className="flex gap-3 py-3">
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.piaggio}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        PIAGGIO
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        19.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.ducati}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        DUCATI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        3.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.benelli}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        BENELLI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        1.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.agusta}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        MV AGUSTA
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        4.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.guzzi}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        GUZZI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        4.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.lambretta}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        LAMBRETTA
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        4.505 xe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mỹ  */}
            <div className="px-6">
              <div className="inline-flex gap-4 items-center py-3">
                <div>
                  <img src={images.japan} />
                </div>

                <h1>NHẬT BẢN</h1>
                <h2 className="text-gray-500 text-14 font-medium">
                  (123456 xe)
                </h2>
              </div>

              <div className="flex gap-3 py-3">
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.honda}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        HONDA
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        19.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.yamaha}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        YAMAHA
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        3.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.suzuki}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        SUZUKI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        1.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.kawasaki}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        KAWASAKI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        4.505 xe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Đức  */}
            <div className="px-6">
              <div className="inline-flex gap-4 items-center py-3">
                <div>
                  <img src={images.japan} />
                </div>

                <h1>NHẬT BẢN</h1>
                <h2 className="text-gray-500 text-14 font-medium">
                  (123456 xe)
                </h2>
              </div>

              <div className="flex gap-3 py-3">
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.honda}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        HONDA
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        19.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.yamaha}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        YAMAHA
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        3.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.suzuki}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        SUZUKI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        1.505 xe
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full h-full max-w-[80px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center">
                    <div className="bg-stone-800 max-w-full">
                      <img
                        class="w-14 h-14 m-[10px] rounded-full shadow-lg"
                        src={images.kawasaki}
                      />
                    </div>
                    <div>
                      <h5 class="mb-1 text-center text-[13px] text-gray-600 font-medium  dark:text-white">
                        KAWASAKI
                      </h5>
                      <span class="text-sm text-black dark:text-gray-400">
                        4.505 xe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Anh */}

            {/* Áo */}

            {/* Đài Loan  */}

            {/* Hàn  */}

            {/* Pháp  */}

            {/* Ấn Độ */}

            {/* Trung Quốc */}

            {/* Thái Lan  */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brand;

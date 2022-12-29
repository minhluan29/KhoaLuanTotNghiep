import React from "react";
import { brand } from "../data/homedata";

function Brandcard() {
  return (
    <div>
      <div className="flex flex-wrap lg:max-w-6xl">
        {brand.map((item, index) => {
          return (
            <div className="px-6" key={index}>
              <div className="inline-flex gap-4 items-center py-3">
                <div>
                  <img src={item.icon} />
                </div>
                <h1 className="uppercase ">{item.name}</h1>
                <h2 className="text-gray-500 text-14 font-medium">
                  {item.amount}
                </h2>
              </div>

              <div className="flex gap-2 pb-2">
                {item.card.map((e) => {
                  return (
                    <div className="flex gap-3 w-[90px] h-[130px]">
                      <div className="w-full h-full max-w-[90px] max-h-[150px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center max-w-full">
                          <div
                            className="bg-stone-800 max-w-full w-[90px] rounded-t-lg"
                            style={{ textAlign: "-webkit-center" }}
                          >
                            <img
                              className="w-14 h-14 m-[10px] rounded-full shadow-lg"
                              src={e.image}
                            />
                          </div>
                          <div className="max-w-full">
                            <h5 className="uppercase mb-1 text-center text-xs text-gray-600 font-medium  dark:text-white">
                              {e.title}
                            </h5>
                            <h4 className=" font-bold text-xs text-black text-center dark:text-gray-400">
                              {e.amount}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brandcard;

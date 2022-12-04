import React from "react";
import { SiShopware } from "react-icons/si";
import { sidebar } from "../data/homedata";

function Sidebar() {
  return (
    <div>
      <aside class="w-64" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <a href="#" class="flex items-center pl-2.5 mb-5">
            <SiShopware class="mr-3 h-6 sm:h-7" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ShopBike
            </span>
          </a>
          <ul class="space-y-2">
            {sidebar.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span class="ml-3">{item}</span>
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;

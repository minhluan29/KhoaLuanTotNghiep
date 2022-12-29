import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  TRANG CHỦ
                </Link>
              </li>
              <li>
                <Link
                  to={"/product"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  XE
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  PHÂN KHỐI
                </a>
              </li>
              <li>
                <Link
                  to={"/brand"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  LOẠI XE
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  TƯ VẤN CHỌN XE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

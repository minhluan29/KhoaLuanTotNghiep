import axios from "axios";
import React, { useEffect, useState } from "react";
import { ItemModal } from "../components";
import { toast } from "react-hot-toast";
import { FiFilter } from "react-icons/fi";

const Items = () => {
  const [showModal, setShowModal] = React.useState(false);

  const [product, setProduct] = useState([]);

  const [update, setUpdate] = useState(null);

  const closeModal = () => {
    setUpdate(null);
    setShowModal(false);
  };

  const toggleModal = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllItem`)
      .then((res) => {
        let data = res.data.data;
        setProduct(data);
        setUpdate(null);
      });

    setShowModal(!showModal);
  };

  const handleUpdate = (id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getOneItem?id=${id}`)
      .then((res) => {
        if (res.data.errCode === 0) {
          setUpdate(res.data.data);
          setShowModal(true);
        } else {
          toast.error(res.data.errMessage);
        }
      });
  };

  const handleDelete = async (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/api/deleteItem?id=${id}`)
      .then((res) => {
        console.log("tra ve: ", res);
        let xoa = res.data;
        if (xoa.errCode === 0) {
          toast.success(xoa.errMessage);
          axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllItem`)
            .then((res) => {
              let data = res.data.data;
              setProduct(data);
            });
        } else {
          toast.error(xoa.errMessage);
        }
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllItem`)
      .then((res) => {
        let data = res.data.data;
        setProduct(data);
      });
  }, []);

  return (
    <>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div>
                    <button
                      onClick={() => closeModal()}
                      className="bg-blue-700 w-20 px-3 py-2 mt-4 mr-5 text-white float-right rounded-lg"
                    >
                      X
                    </button>
                  </div>
                  <ItemModal data={update} toggleModal={() => toggleModal()} />
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <div>
        <div class="flex-1 pb-8">
          <div class="flex items-center justify-between py-7 px-10">
            <div>
              <h1 class="uppercase text-2xl font-semibold leading-relaxed text-gray-800 dark:text-white">
                Items
              </h1>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Hãy phát triển doanh nghiệp của bạn! Tạo sản phẩm của bạn và tải
                lên ở đây
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              class="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              <span class="text-sm font-semibold tracking-wide">
                Create Item
              </span>
            </button>
          </div>

          <table class="w-full border-b border-gray-200">
            <thead>
              <tr class="text-sm font-medium text-gray-700 border-b border-gray-200 dark:text-white">
                <td class="pl-10 w-2/5">
                  <div class="flex items-center gap-x-4">
                    <input
                      type="checkbox"
                      class="w-6 h-6 text-indigo-600 rounded-md border-gray-300 "
                      indeterminate="indeterminate"
                    />
                    <span>Product Name</span>
                  </div>
                </td>
                <td class="py-4 px-4 text-center">Price</td>
                <td class="py-4 px-4 text-center">Số Lượng</td>
                <td class="py-4 px-4 text-center">CateId</td>
                <td class="py-4 px-4 text-center">BrandId</td>
                <td class="py-4 px-4 text-center">Trạng Thái</td>
                {/* <td class="py-4 px-4 text-center">Trạng Thái</td> */}
                <td class="py-4 pr-10 pl-4 text-center">
                  <FiFilter class="w-6 h-6 fill-current" />
                </td>
              </tr>
            </thead>
            {product.map((item, index) => {
              return (
                <>
                  <tbody key={index} className="dark:text-white">
                    <tr
                      v-for="product in products"
                      class="hover:bg-gray-400 transition-colors group"
                    >
                      <td class="flex gap-x-4 items-center py-4 pl-10 ">
                        <input
                          type="checkbox"
                          class="w-10 h-6 text-indigo-600 rounded-md border-gray-300"
                        />
                        <img
                          src={item.image}
                          alt=""
                          class="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                        />
                        <div>
                          <a
                            href="#"
                            class="text-lg font-semibold text-gray-700 dark:text-white"
                          >
                            {item.name}
                          </a>
                          <div class="font-medium text-gray-300">
                            {item.des}
                          </div>
                        </div>
                      </td>
                      <td class="font-medium text-center">
                        {item.originalPrice.toLocaleString()} vnđ
                      </td>
                      <td class="font-medium text-center">{item.qty}</td>
                      <td class="text-center">
                        <span class="font-medium">{item.cateId}</span>
                      </td>
                      <td class="text-center">
                        <span class="font-medium">{item.brandId}</span>
                      </td>
                      <td>
                        <div class="flex gap-x-2 justify-center items-center">
                          <a
                            href="#"
                            v-for="icon in product.platformIcons"
                            class="p-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:text-gray-600"
                          >
                            {item.status}
                          </a>
                        </div>
                      </td>
                      <td>
                        <span class="inline-block w-20 group-hover:hidden">
                          Tác Vụ
                        </span>
                        <div class="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                          <button
                            onClick={() => handleUpdate(item.id)}
                            class="p-2 hover:rounded-md hover:bg-gray-200"
                          >
                            Chỉnh Sửa
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            class="p-2 hover:rounded-md hover:bg-gray-200"
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>

          {/* <div class="flex gap-x-2 justify-center pt-8">
            <button class="flex justify-center items-center w-8 h-8">
              <ChevronLeftIcon class="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600" />
            </button>
            <button
              v-for="i in 6"
              class="flex items-center justify-center w-8 h-8 font-medium rounded-full"
            >
              {{ i }}
            </button>
            <button class="flex justify-center items-center w-8 h-8">
              <ChevronRightIcon class="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600" />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Items;

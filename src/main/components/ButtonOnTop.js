import React from "react";
import { FiArrowUp } from "react-icons/fi";

const ButtonOnTop = () => {
  const crollToTop = () => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  };

  //   const crollToTop = () => {
  //     window.scrollTo(0, 0);
  //   };
  return (
    <button
      onClick={() => crollToTop()}
      className="animate-bounce right-4 bottom-0 p-3 lg:p-4 scroll-auto fixed rounded-full bg-red-400"
    >
      <FiArrowUp className="text-base lg:text-xl" />
    </button>
  );
};

export default ButtonOnTop;

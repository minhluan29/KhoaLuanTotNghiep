import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { className } from "../../utils/classNames";

const ButtonOnTop = () => {
  const [isVisable, setIsVisable] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  const crollToTop = () => {
    const body = document.querySelector("#root");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // window.scrollTo(0, 0);

  //   const crollToTop = () => {
  //     window.scrollTo(0, 0);
  //   };
  return (
    <button
      onClick={() => crollToTop()}
      className={className(
        isVisable ? "opacity-100" : "opacity-0",
        "animate-bounce right-4 bottom-0 p-3 lg:p-4 scroll-auto fixed rounded-full bg-red-400"
      )}
      // className="animate-bounce right-4 bottom-0 p-3 lg:p-4 scroll-auto fixed rounded-full bg-red-400"
    >
      <FiArrowUp className="text-base lg:text-xl" />
    </button>
  );
};

export default ButtonOnTop;

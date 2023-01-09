import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
} from "../../../dashboard/components";
import "./DefaultLayout.css";

import { useStateContext } from "../../../dashboard/contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  const [state, setState] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("currentAdmin"));
    if (items) {
      setState(items);
    }
  }, [setState]);

  const logoutAdmin = async () => {
    // localStorage.setItem(
    //   "currentUser",
    //   JSON.stringify({
    //     email: null,
    //     fullName: null,
    //   })
    // );
    // const items = JSON.parse(localStorage.getItem("currentAdmin"));
    // if (items) {
    //   setState(items);
    // }
  };

  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>
      {state && state.email !== null ? (
        <>
          <div className={currentMode === "Dark" ? "dark" : ""}>
            {/* <BrowserRouter> */}
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              <div
                className={
                  activeMenu
                    ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                    : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                }
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar logoutAdmin={() => logoutAdmin()} />
                </div>
                {children}

                <div>{themeSettings && <ThemeSettings />}</div>
                <Footer />
              </div>
            </div>
            {/* </BrowserRouter> */}
          </div>
        </>
      ) : (
        navigate("/signIn")
      )}
    </>
  );
};

export default DefaultLayout;

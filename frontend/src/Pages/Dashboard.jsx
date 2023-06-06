import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbarr, Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import Stream from './Stream';
import Orders from './Orders';
import Seizure from './Seizure'
import "../css/Dashboard.css";

import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();
 
  console.log("--------------------------------------------------")

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <div content="Settings" position="Top">
              <button
                type="button"
                style={{ borderRadius: "50%", backgroundColor: currentColor}}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-grey"
                onClick={() => setThemeSettings(true)}

              >
                <FiSettings />
              </button>
            </div>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg">
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
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
               {/* <ThemeSettings /> */}
              
              <Routes>
                {/* <Route path="/stream" element={<Stream />} /> */}
                <Route path="/stream" element={<Stream/>} />
                <Route path="/seizure" element={<Seizure/>} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
    </div>
  );
};

export default Dashboard;

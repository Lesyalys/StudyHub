import { useState, useEffect } from "react";
import { MenuComponent } from "./components/MenuComponent.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { CourseData } from "./components/CourseData.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Contacts } from "./components/Contacts.jsx"

import "./App.css";


export default function App() {
  const [data, setData] = useState({ allYears: 4, yearNumber: 0, materials: [{}], filterMaterials: [{}] });
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div
      style={{ backgroundImage: "var(--bg-img)" }}
      className="overflow-y-auto min-h-screen w-full bg-no-repeat bg-cover bg-center  flex flex-col"
    >
      <Header theme={theme} setTheme={setTheme} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <MenuComponent
            data={data}
            setData={setData}
          />
          <div className="flex flex-col w-full">
            <div className="mb-4 pb-2 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-medium ">Учебные материалы</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm ">Выбран год</span>
                <span className="px-4 py-1.5 bg-white border border-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-700">
                  {data.yearNumber}
                </span>
              </div>
            </div>

            <div className="md:h-100 h-64 w-full overflow-auto justify-items-center border  border-white/30 bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              {loading ? (
                <div className="flex justify-center items-center">
                  <div
                    className="
    w-10 h-10 md:w-16 md:h-16
    border-4 border-white/30 
    border-t-white 
    rounded-full 
    animate-spin
  "
                  ></div>
                </div>
              ) : data.data !== "" ? (
                <CourseData setData={setData} data={data} setLoading={setLoading} />
              ) : (
                <>
                  <p>Select course year to see available courses</p>
                  <DotLottieReact
                    className="md:h-70 h-30"
                    src="https://lottie.host/a6429892-af72-4b09-9ea7-fd86c3a80aaf/MCmTP3rGsq.lottie"
                    loop
                    autoplay
                  />
                </>
              )}
            </div>
            <div className=" lg:hidden block">
              <Contacts />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

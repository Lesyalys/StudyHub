import { useState, useEffect } from "react";
import { MenuComponent } from "./components/MenuComponent.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { CourseData } from "./components/CourseData.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Contacts } from "./components/Contacts.jsx";
import { initServiceWorker } from "./ulils_module/initServiceWorker.js";

import "./App.css";

export default function App() {
  const [data, setData] = useState({
    allYears: 4,
    yearNumber: 0,
    materials: [],
    filterMaterials: [],
  });
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    initServiceWorker();
  }, [])

  return (
    <div
      style={{ backgroundImage: "var(--bg-img)" }}
      className="min-h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col transition-colors duration-300"
    >
      <Header theme={theme} setTheme={setTheme} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <MenuComponent data={data} setData={setData} />

          <div className="flex-1 w-full">
            <div className="mb-6 pb-4 border-b border-[var(--text)]/20 flex items-center justify-between">
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                Учебные материалы
              </h2>

              {data.yearNumber !== 0 && (
                <div className="flex items-center gap-3">
                  <span className="text-sm" style={{ color: "var(--text)" }}>
                    Выбран год
                  </span>
                  <span
                    className="px-5 py-2 rounded-lg font-semibold text-sm shadow-lg"
                    style={{
                      backgroundColor: "var(--btn-hover-bg)",
                      color: "var(--btn-hover-text)",
                    }}
                  >
                    {data.yearNumber}
                  </span>
                </div>
              )}
            </div>

            <div
              className="min-h-[400px] w-full overflow-auto border backdrop-blur-sm rounded-xl p-6 sm:p-8"
              style={{
                borderColor: "var(--btn-color-border)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div
                    className="w-12 h-12 border-3 rounded-full animate-spin"
                    style={{
                      borderColor: "var(--btn-color-border)",
                      borderTopColor: "var(--btn-hover-bg)",
                    }}
                  ></div>
                </div>
              ) : data.yearNumber !== 0 ? (
                <CourseData
                  setData={setData}
                  data={data}
                  setLoading={setLoading}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <p className="text-lg mb-6" style={{ color: "var(--text)" }}>
                    Выберите год для просмотра материалов
                  </p>
                  <div className="w-48 h-48 opacity-75">
                    <DotLottieReact
                      className="w-full h-full"
                      src="https://lottie.host/a6429892-af72-4b09-9ea7-fd86c3a80aaf/MCmTP3rGsq.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="lg:hidden mt-6">
              <Contacts />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

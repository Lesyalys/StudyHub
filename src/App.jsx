import { useState } from "react";
import { SupabaseComponent } from "./components/Supabase.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { CourseData } from "./components/CourseData.jsx";
import { Icon } from "@iconify/react";
import "./App.css";

export default function App() {
  const [data, setData] = useState({ dataYear: "dataYear", yearName: "datas" });
  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen w-full bg-no-repeat bg-cover bg-center bg-[url('/img/light.png')] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <SupabaseComponent
            setData={setData}
            setInstruments={setInstruments}
            instruments={instruments}
          />
          <div className="flex flex-col w-full">
            <div className="mb-4 pb-2 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-700">
                Available courses
              </h2>
              {data.yearName !== "datas" && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Selected year:</span>
                  <span className="px-4 py-1.5 bg-white border border-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-700">
                    {data.yearName}
                  </span>
                </div>
              )}
            </div>

            <div className="border border-white/30 bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              {loading ? (
                <Icon
                  icon="line-md:loading-twotone-loop"
                  className="animate-spin text-gray-500 md:h-25 md:w-25 lg:h-35 lg:w-35 justify-center"
                />
              ) : (
                <CourseData data={data} setLoading={setLoading} />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

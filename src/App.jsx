import { useState } from "react";
import { SupabaseComponent } from "./components/Supabase.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { CourseData } from "./components/CourseData.jsx";
import "./App.css";

export default function App() {
  const [data, setData] = useState({ name: "course" });
  const [instruments, setInstruments] = useState([]);
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
          <div className="border border-white flex-1 p-2">
            <CourseData data={data} instruments={instruments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";
import { SupabaseClass } from "../supabase/Supabase.js";

export function SupabaseComponent({ instruments, setInstruments, setData }) {
  const supabase = new SupabaseClass();
  // const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    supabase.getFiles(setInstruments);
  }, []);

  return (
    <div className=" w-full lg:w-80 xl:w-96 shrink-0">
      <h2 className="text-base sm:text-lg font-light text-gray-700 mb-3 sm:mb-4 tracking-wide px-1">
        Select course
      </h2>
      <div className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {instruments.map((instrument) => (
          <div
            key={instrument.name}
            onClick={() => supabase.getFilesOnName(setData, instrument.name)}
            className="relative shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-600 hover:text-gray-900  rounded-md  transition-all duration-200 cursor-pointer whitespace-nowrap lg:whitespace-normal  "
          >
            {instrument.name}
          </div>
        ))}
      </div>
    </div>
  );
}

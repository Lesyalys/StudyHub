import { useEffect } from "react";
// import { SupabaseClass } from "../supabase/Supabase.js";

// const supabase = new SupabaseClass();
export function SupabaseComponent({
  instruments,
  setInstruments,
  setData,
  supabase,
}) {
  useEffect(() => {
    supabase.getFiles(setInstruments);
  }, []);

  return (
    <div className=" w-full lg:w-80 xl:w-96 shrink-0">
      <h2 className="text-base sm:text-lg font-light  mb-3 sm:mb-4 tracking-wide px-1">
        Select course
      </h2>
      <ul className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {instruments.map((instrument) => (
          <li
            key={instrument.name}
            onClick={() => supabase.getFilesOnName(setData, instrument.name)}
            className="border-b border-white/30 relative shrink-0 px-3 sm:px-4 py-2 
              sm:py-2.5 text-xs sm:text-sm  
                 transition-all duration-200 cursor-pointer whitespace-nowrap 
                lg:whitespace-normal  "
          >
            {instrument.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

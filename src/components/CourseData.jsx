import { useEffect } from "react";
// import { SupabaseClass } from "../supabase/Supabase.js";
import { linkForDownload } from "../helper/linkForDownload.js";

// const supabase = new SupabaseClass();
export function CourseData({ data, setLoading, supabase }) {
  useEffect(() => {}, []);
  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3  lg:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
      {Array.isArray(data?.dataYear) && data?.dataYear.length > 1
        ? data?.dataYear.map((e) => {
            return (
              <button
                key={e.name}
                onClick={async () => {
                  await linkForDownload(setLoading, e, supabase, data);
                }}
                className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 
                text-xs sm:text-sm text-center 
                border  
                transition-all duration-200 cursor-pointer shadow-sm hover:shadow w-full"
              >
                <h1 className="md:text-xl pb-1">{e?.name || e}</h1>
                <p className="hidden md:block text-xs">
                  created: {new Date(e?.created_at).toLocaleDateString()}
                </p>
                <p className="hidden md:block  text-xs">
                  updated: {new Date(e?.updated_at).toLocaleDateString()}
                </p>
              </button>
            );
          })
        : "This is what will happen soon ;)"}
    </div>
  );
}

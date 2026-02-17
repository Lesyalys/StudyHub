import { useEffect } from "react";
import { SupabaseClass } from "../supabase/Supabase.js";

export function CourseData({ data }) {
  const supabase = new SupabaseClass();
  //   console.log({ data });
  useEffect(() => {}, []);
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 mt-4 sm:mt-6">
      {Array.isArray(data) &&
        data.map((e, i) => (
          <span
            key={e.name}
            onClick={() => supabase.getDownloadsData(e.name)}
            className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 text-xs sm:text-sm text-center text-gray-600 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:text-gray-900 transition-all duration-200 cursor-pointer shadow-sm hover:shadow truncate"
            title={e.name}
          >
            {e.name}
          </span>
        ))}
    </div>
  );
}

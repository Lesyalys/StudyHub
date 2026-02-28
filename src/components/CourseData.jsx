import { useEffect } from "react";
import { SupabaseClass } from "../supabase/Supabase.js";

export function CourseData({ data, setLoading }) {
  const supabase = new SupabaseClass();
  useEffect(() => {}, []);
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 mt-4 sm:mt-6">
      {Array.isArray(data.dataYear) &&
        //data?.dataYear &&
        data.dataYear.map((e) => {
          return (
            <span
              key={e.name}
              onClick={async () => {
                try {
                  console.log(e.name);
                  setLoading(true);
                  const fileData = await supabase.getDownloadsData(
                    e.name,
                    data.yearName,
                  );

                  if (fileData) {
                    setLoading(false);
                    const url = window.URL.createObjectURL(fileData);
                    const link = document.createElement("a");

                    link.href = url;
                    link.download = `${e.name}`;
                    document.body.appendChild(link);

                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  }
                } catch (error) {
                  console.error("Ошибка при скачивании:", error);
                  alert("Не удалось скачать файл");
                } finally {
                  setLoading(false);
                }
              }}
              className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 text-xs sm:text-sm text-center text-gray-600 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:text-gray-900 transition-all duration-200 cursor-pointer shadow-sm hover:shadow w-fit"
            >
              <h1 className="text-xl pb-1">{e?.name || e}</h1>
              <p>created_at: {new Date(e?.created_at).toLocaleDateString()}</p>
              <p>updated_at:{new Date(e?.updated_at).toLocaleDateString()}</p>
            </span>
          );
        })}
    </div>
  );
}

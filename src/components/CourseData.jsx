import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { getStructFules } from "../ulils_module/getStructFules.js";

export function CourseData({ setData, data, setLoading }) {
  useEffect(() => {
    const downloadData = async () => {
      try {
        const downloadMaterials = await getStructFules();

        if (!downloadMaterials.success) {
          throw new Error(downloadMaterials.error);
        }

        // console.log(downloadMaterials.data)
        setData({ ...data, materials: downloadMaterials.data });
      } catch (error) {
        console.error(error);
      }
    };
    downloadData();
  }, [setData, setLoading]);

  useEffect(() => {
    const dataFilter = data.materials.filter((e) => e.id === data.yearNumber);
    // console.log("dataFilter: " + dataFilter);
    setData((prev) => ({ ...prev, filterMaterials: dataFilter }));
  }, [data?.yearNumber, data?.materials]);

  const selectYearData = data?.filterMaterials?.[0];
  const paths = selectYearData?.path || [];

  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
      {selectYearData ? (
        paths?.map((e2, i) => {
          return (
            <a
              key={i}
              id="btn-select-materials"
              onClick={() => console.log(e2.fullPath)}
              download={`${e2.fullPath}`}
              href={`${e2.fullPath}`}
              className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 
              text-xs sm:text-sm text-center 
              border rounded-lg
              transition-all duration-200 cursor-pointer 
              shadow-sm hover:shadow-md w-full
              hover:-translate-y-0.5
              flex flex-col items-center justify-center
              min-h-[80px]"
              style={{
                borderColor: "var(--btn-color-border)",
                color: "var(--text)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--btn-hover-bg)";
                e.currentTarget.style.color = "var(--btn-hover-text)";
                e.currentTarget.style.borderColor =
                  "var(--btn-color-border-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.borderColor = "var(--btn-color-border)";
              }}
            >
              <span className="text-xl mb-1">📦</span>
              <span className="font-medium truncate w-full px-1">
                {e2.shortName}.zip
              </span>
            </a>
          );
        })
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-8">
          <p className="mb-4" style={{ color: "var(--text)" }}>
            Будет позже
          </p>
          <div className="w-32 h-32 md:w-48 md:h-48 opacity-75">
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
  );
}

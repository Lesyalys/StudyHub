import { useEffect } from "react";
// import { linkForDownload } from "../ulils_module/linkForDownload.js";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
    }
    downloadData();
  }, [setData, setLoading]);

  useEffect(() => {
    const dataFilter = data.materials.filter(e => e.id === data.yearNumber);
    // console.log("dataFilter: " + dataFilter);
    setData(prev => ({ ...prev, filterMaterials: dataFilter }));
  }, [data?.yearNumber, data?.materials])

  const selectYearData = data?.filterMaterials?.[0];
  const paths = selectYearData?.path || [];

  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3  lg:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
      {paths.map((e2, i) => {
        return (
          <button
            key={i}
            className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 
                text-xs sm:text-sm text-center 
                border  
                transition-all duration-200 cursor-pointer shadow-sm hover:shadow w-full">
            {e2.shortName}
          </button>
        )
      })}
    </div>
  );
}

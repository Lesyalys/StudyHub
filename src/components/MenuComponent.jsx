import { Contacts } from "./Contacts.jsx";

export function MenuComponent({ data, setData, }) {
  return (
    <div className=" w-full lg:w-80 xl:w-96 shrink-0">
      <h2 className="text-base sm:text-lg font-light  mb-3 sm:mb-4 tracking-wide px-1">
        Выберите год
      </h2>
      <ul className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {Array.from({ length: data.allYears }).map((_, i) =>
          <li key={i}
            onClick={() => setData({ ...data, yearNumber: i + 1 })}
            className="border-b border-white/30 relative shrink-0 px-3 sm:px-4 py-2 
              sm:py-2.5 text-xs sm:text-sm  
                 transition-all duration-200 cursor-pointer whitespace-nowrap 
                lg:whitespace-normal ">Год {i + 1}</li>)}

      </ul>
      <div className="hidden lg:block">
        <Contacts />
      </div>
    </div>
  );
}

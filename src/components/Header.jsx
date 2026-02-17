import { useState } from "react";

export function Header() {
  const [whiteWolf, setWhiteWolf] = useState(false);
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-4 sm:py-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <span className="flex flex-row items-center gap-2 text-xl sm:text-2xl font-light text-gray-800">
        <img
          id="imgMaskot"
          src={whiteWolf ? "/img/whiteWolf.svg" : "/img/base.svg"}
          className="w-35 h-35 "
          onClick={() => setWhiteWolf(!whiteWolf)}
        ></img>
        STUDYHUB
      </span>

      {/* Мобильное меню (упрощенное для мобильных) */}
      {/* <span className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-gray-600">
        <p className="hover:text-gray-900 transition-colors duration-200 cursor-pointer relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all hover:after:w-full">
          Study
        </p>
        <p className="hover:text-gray-900 transition-colors duration-200 cursor-pointer relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all hover:after:w-full">
          Fast
        </p>
        <p className="hover:text-gray-900 transition-colors duration-200 cursor-pointer relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all hover:after:w-full">
          Fast
        </p>
      </span>

      <span className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer border border-gray-200 px-4 sm:px-5 py-1.5 sm:py-2 rounded-md hover:border-gray-300">
        menu
      </span> */}
    </nav>
  );
}

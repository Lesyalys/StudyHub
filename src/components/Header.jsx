import whiteWolf from "/img/whiteWolf.svg";

export function Header() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-4 sm:py-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <span className="flex flex-row items-center gap-2 text-xl sm:text-2xl font-light text-gray-800">
        <img id="imgMaskot" src={whiteWolf} className="w-30 h-30 " />
        STUDYHUB
      </span>
    </nav>
  );
}

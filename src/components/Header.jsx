import whiteWolf from "/img/whiteWolf.svg";
import darkWolf from "/img/darkWolf.svg";
import { useEffect } from "react";

export function Header({ theme, setTheme }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav
      style={{ color: "var(--text)" }}
      className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-4 sm:py-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full"
    >
      <span className="flex flex-row items-center gap-2 text-xl sm:text-2xl font-light ">
        <img
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          id="imgMaskot"
          src={theme === "light" ? whiteWolf : darkWolf}
          className="md:w-30 md:h-30 w-20 h-20"
        />
        STUDYHUB
      </span>
    </nav>
  );
}

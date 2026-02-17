import { useEffect } from "react";
import { useState } from "react";

export function ToggleTheme() {
  const theme = localStorage.getItem("theme");
  const [isDark, setIsDark] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <img
      src="/img/mask2.svg"
      className="w-30 h-30 rounded-full"
      onClick={() => {}}
    ></img>
  );
}

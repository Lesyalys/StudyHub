import menuItem from "../../public/data/json/menu.json";
import { navT } from "../template/navT.js";
import { initApp } from "../main.js";

export function menu() {
  return `${menuItem.map((e) => navT(e)).join("")}`;
}

export function chengeCutse() {
  const component = document.getElementById(`year_1`);
  component.addEventListener("click", () => {
    initApp(2);
  });
}

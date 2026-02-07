import menuItem from "../../public/data/json/menu.json";
import { navT } from "../template/navT.js";

export function menu() {
  return `${menuItem.map((e) => navT(e)).join("")}`;
}

export function chengeCutse(id) {
  const component = document.getElementById(`year_${id}`);
  component.addEventListener("click", () => console.log("click"));
}

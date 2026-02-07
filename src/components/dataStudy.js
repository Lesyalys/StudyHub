import data from "../../public/data/json/data.json";
import { dataStudyT } from "../template/dataStudyT.js";

export function dataStudy(id) {
  const datas = data.filter((e) => e.id === Number(id));
  const container = document.getElementById("dataStudy");
  container.innerHTML = `${datas.map((e) => dataStudyT(e)).join("")}`;
}

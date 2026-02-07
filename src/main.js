import "./style.css";
import { menu, chengeCutse } from "./components/nav.js";
import { dataStudy } from "./components/dataStudy.js";
let id = "1";

export async function initApp() {
  document.querySelector("#app").innerHTML = `
    <div class="grid grid-cols-2 min-h-screen w-full">
      <ul class="bg-[url('/img/offer.jpg')] bg-no-repeat bg-cover">${menu()}</ul>
      <div id="dataStudy" class="flex flex-col bg-[url('/img/offer2.jpg')] bg-no-repeat bg-cover">${dataStudy(id)}</div>
    </div>
  `;
}
initApp();
chengeCutse(id);

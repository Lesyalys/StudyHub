import "./style.css";
import { menu, chengeCutse } from "./components/nav.js";
import { dataStudy } from "./components/dataStudy.js";

export async function initApp(id) {
  const data = id ? id : 1;
  document.querySelector("#app").innerHTML = `
    <div class="grid grid-cols-2 min-h-screen w-full">
      <ul class="bg-[url('/img/offer.jpg')] bg-no-repeat bg-cover">${menu()}</ul>
      <div id="dataStudy" class="flex flex-col bg-[url('/img/offer2.jpg')] bg-no-repeat bg-cover">${dataStudy(data)}</div>
    </div>
  `;
}
initApp();
chengeCutse();

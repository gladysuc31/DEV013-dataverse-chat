import { navigateTo } from "../router.js";

export const Api = () => {
  const viewEl = document.createElement("div");
  
  viewEl.innerHTML = `<button id="botonHome">Home</button>`;
  
  const botonHome = viewEl.querySelector("#botonHome");
  botonHome.addEventListener("click", () => {
    navigateTo("/",{});
  });

  return viewEl;
};
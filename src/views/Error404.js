import { navigateTo } from "../router.js";

export const Error404 = () => {

  const Error404 = document.createElement("div");

  Error404.classList.add("Error404Div");

  Error404.innerHTML =

    `<section class="error404"> 
 <h1 class="errorTitle">Error 404</h1> 
 <h2 class="errorMsg">Página no encontrada</h2> 
  <div class="imagen">
    <img src="images/mike y sully.png" class="errorImg">
  </div>
  <button class="homeBtn">Volver al inicio</button> 
</section>`;
  const homeButton = Error404.querySelector(".homeBtn");
  homeButton.addEventListener("click", () => {
    navigateTo("/");
  });
  return Error404;
}

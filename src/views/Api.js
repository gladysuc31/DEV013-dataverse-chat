import { navigateTo } from "../router.js";
import { setApiKey } from "../lib/apiKey.js";

export const Api = () => { 
  const ApiDiv = document.createElement("div"); 
  ApiDiv.classList.add("apiDiv"); 

  ApiDiv.innerHTML =
  `<section class="apiSection"> 
    <p class="apiTitle">Ingresar</p> 
    <textarea class="textApi" placeholder="Escribe aquí la API KEY..."></textarea>
    <div class="botones">
    <button class="guardar">Guardar</button>
    <button class="homeButton">Home</button> 
    </div>
  </section>`; 

  const apiKey = ApiDiv.querySelector(".textApi");
  const saveApiKey = ApiDiv.querySelector(".guardar");

  saveApiKey.addEventListener("click", function () {
    setApiKey(apiKey.value);
  });

  const returnHome = ApiDiv.querySelector(".homeButton");
  returnHome.addEventListener("click", () => {
    navigateTo("/",{})});
  
return ApiDiv; 
} 
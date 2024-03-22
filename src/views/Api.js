import { navigateTo } from "../router.js";

export const Api = () => { 
  const ApiDiv = document.createElement("div"); 
  ApiDiv.classList.add("apiDiv"); 

  ApiDiv.innerHTML =
  `<section class="apiSection">
    <button class="homeButton">Home</button>  
    <p class="apiTitle">Ingresar</p> 
    <textarea class="textApi" placeholder="Escribe aquí la API KEY..."></textarea>
    <div class="botones">
    <button class="guardar">Guardar</button>
    <button class="eliminar">Eliminar</button>
    </div>
  </section>`; 

  const returnHome = ApiDiv.querySelector(".homeButton");
  returnHome.addEventListener("click", () => {
    navigateTo("/",{})});
  
return ApiDiv; 
} 
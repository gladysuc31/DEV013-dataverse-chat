import { navigateTo } from "../router.js";

//export const Api = () => {
  //const viewEl = document.createElement("div");
  
  //viewEl.innerHTML = `<button id="botonHome">Home</button>`;
  
  //const botonHome = viewEl.querySelector("#botonHome");
  //botonHome.addEventListener("click", () => {
   // navigateTo("/",{});
  //});

 // return viewEl;
//};
export const Api = () => { 

  const ApiDiv = document.createElement("div"); 

  ApiDiv.classList.add("ApiDiv"); 

ApiDiv.innerHTML =  

`<section class="API"> 

<label>API KEY </label> 

<p>Ingresar</p> 

<textarea placeholder="Escribe aquí la API KEY..."></textarea> 
       <button>Guardar</button> 
       <button>Eliminar</button> 

</section>`; 

 

return ApiDiv; 

} 

 

 
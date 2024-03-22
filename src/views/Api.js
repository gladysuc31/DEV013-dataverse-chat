import { navigateTo } from "../router.js";

export const Regresar = () => {
  const viewEl = document.createElement("div");
  
  viewEl.innerHTML = `<button id="botonRegresar">Regresar</button>`;
  
  const botonRegresar = viewEl.querySelector("#botonRegresar");
  botonRegresar.addEventListener("click", () => {
   navigateTo("/",{});
  });

 return viewEl;
};



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

 

 
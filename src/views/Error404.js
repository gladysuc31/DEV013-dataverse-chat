// import { navigateTo } from "../router.js";

export const Error404 = () => { 

  const Error404 = document.createElement("div"); 

  Error404.classList.add("Error404Div"); 

Error404.innerHTML =  

`<section class="error404"> 

 <label>Error 404</label> 

 <p>Página no encontrada</p> 

        <div class="imagen"></div>
        <button>Volver al inicio</button> 

</section>`; 

return Error404; 
}
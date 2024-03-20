// import { navigateTo } from "../router.js";

export const Chat = () => { 

  const chatDiv = document.createElement("div"); 

  chatDiv.classList.add("chatDiv"); 

chatDiv.innerHTML =  

`<section class="chat"> 

<div class="container"> 

        <textarea placeholder="Escribe aquí..."></textarea> 

        <p><button type="button">Enviar</button></p> 

        <button>Regresar</button> 

</section>`; 
return chatDiv; 

} 

 

 
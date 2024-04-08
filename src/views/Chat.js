import { navigateTo} from "../router.js";
import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export const Chat = () => { 
console.log	(communicateWithOpenAI(data.name, "Quien eres?"));
  const chatDiv = document.createElement("div"); 

  chatDiv.classList.add("chatDiv");
  chatDiv.innerHTML = 
  `<section class="chat"> 
	<div class="container">
  	<h2 class="movieTitle">${data.name}</h2>
	<textarea placeholder="Escribe aquí..."></textarea> 
	<p><button type="button">Enviar</button></p> 
	<button>Regresar</button> 
	</section>`; 

	return chatDiv; 

}
import { navigateTo} from "../router.js";
import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export const Chat = (pelicula) => { 

  const chatDiv = document.createElement("div"); 

  const newPelicula = data.find((peliculaId) => peliculaId.id === pelicula.id)
  chatDiv.classList.add("chatDiv");
  chatDiv.innerHTML = 
  `<section class="chatSection"> 
	<div class="movieDetails">
	<h2 class="tituloPelicula">${newPelicula.name}</h2>
	<img class="imgPelicula" src="${newPelicula.imageUrl}">
	<p class="descriptionMovie">${newPelicula.description}</p>
	</div>
	<div class="chatContainer">
	<div class="chatArea">
	</div>
	<textarea class="inputMsg" placeholder="Escribe aquí..."></textarea> 
	<button class="enviarBtn">Enviar</button>
	<button>Regresar</button> 
	</div>
	</section>`; 

	const enviarBtn = chatDiv.querySelector(".enviarBtn");
  	const inputMsg = chatDiv.querySelector(".inputMsg");
	const areaChat = chatDiv.querySelector(".chatArea");

	enviarBtn.addEventListener("click", () => {
		const mensaje = inputMsg.value

		if (mensaje !== "") {
			const msjArea = document.createElement("div");
			msjArea.classList.add("msjDiv");
			msjArea.innerHTML = mensaje;
			areaChat.appendChild(msjArea);
			inputMsg.value = "";

			communicateWithOpenAI(mensaje, newPelicula.name)
			.then((dataFech) => {
				const responseArea = document.createElement("div");
				responseArea.classList.add("responseDiv");
				responseArea.innerHTML = `${dataFech.choices[0].message.content}`;
				areaChat.appendChild(responseArea);
			})
		}
	})
	
	return chatDiv; 
}
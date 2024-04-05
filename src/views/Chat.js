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



//`<section class="card"> 
//<div class="card.description"></div>
//<div class="name"></div>
//<div class="card image"></div>
//<div class="description"></div>
// </section>`; 


/*const renderMovieItems = (data) => {
	let html = '';
	data.forEach(function(pelicula) {
	html += `<li class="tarjeta" itemscope itemtype="pelicula">
	  <dl>
		<img class="movieImg" src="${pelicula.imageUrl}" alt="Imagen de la película: ${pelicula.name}" />
		<dt><dd class='movieName'>${pelicula.name}</dd></dt>
		<dt><dd class='movieShortDes'>Descripción: ${pelicula.shortdescription}</dd></dt>
		<dt><dd class='movieFacts' itemprop='facts'>Rating: ${pelicula.facts.rating}</dd></dt>
		</dl>
		<button class="chatButton">🗨️</button>
		</li>`;
	});
	const ul= `<ul class="moviesUl">${html}</ul>`;
	return ul;
	}; */


 

 
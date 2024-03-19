// import { navigateTo } from "../router.js";
import data from '../data/dataset.js';

export const Home = () => {
  const homeDiv = document.createElement("div");
	homeDiv.classList.add("homeDiv");

	// rederizacion de las peliculas
	const renderItems = (data) => {
		let html = '';
		data.forEach(function(pelicula){
			html += `<li class="tarjeta" itemscope itemtype="pelicula">
			<dl> 
			<img src="${pelicula.imageUrl}" alt="Imagen de la película: ${pelicula.name}" />
			<dt><dd class='movieName'>${pelicula.name}</dd></dt>
			<dt><dd class='movieShortDes'>${pelicula.shortdescription}</dd></dt> 
			<dt><dd class='movieFacts' itemprop='facts' class='emoticonCalendar'>${pelicula.facts.rating}</dd></dt>
			</dl>
			</li>
			`  
		})
		const ul= `<ul>${html}</ul>`;
		return ul;
	};

  homeDiv.innerHTML = 
	`<section class="opciones">
	<label for="">Ordenar por rating:</label>
	<select name="sort-rating" data-testid="select-sort">
	<option value="">Selección</option>
	<option value="1-10">1-10</option>
	<option value="10-1">10-1</option>
	</select>

	<label for="">Género:</label>
	<select name="genero" data-testid="select-filter">        
	<option value="">Selección</option>
	<option value="Aventura">Aventura</option>
	<option value="Comedia">Comedia</option>
	<option value="Familiar">Familiar</option>
	<option value="Ciencia ficción">Ciencia ficción</option>
	<option value="Fantasía">Fantasía</option>
	<option value="Drama">Drama</option>
	</select>

	<button data-testid="button-clear">Reset</button>
	<button id="estadística">Estadística</button>
  </section>
	
	<div id="root2">${renderItems(data)}</div>`;

  return homeDiv;
};
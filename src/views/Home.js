// import { navigateTo } from "../router.js";
import data from '../data/dataset.js';
import { filtrarPelicula, ordenarPelicula, calcularRating } from '../lib/dataFunctions.js';

export const Home = () => {
	const homeDiv = document.createElement("div");
	homeDiv.classList.add("homeDiv");

	// Render options container
	const renderOptionsContainer = () => {
	const optionsContainer = document.createElement("div");
	optionsContainer.classList.add("optionsContainer");
	optionsContainer.innerHTML = 
		`<section class="options">
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
		</section>`;
	return optionsContainer;
	};

	homeDiv.appendChild(renderOptionsContainer());

	// Render movie items
	const renderMovieItems = (data) => {
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
	};

	homeDiv.innerHTML += `<div id="root2">${renderMovieItems(data)}</div>`;

	// Event listeners
	const root2 = homeDiv.querySelector("#root2");
	const sortRating = homeDiv.querySelector("[data-testid=select-sort]");
	const filtrarGenero = homeDiv.querySelector("[data-testid=select-filter]");
	const resetButton = homeDiv.querySelector("[data-testid=button-clear]");
	const statsButton = homeDiv.querySelector("[id=estadística]");

	let valoractual = [...data];

	sortRating.addEventListener("change", function(event) {
		root2.innerHTML = renderMovieItems(ordenarPelicula(valoractual,"rating",event.target.value));
	});

	filtrarGenero.addEventListener("change", function(event) {
		const filtrar = filtrarPelicula(data,"generoDePelicula",event.target.value);
		valoractual = [...filtrar];
		root2.innerHTML = renderMovieItems(filtrar);
	});

	resetButton.addEventListener("click", function() {
	filtrarGenero.selectedIndex = 0;
	sortRating.selectedIndex = 0;
	root2.innerHTML = renderMovieItems(data);
	});

	statsButton.addEventListener("click", function(){
	const calcular = calcularRating(valoractual);
	alert("El promedio de rating es: "+ calcular);
	});

	return homeDiv;
};
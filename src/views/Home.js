import { navigateTo } from "../router.js";

export const Home = () => {
  const viewEl = document.createElement("div");
  viewEl.innerHTML = "I'm the Home Page";
  return viewEl;
};

export const renderItems = (data) => {
  let html = '';
  data.forEach(function(pelicula){
    html += `<li class="tarjeta" itemscope itemtype="pelicula">
    <dl> 
    <img src="${pelicula.imageUrl}" alt="Imagen de la película: ${pelicula.name}" />
    <dt><dd class='movieName'>${pelicula.name}</dd></dt>
    <dt><dd class='movieShortDes'>${pelicula.shortdescription}</dd></dt> 
    <dt><dd class='movieFacts' itemprop='facts'🤞>${pelicula.facts.rating}</dd></dt>
    </dl>
    </li>
    `  
  })
  const ul= '<ul>' + html + '</ul>';
  return ul;
};
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import { Api } from './views/Api.js';
import { Chat } from './views/Chat.js';
import { Error404 } from './views/Error404.js';
import { Home } from './views/Home.js';
import { setRootEl, setRoutes, navigateTo, onURLChange } from './router.js';


const routes = {
    "/": Home,
    "/api": Api,
    "/chat": Chat,
    "/error404": Error404
  }

const root = document.getElementById("root");
setRoutes(routes);


// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(root);
  onURLChange(window.location);
});

const botonHome = document.querySelector("id=botonHome");
botonHome.addEventListener("click", () => 
  navigateTo("/Home"));
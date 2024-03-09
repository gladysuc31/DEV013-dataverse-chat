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
import Api from './views/Api.js';
import Chat from './views/Chat.js';
import Error404 from './views/Error404.js';
import Home from './views/Home.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const root = document.getElementById("root");
setRootEl(root);


const routes = {
    "/": Home,
    "/api": Api,
    "/chat": Chat,
    "/error404": Error404
}
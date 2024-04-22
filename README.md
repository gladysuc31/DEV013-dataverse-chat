# Pixar Planet Chat 

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Estructura](#3-estructura)
* [4. Tecnologías y Herramientas](#4-tecnologías-y-herramientas)
* [5. Definición del producto](#5-definición-del-producto)
* [6. Pruebas unitarias](#6-pruebas-unitarias)

* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
***

## 1. Resumen del proyecto 

En nuestro día a día, las aplicaciones web son como amigas inseparables. Desde las redes sociales hasta las herramientas de trabajo, las usamos todo el tiempo. Pero lo que hace que este momento sea realmente especial es que estas aplicaciones nos pueden abrir una puerta a algo asombroso: la interacción con inteligencia
artificial.<br><br>

El presente proyecto se llama Pixar Planet y es una SPA (Single Page Application) donde se mantuvo las funcionalidades de dataverse que es el conjunto de datos donde el usuario puede filtrar, ordenar y calcular una estadística de rating promedio de una sola o un grupo de películas filtradas por género.<br><br>

Adicionando nuevas vistas para que el usuario pueda interactuar con su película favorita de Disney por medio de un chat individual impulsado por la API  de OpenAI, utilizando funciones asincronas en JavaScript y creando pruebas unitarias para garantizar dicho método asincrono. <br><br>

![Imagen de pág principal](/src/images/cabecera%20pixar%20planet%20.JPG)
![Imagen de pág principal 2](/src/images/menu%20principal%20pixar%20planet.JPG)
![Imagen de pág principal 3](/src/images/menu%20principal%202.JPG)

## 2. Funcionalidades 

En este proyecto convertimos la aplicación desarrollada en Dataverse en una[Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application), y agregando
la posibilidad de interactuar con un personaje/entidad o todos ellos
a través de un sistema de chat impulsado por la [API de OpenAI](https://openai.com/product).
* Todas las películas se ordenan del (1-10) y del (10-1) por rating.
* Todas las películas se pueden ordenar por genéro. 
* Se calcula la estadística de cada película de manera individual, grupal, por genéro, es decir la función sirve filtro sobre filtro.
* La SPA cuenta con 4 vistas, Home, Api Key, Chat individual y Error 404, donde a través de un sistema de enrutamiento se puede navegar en cada una de ellas.
* Cada vista de la aplicación es cargada dinámicamente mediante JavaScript.
* La URL se actualice de manera acorde a la vista cargada al igual que el `title` del documento (la pestaña del navegador).
* Al hacer clic en una tarjeta la aplicación se redirige a una vista **con su propia URL** que muestre la información detallada sobre esa película en particular.
* Para chatear con la película , si no hay una API key guardada se accede a una vista donde se debe introducir una API key. Al guardarse presionando el botón "Guardar", éste te redirecciona automáticamente a la vista de Home.
* Se puede acceder a un chat individual mediante un botón ubicado en el menú inferior de la vista principal, donde se puede interactuar con la película deseada.
* La inteligencia artificial de OpenAI permite que las respuestas sean
  informativas y personalizadas según las preguntas de los usuarios. 
  - La usuaria puede ingresar su pregunta o mensaje para toda la
    película en un cuadro de texto y enviarlo con un botón
  - El mensaje de la usuaria es ajustado para cada película
    con el objetivo que este genere una respuesta basada en su personalidad
    y conocimiento
  - Las respuestas se muestran de acuerdo al orden de las preguntas.

![funcionalidad api ](/src/images/vista%20api.JPG)<br><br>
![funcionalidad chat  ](/src/images/vista%20chat.JPG)<br><br>
![funcionalidad chat respuesta ](/src/images/image.png)<br><br>
![funcionalidad chat respuesta  2 ](/src/images/image%20(1).png)<br><br>
![funcionalidad error 404  ](/src/images/vista%20error%20404.JPG)<br><br>

## 3. Estructura del proyecto

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS. 

El _boilerplate_ que viene con el proyecto es una estructura inicial:

```text
.
├── src
|  ├── components
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  ├── views
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── dataFunctions.spec.js
|  └── example.spec.js
├── README.md
└── package.json

```


## 4. Tecnologías y herramientas.

JavaScript
1. Arquitectura de SPA y Enrutamiento:
Pixar Planet es una Single Page Application (SPA) gracias a un router construido completamente en JavaScript vanilla. Este enrutador permite la transición fluida entre diferentes vistas, mejorando la navegación del usuario.

2. Manipulación Dinámica del LocalStorage:
Utilizamos JavaScript para acceder y manipular de manera dinámica el LocalStorage del navegador. Esta capacidad permite un almacenamiento eficiente de datos locales, mejorando la interactividad y proporcionando una experiencia personalizada al usuario.

3. Consumo Eficiente de OpenAI API:
Para el consumo de la API de OpenAI para el manejo de promesas, se usó fetch en JavaScript. Esta integración permite acceder a la funcionalidad de OpenAI desde Pixar Planet.

### 5. Definición del producto

Los prototipos se diseñaron en la plataforma de [Figma](https://www.figma.com/)
basandose en las necesidades y feedback de las usuarias. 

![funcionalidad F1 ](/src/images/figma%201.JPG)<br><br>
![funcionalidad F2](/src/images/figma%202.JPG)<br><br>
![funcionalidad F3 ](/src/images/figma%203.JPG)<br><br>
![funcionalidad F4 ](/src/images/figma%204.JPG)<br><br>


### 6. Pruebas unitarias

Las pruebas unitarias que se realizaron son:
-El set de datos (data function)
-Local storage set y get api 
-La función asincrona de la OpenIA 

## 7. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

### Web APIs

- [ ] **Ruteado (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando el historial del navegador - MDN](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
</p></details>

- [ ] **Browser storage (localStorage, sessionStorage)**

  <details><summary>Links</summary><p>

  * [Window.localStorage - MDN](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
</p></details>

- [ ] **Fetch API**

  <details><summary>Links</summary><p>

  * [Fetch API - MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
</p></details>

#### DOM (Document Object Model)

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/dom/1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/basics/values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/basics/variables)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/functions/arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

#### Asincronía

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [ ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

#### Tipos de datos

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/objects/objects)
</p></details>

#### Módulos

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

#### Testing en Javascript

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

### HTTP

- [ ] **Cabeceras (headers)**

  <details><summary>Links</summary><p>

  * [HTTP headers - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)
</p></details>

- [ ] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

### AI Prompting

- [ ] **Priming Chatbots**

  <details><summary>Links</summary><p>

  * [Priming Chatbots | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/priming_prompt)
</p></details>

- [ ] **OpenAI API**

  <details><summary>Links</summary><p>

  * [Introduction - API Reference - OpenAI API](https://platform.openai.com/docs/introduction)
  * [Authentication - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/authentication)
  * [Making requests - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/making-requests)
  * [The chat completion object - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/chat/object)
</p></details>

### Control de Versiones (Git y GitHub)

#### Git

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

#### GitHub

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>


#### Identifica las funcionalides de Open AI

Consulta la documentación de la
[API de Open AI](https://platform.openai.com/docs/guides/gpt?lang=node.js).
Identifica y prueba las funciones que usarás para construir el chat
de tu aplicación

### Contenido de referencia

#### Desarrollo Front-end

* [Topicos en la curricula de sitio Laboratoria](https://curriculum.laboratoria.la/es/web-dev/topics)
  testing, arreglos, objetos, funciones, DOM en Browser Javascript.
* [Promesas](https://es.javascript.info/promise-basics)
* [Haciendo peticiones con Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
* [Almacenamiento con LocalStorage](https://es.javascript.info/localstorage)
* [Creando un router SPA con vanilla Javascript](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md)
* [Delegación de eventos](https://es.javascript.info/event-delegation)

#### Inteligencia Artificial y Prompting

* [Learn Prompting](https://learnprompting.org/es/docs/category/-basic-applications)
* [Prompt Engineering Roadmap](https://roadmap.sh/prompt-engineering)
* [OpenAI Playground](https://beta.openai.com/playground)
* [Making requests](https://platform.openai.com/docs/api-reference/making-requests)
* [Chat with AI](https://platform.openai.com/docs/api-reference/chat)
* [Priming Chatbots](https://learnprompting.org/es/docs/basics/priming_prompt)
* [Build your aplication with AI](https://platform.openai.com/docs/quickstart/build-your-application)

#### Herramientas

* [Jest](https://jestjs.io/)
* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
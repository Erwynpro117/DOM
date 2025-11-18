/* 

Seleccionar al elemento sección por su id

*/

const pokemones = document.getElementById("pokemones");

/* Motrarlo por consola */

console.log(pokemones);

/* 

innerText

Devuelve un "string" del contenido visible dentro de un elemento

elemento.innerText 

- Excluye los elemento ocultos
- Excluye los espacios en el documento
- Excluye las etiquetas de html

*/

console.log(pokemones.innerText);

/* 

textContent

Devuelve un "string" del contenido visible dentro de un elemento

sintaxis:
elelemnto.textContent

- Incluye los espacios
- Incluye elementos ocultos
- Excluye las etiquetas html

*/

console.log(pokemones.textContent);

/* 
 
innerHTML

Devuelve un "string" con la estructura interna del elemento sleccionado

sintaxis:
elelemnto.innerHTML

- Incluye los espacios
- Incluye elementos ocultos
- Incluye las etiquetas html
 
*/

console.log(pokemones.innerHTML);

/* 

Modificar el contenido de innerText

Asignar el valor al elemento seleccionado

elemento.innerText = "contenido de string";

*/

//pokemones.innerText = "¡Snorlax yo te elijo!";

const subtitulo = document.querySelector("h2");
const enlace = document.querySelector("a");

subtitulo.innerText = "¡Mis pokeamigos favoritos!";

enlace.innerText = "¡Pikapika!";

/* 

Modificar el contenido con textContent

Asignamos un valor al elemento seleccionado

elemento.textContent = "string"

*/

subtitulo.textContent = "¡Mis cuates!";
enlace.textContent = "¡Bola de fuego!";


/* 

Modificar el contenido innerHTML

Asignamos un valor al elemento seleccionado incluyendo etiquetas html

elemento.innerHTML = "<etiqueta>...</etiqueta>"

*/

subtitulo.innerHTML = "¡Amigos <span  class='resalte'>pokesitos!<span>";
enlace.innetHTML=-"Aun mas <span class='resalte'>pokemonstros</span>";
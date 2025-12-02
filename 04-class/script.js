/* 
Acceder al primer elemento de la lista.
*/

const botanas = document.getElementsByTagName("li");

console.log(botanas[0]);

console.log(botanas[0].classList);
console.log(botanas[0].classList[1]);

botanas[2].classList.add("picante");

console.log(botanas[2].classList);

console.log(botanas[1].classList.contains("botana") );
console.log(botanas[1].classList.contains("picante") );

botanas[3].classList.remove("botana");

console.log( botanas[3].classList);

/*
let elemento=document;
elemento=document.all;
elemento=document.head;
elemento=document.domain;
elemento=document.URL;
elemento=document.forms;
elemento=document.forms[0];
elemento=document.forms[0].id;
elemento=document.forms[0].classList;
elemento=document.forms[0].className;

elemento=document.images;
elemento=document.images[0];
elemento=document.images[0].getAttribute("src");

elemento=document.scripts;

elemento=document.images;//tipo objeto htmlcollection
let imagenes=Array.from(elemento);//transforma de htmlcollection(objeto) a un Array
console.log(imagenes);

for(let i of imagenes){
    console.log(i.getAttribute("src"));
}

console.log(elemento);
*/

//SELECTORES DE ELEMENTOS DEL DOM
//getElementById  un elemento y solo puede seleccionar por Id
/*
let elemento;
elemento=document.getElementById("hero");
elemento=document.getElementById("textoInicial");
elemento.innerText="Aprende algo viejo";
elemento=document.getElementById("textoInicial").textContent;
elemento=document.getElementById("textoInicial");
elemento.textContent="Aprende algo nuevo";
//los style tambien se pueden manipular
elemento=document.getElementById("textoInicial");
elemento.style.backgroundColor="#666";
elemento.style.color="#000";

console.log(elemento);
*/

//Query Selector
//querySelector puede seleccionar por id agregando '#' delante o por clase '.'
//solo te selecciona el primero si se selecciona por clase luego esta querySelectorAll
//elemento=document.querySelector("#textoInicial");
//elemento=document.querySelector(".textoInicialCl");
//elemento=document.querySelector("h2"); //seleciona por etiqueta
//elemento.style.backgroundColor="#666";
//elemento=document.querySelector(".card img");//selector mas restrictivo, busca la clase card y luego la etiqueta img

//aplicando selectores css3
/*
elemento=document.querySelector("#principal a:first-child");

console.log(elemento);
*/

//selecion multiple
//por clase
//const enlaces=document.getElementsByClassName("enlace");
//enlaces[1].style.background="#333";
//por etiqueta
const enlaces=document.getElementsByTagName("a");
enlaces[1].style.background="#333";
console.log(enlaces);
console.log(enlaces[1]);


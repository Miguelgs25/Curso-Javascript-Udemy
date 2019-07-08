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
/*
//por clase
const enlaces=document.getElementsByClassName("enlace");
enlaces[1].style.background="#333";
//por etiqueta
const enlaces=document.getElementsByTagName("a");
enlaces[1].style.background="#333";
console.log(enlaces);
console.log(enlaces[1]);
*/

//querySelectorAll()
//devuelve todas las coincidencias a diferencia de querySelector()
//const selec=document.querySelectorAll("#footer .enlace");
//console.log(selec);


//Traversing -> ir recorriendo los nodos del html
//Padre->Hijo
/*
const navigation=document.getElementById("principal");//similar
const navigation2=document.querySelector("#principal");//similar

console.log(navigation);
console.log(navigation2);


console.log(navigation.children[0].nodeName);//nodeName son las etiquetas html

//nodeType
//1 html elementos  2 atributo  3 text node  
//8 comentarios 9 documentos 10 doctypes
console.log(navigation2.children[0].nodeType);

//se puede poner .children.children.children todo lo que de
*/

//Hijo->Padre
/*
const enlaces=document.querySelectorAll(".enlace");


console.log(enlaces[0]);
console.log(enlaces[0].parentElement);
console.log(enlaces[0].parentElement.parentElement);
console.log(enlaces[0].parentElement.parentElement.parentElement);

//hermanos

console.log(enlaces[0].previousElementSibling);
console.log(enlaces[0].nextElementSibling);;
*/

//CREANDO ELEMENTO DESDE JAVASCRIPT
/*
//creando enlace
const enlace=document.createElement("a");
enlace.className="enlace";
enlace.textContent="Esto es un nuevo enlace";
enlace.href="#";
console.log(enlace);
//inyeccion 
const enlaces=document.getElementById("principal");
enlaces.appendChild(enlace);
console.log(enlaces);
*/

//MODIFICANDO ELEMENTO DESDE JAVASCRIPT
/*
const nuevoEncabezado=document.createElement("h2");

nuevoEncabezado.id="encabezado";
nuevoEncabezado.textContent="Cursooos";
nuevoEncabezado.className="encabezado";
//nuevoEncabezado.appendChild(document.createTextNode("Cursoooss"));

const anterior=document.getElementById("encabezado");
const padre=anterior.parentElement;
padre.removeChild(anterior);//borrar desde el padre
padre.insertBefore(nuevoEncabezado,padre.children[0]);//agregar en una posicion dada
//padre.replaceChild(nuevoEncabezado,anterior);//reemplazar

console.log(anterior);
console.log(padre.children[0]);
console.log(nuevoEncabezado);
*/

//AGREGANDO,QUITANDO CLASES Y ATRIBUTOS
/*
const primerLi =document.getElementsByClassName("enlace")[0];

let elemento;
//obtener una clase
elemento=primerLi.className;
elemento=primerLi.classList;
elemento=primerLi.classList.add("nueva-clase");
elemento=primerLi.classList.remove("nueva-clase");
elemento=primerLi.classList;

//atributos
//elemento=primerLi.attributes.removeNamedItem("href"); //borrar atributo
elemento=primerLi.getAttribute("href");//obtiene el atributo
primerLi.setAttribute("href","https://www.google.es");//modifica atributo
primerLi.setAttribute("id",10); //si no está el atributo lo crea
elemento=primerLi.hasAttribute("id");//comprobar que está un atributo
primerLi.setAttribute("mi-atributo","valorMiAtributo");//agregar atributos pronalizados
primerLi.removeAttribute("mi-atributo");
console.log(primerLi);
console.log(elemento);
*/

//EVENT LISTENER EN JAVASCRIPT

//CON EL RATON
//CLICK
/*
document.getElementById("submit-buscador").addEventListener("click",function(e){
    e.preventDefault();//previene el efecto por defecto
    alert("has hecho click");
});
*/
/*
//otra forma
document.getElementById("submit-buscador").addEventListener("click",ejecutarBoton);


function ejecutarBoton(e){//e contiene info del evento
    e.preventDefault();//previene el efecto por defecto
    
    let elemento;
    elemento=e;
    elemento=e.target;//elemento al que le doy
    //a cualquier elemento se le puede poner eventlistener


    console.log(elemento);
    //alert("has hecho click");
}

let elemento=document.querySelector("#lista-cursos");

console.log(elemento.children[1].children[0].children[0].children[1].children[4]);
elemento=elemento.children[1].children[0].children[0].children[1].children[4];
elemento.addEventListener("click",ejecutarBotonAgregarCarrito1);
function ejecutarBotonAgregarCarrito1(e){
    e.preventDefault();
    console.log(e.type);
}

//DOBLE CLICK
elemento.addEventListener("dblclick",ejecutarBotonAgregarCarrito1);
//MOUSE ENTER pasar por encima entrando con el raton
elemento.addEventListener("mouseenter",ejecutarBotonAgregarCarrito1);
//MOUSE LEAVE pasar por encima saliendo con el raton
elemento.addEventListener("mouseleave",ejecutarBotonAgregarCarrito1);
//MOUSE OVER quedar encima con el raton
elemento.addEventListener("mouseover",ejecutarBotonAgregarCarrito1);
//MOUSE OUT quedar fuera con el raton
elemento.addEventListener("mouseout",ejecutarBotonAgregarCarrito1);
//MOUSE DOWN pulsar boton central del raton
elemento.addEventListener("mousedown",ejecutarBotonAgregarCarrito1);
//MOUSE UP despulsar boton central del raton
elemento.addEventListener("mouseup",ejecutarBotonAgregarCarrito1);

//MOUSE MOVE mover el raton por encima del area
const listaCursos=document.getElementById("lista-cursos");
listaCursos.addEventListener("mousemove",ejecutarBotonAgregarCarrito1);
*/

//EN LOS INPUTS
/*
const buscador=document.getElementById("buscador");

//presionar una tecla
//buscador.addEventListener("keydown",obternerEvento);
//despresionar una tecla
//buscador.addEventListener("keyup",obternerEvento);
//presionar una tecla
buscador.addEventListener("keypress",obternerEvento);
//focus
buscador.addEventListener("focus",obternerEvento);
//blur cuando pinchas fuera de un form, *muy utilizado
buscador.addEventListener("blur",obternerEvento);
//cut, ctrl+x
buscador.addEventListener("cut",obternerEvento);
//copy ctrl+c
buscador.addEventListener("copy",obternerEvento);
//paste ctrl+v
buscador.addEventListener("paste",obternerEvento);
//input , el todo en uno, junta todos los anteriores
buscador.addEventListener("input",obternerEvento);
//change, cuando algo cambia por ejemplo un select
buscador.addEventListener("change",obternerEvento);

function obternerEvento(e){
    //e.preventDefault();
    console.log(buscador.value);
    console.log(e.type);
}
*/

//EVENT BUBLING
//Problema, al estar anidados las diferentes etiquetas div, si pulsamos sobre
//el boton se ejecutan los padres infocard y card. 
//Solucion, agregar e.stopPropagation()
//Otra solucion es usar Delegation, mas abajo se explica
/*
const card=document.getElementsByClassName("card")[0];
const infoCard=card.getElementsByClassName("info-card")[0];
const boton=infoCard.getElementsByTagName("a")[0];
console.log(card);
console.log(infoCard);
console.log(boton);

card.addEventListener("click",function(e){
    console.log(`Card ${e.type}`);
    e.stopPropagation();
});

infoCard.addEventListener("click",function(e){
    console.log(`InfoCard ${e.type}`);
    e.stopPropagation();
});

boton.addEventListener("click",function(e){
    console.log(`Boton ${e.type}`);
    e.stopPropagation();
});
*/

//DELEGATION
//Se captura todo el documento y con if se selecciona lo que se quiera y se hacen cosas
/*
document.body.addEventListener("click",eliminarElemento);

function eliminarElemento(e){
    e.preventDefault();



    if(e.target.classList.contains("borrar-curso")){
        e.target.parentElement.parentElement.remove();
        console.log("Borrado");
    }

    if(e.target.classList.contains("agregar-carrito")){
        //const carrito=document.getElementById("lista-carrito").children[1];
        console.log("Agregado");
    }
    
    //if(e.target.id==="logo"){
    //    console.log("Sí");
    //} else {
    //    console.log("No");
    //}
    
}
*/

//LOCAL STORAGE
//agregar

localStorage.setItem("nombre","Miguel");//se mantiene en el tiempo

sessionStorage.setItem("nombre","María");//se elimina si se reinicia

//eliminar

//localStorage.removeItem("nombre");

//sessionStorage.removeItem("nombre");

localStorage.clear();

const nombre=localStorage.getItem("nombre");
console.log(nombre);




//VARIABLES
/*
var nombre= prompt("Cuál es tu nombre");//var o let o const para declarar variables
//(la diferencia es el alcance, var actúa cómo una variable normal de otro lenguaje y let es en el ámbito local,ademas de no poder ser redeclarada)
var edad= prompt("Cuál es tu edad?");// prompt te muestra ventana para escribir
const pi=3.14 //declarar constatnte
//obtenemos elemento por id del html= mostramos mensaje con valor de variables
//importante comillas izq para mostrar las variables con ${}
document.getElementById('app').innerHTML=`Hola ${nombre} con ${edad} años`;

console.log(pi);//escribir en la consola del navegador
//Se suelen usar let y const
*/

//STRINGS
/*
let nombre='Miguel',apellido='González'; //declarar cadenas

let nombreCompleto=nombre+' '+apellido; //concatenar cadena

console.log(nombre);//manera vieja
console.log(`${apellido}`); // manera nueva
console.log(`${nombreCompleto}`);
console.log(`${nombre}`+' '+`${apellido}`);
console.log(`${nombre} ${apellido}`);
//String métodos
console.log(nombre.length);//longitud de cadena

let frase="Hoy es un día maravilloso para aprender Javascript :)";
console.log(`${frase}`);
console.log(frase.toUpperCase());//mayuscula
console.log(frase.indexOf(':)'));//int posición
console.log(frase[51]+frase.charAt(52));//char en una posicion
console.log(frase.substring(51,53));//subcadena

let fraseCortada=frase.split(' ');//divide en array cortado por espacio
console.log(fraseCortada);
console.log(frase.replace('maravilloso','fantástico'));//remplaza
console.log("Contiene la frase \""+`${frase}`+"\" una carita :) ?"+frase.includes(":)"));//incluye?true o false
console.log(frase.substring(51,54).repeat(10));//repite
*/

//NUMEROS

const numero1=10;
let numero2=5.5;
let numero3=.54;

let suma=numero1+numero2;
let resta=numero1-numero2;
let mult=numero1*numero2;
let div=numero1/numero2;
let mod=numero1%numero2;
console.log(suma);
console.log(resta);
console.log(mult);
console.log(div);
console.log(mod);

console.log(Math.PI);
console.log(Math.round(4.4));
console.log(Math.floor(4.99));

let resultado;
resultado=Math.sqrt(4);
resultado=Math.min(1,2,3,4,5,-1);
resultado=Math.random();

console.log(resultado);
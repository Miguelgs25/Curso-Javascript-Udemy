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
/*
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
resultado=0;
resultado++;
resultado-=5
console.log(resultado);

*/

//TIPOS DE DATOS
/*
let valor;//undefined
valor=20;//number
valor=false;//boolean
valor="hola";//string
valor=null;//object
valor=Symbol("hola");//symbol
valor=[0,1,2,3];//array object
valor={nombre:"pepe", edad:25};//object
console.log(valor.edad);
console.log(typeof valor);
*/

//OPERADORES DE COMPARACIÓN
/*
let num1=10,num2='10';
console.log(num1==num2);//true
console.log(num1===num2);//false
console.log(num1!=num2);//false
console.log(num1!==num2);//true
let str1="pepe",str2=' pepe';
console.log(str1==str2);//false
*/

//CONVERTIR STRING A NUMEROS
/*let num1='10.5';

//num1=parseInt(num1);
num1=parseFloat(num1);
num1=num1.toFixed(5);//ajustar con redondeo al los decimales que ponga
//num1=Number(num1);
console.log(typeof num1+" "+num1);
*/

//CONVERTIR A STRING
/*
let dato;
dato=10;
dato=[1,2,3];
dato={nombre:"pepe",edad:25};
dato=true;
dato=dato.toString();
console.log(dato);
console.log(typeof dato);
console.log(dato.length);
*/

//TEMPLATE LITERALS O STRING TEMPLATE
/*
let productos=[{nombre:"pizza",precio:12},{nombre:"refresco",precio:2}];
console.log(productos[0].nombre);
function sumarDosProductos(prod1,prod2){
    return prod1.precio+prod2.precio
};
let html=`
    <ul>
        <li>Productos:     Precios:
        <li>${productos[0].nombre}  ${productos[0].precio}€</li>
        <li>${productos[1].nombre}  ${productos[1].precio}€</li>
        <li>${productos[1].nombre}  ${productos[1].precio}€</li>
        <li>${sumarDosProductos(productos[1],productos[1])}</li>
        <li>Precio total: ${productos[0].precio+productos[1].precio*2}€</li>
    </ul>`;
document.getElementById("app").innerHTML=html;
*/

//ARRAYS
/*
let numeros=[];
console.log(typeof numeros);
numeros.push(20);
console.log(numeros);

let numeros1=[10,20,30];
console.log(numeros1);

let numeros2= new Array(10,20);
console.log(numeros2);
*/

/*
const meses=["Enero","Febrero","Marzo"];
meses[3]="Abril";
meses.push("Mayo");//agregar al final
meses.unshift("MESES");//agregar al inicio
meses.pop();//elimina del final
meses.shift();//elimina del principio
meses.splice(0,1);//elimina de la posicion el numero de elemento siguientes
meses.reverse();//invierte el array
console.log(meses.concat([0,1,2]));//concatenar dos array
console.log(meses.indexOf("Mayo"));
console.log(meses);
*/
//ordenar
//string
const fruta=["Pera","Manzana","Sandía","Melón"];
fruta.sort();
console.log(fruta);
//numeros
const numeros=[1,2,4,0,12,453,-5];

/*numeros.sort(function(num1,num2){
//la compareFunction num1 es menor que 0, se sitúa num1 en un indice menor que num2
    return num1-num2;
});*/

numeros.sort(function(num1,num2){
    if(num1<num2)
        return -1;
    else if(num1===num2)
        return 0;
    else
        return 1;
});
console.log(numeros);


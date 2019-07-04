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
/*
const fruta=["Pera","Manzana","Sandía","Melón"];
fruta.sort();
console.log(fruta);
//numeros
const numeros=[1,2,4,0,12,453,-5];
//tipo corto
numeros.sort(function(num1,num2){
//la compareFunction num1 es menor que 0, se sitúa num1 en un indice menor que num2
    return num1-num2;
});
//tipo entendible
numeros.sort(function(num1,num2){
    if(num1<num2)
        return -1;
    else if(num1===num2)
        return 0;
    else
        return 1;
});
console.log(numeros);
*/

//OBJETOS
/*
const persona={
    nombre:"Miguel",
    apellido:"Martinez",
    profesion:"Programador",
    email:"miguel@gmail.com",
    gustos:["Comer","Musica"],
    vivienda:{
        calle:"Enigma",
        ciudad:"Granada"
    },
    añoNacimiento:1991,
    edad:function(){
        return new Date().getFullYear()-this.añoNacimiento;
    }
};

console.log(persona);
console.log(persona.edad());
*/

//FUNCIONES
//argumentos predefinidos
/*function saludo(nombre="desconocido."){
    console.log(`Hola ${nombre}`);
}

saludo("Miguel");
*/
/*
const saludar=function(nombre="desconocido."){
    console.log(`Hola ${nombre}`);
}
saludar("Miguel");
*/
//recursiva
/*function restaUnoRecursiva(num,pasos){
    if(num===0){
        return pasos++;
    }else{
        console.log(`Numero ${num}`);
        return restaUnoRecursiva(--num,++pasos);

    }
}

console.log(restaUnoRecursiva(10,0));
*/
//funciones IIFE, funciones auto-invocadas
/*
(function(nombre="desconocido."){
    console.log(`Hola ${nombre}`);
})("Miguel");
*/

//metodo de propiedad(Métodos)
/*
const cuadrado={
    ancho:10,
    alto:10,
    area:function(){
        return this.ancho*this.alto;
    }
}
console.log(cuadrado.area());

//pueden crearse/guardarse fuera del objeto
cuadrado.perimetro=function(){
    return this.alto*2+this.ancho*2;
}
console.log(cuadrado.perimetro());
*/

//TRY-CATCH
/*
//se pude llamar a la funcion antes de declararla
try{
    obtenerProveedor();//No existe, error detiene el programa
}catch(error){
    console.log(error);//muestra mensaje de error en lugar de parar el programa
}finally{//esta parte siempre se ejecuta
    console.log("Se ejecuta siempre");
}
obtenerClientes(); //Existe

function obtenerClientes(){
    console.log("Descargando...");
    setTimeout(function(){
        console.log("Completo.");
    },3000);
};
*/

//FECHAS
/*
//objeto DATE
const hoy= new Date();
//const hoy2= Date();

let navidad=new Date('12/25/2019');
navidad=new Date('12-25-2019');
navidad=new Date(2019,11,25);//notese el 11 para el mes diciembre
//let navidad2= new Date("25-12-2019");

console.log(hoy);
//console.log(hoy2);
console.log(navidad);
//console.log(navidad2);

let valor;
valor=hoy.getFullYear();
valor=hoy.getMonth();//devuelve 6 aunque estamos en Julio(7)
valor=hoy.getDay();
valor=hoy.getMinutes();
valor=hoy.getHours();
valor=hoy.getMilliseconds();
valor=hoy.getTime();//milisegundos desde 1970
//modificar una fecha
valor=hoy.getFullYear();
valor=hoy.setFullYear(2020);
valor=hoy.getFullYear();
console.log(valor);
*/

//ESTRUCTURAS DE CONTROL IF ELSEIF ELSE
/*
const edad=18;

if(edad>=18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

let num,num1=10;
//se puede usar para comprobar que los campos de un formulario esten llenos
if(num){
    console.log(`Existe el numero ${num}`);
}else{
    console.log("No existe el numero");
}
//para agregar más terminos: AND -> && , OR -> ||

let verdad=true;
console.log( verdad===true?"Es verdad":"No es verdad" );//if inline
*/

//SWITCH
/*
let num=7;

switch(num){
    case 1: console.log("Uno");
        break;
    case 2: console.log("Dos");
        break;
    case 3: console.log("Tres");
        break;
    case 4: console.log("Cuatro");
        break;
    case 5: console.log("Cinco");
        break;
    default: console.log("Nose");
        break;
};
*/

//BUCLES

//FOR   
/*
for(let i=0;i<10;i++){
    console.log(i);
}

let lista=["a","b","c","d"];

for(let i=0;i<lista.length;i++){
    console.log(lista[i]);
}

for(let l in lista)
    console.log(lista[l]);

let objeto={nombre:"Juan",
            edad:18,
            profesion:"albañil"
            };

for(let campo in objeto){
    console.log(`campo tiene id ${campo} y contiene ${objeto[campo]}`);
}
*/

//WHILE & DO-WHILE
/*
let num=10;

while(num>0){
    console.log(num--);
}

do{
    console.log(`Entra siempre una vez ${num}`);
}while(num>0);
*/

//FOR-EACH
/*
let lista=["a","b","c","d"];

lista.forEach(function(contenido, index){
    console.log(contenido+` ${index}`);
});

let arrayObjetos=[
            {nombre:"Juan",
            edad:18,
            profesion:"albañil"
            },
            {nombre:"Ana",
            edad:20,
            profesion:"cocinera"
            }
        ];

let edad=arrayObjetos.map(function(arrayObjetos){
    return arrayObjetos.edad;
});

console.log(edad);
*/

//ITERADORES
/*
const ciudades=["Madrid","Granada","Barcelona","Sevilla"];
const ordenes= new Set([10,20,30,40]);//set establece valores únicos
const datos=new Map();

datos.set('nombre','Miguel');//key,valor
datos.set('profesion','Informatico');

console.log(ciudades);
console.log(ordenes);
console.log(datos);
*/

//Entries iterador
/*
for(let entrada of ciudades.entries()){
    console.log(entrada);//indice, valor
}

for(let entrada of ordenes.entries()){
    console.log(entrada);//indice, valor
}

for(let entrada of datos.entries() ){
    console.log(entrada);//indice, valor
}
*/

//Values iterator, es por defecto para un Array
//( Control+D para seleccionar varias coincidencias)
/*
for(let entrada of ciudades){
    console.log(entrada);//indice, valor
}

for(let entrada of ordenes){
    console.log(entrada);//indice, valor
}
//para un objeto sí es util, solo devuelve el valor y no las keys
for(let entrada of datos.values() ){
    console.log(entrada);//indice, valor
}
*/

//Keys iterator
/*
for(let entrada of ciudades.keys()){
    console.log(entrada);//indice, valor
}

//el set la key y el valor valen lo mismo
for(let entrada of ordenes.keys()){
    console.log(entrada);//indice, valor
}

for(let entrada of datos.keys() ){
    console.log(entrada);//indice, valor
}
*/

//String iterator

//const string="Hola mundo";

//forma vieja
/*
for(let i=0;i<string.length;i++){
    console.log(string[i]);
}
*/
//forma nueva
//notese la diferencia entre in y of, in es index, of es valor
/*
for(let i of string){
    console.log(i);
}
*/
//OBTENIENDO ELEMENTO DEL HTML
/*
const webs=document.getElementsByTagName("a");
for(let i of webs){
    console.log(i.href);
}

console.log(webs);
*/

//INTERACTUANDO CON EL WINDOWS OBJECT
/*
const windowObj= window;

console.log(windowObj);

const altura=windowObj.outerHeight; //innerHeight
const anchura=windowObj.outerWidth;
console.log(altura);
console.log(anchura);

console.log(windowObj.location);
console.log(windowObj.navigator);
console.log(windowObj.location.search);//saber lo que has enviado con formulario ?s=busqueda

windowObj.location.href="https://www.google.es";//enviar a la url
*/

//SCOPE O AMBITO O VISIBILIDAD DE LAS VARIABLES

var a="a";
let b="b";
const c="c";

function scope(){
    var a="A";
    let b="B";
    const c="C";

    console.log("FUNCION ",a,b,c);
}
scope();

//scope de bloque
if(true){
    var a="AA";
    let b="BB";
    const c="CC";

    console.log("BLOQUE ",a,b,c);

}




console.log("GLOBALES ",a,b,c);









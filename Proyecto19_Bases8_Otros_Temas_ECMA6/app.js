//----------------------DESTRUCTURING-------------------//

//----------OBJETOS---------------//
//Una manera de extraer valores de un objeto
/*
//objeto sencillo
const cliente={
    nombre: "Miguel",
    tipo: "Premium"
}

//Método antiguo
let nombreC=cliente.nombre;
let tipoC=cliente.tipo;

//Método nuevo
let {nombre,tipo}=cliente;

console.log(nombre);
console.log(tipo);
*//*
//ejemplo objeto más complejo
const cliente={
    nombre: "Miguel",
    tipo: "Premium",
    datos:{
        ubicacion:{
            pais:"España",
            ciudad:"Granada"
        },
        cuenta:{
            numero: 1234,
            cantidad: 1000
        }
    }
}

//Método antiguo es mas largo
let nombreC=cliente.nombre;
let datosC=cliente.datos;
let ubicacionC=cliente.datos.ubicacion;
let cantidadC=cliente.datos.cuenta.cantidad;

//Método nuevo, tambíen permite filtrar
let {nombre,datos, datos: {ubicacion},datos: {cuenta:{cantidad}}}=cliente;

console.log(nombre);
console.log(datos);
console.log(ubicacion);
console.log(cantidad);
*/

//Valores por defecto
//Si ese atributo no está disponible se le asigna el valor dado por default
/*
const cliente={
    nombre: "Miguel",
    tipo: "Premium",
}

let {nombre,tipo,cantidad=0}=cliente;

console.log(nombre);
console.log(tipo);
console.log(cantidad);
*/


//-----------ARRAYS-----------//
/*
const ciudades=["Madrid","Barcelona","Sevilla","Valencia","Zaragoza"];

//se accede segun el orden
const [primera,segunda]=ciudades;

console.log(primera);
console.log(segunda);

//si quieres acceder al ultimo
const[,,,,ultimo]=ciudades;
console.log(ultimo);

//acceder a un array dentro de un objeto

cliente={
    nombre:"miguel",
    ciudad:"grana",
    gustos:["comer","beber","deporte"]
}

let {nombre,gustos:[,,dep]}=cliente

console.log(nombre);
console.log(dep);

*/


//-----------FUNCIONES-----------//


//se le puede mandar un objeto a una funcion para ahorrar parametros
/*
function reserva(completo, opciones){
    opciones=opciones || {};
    //console.log(opciones);
    //forma antigua
    
    //let metodoPago=opciones.metodo,
    //    cantidadPago=opciones.cantidad,
    //    diasReserva=opciones.dias;
    
    //forma nueva
    let {metodo,cantidad,dias}=opciones;

    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
}
*/
//Valores por default
/*
function reserva(completo, {metodo="efectivo",cantidad=0,dias=0}){


    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
}

reserva(true,
    {
       // metodo:"tarjeta",
        //cantidad: 2000,
        dias: 3
    });
*/



//--------------------SYMBOLS---------------//
/*
//cada simbolo es diferente a otro, no se pueden comparar '===' '=='
const simbolo =Symbol();
const simbolo2 =Symbol("Descripcion");

//para agregar a un objeto un symbol
const nombre=Symbol();
let persona={};
persona.nombre="Pepe";//no funciona, crea un atributo nombre
console.log(persona);
persona[nombre]="Miguel";
persona.saldo=100;
persona.tipo="premium";

console.log(persona.nombre);
console.log(persona[nombre]);//para acceder al valor del symbol se hace con corchetes

//los symbols se consideran atributos privados, y por ej, no se recorren con un for
*/


//-------------------SETS-----------//
/*
//Un set no tiene duplicados

let set = new Set();

set.add("Camisa");
set.add("Pantalon");
set.add("Zapatos");
set.add("Camisa");//duplicado, no lo agrega

console.log(set);

let numeros=new Set([1,2,3,4,5,6,1,2,3,4]);

console.log(numeros);

//comprobar que un valor exista
console.log(numeros.has(3));
//eliminar del set
console.log(numeros.delete(3));
console.log(numeros);

//se puede recorrer
for(let i of numeros){
    console.log(i);
}

//convertir set a array

const array=[...numeros];

console.log(array);
numeros.clear();//limpia el set
*/

//---------------MAPS----------------//
/*
//listas ordenadas con llave y valor
let cliente=new Map();
//agregar un valor
cliente.set("nombre","Miguel");
cliente.set("Telf",123456789);

console.log(cliente);
//acceder a los valores
console.log(cliente.get("nombre"));
console.log(cliente.get("Telf"));

//Metodos de los maps

console.log(cliente.size);//tamaño
console.log(cliente.has("nombre"));//tiene un elemento
//borrar
cliente.delete("Telf");
console.log(cliente);

cliente.clear();//limpia el map

//Valores por default
const paciente=new Map(
    [["nombre","paciente"],
     ["habitacion","No definida"],
     ["acompañante","Desconocido"]
    ]);

paciente.set("nombre","miguel");
paciente.set("habitacion","100");
//Si no se establece se mantiene el valor del constructor

console.log(paciente);
//se puede recorrer
for(let [index,valor] of paciente){
    console.log(`indice: ${index}  valor: ${valor}`);
}
*/



//-------------ITERADORES------------//
/*
function crearIterador(carrito){
    //inicializamos el indice
    let i=0;
    return {
        siguiente: ()=>{
            let fin=(i>=carrito.length);
            let valor=!fin ? carrito[i++] : undefined;

            return {
                fin:fin,
                valor:valor
            }
        }
    }
}

const carrito=["p1","p2","p3","p4","p5","p6"];
const iterador=crearIterador(carrito);

for(let i=iterador.siguiente();i.fin!==true;i=iterador.siguiente()){
    console.log(i.valor);
}
*/


//--------------------GENERADORES--------------//
/*
//mas sencillos que los iteradores
//se pone un "*" despues de function, retornan un iterador
function * crearGenerador(){
    //yield se le puede poner cualquier valor
    yield 0;
    yield "Nombre";
    yield 3+3;
    yield true;
}

const iterador=crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

//Generador que recorre un Array

const carrito=["p1","p2","p3","p4","p5","p6"];

function* recorrerCarrito(carrito){
    for(let i=0;i<carrito.length;i++)
        yield carrito[i];
}
const iterador2=recorrerCarrito(carrito);
console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);
*/



//----------------EXPRESIONES REGULARES-------------//

let valor,expReg;
expReg=/[0123456789]/;//El patron a comparar
expReg=/[0-9]/;
valor=1990;

//una fecha en expReg
expReg=/\d\d-\d\d-\d\d\d\d/;
valor="10-10-2000";

//hora
expReg=/\d\d:\d\d \D\D/; //D mayuscula busca lo que no sea d minuscula(numero)
valor="10:30 am";

//un digito o mas
expReg=/\d+/;
valor="112312";

//negar la expresion
expReg=/[^0-9]/;
valor="hola";

//expresion \d{1,2}, numero de 1 o 2 digitos
expReg=/\d{1,2}-\d{1,2}-\d{4}/;
valor="10-10-2018";//true
valor="1-1-2018";//true
valor="10-10-18";//false

//numeros o letras
expReg=/\w+/;
valor="hola";//true
valor="12";//true
valor=" ";//false

//puros numeros
expReg=/([0-9])\w+/;
valor=1234;

//mayusculas
expReg=/([A-Z])\w+/;
valor="HOLA";

console.log(expReg.test(valor));//compara el patron y el valor, y dice si pertenece o no






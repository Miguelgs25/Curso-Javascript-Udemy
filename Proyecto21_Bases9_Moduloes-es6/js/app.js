import {nombreCliente,ahorro,mostrarDatos,Cliente} from "./cliente.js";
//import * as clientes from "./cliente.js";//se utiliza clientes.nombreCliente o clientes.mostrarDatos(...)
import {nombreEmpresa,ahorro as ahorroEmpresa,categoria, Empresa} from "./empresa.js";//si hay conflicto de nombres se puede usar "as"


console.log(nombreCliente);
console.log(nombreEmpresa);

console.log(ahorro);
console.log(ahorroEmpresa);

const info=mostrarDatos(nombreCliente,ahorro);

console.log(info);

const clase=new Cliente("Miguel",1000);
console.log(clase);

console.log(clase.mostrarCliente());


let empresa=new Empresa(nombreEmpresa,ahorroEmpresa,categoria);
console.log(empresa.mostrarCliente());
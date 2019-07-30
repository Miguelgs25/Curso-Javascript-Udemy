import { Cliente } from "./cliente.js";

//exportar variables
export const nombreEmpresa ="MiguelTech";
export let ahorro=100;
export let categoria="Tecnologica";


//exportar funciones
export function mostrarDatos(nombre,cantidad,categoria){
    return `Nombre: ${nombre}  Ahorro: ${cantidad}  Categoria: ${categoria}`;
}

export class Empresa extends Cliente{
    constructor(nombre,ahorro,categoria){
        super(nombre,ahorro);
        this.categoria=categoria;
    }
    mostrarCliente(){
        return `Nombre: ${this.nombre}  Ahorro: ${this.ahorro}  Categoria:  ${this.categoria}`;
    }



}

/*
//exportar clases
export class Cliente{
    constructor(nombre,ahorro){
        this.nombre=nombre;
        this.ahorro=ahorro;
    }

    mostrarCliente(){
        return `Nombre: ${this.nombre}  Ahorro: ${this.ahorro}`;
    }
}
*/


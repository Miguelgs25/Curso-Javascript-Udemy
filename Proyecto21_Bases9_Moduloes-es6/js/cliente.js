//exportar variables
export const nombreCliente ="Miguel";
export let ahorro=100;


//exportar funciones
export function mostrarDatos(nombre,cantidad){
    return `Nombre: ${nombre}  Ahorro: ${cantidad}`;
}


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



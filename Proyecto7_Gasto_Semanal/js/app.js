//VARIABLES
const presupuestoUsuario=prompt("¿Cual es tu presupuesto semanal?");
let presupuesto;

//CLASES
//Clase presupuesto
class Presupuesto{
    constructor(cantidad){
        this.cantidad=Number(cantidad);
        this.restante=Number(cantidad);
    }
    presupuestoRestante(gasto = 0){
        return this.restante-=Number(gasto);
    }


}

class Interfaz{
    constructor(){}

    mostrarPresupuesto(presupuesto){
        const presupuestoElem=document.getElementById("total");
        const restanteElem=document.getElementById("restante");
        presupuestoElem.innerHTML=presupuesto.cantidad;
        restanteElem.innerHTML=presupuesto.restante;

        const restanteDiv=document.querySelector(".restante");
        if(presupuesto.restante<=(presupuesto.cantidad/4)){
            //rojo
            restanteDiv.className="restante alert alert-danger";
        }else if(presupuesto.restante<=(presupuesto.cantidad/2)){
            //amarillo
            restanteDiv.className="restante alert alert-warning";
        }else{
            //verde
            restanteDiv.className="restante alert alert-success";
        }
    }
    mostrarMensaje(mensaje, tipo){
        const formularioPadre=document.getElementById("agregar-gasto").parentElement;
        const formulario=document.getElementById("agregar-gasto");
        const div=document.createElement("div");
        div.classList.add("text-center","alert");
        div.innerHTML=mensaje;
        //le agrega una clase de bootstrap
        if(tipo==="error"){
            div.classList.add("alert-danger");
        }else{
            div.classList.add("alert-success");
        }
        formularioPadre.insertBefore(div,formulario);
        setTimeout(function(){
            div.remove();
            formulario.reset();
        },3000);

    }
    //inserta el gasto en la lista y lo muestra
    insertarGastoLista(nombreGasto,cantidad){
        const principal=document.querySelector("#gastos ul");
        const li=document.createElement("li");
        li.innerHTML=`${nombreGasto}
        <span class="badge badge-primary badge-pill">${cantidad}$</span>`;
        //bootstrap
        li.className="list-group-item d-flex justify-content-between align-item-center";
        principal.appendChild(li);
    }
}



//EventListeners
eventListeners();

function eventListeners(){
    //al inicar la app
    document.addEventListener("DOMContentLoaded",inicioApp);

    //al pulsar el boton
    const formulario=document.getElementById("agregar-gasto");
    formulario.addEventListener("submit",agregarGasto);

}



//Funciones
function inicioApp(){
    //Comprueba qué se haya insertado bien el presupuesto
    if(presupuestoUsuario===null || presupuestoUsuario==="" || isNaN(Number(presupuestoUsuario))){
        window.location.reload();
    }else{
        //instanciar presupuesto
        presupuesto=new Presupuesto(presupuestoUsuario);
        console.log(presupuesto);

        //Mostrar presupuest
        const interfaz=new Interfaz();
        interfaz.mostrarPresupuesto(presupuesto);
    }
}

function agregarGasto(e){
    e.preventDefault();
    //leer campos
    const nombreGasto=document.getElementById("gasto").value;
    const cantidad=document.getElementById("cantidad").value;

    //comprobar campos
    const ui=new Interfaz();
    //mostrar si campos correctos o no
    if(nombreGasto==="" || cantidad===""){
        //error
        ui.mostrarMensaje("Algún campo vacío","error");
    }else{
        //correcto
        ui.mostrarMensaje("Todo correcto","correcto");
        //si correctos, actualizar presupuesto
        presupuesto.presupuestoRestante(cantidad);
        ui.mostrarPresupuesto(presupuesto);
        //agregar al listado
        ui.insertarGastoLista(nombreGasto,cantidad);
        //mostrar presupuesto
    }
    




}

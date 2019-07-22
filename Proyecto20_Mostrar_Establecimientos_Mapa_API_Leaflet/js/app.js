const interfaz=new UI();


document.addEventListener("DOMContentLoaded",cargarEstablecimientos);
const buscador=document.querySelector("#buscar input");
document.addEventListener("input",buscarEstablecimientos);

function cargarEstablecimientos(){
    interfaz.mostrarEstablecimientos();

}

function buscarEstablecimientos(){
    if(buscador.value.length>=4)
        interfaz.mostrarBusqueda(buscador.value);
    else    
        interfaz.mostrarEstablecimientos();
}

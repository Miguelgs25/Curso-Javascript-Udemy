//instanciar las clases
const api=new EventBrite();
const interfaz=new Interfaz();

//interfaz.imprimirCategorias();


//event Listeners

document.getElementById("buscarBtn").addEventListener("click", buscarEventos);

function buscarEventos(e){
    e.preventDefault();

    //leer formulario
    const nombreEvento=document.getElementById("evento").value;
    console.log(nombreEvento);
    const categoria=document.getElementById("listado-categorias");
    const categoriaSelected=categoria.options[categoria.selectedIndex].value;
    console.log(categoriaSelected);

    //validar formulario
    if(nombreEvento!=="" && categoriaSelected!==""){
        //interfaz.mostrarMensajeValidacion("Todo correcto",true);
            
        //consultar api
        api.obtenerEventos(nombreEvento,categoriaSelected)
            .then(eventos=>{
                console.log(eventos.events);
                if(eventos.events.length>0){
                    console.log("tiene");
                    //mostrar eventos
                    interfaz.mostrarEventos(eventos.events);


                }else    
                    interfaz.mostrarMensajeValidacion("No hay Eventos",false);
            });
    }else{
        interfaz.mostrarMensajeValidacion("Los campos no pueden estar vacíos",false);
    }
}









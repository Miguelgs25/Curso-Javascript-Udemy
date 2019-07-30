import {Api} from "./api.js";
import * as UI from "./interfaz.js";


const ui = new UI.Interfaz();




UI.formulario.addEventListener("submit",buscarLetra);


function buscarLetra(e){
    e.preventDefault();
    const nombreArtista=document.getElementById("artista").value;
    const nombreCancion=document.getElementById("cancion").value;
    const api = new Api(nombreArtista,nombreCancion);

    //comprobar campos y mostrar errores
    if(nombreArtista!=="" && nombreCancion!==""){
        //buscar cancion api
        api.buscarCancion()
            .then(datos=>{
                if(datos.lyrics){
                    ui.mostrarResultado(datos)
                }else{
                    UI.formulario.reset();
                    ui.mostrarMensaje("La canción no se ha encontrado.",true);
                    setTimeout(()=>ui.mostrarMensaje("",false),2000);
                } 
            })
            .catch(error=>console.log(`ha habido un error ${error}`));

        //mostrar cancion html


        //console.log("buscar cancion");

    }else{
        //mostrar mensaje de error
        ui.mostrarMensaje("Los campos no deben estar vacíos.",true);
        setTimeout(()=>ui.mostrarMensaje("",false),2000);
    }






    console.log(nombreArtista);
    console.log(nombreCancion);
}



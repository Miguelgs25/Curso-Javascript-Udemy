

export const formulario=document.getElementById("formulario-buscar"),
             mensajes=document.getElementById("mensajes");
const resultadoDiv=document.getElementById("resultado");
export class Interfaz{
    constructor(){
    }
    
    mostrarMensaje(mensaje,mostrar){
        if(mostrar){
            resultadoDiv.innerHTML="";
            mensajes.classList.add("error");
            mensajes.innerHTML=mensaje;
        }else{
            mensajes.classList.remove("error");
            mensajes.innerHTML="";
        }
    }

    mostrarResultado(resultado){
        resultadoDiv.innerHTML=`
        <div>
            <p>${resultado.lyrics}</p>
        </div>
        `;


    }

}



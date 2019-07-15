/*
    AJAX es la forma antigua, enma6 trae la fetch API que hace todo esto más sencillo
    AJAX no es una buena forma de cargar elementos en la web porque necesita eventos
    como pulsar un boton para poder traer los datos, no lo hace en tiempo real.
*/
const listado=document.getElementById("listado");
const boton=document.getElementById("cargar");

boton.addEventListener("click",cargarDatos);



function cargarDatos(e){
    e.preventDefault();

    const xhr=new XMLHttpRequest();//puede manejar diferentes tipos de archivo no solo xml

    //abrir una conexión
    xhr.open("GET","datos.txt",true);//método(GET,POST,PUT,DELETE)  Url  Asincrono?

    //una vez que carga
    xhr.onload=function(){
        //200-correcto 403-Request prohibido 404-Algo no es encontrado
        if(this.status===200){
            listado.innerHTML=this.responseText;
            //console.log(this.responseText);
        }
    }

    //enviar el request
    xhr.send();


}
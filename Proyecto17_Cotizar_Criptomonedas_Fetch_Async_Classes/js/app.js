//conexion entre api.js y ui.js
const api=new API("0102cee929a0d18bc6d24b01d0d6eac70d91bd09a8c48a83a6d27245de0dbbc0");
const interfaz=new Interfaz();

//obtener el formulario
const formulario=document.querySelector("#formulario");



formulario.addEventListener("submit",cotizarCriptoMoneda);


function cotizarCriptoMoneda(e){
    e.preventDefault();
    //leer moneda
    const moneda=document.getElementById("moneda");
    const monedaSelected=moneda.options[moneda.selectedIndex].value;

    console.log(monedaSelected);
    //leer criptomoneda
    const criptoMoneda=document.getElementById("criptomoneda");
    const criptoMonedaSelected=criptoMoneda.options[criptoMoneda.selectedIndex].value;

    console.log(criptoMonedaSelected);

    //comprobar que ambos campos tengan algo seleccionado
    if(monedaSelected!=="" && criptoMonedaSelected !==""){
        //correcto, consultar la api
        interfaz.mostrarSpiner(true);
        api.obtenerValores(monedaSelected,criptoMonedaSelected)
            .then(data=> interfaz.imprimeCotizacion(data.RAW,monedaSelected,criptoMonedaSelected));
        //interfaz.imprimeCotizacion(data,monedaSelected,criptoMonedaSelected);

    }else{
        //Incorrecto
        interfaz.mostrarMensaje("Debes seleccionar los dos campos","alert bg-danger text-center");
    }


}



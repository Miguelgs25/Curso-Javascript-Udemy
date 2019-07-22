class API{

    async obtenerDatos(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url="https://datos.madrid.es/egob/catalogo/200186-0-polideportivos.json";
        const datos=await fetch(proxyurl+url);
        const polideportivos=await datos.json();
/*
        const array=polideportivos["@graph"];
        console.log(array[0].location);
*/
        return polideportivos["@graph"];
    }




}
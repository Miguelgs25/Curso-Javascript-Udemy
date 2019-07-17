//Va a contener todo el codigo de la Rest api

class API{
    constructor(apikey){
        this.apikey=apikey;
    }

    async obtenerMonedasAPI(){
        const url=`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //consultar la rest api
        const obtenerMonedas = await fetch(url);

        const monedas= await obtenerMonedas.json();

        return {monedas};//devuelve un objeto con key y valor iguales {monedas:monedas}
    }

    async obtenerValores(moneda,criptomoneda){
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?api_key=${this.apikey}&fsyms=${criptomoneda}&tsyms=${moneda}`;

        //consultar la rest api
        const urlConvertir=await fetch(url);
        const resultado=await urlConvertir.json();

        return resultado;
    }

}
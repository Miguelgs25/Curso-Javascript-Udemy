class EventBrite{
    constructor(){
        this.tokenAuth="BAIFLXDKNSMTWX5MY4LI";
        this.ordenar="date";
        this.lugar="Spain";
    }

    async obtenerCategorias(){
        //consultar las categorias a la api eventbrite
        const url= `https://www.eventbriteapi.com/v3/categories/?token=${this.tokenAuth}`;
        const respuesta= await fetch(url);

        //esperar respuesta
        const categorias=await respuesta.json();

        return categorias.categories;
    }

    async obtenerEventos(nombre,categoria){
        const url=`https://www.eventbriteapi.com/v3/events/search/?token=${this.tokenAuth}&categories=${categoria}&q=${nombre}&sort_by=${this.ordenar}`;
        const respuesta=await fetch(url);

        const eventos=await respuesta.json();
        //console.log(eventos);

        return eventos;
    }
}
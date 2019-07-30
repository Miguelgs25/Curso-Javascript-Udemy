


export class Api{
    constructor(artista,cancion){
        this.artista=artista;
        this.cancion=cancion;
        this.url="https://api.lyrics.ovh/v1/";
    }

    async buscarCancion(){
        const respuesta=await fetch(this.url+`${this.artista}/${this.cancion}`);
        const datos=await respuesta.json();

        return datos;
    }
}
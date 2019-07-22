
class UI {
    constructor() {

        this.markers=new L.LayerGroup();
         // Iniciar el mapa
        this.mapa = this.inicializarMapa();
        this.api=new API();
    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([40.4165000, -3.7025600], 10);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos=>{
                //console.log(datos);
                //mostrar pines
                this.mostrarPines(datos);

            });
    }

    mostrarPines(datos){
        //limpiar los pines
        this.markers.clearLayers();

        //recorrer los establecimientos
        for(let i of datos){
            //Destructuring
            const {title ,location:{latitude,longitude}}=i;
            const dir=i.address["street-address"];
            //console.log(`${title} ${latitude} ${longitude}`);
            //console.log(dir);

            //crear popup
            const opcionesPopUp=L.popup()
                .setContent(`
                    <p><b>${title}</b></p>
                    <p>${dir}</p>
                `);

           //crear pin
           const marker=new L.marker([
               parseFloat(latitude),
               parseFloat(longitude)
           ]).bindPopup(opcionesPopUp);
           this.markers.addLayer(marker);
        }
        this.markers.addTo(this.mapa);
    }

    mostrarBusqueda(busca){
        this.api.obtenerDatos()
            .then(datos=>{
                this.filtrarBusqueda(datos,busca);
            });
    }

    filtrarBusqueda(datos,busqueda){
        //filtrar resultado con .filter
        const resultado=datos.filter(filtro=>filtro.title.indexOf(busqueda)!==-1);

        //console.log(resultado);
        this.mostrarPines(resultado);
    }
}
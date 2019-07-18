class Interfaz{
    constructor(){
        this.categorias=document.getElementById("listado-categorias");
        this.listado=document.getElementById("resultado-eventos");
        this.imprimirCategorias();
    }

    imprimirCategorias(){
        let htmlCategoria="";
        const listaCategorias=api.obtenerCategorias()
            .then(categorias=>{
                categorias.forEach(element => {
                    htmlCategoria+=`
                    <option value="${element.id}">${element.name}</option>
                    `
                    //console.log(element);
                });
                this.categorias.innerHTML=htmlCategoria;   
            });
    }

    mostrarMensajeValidacion(mensaje,tipo){
        const mensajeDiv=document.createElement("div");
        if(tipo){
            mensajeDiv.innerHTML=mensaje;
            mensajeDiv.classList="alert alert-success text-align-center";
        }else{
            mensajeDiv.innerHTML=mensaje;
            mensajeDiv.classList="alert alert-danger text-align-center";
        }
        const eventosDiv=document.getElementById("buscador");
        eventosDiv.appendChild(mensajeDiv);
        setTimeout(()=>{
            mensajeDiv.remove();
        },2000);
    }


    mostrarEventos(eventos){
        this.listado.innerHTML="";
        for(let i of eventos){
            console.log(i);
            if(i.logo===null || i.name.text===null || i.description.text===null || i.url===null){}
            else{
                this.listado.innerHTML+=`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img class="img-fluid mb-2" src="${i.logo.url}">
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${i.name.text}</h2>
                                <p class="lead text-info">Información del evento</p>
                                <p>${i.description.text.substr(0,200)}</p>
                                <span class="badge badge-primary">Capacidad: ${i.capacity}</span>
                                <span class="badge badge-secondary">Fecha y hora: ${i.start.local}</span>
                                <a href="${i.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar tickets</a>
                            </div>

                        </div>
                    </div>
                </div>
                `;
            }
        }


    }

}
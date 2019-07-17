//Elementos de la interfaz

class Interfaz{
    constructor(){
        this.construirSelect();
    }

    construirSelect(){
        //api se declara como global en app.js antes de llamar a la interfaz, por eso se puede usar aquí
        api.obtenerMonedasAPI()
            .then(moneda =>{
                //console.log(moneda);
                const criptoSelect=document.getElementById("criptomoneda");
                let monedasHtml="";
                //iterar por los resultados de la api
                for(const [key,value] of Object.entries(moneda.monedas.Data)){
                    monedasHtml+=`
                    <option value=${key}>${value.CoinName}</option>
                    `
                    //console.log(value.CoinName);
                }
                criptoSelect.innerHTML=monedasHtml;
            });

    }

    mostrarMensaje(mensaje,clases){
        const div=document.createElement("div");
        div.classList=clases;
        div.innerHTML=mensaje;
        console.log(div);

        const divMensajes=document.querySelector(".mensajes");
        divMensajes.appendChild(div);

        setTimeout(()=>document.querySelector(".mensajes div").remove(),2000);

    }

    imprimeCotizacion(resultado,moneda,criptomoneda){
        console.log(resultado);
        console.log(moneda);
        console.log(criptomoneda);
        //en caso que halla un resultado anterior eliminarlo
        const resultadoAnterior=document.querySelector("#resultado > div");
        if(resultadoAnterior)
            resultadoAnterior.remove();

        //recortar digitos
        let precio=resultado[criptomoneda][moneda].PRICE.toFixed(2);
        const variacion=resultado[criptomoneda][moneda].CHANGEPCTDAY.toFixed(4);//ajustar a 4 dig despues de ,
        const fecha = new Date(resultado[criptomoneda][moneda].LASTUPDATE*1000).toLocaleDateString("es-ES");//viene en un formato raro
        //construir el template
        let html=`
        <div class="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado:</h2>
                <p>El precio de ${criptomoneda} a ${moneda} es de ${precio}</p>
                <p>La variacion del último dia es de:${variacion}%</p>
                <p>La última fecha de actualización:${fecha}</p>
            </div>
        </div>
        `
        //imprimir el resultado
        //setTimeout(()=>this.mostrarSpiner(false),3000);
        this.mostrarSpiner(false);
        document.getElementById("resultado").innerHTML=html;

    }

    mostrarSpiner(bool){
        const spiner = document.querySelector(".contenido-spinner");
        if(bool)
            spiner.style.display="block";
        else    
            spiner.style.display="none";
    }
}
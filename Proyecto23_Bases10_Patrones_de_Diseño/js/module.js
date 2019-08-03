//EFI FUNCIONES AUTOEJECUTABLES
//Para simular private, public

const comprarBoleto = (function(){

    //privado
    let evento="Conferencia JS 2019";
    let precio = 200;
    const adquirirBoleto=()=>{
        const elemento=document.createElement("div");
        elemento.innerHTML=`Boleto adquirido para ${evento}`;
        document.getElementById("app").appendChild(elemento);

    }

    //Publico
    return {
        mostrarBoleto: function(){
            //console.log(evento);
            adquirirBoleto();
        }


    }


})();

comprarBoleto.mostrarBoleto();
console.log(comprarBoleto.precio);
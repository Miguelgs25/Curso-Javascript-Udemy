//-----------------CALLBACKS----------------//

//const ciudades=["Madrid","Barcelona","Zaragoza","Sevilla","Granada"];

//Esto es un Callback porque hay una funcion corriendo dentro del forEach
//--inline Callback, SE RECOMIENDA QUE SEA DE ESTA FORMA
/*
ciudades.forEach(function(ciudad){
    console.log(ciudad);
});
*/

//También se puede definir la funcion callback fuera
//--Callback con funcion definida
/*
ciudades.forEach(callback);

function callback(ciudad){
    console.log(ciudad);
}
*/

//Escenario: Estas consumiendo una REST API y te traes 10 entradas,
//justo despues entra la nº 11, por lo tanto no dispones de la info actualizada 
//Solucion: Utilizar Callbacks para traer esa entrada extra
/*
const paises=["España","Francia","Italia","Alemania","Inglaterra"];

//simular que se agrega un nuevo pais despues de mostrar
//-Se agrega un callback: una vez se agregue un nuevo pais que funcion debe ejecutarse
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    },2000);
}

//simular lo que tarde el servidor en responder
function mostrarPaises(){
    setTimeout(function(){
        let html="<ul>";
        for(let i of paises){
            html+=`<li>${i}</li>`;
        }
        html+="</ul>";
        document.getElementById("prueba").innerHTML=html;
    },1000);
}

nuevoPais("China",mostrarPaises);
mostrarPaises();
*/


//------------PROMISES--------------//

//El valor que estamos revisando no está disponible actualmente pero lo estará en un futuro.
/*
const esperando = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Correcto");//El promise se cumple
    },5000);

});

//Cuando resolve se ejecuta el then
esperando.then(function(mensaje){
    console.log(mensaje);
});
*/

//simular un error
const aplicarDescuento= new Promise(function(resolve,reject){
    const descuento=false;
    if(descuento){
        resolve("Descuento aplicado");
    }else{
        reject("No se puede aplicar el descuento");//se ejecuta el reject
    }

});

aplicarDescuento.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){//catch para mostrar el mensaje que le indiquemos
    console.log(error);
});








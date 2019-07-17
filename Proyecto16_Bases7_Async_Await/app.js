/*
//BASES
//No lo soportan todos los navegadores, chrome sí, emma7


//una funcion asincrona siempre requiere de un PROMISE
async function obtenerClientes(){
    const clientes = new Promise((resolve,reject)=>{
        //simular carga servidor
        setTimeout(()=>{
            resolve("Clientes descargados...");
        },5000);
    });

    const error=false;
    if(!error){
        //await detiene la ejecución del programa hasta que se resuelva el promise
        const respuesta = await clientes;
        return respuesta;
    }else{
        await Promise.reject("Hubo un error");
    }
}

obtenerClientes()
    .then(res=>console.log(res))
    .catch(error=>console.log(error));

*/

//CONSUMIENDO UNA REST API
const url="https://jsonplaceholder.typicode.com/todos";

//siempre que se use un async se va a generar un Promise
async function leerAPI(){
    const entradas = await fetch(url);
    const datos= await entradas.json();
    return datos;
}

leerAPI()
    .then(datos=>console.log(datos))
    .catch(error=>console.log(error));









let aprendiendo;

//metodo tradicional
aprendiendo = function(){
    console.log("Aprendiendo Javascript");
}

//se le puede quitar el function
aprendiendo = ()=>{
    console.log("Aprendiendo Javascript");
}

//Se le puede quitar los corchetes
aprendiendo = ()=> console.log("Aprendiendo Javascript");

//hace un return automático
aprendiendo = ()=> "Aprendiendo Javascript";

//return de un objeto, solo con corchetes no sirve, se agregan con parentesis
aprendiendo = ()=> ({mensaje:"Aprendiendo Javascript"});

//pasar un parámetro
aprendiendo = (tecnologia)=> `Aprendiendo ${tecnologia}`;
//pasar un parámetro, se le puede quitar parentesis al unico parametro
aprendiendo = tecnologia=> `Aprendiendo ${tecnologia}`;
//mas de un parametro parentesis obligados
aprendiendo = (tecnologia1,tecnologia2)=> `Aprendiendo ${tecnologia1} y ${tecnologia2}`;

console.log(aprendiendo("Javascript","HTML"));

const productos=["Ropa","Comida","Coche"];
/*
//Tradicional
const letrasProductos=productos.map(function(producto){
    return producto.length;
});
*/
//Arrow function
const letrasProductos=productos.map( producto=>producto.length);

//forEach
productos.forEach(producto=>console.log(producto));



console.log(letrasProductos);

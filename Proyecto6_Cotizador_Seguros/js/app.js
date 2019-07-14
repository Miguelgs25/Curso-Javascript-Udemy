//PROTOTYPES

//SEGURO
//constructor 
function Seguro(marca,anio,tipo){
    this.marca=marca;
    this.anio=anio;
    this.tipo=tipo;
}

//Cotizar
Seguro.prototype.cotizar=function(){
    /*
        marca
        1 = Americano 1.15
        2 = Asiatico  1.05
        3 = Europeo   1.35
    */
    const basePrecio=2000;
    let cantidad;

    switch(this.marca){
        case "1": cantidad=basePrecio*1.15;
                break;
        case "2": cantidad=basePrecio*1.05;
                break;
        case "3": cantidad=basePrecio*1.35;
                break;
    }

    //cada anio se reduce en un 3% el seguro
    const diffAnio=new Date().getFullYear()-this.anio;
    cantidad-=(diffAnio*0.03*cantidad);

    /*
        Si el seguro es basico la cantidad se incrementa en un 30%
        Si el seguro es completo la cantidad se incrementa en un 50%
    */
    if(this.tipo==="basico"){
        cantidad*=1.3;
    }else{
        cantidad*=1.5;
    }


    return cantidad;
}


//INTEFAZ
//Constructor,Cargar todo lo que se muestra en el HTML
function Interfaz(){}

//Muestra error
Interfaz.prototype.mostrarError=function(mensaje,tipo){
    //crea un div
    const div=document.createElement("div");
    //comprueba de qué tipo es el mensaje y agrega clases al div 
    if(tipo=="error"){
        div.classList.add("mensaje","error");
        
    }else{
        div.classList.add("mensaje","correcto");
    }
    div.innerHTML=mensaje;
    const formulario=document.querySelector("#cotizar-seguro");
    formulario.insertBefore(div,document.querySelector(".form-group"));

    setTimeout(function(){
        div.remove();
    },3000);
}

Interfaz.prototype.mostrarSeguro=function(seguro,cantidad){
    const resultado=document.getElementById("resultado");
    const resultadoMostrado=resultado.querySelector("div");
    if(resultadoMostrado!==null){
        resultadoMostrado.remove();
    }

    //mostrar spiner
    const spinner=document.querySelector("#cargando img");
    spinner.style.display="block";

    //crear elemento resultado
    let marca;
    switch(seguro.marca){
        case "1":marca="Americano";
            break;
        case "2":marca="Asiático";
            break;
        case "3":marca="Europeo";
            break;
    }
    const div=document.createElement("div");
    div.innerHTML=`
    <p class="header">Resumen:</p>
    <p>Marca: ${marca}</p>
    <p>Año: ${seguro.anio}</p>
    <p>Tipo: ${seguro.tipo}</p>
    <p>Total: ${cantidad}$</p>`;

    setTimeout(function(){
        //ocultar spinner
        spinner.style.display="none";

        //mostrar resultado    
        resultado.appendChild(div);
        
    },3000);
    

}


//EVENT LISTENERS

eventListeners();

function eventListeners(){
    //al inicializar la app
    document.addEventListener("DOMContentLoaded",initApp);

    //al hacer click en el boton
    const btnSubmit=document.querySelector(".btn");
    btnSubmit.addEventListener("click",calcularSeguro);
}

//Al iniciar la app
function initApp(){
    const maxDate=new Date().getFullYear();
    const minDate=maxDate-20;
    
    const anioSelect=document.getElementById("anio");
    for(let i=maxDate;i>=minDate;i--){
        let anio=document.createElement("option");
        anio.value=i;
        anio.text=i;
        anioSelect.appendChild(anio);
    }    
}

//al pulsar el boton calcula el seguro
function calcularSeguro(e){
    e.preventDefault();
    //para obtener el valor de un option
    const marca=document.getElementById("marca");
    const marcaSelected=marca.options[marca.selectedIndex].value;
    const anio=document.getElementById("anio");
    const anioSelected=anio.options[anio.selectedIndex].value;
    //leer valor de radio button
    const tipo=document.querySelector("input[name='tipo']:checked").value;

    //console.log(`Calcula el seguro de marca ${marcaSelected} del año ${anioSelected} de tipo ${tipo}`);

    //Crear una instancia de interfaz
    const interfaz=new Interfaz();

    //Comprobar que no esté vacio
    if(marcaSelected==="" || anioSelected==="" || tipo===""){
        console.log("algun campo vacio");
        //interfaz pinta error
        interfaz.mostrarError("Faltan datos","error");
    }else{
        interfaz.mostrarError("Todo correcto","correcto");

        //instanciar Seguro y mostrar interfaz
        const seguro=new Seguro(marcaSelected,anioSelected,tipo);
        //console.log(seguro);

        //Cotizar seguro
        const cantidad=seguro.cotizar();
        //console.log(cantidad);

        //mostrar seguro
        interfaz.mostrarSeguro(seguro,cantidad);

    }

}


function obtenerCoches(){
    return  [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}


const coches=obtenerCoches();
document.addEventListener("DOMContentLoaded",()=>{
    mostrarCoches(coches);
});
const formulario=document.getElementById("buscador");
formulario.addEventListener("change",()=>{
    const filtro=filtrarCoches();
    mostrarCoches(filtro);
});



function mostrarCoches(coches){
    const res=document.getElementById("resultado");
    res.innerHTML="";
    if(coches.length===0){
        const div=document.createElement("div");
        div.classList.add("alerta","error");
        div.textContent="No hay elementos";
        res.appendChild(div);
    }
    for(let i of coches){
        const coche=document.createElement("div");
        coche.innerHTML=`<li>
            Marca: ${i.marca}  Modelo: ${i.modelo} Año: ${i.year} Precio: ${i.precio}
            Puertas: ${i.puertas} Color: ${i.color}  Transmision: ${i.transmision}
            </li>
        `;
        res.appendChild(coche);
    }
}

function filtrarCoches(){
    const marca=document.getElementById("marca").selectedIndex;
    const marcaSelect=document.getElementById("marca").options[marca].value;
    const year=document.getElementById("year").selectedIndex;
    const yearSelect=document.getElementById("year").options[year].value;
    const precioMin=document.getElementById("minimo").selectedIndex;
    const precioMinSelect=document.getElementById("minimo").options[precioMin].value;
    const precioMax=document.getElementById("maximo").selectedIndex;
    const precioMaxSelect=document.getElementById("maximo").options[precioMax].value;
    const puertas=document.getElementById("puertas").selectedIndex;
    const puertasSelect=document.getElementById("puertas").options[puertas].value;
    const transmision=document.getElementById("transmision").selectedIndex;
    const transmisionSelect=document.getElementById("transmision").options[transmision].value;
    const color=document.getElementById("color").selectedIndex;
    const colorSelect=document.getElementById("color").options[color].value;
    let cochesFiltrados=coches;
    console.log(typeof(precioMaxSelect)+precioMaxSelect);
    if(marcaSelect!="")
        cochesFiltrados=cochesFiltrados.filter(coche=>marcaSelect===coche.marca);
    if(yearSelect!="")
        cochesFiltrados=cochesFiltrados.filter(coche=>Number(yearSelect)===coche.year);
    if(precioMinSelect!="")
        cochesFiltrados=cochesFiltrados.filter(coche=>Number(precioMinSelect)<=coche.precio);
    if(precioMaxSelect!="")
        cochesFiltrados=cochesFiltrados.filter(coche=>Number(precioMaxSelect)>=coche.precio);
    if(puertasSelect!="")
        cochesFiltrados=cochesFiltrados.filter(coche=>Number(puertasSelect)===coche.puertas);
    if(transmisionSelect!="")
        cochesFiltrados=cochesFiltrados.filter(coche=>transmisionSelect===coche.transmision);
    if(colorSelect!="")
        cochesFiltrados=cochesFiltrados.filter(coche=>colorSelect===coche.color);
    return cochesFiltrados;
}
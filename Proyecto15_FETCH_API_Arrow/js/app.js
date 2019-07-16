
//-------------FETCH API-------------//

//eventListeners
document.getElementById("txtBtn").addEventListener("click",cargarTXT);
document.getElementById("jsonBtn").addEventListener("click",cargarJSON);
document.getElementById("apiBTN").addEventListener("click",cargarAPI);





//Funciones

function cargarTXT(e){
    e.preventDefault();

    fetch("datos.txt")
        .then(obj=>obj.text())
        .then(data=>{
            console.log(data);
            document.getElementById("resultado").innerHTML=data;
        })
        .catch(error=>console.log(error));

}

function cargarJSON(e){
    e.preventDefault();

    fetch("empleados.json")
    .then(obj=>obj.json())
    .then(data=>{
        console.log(data);
        let html="<ul>";
        for(i of data){
            html+=`
            <li>Nombre: ${i.nombre}     Puesto: ${i.puesto}</li>
            `
        }
        html+="</ul";
        document.getElementById("resultado").innerHTML=html;
    })
    .catch(error=>console.log(error));

}

function cargarAPI(e){
    e.preventDefault();

    fetch("https://picsum.photos/list")
    .then(obj=>obj.json())
    .then(data=>{
        console.log(data);
        let html="<ul>";
        for(i of data){
            html+=`
            <li>NombreFichero: ${i.filename}     Author: ${i.author}</li>
            <a href="${i.post_url}">enlace</a>
            `
        }
        html+="</ul";
        document.getElementById("resultado").innerHTML=html;
    })
    .catch(error=>console.log(error));





}

//Variables
//const listaCursos=document.getElementById("lista-cursos");
const carrito=document.getElementById("carrito");
const listaCarrito=document.querySelector("#lista-carrito tbody");
const listaCursos=document.getElementById("lista-cursos");
const vaciarCarritoBtn=document.getElementById("vaciar-carrito");

//console.log(listaCursos);
//console.log(carrito);
//console.log(listaCarrito);
//console.log(botonVaciarCarrito);
//Event listener
eventListener();

function eventListener(){
    //agregar al carrito
    listaCursos.addEventListener("click",agregarCursoCarrito);

    //eliminar un curso del carrito
    listaCarrito.addEventListener("click",borrarCursoCarrito);

    //vaciar todo el carrito
    vaciarCarritoBtn.addEventListener("click",vaciarCarrito);

    //al cargar la página, cargar local storage
    document.addEventListener("DOMContentLoaded",leerLocalStorage());



}
//funciones

function agregarCursoCarrito(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        //obtener info del curso
        /*
            //Mi forma
        const imagen=e.target.parentElement.parentElement.getElementsByClassName("imagen-curso")[0];
        const imagen2=imagen.cloneNode(true);
        const nombre=e.target.parentElement.getElementsByTagName("h4")[0].innerText;
        const precio=e.target.parentElement.getElementsByClassName("precio")[0].getElementsByTagName("span")[0].textContent;
        */
            //forma video
        const curso=e.target.parentElement.parentElement;
        const infoCurso=obtenerDatosCurso(curso);
        insertarCarrito(infoCurso);

        

        //crear elemento
        /*
        const listaCarrito=document.getElementById("lista-carrito").getElementsByTagName("tbody")[0];
        const elemento=document.createElement("tr");
        const imagenE=document.createElement("th");
        const nombreE=document.createElement("th");
        const precioE=document.createElement("th");
        imagenE.appendChild(imagen2);
        nombreE.innerText=nombre;
        precioE.innerText=precio;

        //agregar elemento
        elemento.appendChild(imagenE);
        elemento.appendChild(nombreE);
        elemento.appendChild(precioE);
        listaCarrito.appendChild(elemento);
        */
    }
}


function obtenerDatosCurso(curso){
    const infoCurso={
        imagen: curso.getElementsByClassName("imagen-curso")[0].src,
        nombre: curso.getElementsByTagName("h4")[0].innerText,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id")
    }

    return infoCurso;
}

function insertarCarrito(infoCurso){
    const cursoCarrito=document.createElement("tr");
    cursoCarrito.innerHTML=`
        <td>
            <img src="${infoCurso.imagen}" width=100></img>
        </td>
        <td>
            ${infoCurso.nombre}
        </td>
        <td>
            ${infoCurso.precio}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
        </td>
    `;

    let esta=false;
    const idsListaCarrito=listaCarrito.querySelectorAll(".borrar-curso");
    for(let i of idsListaCarrito){
        if(i.getAttribute("data-id")===infoCurso.id){
            esta=true;
            break;
        }
    }

    if(!esta){
        listaCarrito.appendChild(cursoCarrito);
        agregarCursoCarritoLocalStorage(infoCurso);
    }else{
        alert("El curso ya está en el carrito.");
    }
}


function borrarCursoCarrito(e){
    e.preventDefault();
    if(e.target.classList.contains("borrar-curso")){
        e.target.parentElement.parentElement.remove();
    }
    borrarCursoCarritoLocalStorage(e.target.getAttribute("data-id"));
}

function vaciarCarrito(){
    //console.log(listaCarrito.children);
    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild);
        //console.log("borrado");
    }
    localStorage.removeItem("cursos");


}

function agregarCursoCarritoLocalStorage(infoCurso){
    const cursos=obtenerCursoCarritoLocalStorage();
    cursos.push(infoCurso);
    localStorage.setItem("cursos",JSON.stringify(cursos));

}

function obtenerCursoCarritoLocalStorage(){
    let cursos;
    //comprobamos si hay algo en localStorage
    if(localStorage.getItem("cursos")===null){
        cursos=[];
    } else {
        cursos=JSON.parse(localStorage.getItem("cursos"));
    }
    return cursos;
}

function leerLocalStorage(){
    const cursosLS=obtenerCursoCarritoLocalStorage();
    for(let i of cursosLS){
        const cursoCarrito=document.createElement("tr");
        cursoCarrito.innerHTML=`
            <td>
                <img src="${i.imagen}" width=100></img>
            </td>
            <td>
                ${i.nombre}
            </td>
            <td>
                ${i.precio}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${i.id}">X</a>
            </td>
        `;
        listaCarrito.appendChild(cursoCarrito);
        
    }
}

function borrarCursoCarritoLocalStorage(dataId){
    const cursos=obtenerCursoCarritoLocalStorage();
    for(let i in cursos){
        if(cursos[i].id===dataId){
        }else{
            cursos.splice(i,1);
        }
    }
    localStorage.setItem("cursos",JSON.stringify(cursos));
}





let DB;

//selectores de la interfaz
const mascota=document.getElementById("mascota"),
        cliente=document.getElementById("cliente"),
        telefono=document.getElementById("telefono"),
        fecha=document.getElementById("fecha"),
        hora=document.getElementById("hora"),
        sintomas=document.getElementById("sintomas");

const listaCitas=document.getElementById("citas"),
        encabezadoCitas=document.getElementById("administra");
        form=document.querySelector("form");



document.querySelector("form").addEventListener("submit", agregarCita);
listaCitas.addEventListener("click",borrarCita);
document.addEventListener("DOMContentLoaded",()=>{
    //crear DB al cargar la página
    let crearDB=window.indexedDB.open("citas",1);

    //si hay error, si se pone por ej la version 1.1 da error porque la redondea a 1
    crearDB.onerror=function(){
        console.log("Hubo un error");
    }

    //si todo va bien
    crearDB.onsuccess=function(){
        console.log("Todo correcto");
        DB=crearDB.result;
        //console.log(DB);
        mostrarCita();
    }

    //este metodo solo se ejecuta una vez para crear el schema
    crearDB.onupgradeneeded=function(e){
        console.log("Solo se ejecuta una vez");
        //el evento es la misma base de datos
        let db=e.target.result;

        //definir el object store, recibe dos parámetros, el nombre de la base de datos y
        //segundo las opciones
        //keypath es el indice
        //autoIncrement es para que le vaya incrementando el key automaticamente
        let objectStore=db.createObjectStore("citas",{keypath:"key",autoIncrement:true});

        //crear los indices y campos de la base de datos
        //createIndex 3 parametros, nombre, keypath, opciones(unique->unico)
        objectStore.createIndex("mascota","mascota",{unique:false});
        objectStore.createIndex("cliente","cliente",{unique:false});
        objectStore.createIndex("telefono","telefono",{unique:true});
        objectStore.createIndex("fecha","fecha",{unique:false});
        objectStore.createIndex("hora","hora",{unique:false});
        objectStore.createIndex("sintomas","sintomas",{unique:false});

    }
    
});



function agregarCita(e){
    e.preventDefault();
    //leer formulario
    const nombreMascota=mascota.value;
    const nombreCliente=cliente.value;
    const numTelefono=telefono.value;
    const fechaCita=fecha.value;
    const horaCita=hora.value;
    const sintomasForm=sintomas.value;

    //validar formulario
    //El formulario se autovalida con html

    //Guardar en bd
        //creamos el objeto
    let nuevaCita={
        mascota:nombreMascota,
        cliente:nombreCliente,
        telefono:numTelefono,
        fecha:fechaCita,
        hora:horaCita,
        sintomas:sintomasForm
    }

    //guardamos en la DB
    guardarBD(nuevaCita);
    
    //mostrar cita
    //mostrarCita();
    
}

function guardarBD(cita){
    //en IndexDB se utilizan las transacciones
    let transaction=DB.transaction(["citas"],"readwrite");
    let objectStore=transaction.objectStore("citas");
    
    let peticion=objectStore.add(cita);
    //console.log(objectStore);

    peticion.onsuccess = ()=>{
        form.reset();
    };
    transaction.oncomplete=()=>{
        mostrarCita();
        console.log("agregado correctamente");
    };
    transaction.onerror=()=>{
        console.log("No se ha agregado correctamente");
    };
}

function mostrarCita(){
    while(listaCitas.firstChild){
        listaCitas.removeChild(listaCitas.firstChild);
    }

    //creamos un objectstore
    let objectStore=DB.transaction("citas").objectStore("citas");

    //esto retorna una peticion
    objectStore.openCursor().onsuccess=function(e){
        //Cursor que se ubica en el registro indicado para acceder a los datos
        let cursor=e.target.result;

        if(cursor){
            let citaHTML=document.createElement("li");
            //console.log(cursor);
            citaHTML.setAttribute("data-cita-id",cursor.key);
            citaHTML.classList.add("list-group-item");
            citaHTML.innerHTML=`
                <p class="font-weight-bold">Mascota:<span class="font-weight-normal">${cursor.value.mascota}</span></p>
                <p class="font-weight-bold">Cliente:<span class="font-weight-normal">${cursor.value.cliente}</span></p>
                <p class="font-weight-bold">Telefono:<span class="font-weight-normal">${cursor.value.telefono}</span></p>
                <p class="font-weight-bold">Fecha:<span class="font-weight-normal">${cursor.value.fecha}</span></p>
                <p class="font-weight-bold">Hora:<span class="font-weight-normal">${cursor.value.hora}</span></p>
                <p class="font-weight-bold">Sintomas:<span class="font-weight-normal">${cursor.value.sintomas}</span></p>
            `;
            let boton=document.createElement("button");
            boton.className="borrar";
            boton.textContent="Eliminar Cita";
            citaHTML.appendChild(boton);
            listaCitas.appendChild(citaHTML);

            //apuntar al siguiente registro
            cursor.continue();
        }else{
            //Cuando no hay registros
            if(!listaCitas.firstChild){
                encabezadoCitas.textContent="Agrega citas para comenzar";
            }else{
                encabezadoCitas.textContent="Administra tus citas";
            }
        }
    }
}

function borrarCita(e){
    e.preventDefault();
    if(e.target.className==="borrar"){
        let id=Number(e.target.parentElement.getAttribute("data-cita-id"));

        //en IndexDB se utilizan las transacciones
        let transaction=DB.transaction(["citas"],"readwrite");
        let objectStore=transaction.objectStore("citas");
        
        let peticion=objectStore.delete(id);


        peticion.onsuccess = ()=>{
            form.reset();
        };
        transaction.oncomplete=()=>{
            e.target.parentElement.remove();
            mostrarCita();
            console.log("borrado correctamente");
        };
        transaction.onerror=()=>{
            console.log("No se ha borrado correctamente");
        };
        
    }

}
const boton1=document.getElementById("boton1");
const boton2=document.getElementById("boton2");


boton1.addEventListener("click",function(){
    const xhr=new XMLHttpRequest();

    xhr.open("GET","empleado.json",true);

    xhr.onload=function(){
        if(xhr.status===200){
            const empleado=document.getElementById("empleado");
            objetoEmpleado=JSON.parse(this.responseText);
            empleado.innerHTML=crearHtmlEmpleado(objetoEmpleado);
        }
    }

    xhr.send();
    
});

boton2.addEventListener("click",function(){
    const xhr=new XMLHttpRequest();

    xhr.open("GET","empleados.json",true);

    xhr.onload=function(){
        if(xhr.status===200){
            const empleados=document.getElementById("empleados");
            objetoEmpleados=JSON.parse(this.responseText);
            
            for(let i of objetoEmpleados){
                console.log(i);
                const empleado=document.createElement("div");
                empleado.innerHTML=crearHtmlEmpleado(i);
                empleados.appendChild(empleado);
            }
            //empleado.innerHTML=crearHtmlEmpleado(objetoEmpleado);
        }
    }

    xhr.send();
});

function crearHtmlEmpleado(objeto){
    const empleadoHtml=`
    <ul>
        <li>Id: ${objeto.id}</li>
        <li>Nombre: ${objeto.nombre}</li>
        <li>Empresa: ${objeto.empresa}</li>
        <li>Trabajo: ${objeto.trabajo}</li>
    </ul>
    `;
    return empleadoHtml;
}

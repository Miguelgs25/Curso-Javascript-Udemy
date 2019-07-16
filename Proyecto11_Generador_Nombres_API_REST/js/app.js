
document.getElementById("generar-nombre").addEventListener("submit", generarNombre);




function generarNombre(e){
    e.preventDefault();
    //Leer variables
    const pais=document.getElementById("origen");
    const paisSelected=pais.options[pais.selectedIndex].value;
    const genero=document.getElementById("genero");
    const generoSelected=genero.options[genero.selectedIndex].value;
    const cantidad=document.getElementById("numero").value;

    console.log(paisSelected);
    console.log(generoSelected);
    console.log(cantidad);

    //contruir la url conforme los datos
    let url="https://uinames.com/api/?";
    if(paisSelected!==""){
        url+=`region=${paisSelected}&`;
    }
    if(generoSelected!==""){
        url+=`gender=${generoSelected}&`;
    }
    if(cantidad!==""){
        url+=`amount=${cantidad}&`;
    }

    //peticion
    const xhr=new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onload=function(){
        if(xhr.status===200){
            const nombres=JSON.parse(xhr.responseText);
            let resultados="<ul class='lista'>";
            for(let i of nombres){
                resultados+=`
                    <li>${i.name}</li>
                `;
            }
            resultados+="</ul>";
            document.getElementById("resultado").innerHTML=resultados;

            console.log(nombres);
        }
    }


    xhr.send();
}
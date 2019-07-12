//variables

const email=document.getElementById("email");
const asunto=document.getElementById("asunto");
const mensaje=document.getElementById("mensaje");
const enviarBtn=document.getElementById("enviar");
const resetBtn=document.getElementById("resetBtn");
const loaders=document.getElementById("loaders");
const formulario=document.getElementById("enviar-mail");


//event Listeners
eventListeners();

function eventListeners(){
    //inicio aplicacion, deshabilitar submit
    document.addEventListener("DOMContentLoaded",inicioApp);

    //validar campos del formulario
    email.addEventListener("blur",validarCampo);//blur elemento pierde el focus
    asunto.addEventListener("blur",validarCampo);
    mensaje.addEventListener("blur",validarCampo);

    //boton enviar
    enviarBtn.addEventListener("click",enviarMensaje);

    //boton reset
    resetBtn.addEventListener("click",resetForm);



}

//funciones
function inicioApp(){
    enviarBtn.disabled=true;


}

function validarCampo(){
    
    validarLongitud(this);
    if(this.type==="email"){
        validarEmail(this);
    }

    let errores=document.querySelectorAll(".error");
    if(email.value!=="" && asunto.value!=="" && mensaje.value!==""){
        if(errores.length===0){
            enviarBtn.disabled=false;
        }else{
            enviarBtn.disabled=true;
        }
    }else{
        enviarBtn.disabled=true;
    }
}

function validarLongitud(campo){
    if(campo.value.length>0){
        campo.style.borderBottomColor="green";
        campo.classList.remove("error");

    }else{
        campo.style.borderBottomColor="red";
        campo.classList.add("error");
    }


}

function validarEmail(campo){
    const email=campo.value;
    if(email.indexOf("@")!==-1){
        campo.style.borderBottomColor="green";
        campo.classList.remove("error");
    }else{
        campo.style.borderBottomColor="red";
        campo.classList.add("error");
    }


}

function enviarMensaje(e){
    e.preventDefault();
    //gif spinner al presionar enviar
    const spinner=document.getElementById("spinner");
    spinner.style.display="block";

    //gif email enviado
    const emailGif=document.createElement("img");
    emailGif.src="img/mail.gif";
    emailGif.style.display="block";


    //ocultar spinner y mostrar gif email
    setTimeout(function(){//espera cierto tiempo
        spinner.style.display="none";
        loaders.appendChild(emailGif);
        //hace desaparecer el gif email y resetea el formulario
        setTimeout(function(){
            emailGif.remove();
            resetForm();
        },3000);
    },3000);
}

function resetForm(){
    formulario.reset();
    enviarBtn.disabled=true;
}






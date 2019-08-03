//Parecido al factory, sirve para crear una abstracción de la funcionalidad
//una especie de wrapper 
/*A factory is simply a wrapper function around a constructor (possibly one in a 
    different class). The key difference is that a factory method pattern requires 
    the entire object to be built in a single method call, with all the parameters 
    pass in on a single line. The final object will be returned.

A builder pattern, on the other hand, is in essence a wrapper object around all 
the possible parameters you might want to pass into a constructor invocation. 
This allows you to use setter methods to slowly build up your parameter list. 
One additional method on a builder class is a build() method, which simply passes 
the builder object into the desired constructor, and returns the result.
*/

class Formulario{
    constructor(){
        this.campos=[]
    }

    agregarCampos(tipo,texto){
        let campos=this.campos;

        let campo;
        switch(tipo){
            case "text":
                campo=new InputText(texto);
                break;
            case "email":
                campo=new InputEmail(texto);
                break;
            case "button":
                campo=new InputButton(texto);
                break;
            default:
                throw new Error("El tipo no está definido "+tipo);
                break;
        }
        campos.push(campo);
    }

    obtenerFormulario(){
        let form=document.createElement("form"),
            numCampos=this.campos.length;

        for(let i of this.campos){
            form.appendChild(i.crearElemento());
        }
        return form;
    }

}


class Inputs{
    constructor(texto){
        this.texto=texto;
    }
}

class InputButton extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputButton=document.createElement("button");
        inputButton.setAttribute("type","submit");
        inputButton.textContent=this.texto;
        return inputButton;
    }
}
class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputButton=document.createElement("input");
        inputButton.setAttribute("type","email");
        inputButton.setAttribute("placeholder",this.texto);
        return inputButton;
    }
}
class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputText=document.createElement("input");
        inputText.setAttribute("type","text");
        inputText.setAttribute("placeholder",this.texto);
        return inputText;
    }
}

//instanciar formulario

const formulario=new Formulario();
formulario.agregarCampos("text","hola que tal");
formulario.agregarCampos("email","esto es un email");
formulario.agregarCampos("button","Botoon");

console.log(formulario.obtenerFormulario());

document.getElementById("app").appendChild(formulario.obtenerFormulario());


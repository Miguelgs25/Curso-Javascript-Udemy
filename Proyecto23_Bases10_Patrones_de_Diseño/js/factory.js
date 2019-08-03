//FACTORY
//Se utiliza para la creacion de objetos similares, 
//estas instancias se crean en tiempo de ejecucion porque se desconoce el tipo

function ConstructorSitios(){//clase

    this.crearElemento = function(texto,tipo){//metodo de clase
        let html;

        if(tipo ==="input"){
            html=new InputHTML(texto);
        }else if(tipo==="img"){
            html=new ImagenHTML(texto);
        }else if(tipo==="h1"){
            html=new HeadingHTML(texto);
        }else if(tipo==="p"){
            html=new ParrafoHTML(texto);
        }
        html.tipo=tipo;

        html.mostrar=function(){//metodo del metodo
            const elemento=document.createElement(html.tipo);
            if(this.tipo==="input"){
                elemento.setAttribute("placeholder",this.texto);
            }else if(this.tipo==="img"){
                elemento.setAttribute("src",this.texto);
            }else{
                elemento.innerHTML=this.texto;
            }
            document.getElementById("app").appendChild(elemento);
        }
        return html;
    }

}

const InputHTML= function(texto){
    this.texto=texto;
}
const ImagenHTML= function(texto){
    this.texto=texto;
}
const HeadingHTML= function(texto){
    this.texto=texto;
}
const ParrafoHTML= function(texto){
    this.texto=texto;
}

const sitio=new ConstructorSitios();
const elementos=[
    sitio.crearElemento("Hola","h1"),
    sitio.crearElemento("logo.svg","img"),
    sitio.crearElemento("boton","input"),
    sitio.crearElemento("Esto es un parrafo","p")
]

for( i of elementos){
    i.mostrar();
}

console.log(elementos);

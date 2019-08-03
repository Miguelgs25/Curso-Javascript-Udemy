//es un intermediario que se comunica con distintos tipos de objetos
//parecido a observer, es como un broker que gestiona las funciones
// productores y consumidores (vendedor comprador) se suscriben a un tema(subasta)

const Vendedor=function(nombre){
    this.nombre=nombre;
    this.sala=null;
}


const Comprador=function(nombre){
    this.nombre=nombre;
    this.sala=null;
}


Vendedor.prototype={
    oferta: function(articulo,precio){
        console.log(`El precio de salida del articulo ${articulo} es de ${precio}`);
    },
    vendido: function(nombreComprador){
        console.log(`Vendido a ${nombreComprador}`)
    }
}

Comprador.prototype={
    oferta:function(cantidad){
        console.log(`${this.nombre} : ${cantidad}`);
    }
}

const Subasta=function(){
    let compradores=[];

    return {
        registrar:function(usuario){
            compradores[usuario.nombre]=usuario;
            usuario.sala=this;
        }
    }
}

const vendedor=new Vendedor("vendedor");

const pepe=new Comprador("pepe");

const subasta=new Subasta();
subasta.registrar(vendedor);
subasta.registrar(pepe);

vendedor.oferta("pepinos",100);
pepe.oferta(200);
vendedor.vendido(pepe.nombre);
console.log(vendedor);
console.log(pepe);
console.log(subasta);

console.log(typeof(42));
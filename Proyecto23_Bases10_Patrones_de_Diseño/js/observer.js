//patron publicador-suscriptor  productor-consumidor


let observer={
    obtenerOfertas: function(callback){
        if(typeof callback === "function"){
            this.subscribers[this.subscribers.length]=callback;//guarda la funcion en la lista
        }
    },
    cancelarOfertas: function(callback){//se cancela la suscripcion a un publicador
        for(let i=0;i<this.subscribers.length;i++){
            if(this.subscribers[i]===callback){
                delete this.subscribers[i];
            }
        }
    },
    publicarOferta: function(oferta){
        for(let i=0;i<this.subscribers.length;i++){//recorre todos las funciones de los suscriptores
            if(typeof this.subscribers[i]==="function"){
                this.subscribers[i](oferta);//le pasa como parametro "oferta" a todas las funciones de suscriptores
            }
        }
    },
    //el objeto obtiene los métodos y propiedades de observer
    crear:function(objeto){
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i]=this[i];
                objeto.subscribers=[]
            }
        }
    }
}

//Vendedores-productores-publicadores
const udemy ={
    nuevoCurso: function(){
        const curso = "Un nuevo curso de JS.";
        this.publicarOferta(curso);
    }
}

const facebook ={
    nuevoAnuncio: function(){
        const oferta = "Compra un movil";
        this.publicarOferta(oferta);
    }
}

//Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);



//crear suscriptor
const miguel ={
    interesa: function(oferta){
        console.log("me interesa el curso "+oferta);
    }
}

udemy.obtenerOfertas(miguel.interesa);//miguel se suscribe a udemy
udemy.nuevoCurso();//udemy publica un nuevo curso







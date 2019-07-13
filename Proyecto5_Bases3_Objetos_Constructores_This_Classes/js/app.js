
//object literal
/*
const cliente={
    nombre: "Miguel",
    saldo: 200,
    categoría: function(){
        if(this.saldo>1000)
            return "Gold";
        else
            return "Standard";
    }
}

console.log(cliente.categoría);
*/
//forma antigua a ema6
//constructor
/*
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    this.categoria=function(){
        if(this.saldo>1000){
            return "Gold";
        }else{
            return "Standard";
        }
    }
}
const cliente=new Cliente("Miguel",500);

console.log(cliente);
*/


//OTROS OBJETOS Y CONSTRUCTORES
//string
/*
const nombre="Miguel";//tipo string
const nombre2=new String("Miguel");//tipo objeto string


console.log(nombre);
console.log(typeof nombre);
console.log(nombre2);
console.log(typeof nombre2);

//numero
const numero=10;//tipo string
const numero2=new Number(10);//tipo objeto string


console.log(numero);
console.log(typeof numero);
console.log(numero2);
console.log(typeof numero2);

//boolean
const bool=true;
const bool2=new Boolean(true);

console.log(bool);
console.log(bool2);

//funciones

const funcion1=function(a,b){
    return a+b;
}

const funcion2=new Function("a","b", "return a + b");//no se utiliza

console.log(funcion1(2,3));
console.log(funcion2(2,3));

//objetos

const obj1={
    nombre:"Miguel"
}
const obj2=new Object({
    nombre:"Miguel"
});
console.log(obj1);
console.log(obj2);

//Arrays

const array1=[1,2];
const array2=new Array(1,2);

console.log(array1);
console.log(array2);
*/

//-------------------PROTOTIPOS----------------//
//actualmente se hacen con clases

//forma antigua a ema6 de construir un objeto
/*
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    this.categoria=function(){
        if(this.saldo>1000){
            return "Gold";
        }else{
            return "Standard";
        }
    }
}
//ventaja, puedes crear cuantos quieras
const cliente=new Cliente("Miguel",500);
const cliente2=new Cliente("Maria",5000);
console.log(cliente);
console.log(cliente.categoria());
console.log(cliente2);
console.log(cliente2.categoria());

//Todos los objeto heredan los métodos de proto
//Para crear un prototipo accesible desde la clase cliente
//ventaja los metodos están fuera, objetos menos cargados
Cliente.prototype.saldoPositivo=function(){
    if(this.saldo>=0)
        return true;
    else
        return false;
}
const cliente3=new Cliente("Juan",-500);
console.log(cliente3.saldoPositivo());

Cliente.prototype.retirarSaldo=function(cantidad){
    if(this.saldo>=cantidad && cantidad>0){
        this.saldo-=cantidad;
        return true;
    }else{
        return false;
    }
}

console.log(`Retirada correcta? ${cliente.retirarSaldo(600)}\n
            Saldo disponible: ${cliente.saldo}`);
*/

//-----------------HERENCIA DE METODOS PROTOTIPOS----------------//
//para no tener que copiar el método para distintos tipos de objetos
/*
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}

Cliente.prototype.nombreClienteSaldo=function(){
    return `Nombre: ${this.nombre}  Saldo: ${this.saldo}`;
}
const cliente1=new Cliente("Miguel", 1000);
console.log(cliente1.nombreClienteSaldo());

function Empresa(nombre,saldo,telefono,tipo){
    //Heredando TODOS los atributos nombre y saldo
    Cliente.call(this,nombre,saldo);

    //estos si se ponen porque son nuevos
    this.telefono=telefono;
    this.tipo=tipo;
}
//Heredando TODOS los metodos prototipo de Cliente
Empresa.prototype=Object.create(Cliente.prototype);
const empresa=new Empresa("MijoTech",10000,123456789,"Tecnologia");
console.log(empresa);
console.log(empresa.nombreClienteSaldo());
*/

//OBJECT CREATE
//forma en emmascript <6
/*
const Cliente={
    imprimirSaldo:function(){
        return `Saldo: ${this.saldo}`;
    },
    retirarSaldo:function(cantidad){
        this.saldo-=cantidad;
        return `Saldo retirado: ${cantidad} Saldo restante: ${this.saldo}`;
    }
}

const cliente1=Object.create(Cliente);
cliente1.nombre="Miguel";
cliente1.saldo=1000;
console.log(cliente1);
console.log(cliente1.retirarSaldo(100));
*/

//CLASES A PARTIR DE ENMASCRIPT 6
class Cliente{
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
    
    obtenerSaldo(){
        return `${this.nombre} dispones de ${this.saldo} $`;
    }
    //static se usa para invocar el método sin crear ningun objeto de la clase
    static bienvenida(){
        return "Bienvenido!";
    }
}

const cliente1=new Cliente("Miguel",1000);
console.log(Cliente.bienvenida());
console.log(cliente1.obtenerSaldo());

//Herencia de clases con extends
class Empresa extends Cliente{
    constructor(nombre,saldo,telf,tipo){
        super(nombre,saldo); //obtiene los atributos de la clase de la que hereda
        this.telf=telf;
        this.tipo=tipo;
    }

    obtenerTelfTipo(){
        return `Hola, ${this.nombre} con telf ${this.telf} y tipo ${this.tipo}, dispones de ${this.saldo}$`;
    }

    //Se pueden reescribir los métodos que se heredan
    static bienvenida(){
        return "Bienvenido a la empresa!";
    }
}

const empresa1=new Empresa("Miguel SL",10000,123456789,"Tech");
console.log(Empresa.bienvenida());
console.log(empresa1);
console.log(empresa1.obtenerSaldo());
console.log(empresa1.obtenerTelfTipo());

//prueba herencia de herencia
class SubEmpresa extends Empresa{
    constructor(nombre,saldo,telf,tipo,num){
        super(nombre,saldo,telf,tipo);
        this.num=num;
    }

    obtenerId(){
        return this.num;
    }
}

const subEmpresa1=new SubEmpresa("MG SL",10,123456789,"L",25);
console.log(subEmpresa1);
console.log(subEmpresa1.obtenerSaldo());//la hereda de cliente
console.log(SubEmpresa.bienvenida());





//import "../css/style.css";
import "../css/style.scss";
/*
class Cliente{
    constructor(){
      this.nombre="Miguel";
      this.edad=25;
    }
   
     imprimir(){
      console.log(this.nombre+this.edad); 
     }
   }
   
   const cliente = new Cliente();
   cliente.imprimir();

   const carrito=["p1","p2"];
   console.log(carrito);

   console.log("Desde inicio");

   */

const clientes=["cliente1","cliente2","cliente3","cliente4","cliente5"];
let html="";

clientes.forEach((cliente)=>{
  html+=`
    <li>${cliente}</li>
  `;
});

document.getElementById("clientes").innerHTML=html;








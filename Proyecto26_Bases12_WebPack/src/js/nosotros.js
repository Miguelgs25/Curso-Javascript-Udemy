//import "../css/style.css";
import "../css/style.css";

const carrito=["p1","p2"];
let html="";

carrito.forEach((carro)=>{
  html+=`
    <li>${carro}</li>
  `;
});

document.getElementById("carrito").innerHTML=html;
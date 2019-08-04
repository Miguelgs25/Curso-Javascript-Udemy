const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

console.table(autos);
//----------------------FOR-------------------//
//anteriormente lo haríamos con fo
/*for(let i of autos){
	console.log(i.marca);
}*/


//----------------------FOREACH-------------------//
// forEach : cuando necesites recorrer el array, si necesitas extraer un objeto
//			con alguna caracteristica como "coches rojos" usar filter
console.log("FOR EACH")
autos.forEach(auto=>{
	console.log(auto);
});


//-------------------------MAP------------------//
// map : la diferencia con un forEach es que puede devolver un array nuevo
console.log("MAP")
autos.map(auto =>{//funciona igual que un forEach
	console.log(auto);
});

//let resultado=autos.map(auto=>{ return auto});//esto no funciona en el forEach
let resultado=autos.map(auto=> auto);//el return viene implicito en los arrowFunction
console.log(resultado);
//si se usa un if para filtrar no funciona bien, devuelve undefined donde no se cumple
let resultado2=autos.map(auto=>{
	if(auto.color==="Rojo")
		return auto;
});
console.log(resultado2);


//----------------------------FILTER------------------------//
// filter: devuelve un nuevo array con el filtro, se pueden concatenar filter().filter().filter()
let filtro = autos.filter(auto=> auto.color==="Rojo");
console.log(filtro);


//---------------------FIND-------------------//
// find: devuelve el primer elemento que encuentre en el array que cumpla la condicion
let busca=autos.find(auto=> auto.color==="Rojo");
console.log(busca);


//------------------------REDUCE--------------------//
// reduce: toma todo los valores y devuelve un valor único
let reduce = autos.reduce((total,auto)=>total+auto.precio,0);
//total -> es el acumulador, el valor anterior
//0 -> el valor inicial de total
console.log(reduce);


//------------------------SOME------------------------//
// some : evalua una condicion y devuelve True o False si existe
let alguno=autos.some(auto=>auto.color==="Negro");
console.log(alguno);




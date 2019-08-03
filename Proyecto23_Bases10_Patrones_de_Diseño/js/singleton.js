//El patron de diseño singleton solo admite una instancia del objeto
//Para ello se puede usar un object literal

const alumnos={
    listaAlumnos:[],

    //obtener alumnos
    get : function(id){
        return this.listaAlumnos[id];

    },

    //crear un alumno
    crear: function(datos){
        this.listaAlumnos.push({id:this.listaAlumnos.length,datos});
    },

    //listar alumnos
    listar : function(){
        return this.listaAlumnos;

    }
};

//alumnos=new alumnos();
alumnos.crear({nombre:"Miguel",edad:28,tipo:"TIC"});
alumnos.crear({nombre:"Miguel",edad:28,tipo:"TIC"});
alumnos.crear({nombre:"Miguel",edad:28,tipo:"TIC"});
console.log(alumnos.get(0));
console.log(alumnos.listar());
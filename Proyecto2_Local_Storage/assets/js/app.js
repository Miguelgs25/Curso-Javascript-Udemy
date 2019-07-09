
//variables

//cargar tweets desde localStorage




//eventListeners
eventListeners();

function eventListeners(){
    //agregar tweet
    const botonAgregar=document.getElementById("formulario").getElementsByClassName("button")[0];
    //console.log(botonAgregar);
    botonAgregar.addEventListener("click",agregarTweet);
    //borrar tweet, no se sabe dónde va a pinchar porque los elementos no se crean
    //al principio, se captura todo
    const listaTweets=document.getElementById("lista-tweets");
    listaTweets.addEventListener("click",borrarTweet);
    //cargar al inicio
    document.addEventListener("DOMContentLoaded",cargarTweetsLocalStorage);


}

//funciones
function cargarTweetsLocalStorage(){
    let tweets=getTweetLocalStorage();
    for(let i of tweets){
        const lista=document.createElement("li");
        lista.innerText=i;
        //Crear boton borrar tweet
        const botonBorrar=document.createElement("a");
        botonBorrar.classList='borrar-tweet';
        botonBorrar.innerText="X";
        lista.appendChild(botonBorrar);

        //agregar elemento
        const listaTweets=document.getElementById("lista-tweets");
        listaTweets.appendChild(lista);
        
    }
}
function agregarTweet(e){
    e.preventDefault();
    //leer desde textArea
    const textArea=document.getElementById("tweet");
    const text=textArea.value;
    console.log(text);
    //Crear elemento
    const lista=document.createElement("li");
    lista.innerText=text;
    //Crear boton borrar tweet
    const botonBorrar=document.createElement("a");
    botonBorrar.classList='borrar-tweet';
    botonBorrar.innerText="X";
    lista.appendChild(botonBorrar);

    //agregar elemento
    const listaTweets=document.getElementById("lista-tweets");
    listaTweets.appendChild(lista);

    //agregar tweet a local storage

    agregarTweetLocalStorage(text);



    //limpiar textArea
    textArea.value="";
}

function borrarTweet(e){
    e.preventDefault();
    if(e.target.className==="borrar-tweet"){
        e.target.parentElement.remove();

        //borrar tweet de local storage
        borrarTweetLocalStorage(e.target.parentElement.textContent);

    }
}

function agregarTweetLocalStorage(tweet){
    let tweets=getTweetLocalStorage();
    tweets.push(tweet);
    localStorage.setItem("tweets",JSON.stringify(tweets));
}

function getTweetLocalStorage(){
    let tweets;
    if(localStorage.getItem("tweets")===null){
        tweets=[];
    }else{
        tweets=JSON.parse(localStorage.getItem("tweets"));
    }
    return tweets;
}

function borrarTweetLocalStorage(tweet){
    const text=tweet.substr(0,tweet.length-1);
    const tweets=getTweetLocalStorage();
    for(let i in tweets){
        if(text===tweets[i]){
            tweets.splice(i,1);
            break;
        }
    }
    localStorage.setItem("tweets",JSON.stringify(tweets));
}

const posts=document.querySelector("#listado");
const boton=document.querySelector("#cargar");

boton.addEventListener("click",cargarPosts);


function cargarPosts(){
    const xhr =new XMLHttpRequest();
    let postsJSON;
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    xhr.onload=function(){
        if(this.status===200){
            let htmlPosts="";
            postsJSON=JSON.parse(this.responseText);
            for(let i of postsJSON){
                htmlPosts+=htmlPost(i);
            }
            posts.innerHTML=htmlPosts;
            //console.log(posts);
        }
    }


    xhr.send();
}

function htmlPost(post){
    const htmlPost=`
    <ul>
        <li>UserId: ${post.userId}</li>
        <li>Id: ${post.id}</li>
        <li>Title: ${post.title}</li>
        <li>Body: ${post.body}</li>
    </ul>
    `;
    return htmlPost;
}
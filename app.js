let amigos = [];

function agregarAmigos(){
    let nombre = document.getElementById('amigo').value;
    if(nombre==''){
        alert('Por favor, ingrese un nombre valido');
    }else{
        amigos.push(nombre);
    }
    limpiar();
    actualizarListaAmigos();
}

function limpiar(){
    document.querySelector('#amigo').value='';
}

function actualizarListaAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML='';
    let contenidoLista='';
    for (let index = 0; index < amigos.length; index++) {
        contenidoLista += `<li>${amigos[index]}</li>`;
    }
    lista.innerHTML=contenidoLista;
}

function sortearAmigo() {
    if (!amigos.length) { 
        console.log("El arreglo no tiene elementos");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[indiceAleatorio];
        document.querySelector('#resultado').innerHTML=`El amigo secreto sorteado es: ${amigoAleatorio}`;
    }
}
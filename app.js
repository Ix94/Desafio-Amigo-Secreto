// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Referencias a los elementos
let nombreAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = nombreAmigo.value.trim();

    // Validar que el nombre no en blanco
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a lista
    amigos.push(nombre);
    nombreAmigo.value = "";

    actualizarListaAmigos();
}

    // Funcioon para actualizar la lista de amigos
    function actualizarListaAmigos() {
        listaAmigos.innerHTML = ""; 

        // Recorrer el array de amigos y mostrarlos
        amigos.forEach((amigo) => {
            let li = document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li);
            console.log(listaAmigos);
    });
    return;
    }    



// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que hay al menos 2 amigos en la lista
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para sortear.");
        return;
    }

    // Seleccionar un índice aleatorio del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreAmigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>¡El amigo secreto es: ${nombreAmigoSecreto}</li>`;
}

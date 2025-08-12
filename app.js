// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminamos espacios extra
  
    //Validar campo vacío
    if (nombre === "") {
      alert("Por favor, inserte un nombre.");
      return;
    }
  
    //Actualizar array de amigos
    amigos.push(nombre);
  
    //Mostrar en la lista visual (opcional pero útil)
    let ul = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  
    //Limpiar el campo de entrada
    input.value = "";
    // Mostrar la lista actualizada
  mostrarAmigos();
  }

  function mostrarAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");
  
    // Limpiar la lista existente
    lista.innerHTML = "";
  
    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
      // Crear un nuevo elemento <li> para cada amigo
      const li = document.createElement("li");
  
      // Insertar el contenido con botones de editar y eliminar
      li.innerHTML = `
        🥳 ${amigos[i]}
        <button class="btn-amigo" onclick="editarAmigo(${i})">✏️</button>
        <button class="btn-amigo" onclick="eliminarAmigo(${i})">🗑️</button>
      `;
  
      // Agregar el <li> al <ul>
      lista.appendChild(li);
    }
  }
  
  function sortearAmigo() {
    // 1. Validar que haya amigos en la lista
    if (amigos.length === 0) {
      alert("La lista de amigos está vacía. Agrega al menos un nombre.");
      return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    //Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
  }  

  function editarAmigo(index) {
    const nuevoNombre = prompt("Editar nombre:", amigos[index]);
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
      amigos[index] = nuevoNombre.trim();
      mostrarAmigos();
    }
  }
  
  function eliminarAmigo(index) {
    if (confirm(`¿Deseas eliminar a ${amigos[index]}?`)) {
      amigos.splice(index, 1);
      mostrarAmigos();
      document.getElementById("resultadoSorteo").innerHTML = "";
    }
  }
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema

let amigos = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    let campo = document.querySelector('input').value;
    if (campo === "") {
        alert('Por favor, insira o nome de um amigo.');
    } else {
        amigos.push(campo);
    }

    // Limpar o campo de texto
    document.querySelector('input').value = "";

    // Atualizar a lista de amigos exibida
    atualizarLista();
}

// Atualiza a lista exibida no DOM
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let amigo of amigos) {
        let item = document.createElement('li'); // Cria um elemento <li>
        item.textContent = amigo; // Define o texto do <li> com o nome do amigo
        lista.appendChild(item); // Adiciona o <li> à lista <ul>
    }

    // Exibir no console para depuração
    console.log(amigos);
}

// Sorteia um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos dois amigos para sortear.');
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').textContent = `Amigo sorteado: ${amigoSorteado}`;
    }
}

// Reseta o jogo para começar novamente
function jogarNovamente() {
    amigos = []; // Limpa o array
    atualizarLista(); // Atualiza a lista exibida
    document.getElementById('resultado').textContent = ""; // Limpa o resultado
}

// Permite adicionar amigo ao pressionar "Enter"
document.querySelector('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo(); // Chama a função de adicionar amigo
    }
});
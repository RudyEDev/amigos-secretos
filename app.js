// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre || amigos.includes(nombre)) return;

    amigos.push(nombre);
    actualizarLista();
    input.value = '';
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para sortear.');
        return;
    }

    const copia = [...amigos];
    const resultado = [];

    amigos.forEach((amigo, i) => {
        let posibles = copia.filter(a => a !== amigo);
        if (posibles.length === 0) {
            sortearAmigo(); // reinicia el sorteo si falla
            return;
        }
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado.push(`${amigo} → ${elegido}`);
        copia.splice(copia.indexOf(elegido), 1);
    });

    document.getElementById('resultado').innerHTML = resultado.map(r => `<li>${r}</li>`).join('');
}

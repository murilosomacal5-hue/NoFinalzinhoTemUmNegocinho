const tarefas = []

const form = document.getElementById("tarefa");
const input = document.getElementByI("InputTarefa");

const lista = document.createElement("ul");

let id = 1;

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let texto = input.value;

    if (texto == "") {
        alert("Digite uma tarefa");
        return;
    }

    let tarefa = {
        id: id,
        texto: texto,
        concluida: false,
        data: new Date().toLocaleDateString()
    };

    tarefas.push(tarefa);

    id++;

    mostrartTarefas();

    input.value = "";
});

function mostrartTarefas() {

    for (let i = 0; i < tarefas.length; i++) {

        let item = document.createElement("Li");
    }

}


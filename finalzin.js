const tarefas = [];

const form = document.querySelector("#Tarefa");
const inputTarefa = document.querySelector("#InputTarefa");
const inputDescricao = document.querySelector("#InputDescricao");
const inputData = document.querySelector("#InputData");
const lista = document.querySelector("#lista");

let id = 1;

form.addEventListener("submit", adicionarTarefa);

function adicionarTarefa(event) {

    event.preventDefault();

    if (
        inputTarefa.value == "" ||
        inputDescricao.value == "" ||
        inputData.value == ""
    ) {
        alert("Preencha todos os campos");
        return;
    }

    const tarefa = {
        id: id,
        texto: inputTarefa.value,
        descricao: inputDescricao.value,
        data: inputData.value,
        concluida: false
    };

    tarefas.push(tarefa);

    id++;

    inputTarefa.value = "";
    inputDescricao.value = "";
    inputData.value = "";

    mostrarTarefas();
}

function mostrarTarefas() {

    lista.textContent = "";

    for (let i = 0; i < tarefas.length; i++) {

        const titulo = document.createElement("h3");
        titulo.textContent = tarefas[i].texto;

        const descricao = document.createElement("p");
        descricao.textContent = tarefas[i].descricao;

        const data = document.createElement("p");
        data.textContent = tarefas[i].data;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefas[i].concluida;

        checkbox.onclick = function () {

            tarefas[i].concluida = checkbox.checked;

            mostrarTarefas();
        };

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";

        btnEditar.onclick = function () {
            editar(tarefas[i].id);
        };

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";

        btnRemover.onclick = function () {
            remover(tarefas[i].id);
        };

        lista.appendChild(checkbox);
        lista.appendChild(titulo);
        lista.appendChild(descricao);
        lista.appendChild(data);
        lista.appendChild(btnEditar);
        lista.appendChild(btnRemover);
        lista.appendChild(document.createElement("hr"));
    }
}

function editar(id) {

    for (let i = 0; i < tarefas.length; i++) {

        if (tarefas[i].id == id) {

            const novoNome = prompt(
                "Novo nome:",
                tarefas[i].texto
            );

            const novaDescricao = prompt(
                "Nova descrição:",
                tarefas[i].descricao
            );

            if (novoNome != null && novoNome != "") {
                tarefas[i].texto = novoNome;
            }

            if (novaDescricao != null && novaDescricao != "") {
                tarefas[i].descricao = novaDescricao;
            }

            break;
        }
    }

    mostrarTarefas();
}

function remover(id) {

    for (let i = 0; i < tarefas.length; i++) {

        if (tarefas[i].id == id) {

            tarefas.splice(i, 1);

            break;
        }
    }

    mostrarTarefas();
}

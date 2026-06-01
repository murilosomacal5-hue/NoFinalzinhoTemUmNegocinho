const tarefas = [];

const form = document.querySelector("#Tarefa");
const input = document.querySelector("#InputTarefa");
const lista = document.querySelector("#lista");

let id = 1;

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (input.value == "") {
        alert("Digite uma tarefa");
        return;
    }

    const tarefa = {
        id: id,
        texto: input.value,
        concluida: false,
        data: new Date().toLocaleDateString()
    };

    tarefas.push(tarefa);

    id++;

    input.value = "";

    mostrarTarefas();

});

function mostrarTarefas() {

    lista.textContent = "";

    for (let i = 0; i < tarefas.length; i++) {

        const p = document.createElement("p");

        let texto = tarefas[i].texto;

        if (tarefas[i].concluida) {
            texto = "✔ " + texto;
        }

        p.textContent = texto + " (" + tarefas[i].data + ")";

        const btnConcluir = document.createElement("button");
        btnConcluir.textContent = "Concluir";

        btnConcluir.addEventListener("click", () => {
            concluir(tarefas[i].id);
        });

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";

        btnEditar.addEventListener("click", () => {
            editar(tarefas[i].id);
        });

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";

        btnRemover.addEventListener("click", () => {
            remover(tarefas[i].id);
        });

        const linha = document.createElement("hr");

        lista.appendChild(p);
        lista.appendChild(btnConcluir);
        lista.appendChild(btnEditar);
        lista.appendChild(btnRemover);
        lista.appendChild(linha);
    }

}

function concluir(id) {

    for (let i = 0; i < tarefas.length; i++) {

        if (tarefas[i].id == id) {

            tarefas[i].concluida = !tarefas[i].concluida;

            break;
        }

    }

    mostrarTarefas();

}

function editar(id) {

    const novoTexto = prompt("Digite o novo texto:");

    if (novoTexto == "" || novoTexto == null) {
        return;
    }

    for (let i = 0; i < tarefas.length; i++) {

        if (tarefas[i].id == id) {

            tarefas[i].texto = novoTexto;

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

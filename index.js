// ATRIBUTOS

let editando = null;

let produtos = [
    { id: 1, nome: "Notebook", preco: 3500, categoria: "Eletrônicos", quantidade: 10 },
    { id: 2, nome: "Mouse", preco: 80, categoria: "Acessórios", quantidade: 10 },
    { id: 3, nome: "Teclado", preco: 150, categoria: "Acessórios", quantidade: 10 },
    { id: 4, nome: "Monitor", preco: 1200, categoria: "Eletrônicos", quantidade: 10 },
    { id: 5, nome: "Cadeira Gamer", preco: 900, categoria: "Móveis", quantidade: 10 }
];

// FUNÇÕES

function adicionar(produto) {
    if(produtos.length === 8){
        console.log("ERRO! Máximo de produtos atingidos.");
        return;
    }

    if(!produto.nome || !produto.categoria){
        console.log("ERRO! Nome e categoria são obrigátorios.");
        return;
    }

    if(produto.preco < 0){
        console.log("ERRO! Preço abaixo de zero.");
        return;
    }

    produtos.push(produto);
    console.log("Produto adicionado!");
}

function listar(){ // NÃO ESTÁ EM USO!!!
    console.table(produtos);
}

function buscar(nome){ // NÃO ESTÁ EM USO!!!
    const comparacao = function(produto) { return produto.nome.toLowerCase().includes(nome.toLowerCase()); }
    const resultado = produtos.filter(comparacao);

    if (resultado.length === 0) {
        console.log("Produto não encontrado!");
    } else {
        console.table(resultado);
    }

    return resultado;
}

function atualizar(id, dados){
    for(const produto of produtos){
        if(produto.id === id){
            
            if(dados.preco !== undefined && dados.preco < 0){
                console.log("ERRO! Preço não pode ser vazio/negativo.");
                return;
            }

            Object.assign(produto, dados);

            console.log("Produto atualizado!");
            return;
        }
    }

    console.log("Produto não encontrado!");
}

function remover(id){

    const tamanhoAntes = produtos.length;

    produtos = produtos.filter(produto => produto.id !== id);

    if(produtos.length < tamanhoAntes){
        console.log("Produto removido!");
    } else {
        console.log("Produto não encontrado!");
    }
}

// DOM

function renderizar(){
    const catalogo = document.getElementById("catalogo")

    catalogo.innerHTML = ""; 

    if(produtos.length === 0){
        catalogo.innerHTML = `
            <p class = "vazio">
                Nenhum produto cadastrado.
            </p>
        `;

        return;
    }

    for(const produto of produtos){

        const card = document.createElement("div")

        card.className = "card";
        card.dataset.id = produto.id;

        card.innerHTML = `
            <h3>${produto.nome}</h3>

            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <p class="categoria">Categoria: ${produto.categoria}</p>
            <p class="estoque">Estoque: ${produto.quantidade}</p>
        `;
        
        catalogo.appendChild(card)

        // CLICKS

        card.addEventListener("click", () => {
            
            document.getElementById("nome").value = produto.nome;
            document.getElementById("preco").value = produto.preco;
            document.getElementById("categoria").value = produto.categoria;
            document.getElementById("quantidade").value = produto.quantidade;

            editando = produto.id;

        })
    }
}

renderizar();

// CONEXAO COM FORM

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const categoria = document.getElementById("categoria").value;
    const quantidade = document.getElementById("quantidade").value;

    const novoProduto = { 
        id: Date.now(),
        nome: nome,
        preco: Number(preco),
        categoria: categoria,
        quantidade: Number(quantidade)
    };

    if (editando !== null) {

        atualizar(editando, { nome, preco: Number(preco), categoria, quantidade: Number(quantidade)
        });

        editando = null;

    } else {

        adicionar({ id: Date.now(), nome, preco: Number(preco), categoria, quantidade: Number(quantidade) });
    }

    formulario.reset();
    renderizar();
})

// BOTOES

const btnLimpar = document.querySelector(".limpar");

btnLimpar.addEventListener("click", () => {
    formulario.reset();
    editando = null;
})

const btnRemover = document.querySelector(".remover");

btnRemover.addEventListener("click", () => {
    if (editando !== null) {
        remover(editando); // REMOVE
        editando = null; // LIMPA O EDITANO
        formulario.reset(); // LIMPA O FORM
        renderizar(); // RESETA OS PRODUTOS
    } else {
        console.log("Selecione um produto para remover!");
    }
});

// ALERTA //
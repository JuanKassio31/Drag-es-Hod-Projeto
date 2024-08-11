/*
Objetivo- Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
- passo 1- dar um jeito de pegar o HTML dos botões
- passo 2- dar um jeito de indentificar o clique do usuário no botão
- passo 3- desmarcar o botão selecionado anterior
- passo 4- marcar o botão clicado como  se estivesse selecionado
- passo 5- esconder a  imagem anteriormente selecionada
- passo 6- fazer aparecer a imagem do dragão selecionado
- passo 7- esconder a informação do dragão selecionado anteriormente
- passo 8 - fazer aparecer a informação do dragão selecionado
*/

//- passo 1- dar um jeito de pegar o HTML dos botões
const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(" .informacoes");

//- passo 2- dar um jeito de indentificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) =>{
  botao.addEventListener("click", () =>{
   //- passo 3- desmarcar o botão selecionado anterior
   desativarBotaoSelecionado();

    //- passo 4- marcar o botão clicado como  se estivesse selecionado
    MarcarBotaoSelecionado(botao);

    //- passo 5- esconder a  imagem anteriormente selecionada
    esconderImagemAtiva();

    //- passo 6- fazer aparecer a imagem do dragão selecionado
    mostrarImagemDeFundo(indice);

    //- passo 7- esconder a informação do dragão selecionado anteriormente
    esconderInformacoesAtivas();

    //- passo 8 - fazer aparecer a informação do dragão selecionado
    MostrarInformacoes(indice);

  });
});

function MarcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function MostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

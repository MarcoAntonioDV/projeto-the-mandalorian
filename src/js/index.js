/*Quando clicar no botão mostrar a imagem correspondente 
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2 - dar um jeito de identificar o clique do usuário
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        //passo 3 - desmarcar o botão selecionado
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        //passo 5 - esconder a imagem anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        MostrarImagemDeFundo(indice);
    })
} )


function MostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}
/* Para deixar o código visualmente mais agradável: 
1ºpasso: Como exemplo: selecionar tudo de imagens[indice].classList.add('ativa'); 
2ºpasso: Clicar com o botão direito do mouse
3ºpasso: Clicar em refatorar
4ºpasso: Clicar em extrair para function no escopo global
5ºpasso: Renomear explicando oque aquela linha/nº de linhas faz
Dessa forma temos: function MostrarImagemDeFundo (indice) - explicando oque essa linha de código faz e o código propriamente logo abaixo */
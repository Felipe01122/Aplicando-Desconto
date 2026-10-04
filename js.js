/*
const botao = document.getElementById('btnResgatar');
 ///DEFINE O ID btnResgatar como botão

 //Usa a váriavel botao criada logo acima e coloca um evento 'click' e cria uma função
botao.addEventListener('click', function(){
    //Cria a váriavel cupomDigitido e puxa o ID campoCupom do HTML e salva seu valor com o .value
    const cupomDigitado = document.getElementById('campoCupom').value;

    //Cria a váriavel resposta puxando o ID resposta do HTML
    const resposta = document.getElementById('resposta');

    //Cria uma verificação para o cupom que foi digitado o 'toUpperCase' funciona para caso o usuario digite minusculo o cupom ele altere para maiúsculo
    if (cupomDigitado.toUpperCase() === "DESCONTO10"){
        //Se após a verificação der como certa acrescenta um texto no ID resposta do HTML com a cor verde
        resposta.textContent = 'Cupom de 10% aplicado!';
        resposta.style.color = 'green';
    } else{
        //Se der como falsa o texto retornara como cupom inválido e com uma cor vermelha
        resposta.textContent = 'Cupom inválido!'
        resposta.style.color = 'red';
    }

})
*/

///DEFINE O ID btnResgatar como botão
const botao = document.getElementById('btnResgatar');

//Usa a váriavel botao criada logo acima e coloca um evento 'click' e cria uma função|'async' na função para podermos esperar a resposta da API com 'await'
botao.addEventListener('click', async function(){

    const cupomDigitado = document.getElementById("campoCupom").value;
    const resposta = document.getElementById('resposta');

    resposta.textContent = 'Validando...';
    resposta.style.color = 'orange';

    try{

        const requisicao = await fetch('http://127.0.0.1:5000/validar-cupom',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cupom: cupomDigitado })
        });

        const dados = await requisicao.json();

        resposta.textContent = dados.mensagem;

        if(dados.valido){
            resposta.style.color = 'green';
        } else{
            resposta.style.color = 'red';
        }

    }
    catch(erro){
        resposta.textContent = 'Erro ao conectar com o servidor';
        resposta.style.color = 'red'
    }

});
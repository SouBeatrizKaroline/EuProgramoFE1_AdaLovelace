//roteiro em inglês é script, no java scrip fazemos uma especie de script, logo JavaScript

//se os campos nome e email estiverem preenchidos
//envie os dados
//senão
//Peça a usuária que preencha os campos nome e email
//
//No javaScript se escreve o "E" com "&&"
//document.getElementByID("nome")
//document é o documento html | .getElementByID é pegar um elemento por um Id, atravez de um Id | "Nome" é o nome desse id
//string é todo texto entre aspas
//
//dequemviráoevento.addEventListerner("evento", oquedevefazer)
//bloco de codigo especifico para uma parte do codigo no javascript é uma função
//function nome da função(){codigo que deve ser executado}

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)
function validaFormulario(){
    if(document.getElementById("nome").value != "" /*estiver preenchido*/ /*diferente de vazio*/ && /*E*/
            document.getElementById("email").value != "" &&
            document.getElementById("telefone").value != "" ){
//faz uma ação
//alert("") | usado para uma mensagem aparecer dependendo da condição realizada
            alert("Prontinho! você receberá as novidades por email.")
        }else{ //else significa "senão"
//peça a usuária que preencha os campos nome e email

            alert("Por favor, preencha os campos nome e email.")
    }
}
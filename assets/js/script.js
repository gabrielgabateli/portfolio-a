// Tratamento de eventos
// document.querySelector("#nome").addEventListener("change", calcular)
// document.querySelector("#nome").addEventListener("change", calcular)


// function calcular() {
//     // DOM - Document Object Model
//     let nome = document.querySelector("#nome").value

//     document.querySelector("#mensagemusuario").innerText = nome

    
// }

let nome = ''
let sexo = ''
let ator = ''
let mensagem = ''
let nivelFa = 0

const botaoEnviar = document.getElementById('botao_enviar')
botaoEnviar.addEventListener('click', function() {
    nome = document.getElementById('nome').value
    sexo = document.getElementsByName('sexo')
    ator = document.getElementById('ator').value
    mensagem = document.getElementById('mensagem').value
    nivelFa = document.getElementById('prazo').value

    // Loop para saber qual foi o sexo escolhido
    for (const opcao of sexo) {
        if (opcao.checked) {
            sexo = opcao.value
            break
        }
    } 

    // Fazendo a mensagem de confirmação aparecer
    const mensagemUsuario = document.getElementById('mensagemusuario')
    mensagemUsuario.style.display = 'block' 

    console.log(nome)
    console.log(sexo)
    console.log(ator)
    console.log(mensagem)
    console.log("Nivel: " + nivelFa)
    });




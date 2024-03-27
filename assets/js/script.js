// Tratamento de eventos
document.querySelector("#nome").addEventListener("change", calcular)
document.querySelector("#nome").addEventListener("change", calcular)

function calcular() {
    // DOM - Document Object Model
    let nome = document.querySelector("#nome").value

    document.querySelector("#mensagemusuario").innerText = nome

}



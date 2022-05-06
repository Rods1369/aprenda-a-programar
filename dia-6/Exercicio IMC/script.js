
const calculoIMC = (peso, altura) => {
    //insira sua lógica aqui do ex. 1 aqui.
let imc = peso / (altura * altura)

return imc

}

const resultadoIMC = (indiceIMC) => {
    // insira sua lógica do ex.2 aqui.
    // dica, lembre-se que quando queremos que duas condições sejam verdadeiras, usamos o operador &&
    // neste caso, conforme vimos em aula, caso a pessoa precise estar 
    // acima de um imc E abaixo de outro, podemos fazer algo como 
    // if (x > 5 && x < 10) {
    // }

    // não esqueça de retornar o texto da faixa do IMC.
    if (indiceIMC >= 18.5 && indiceIMC <= 24.9) {
        return "normal"
    } else if (indiceIMC >= 25 && indiceIMC <= 29.9) {
        return "Sobrepeso"
    }  else if (indiceIMC >= 30 && indiceIMC <= 39.9) {
        return "Obesidade"
    }  else if (indiceIMC > 40) {
        return "Obesidade Grave"
    }  else {
        return "Faixa não definida"
    }      
}

function mostrarResultadoIMC() {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC)
}


function legalAgeOrNot (age) {
    if (age >= 18) {
        console.log("A idade é maior ou igual a 18 anos. Pode entrar na boate.");
    }else {
        console.log("A idade é menor que 18 anos, entrada não permitida!")
    }
     

    // escreva aqui a solução de código que verifica se a idade da pessoa é maior ou não que 18 anos.
    // Se for maior ou igual, você deve exibir na tela "A idade é maior ou igual a 18 anos. Pode entrar na boate.".
    // Se for menor, você deve exibir na tela "A idade é menor que 18 anos, entrada não permitida!"
}

let age1 = 13
let age2 = 18
let age3 = 20

//aqui chamei manualmente cada 1 delas
// chame a função legalAgeOrNot que você construiu logo abaixo deste comentário para cada uma das idades em age1, age2, age3.
//legalAgeOrNot(age1)
//legalAgeOrNot(age2)
//legalAgeOrNot(age3)

let listaAges = [age1,age2,age3]

//estou pegando uma idade do array de ages
for (let age of listaAges) {
   legalAgeOrNot(age)
   console.log(age)

 }


  
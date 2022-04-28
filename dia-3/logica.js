//Análise os pedaços de código a seguir e tente prever qual será o console.log resultante, A ou B.
//Você pode rodar os código para verificar suas respostas.

let a = 10
let b = true
let c = []
let d = [1,2,3,4]
let e = "Nome"

//1
//verdadeiro            
if (a == 10) {
    console.log("A");
} else {
    console.log("B");
}
//2
//falso
if (a > 10) {
    console.log("A");
} else {
    console.log("B");
}
//3
//verdadeiro
if (a >= 10) {
    console.log("A");
} else {
    console.log("B");
}
//4
//verdadeiro
if (b == true) {
    console.log("A");
} else {
    console.log("B");
}
//5
//verdadeiro
if (b) {
    console.log("A");
} else {
    console.log("B");
}
//6
//verdadeiro
if (c) {
    console.log("A");
} else {
    console.log("B");
}
//7
//verdadeiro
if (d) {
    console.log("A");
} else {
    console.log("B");
}
//8
//verdadeiro
if (d[0] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//9
//falso
if (d[1] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//10
//verdadeiro
if (typeof(e) == 'string') {
    console.log("A");
} else {
    console.log("B");
}

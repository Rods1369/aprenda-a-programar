
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false}; 

console.log(produtoA, produtoB, produtoC)

if (produtoA.internacional) {
    produtoA.valor *= 1.20
} else {
    produtoA.valor *= 1.12
}

if (produtoB.internacional) {
    produtoB.valor *= 1.20
}  else {
    produtoB.valor *= 1.12
}

if (produtoC.internacional) {
    produtoC.valor *= 1.20
}  else {
    produtoC.valor *= 1.12
}
console.log("produtos com os valores de impostos aplicados", produtoA, produtoB, produtoC)

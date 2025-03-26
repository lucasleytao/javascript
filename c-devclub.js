function sum(n1, n2) {
    return n1 + n2 //detecta e encerra
}

// forma moderna de funcao

const sumArrow = (n1, n2) => {
    return n1 + n2
}

// mesma coisa que isso

const sumArrow2 = (n1, n2) => n1 + n2

let sumValue = sumArrow2(10, 20) //aqui eu guardo a funcao em uma variavel

console.log(sumValue)
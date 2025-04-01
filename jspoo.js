// POO

/*Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.*/

/*Basicamente, as classes são como "fábricas" para criar objetos. Pode-se dizer que são "funções especiais" para criação de objetos.
Assim como uma fábrica da vida real precisa de maquinário para construir os objetos, as classes na javascript utilizam um método
chamado constructor() para fabricar os objetos.
*/

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes

// declarando uma classe

class Person {
    constructor(firstName, lastName, age) { // funcao que constroe o objeto person e determina suas propriedades(valores de entrada)
        this.firstName = firstName, // assinala a propriedade
        this.lastName = lastName,
        this.age = age
    }
}

// agora consigo instanciar esse objeto person

const person = new Person('Lucas', 'Leitão', 36)

console.log(person)

/*
1.declara uma classe
2.depois acessa(instancia) a classe
*/

// objeto (literal) determino o que e o objeto e quais sao as propriedades que este objeto tem

const car = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001
}

// classe (como se fosse a fabrica da Fiat onde posso construir varios carros (objetos) de varias modelos diferentes)

/*Classes definem:
Atributos(variaveis): Que irao descrever o objeto.
Metodos(modulos): Definem o comportamento do objeto.
*/

class Car { // fabrica
    constructor(param1, param2, param3) { // maquina que vai construir nosso objeto por meio de atributos(variaveis que descrevem o objeto)
        this.marca = param1 // marca recebe o parametro param1 (assinala a propriedade param1)
        this.modelo = param2
        this.ano = param3
    }
    // metodos(modulos) que definem o comportamento do objeto
    buzina() {
        return console.log(this.modelo + ' buzinou: Biii')
    }
}

// instanciando(caracteristicas) o objeto

const uno = new Car('Fiat', 'Uno', 2001)
const toro = new Car('Fiat', 'Toro', 2018)

console.log(uno.buzina())
console.log(toro.ano)
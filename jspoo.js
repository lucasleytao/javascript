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

class Factory { // fabrica
    constructor(param1, param2, param3) { // maquina que vai construir nosso objeto por meio de atributos(variaveis que descrevem o objeto)
        this.marca = param1 // marca recebe o parametro param1 (assinala a propriedade param1)
        this.modelo = param2
        this.ano = param3
    }
    // metodo(modulo) que define um comportamento do objeto
    buzina() {
        return this.modelo + ' buzinou: Biiiiiii'
    }

    //metodo estatico (nao esta diretamente ligado as propriedades do objeto)
    static status() {
        console.log('Modelos mais vendidos')
    }
}

// instanciando(caracteristicas) o objeto

const uno = new Factory('Fiat', 'Uno', 2001)
const toro = new Factory('Fiat', 'Toro', 2018)

console.log(uno.buzina())
Factory.status()

// HERANÇA (Consegue herdar determinada classe em uma nova classe)

class Cell extends Factory {
    constructor(param1, param2, param3) {
        super(param1, param2, param3)
    }
}

const apple = new Cell('Apple', 'iPhone16', 2025)

console.log(apple)
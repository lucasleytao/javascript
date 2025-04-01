class Factory {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    //metodo(modulo)
    buzina() {
        return this.modelo + ' buzinou: Biiiiiii'
    }

    //metodo estatico (nao esta diretamente ligado as propriedades dos objetos)
    static status() {
        console.log('Modelos mais vendidos')
    }
}

const uno = new Factory('Fiat', 'Uno', 2001)
const toro = new Factory('Fiat', 'Toro', 2018)

console.log(uno.buzina())
Factory.status()

// HERANÇA (Consegue herdar determinada classe em uma nova classe)

class Cell extends Factory {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano)
    }
}

const apple = new Cell('Apple', 'iPhone16', 2025)

console.log(apple)


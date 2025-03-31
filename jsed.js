// ESTRUTURA DE DADOS

//FIXME: ARRAYS (LISTAS)

//TODO: Como criar um array

let lista = ['Lucas', 36, 1.71, 83.5]

console.log(lista)

//TODO: Como acessar os elementos do array

console.log('elemento 1: ', lista[0])
console.log('elemento 3: ', lista[2])

//TODO: Como obter o tamanho do array

console.log('tamanho do array: ', lista.length) //4

//TODO: Percorrendo um array: for of (percorre os elementos do array) / for in (percorre os indices do array)

for (let i = 0; i < 4; i++) { //metodo for
    console.log(lista[i])
}

for (let elemento of lista) { //metodo for of (percorre os elementos do array) *parecido com o .map
    console.log(elemento)
}

for (let indice in lista) { //metodo for in (percorre os indices do array)
    console.log(indice, lista[indice]) //traz o indice e o elemento desse indice
}


//FIXME: ARRAYS >> MÉTODOS DE ARRAYS
//* métodos são como funções dentro de uma variável

// exemplos de funções: Number() String() console.log()

//TODO: **Fatiamento: .slice

let lista1 = [1, 2, 3, 4, 5]

console.log(lista1.slice(0,3)) // busca os elementos do indice 0 até o indice 2
console.log(lista1.slice(3)) // busca os elementos a partir do indice 3

console.clear

//TODO: **Adicionando elementos: .push | .unshift

console.log('antes do push: ', lista1)

lista1.push(10,20,'lucas') // adiciona no final do array

console.log('depois do push: ', lista1)

lista1.unshift('zero', 0) // adiciona no inicio do array

console.log('elemento no inicio: ', lista1)

//TODO: **Removendo elementos: .pop (remove por padrao o ultimo elemento do array) | .shift (remove por padrao o primeiro elemento)

let lista2 = [0, 1, 2, 3, 'lucas']

let removido = lista2.pop() // busca o ultimo elemento do array e joga na variavel removido

console.log('lista atual: ', lista2)

console.log('o elemento removido foi: ', removido)
console.log('o ultimo elemento agora e: ', lista2.pop())

// console.log('antes do shift: ', lista2)

// lista2.shift()

// console.log('depois do shift: ', lista2)

//TODO: **Reassinalar elementos: Manipulação de elementos em uma lista

lista2[4] = 'Leitao'

//TODO: **Organizando elementos dentro de um array

let sort = [1, 0, 5, 3, 4]

console.log(sort.sort()) // [0, 1, 3, 4, 5]

//TODO: **Concatenando arrays: .concat

let lista3 = [1, 2, 3]
let lista4 = [10, 20, 30]

console.log(lista3)
console.log(lista4)

console.log(lista3.concat(lista4))

//TODO: **Buscando elementos: .indexOf (busca onde esta o primeiro indice do elemento) | .lastIndexOf (busca onde esta o ultimo indice do elemento)

let lista5 = [10, 20, 30, 40, 50]

console.log('quero buscar o indice do elemento 40 da lista', lista5)

let elemento40 = lista5.indexOf(40)
//*se o elemento nao existir retorna -1
//*se houver mais de um elemento de mesmo valor ele retorna o primeiro que encontra

console.log('indice do elemento 40: ', elemento40)

let lista6 = [1, 2, 2, 3, 2, 4, 5]

console.log('buscar ultimo indice do elemento 2: ', lista6)
console.log('ultimo indice do elemento 2: ', lista6.lastIndexOf(2))

//TODO: **Verificando a existência de um elemento dentro do array: .includes

let lista7 = [1, 3, 5, 10, 17, 25]

console.log(lista7)
console.log('existe(true) nao existe(false): ', lista7.includes(17))

console.clear()

//TODO: **Invertendo um array: .reverse

console.log('normal: ', lista7)
console.log('invertido: ', lista7.reverse())


//FIXME: MAP, FILTER & REDUCE

// .map **faz uma varredura no array item por item e executa o que se pede

const arrayMap = [1, 2, 3, 5]

const map1 = arrayMap.map((x) => x * 2) // passa uma funcao para mapear | .map() e uma funcao que recebe uma funcao

console.log(map1)

// .filter **filtra elementos especificos

const arrayFilter1 = ['lucas', 'leandro', 'beatriz', 'joao']

const filter1 = arrayFilter1.filter((arrayFilter) => arrayFilter.charAt(0) == 'b') //beatriz  

console.log(filter1)

const number = [1, 10, 10, 23, 41]

const num1 = number.filter((num) => num == 10)

console.log(num1) // [10, 10]
console.log(num1.length) // 2

// .reduce 

const soma = [1, 2, 3, 4, 5]

const sum1 = soma.reduce((atual, accumulator) => atual + accumulator, 0) //accumulator inicial = 0, entao 0 (accumulator) + 1 (atual) = 1 (novo accumulator) ... 

console.log(sum1)


//FIXME: FUNÇÕES *Evita repeticao de codigo *bloco de codigo que se pode reaproveitar diversas vezes *melhor manutencao e qualidade do codigo 

// definicao de funcao ** Aqui atribuimos um nome pela qual a funcao sera chamada
function nomeFuncao(parametro1, parametro2, etc) {
    declaração
}

//TODO: ENVIANDO PARÂMETROS PARA UMA FUNÇÃO

// aqui eu declaro (defino) uma funcao
function saudacao(nome, tema='Variáveis') { //parametro default caso nao seja atribuido na chamada
    console.log(`Que legal, ${nome}! Você está aprendendo sobre ${tema} em Javascript!`)
}
// aqui eu chamo a funcao pelo nome e atribuo valores aos parametros(variaveis) estabelecidos na definicao
saudacao('Lucas')
saudacao('Beatriz', 'Funções')
saudacao('João','Arrow Function')

//TODO: RETORNO DA FUNÇÃO (return) 

// aqui eu apenas imprimo o resultado da operacao da soma das variaveis

function soma(n1, n2) {  //parametros
    console.log(n1 + n2) //deteccao
}

soma(10, 20)  //atribuicao

// aqui a ideia e tornar a funcao generica atribuindo de fato uma funcao a ela

function soma(n1, n2) {  //nome da funcao mais parametros
    return n1 + n2  //detecta e encerra
    console.log('Qualquer coisa')  // esse log nao imprime pois foi detectado e encerrado no return acima para imprimir tem que vir antes do return
}

let resultado = soma(10, 20) //aqui eu guardo a funcao em uma variavel para utiliza-la

console.log('Soma =', resultado) //aqui eu imprimo a variavel que guarda a operacao
console.log('Média =', resultado / 2)

// outro exemplo da utilizacao do return

function maiorQue50(numero) {
    if (numero > 50) {
        return true
    }

    return false
}

//TODO: FUNÇÃO ANÔNIMA (ARROW FUNCTION)

// funcao normal
function sum(n1, n2) {
    return n1 + n2 //detecta e encerra
}

// forma moderna de funcao
const sumArrow = (n1, n2) => {
    return n1 + n2
}

// mesma coisa que isso (return implicito)
const sumArrow2 = (n1, n2) => n1 + n2

let sumValue = sumArrow2(10, 20) //aqui eu guardo a funcao em uma variavel

console.log(sumValue)


//FIXME: OBJETOS (guarda valores dentro de propriedades)

// Como criar um objeto

const objeto = {
    propriedade: 'valor'
}

const pessoa = {
    nome: 'Lucas',
    idade: 36,
    hobbies: ['Assistir F1','Jogar video game', 'Tocar teclado']
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome']) //forma alternativa

// Como percorrer um objeto

for(let chave in pessoa) {
    console.log(chave)
}

// Como adicionar/substituir um par chave-valor no objeto

pessoa.altura = 1.77

console.log(pessoa)

// Como remover um par chave-valor do objeto

delete pessoa.altura

console.log(pessoa)

// Praticando...

const pessoa = {
    username: 'Lucas',
    age: 36,
    hobbies: ['Assistir F1','Jogar video-game', 'Tocar teclado'],
    dog: {
        name: 'Zidane',
        age: 1,
        race: 'Pastor alemão'
    }
}

// const name = pessoa.name
// const age = pessoa.age
// const hobbies = pessoa.hobbies
// const read = pessoa.hobbies[0]


// DESESTRUTURACAO (Destructuring)

// **desestruturacao do objeto pessoa

const { age: idade, hobbies, username, dog: {name} } = pessoa

console.log(username)
console.log(idade)
console.log(hobbies)

// **adicionando uma propriedade

// pessoa.dog = 'Zidane'

console.log(pessoa.dog.age)

// **desestruturacao da propriedade dog

// dog: {name} // valor extraido de dog
console.log(name)

// MAS O QUE MAIS VAMOS VER NO DIA-A-DIA É UMA LISTA CONTENDO VÁRIOS OBJETOS (TODO LIST)

const todo = [
    {
        id: 1,
        username: 'lucas',
        email: 'email@email.com',
        admin: true
    },
    {
        id: 2,
        username: 'renato',
        email: 'email@email.com',
        admin: false
    },
    {
        id: 3,
        username: 'flavia',
        email: 'email@email.com',
        admin: false
    }
]

const read = todo[2] // atribui a uma variavel as informacoes do indice [2]

console.log(read) // exibe as informacoes do indice [2] no terminal

const todoJSON = JSON.stringify(todo) // converte em JSON para enviar para a API *nao e mais objeto e sim uma string (envia)
const todoList = JSON.parse(todoJSON) // transforma todoJSON em uma lista para manipular (recebe)

console.log(todoJSON) // exibe os dados em formato JSON *string
console.log(todoList) // exibe os dados em formato de lista
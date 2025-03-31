// LOGICA

//FIXME: VARIÁVEIS

// variavel [operador de atribuicao =] seta um valor qualquer

/* let = let it change (permita que isso mude) permite reassinalar uma variavel
   const = não permite mudanca */

// const username = 'lucas'
let age = 36

console.log(username, age)

//TODO: TEMPLATE STRING (Forma moderna)

console.log(`Olá! Me chamo ${username} e tenho ${age} anos.`)

// **convencao para nomes compostos (camel case)

let meuCodigo = true

//TODO: ESCOPO DE BLOCO (BLOCK SCAPE)

if (2 == 2) {
    var message = 'ola mundo' // let e const nao ira rodar fora do bloco **var permite pois nao possui block scope
}

console.log(message)

//TODO: MÉTODOS DE STRING

const names = 'lucas, jerdeson, eduardo, maura'
console.log(names.split(',')) // cria uma lista (array)

//**pesquisar outros metodos de string


//FIXME: TIPOS DE VARIÁVEIS ** TIPOS PRIMITIVOS

let nome = 'lucas' //string (text)
// let idade = 36     //number (int)
let float = 79.5   //number (float)
let bool = true    //boolean (true or false)
let tipo = 'string'

console.log(typeof bool) //exibe o tipo de dado 'boolean'
console.log(typeof tipo) //string

//TODO: NULL / UNDEFINED

const x = null // variavel const necessita obrigatoriamente ser inicializada
let y // let nao precisa ser inicializada

console.log(x) //null
console.log(y) //undefined


//FIXME: OPERADORES ARITMÉTICOS (Math)

let primeiro = 2
let segundo = 2

console.log('pe = ', primeiro ** segundo)
console.log('m = ', primeiro * segundo)
console.log('d = ', primeiro / segundo)
console.log('a = ', primeiro + segundo)
console.log('s = ', primeiro - segundo)
console.log('rd = ', primeiro % 3)

// ** Ordem de precedencia

console.log((2 + 3) * 10)

// ** Math

console.log(Math.abs(-10))
console.log(Math.sqrt(16))


//FIXME: BOOLEANOS (True / False)

//FIXME: CONCEITO DE TRUTHY & FALSY

//TODO: TRUTHY

const list = []  // uma lista sempre e true
console.log(!!list)

const object = {}  // um objeto sempre e true
console.log(!!object)

if (list.length > 0) {
    console.log(list)  // imprime a condicao truthy de list
}

// !! checa se a variavel e true ou false
// !  inverte a condicao da variavel

//TODO: FALSY

const w = ''  //string vazia sempre e false
console.log(!!w)

const t = 0  //zero sempre e false
console.log(!!t)

let z  //undefined sempre e false
console.log(!!z)

const v = null  //null sempre e false
console.log(!!v)

// **se qualquer uma dessas variaveis for colocada dentro de um if o resultado sempre sera false e nada acontece

if (v) {
    console.log(v)
}

// if (!v) {  //inverte a condicao booleana
//     console.log(!v)  //imprime o inverso da condicao
// }

//TODO: OPERADORES RELACIONAIS (utilizados para comparar valores e verificar relacao (true or false))

// comparacao == (===)
// diferenciacao !== (!==)
// maior que >
// maior ou igual >=
// menor que <
// menor ou igual <=

/*
= atribuicao
== verifica valor
=== verifica tipo de dado
*/

//TODO: OPERADORES LOGICOS (combinam duas ou mais sentencas permitindo a comparacao entre valores)

// AND > &&
// OR  > ||
// NOT > !

//TODO: OPERADOR CONDICIONAL TERNÁRIO

let maior = true // atribuicao
let cnh = true

console.log(maior == true ? 'Entrada Permitida' : 'entrada Não Permitida')

console.log(maior == true && cnh == false ? 'Condutor Habilitado!' : 'Condutor Não Habilitado!')

console.log(!maior) //false


//FIXME: COERÇÃO DE TIPOS (CONVERSÃO)

// ** Explícita: conversão manual de tipos de variáveis (Dev)

let numero = 10

console.log(numero, typeof numero)
console.log(numero, typeof numero.toString())
console.log(Number(numero), typeof numero)
console.log(parseFloat('12.5'), typeof numero)
console.log(parseInt('10.5'), typeof numero)
console.log(Boolean(10), typeof numero) //true

// ** Implícita: conversão automática (Javascript)

console.log(10 + 1) //11
console.log('10' + 1 + 1) //1011 *por conta do + o javascript entende tudo como string e concatena 
console.log('10' - 1) //9 *o que nao acontece para as outras operacoes
console.log('10' * 3) //30
console.log(10 - 'asdf') //retorna NaN: Not a Number


//FIXME: ESTRUTURAS CONDICIONAIS DE DECISÃO *CONTROLADAS (CONTROLE DE FLUXO) >> IF...ELSE / SWITCH CASE

// ** Determinadas linhas serão executadas apenas se determinada condição for satisfeita

//TODO: IF...ELSE IF...ELSE (SE/SENAO SE/SENAO)

// ** Estrutura simples

let note = 5.1

if (note >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

// ** Estrutura aninhada (encadeamento de estruturas condicionais compostas)

let nota = 5.1

if (nota >= 7) {
    console.log('Aprovado')
} else if (nota >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}

//

let sum = 4

if (sum === 2) {
    console.log('Sum is 2')
} else if (sum === 3) {
    console.log('Sum is 3')
} else {
    console.log('Sum indefined.')
}

// ** Operador condicional ternário

sum === 2 ? console.log('Sum is two!') : console.log('Sum indefined.')

//TODO: SWITCH CASE (TROCA CASO)

/* IMPORTANTE: A estrutura switch em JavaScript não é adequada para avaliar condições como >= diretamente nos case. 
O switch é projetado para comparar valores exatos, e não intervalos ou condições, como no exemplo abaixo*/

// Não serve para verificar faixas de valores Ex: >= / > / <

// É recomendado usar apenas para valores inteiros

// Não se aplica a valores reais

switch (true) { //argumento ou expressao
    case nota >= 7: 
        console.log('Aprovado')
        break   
    case nota >= 5:
        console.log('Recuperação')  
        break
    default:
        console.log('Reprovado')
}

/* **Neste caso, ele segue a sintaxe correta do switch, comparando o valor da variável satisfacao com os case correspondentes.*/

let satisfacao = 1

switch (satisfacao) {
    case 1:
        console.log('Consegui resolver') 
        break  // sai do switch caso essa condicao seja verdadeira
    case 2: 
        console.log('Resolvi em partes')
        break
    case 3:
        console.log('Não consegui resolver')
        break
    default:
        console.log('Sem avaliação') 
}

//

let car = 'Lamborghini'

switch(car) {
    case 'Ferrari':
        console.log('the car is a Ferrari')
        break   // sai do switch caso essa condicao seja verdadeira
    case 'Mercedes':
        console.log('the car is a Mercedes')
        break
    default:   // valor padrao caso nenhum dos casos seja verdadeiro
        console.log('car indefined.')
}


//FIXME: ESTRUTURAS DE REPETIÇÃO *NÃO CONTROLADAS (LAÇOS DE REPETIÇÃO) >> WHILE / DO..WHILE

//TODO: WHILE (ENQUANTO) Executa o código enquanto uma condição passada for verdadeira *Verificação com teste lógico no início 

let index = 0

while (index < 5) {
    console.log('Index menor que 5') // loga a mensagem 5 vezes
    // index = index + 1
    // index += 1

    // mesma coisa que acima
    index++ //adiciona mais um
}

// ** Comando para importar bibliotecas no Node

        const input = require('readline-sync') // funcao require(requerindo) atributo com aspas simples

        let numeroAleatorio = 5

        let numeroInput = Number(input.question('Tente adivinhar um numero inteiro entre 1 e 5: '))

        while (numeroAleatorio !== numeroInput) { // enquanto condicao verdadeira (true)
            console.log(numeroInput, typeof numeroInput,': Voce errou!')
            numeroInput = Number(input.question('Escolha outro numero: '))
        }

        console.log('Voce acertou!!!') // se condicao false: sai do laco(loop) e imprime essa declaracao

        console.clear()

//TODO: DO...WHILE (FAÇA/ENQUANTO) *Verificação com teste lógico no final

// let contar = null
// let i = 0

// do {
//     i++
//     contar += 1
// } while (i < 5)

// console.log(contar) //15

let result = ''
let i = 0

do {
  i++
  result += i
} while (i < 5) //verifica no final

console.log(result) //12345

//FIXME: ESTRUTURA DE REPETIÇÃO *CONTROLADA (LAÇO NUMÉRICO) >> FOR

//FORMA MAIS VERBOSA!!!

// const inputNota = require('readline-sync')

// let nota1 = Number(inputNota.question('Nota 1: '))
// let nota2 = Number(inputNota.question('Nota 2: '))
// let nota3 = Number(inputNota.question('Nota 3: '))

//Acumulador

let acumulador = 0 //atribuicao

acumulador += 4 //adiciona a ele mesmo + 4

acumulador++ //soma 1

acumulador-- //subtrai 1

console.log(acumulador)

//TODO: FOR: Estabelece exatamente quantas vezes determinada iteracao sera repetida

// //*Laco: Toda a estrutura
// //*Iteracao: Uma volta (ciclo completo)

for (let i = 0; i <= 5; i++) {
    console.log('repeticao: ', i)
}

for (index = 0; index < 5; index++) {
    console.log(index)
}

let cars = ['Ferrari','Lamborghini','Mercedes']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

// ** FOR IN: Utilizado principalmente para se trabalhar com objetos *Não é performático(rápido) *O javascript não lida muito bem com ele

const person = {
    name: 'Lucas',
    age: 36
}

for (property in person) {
    console.log(person[property])
}

// ** FOR OF: Forma muito mais simples e objetiva

for (let i of cars) { // para cada [i] na lista de carros
    console.log(i) // imprima [i]
}

// ** FOREACH: Forma mais detalhada

cars.forEach(function(car, index){ // forEach[para cada] item da lista cars execute a funcao atribuindo valor as variaveis car e index
    console.log(index) // mostra o numero do indice
    console.log(car) // mostra o valor do indice
})


//FIXME: PROBLEMA (Somar 3 notas e imprimir a media)

let notaAluno // aqui esta indefinido
let soma = 0

for (let i = 1; i <= 3; i++) {
    notaAluno = Number(input.question(`Informe a nota ${i} do aluno: `)) //notaAluno = input do usuario * aqui utilizo template string ${}

    soma += notaAluno // soma + notaAluno joga em soma
}

console.log(`Media do aluno: ${soma / 3}`)

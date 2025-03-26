//TODO: Let's Code

//FIXME: VARIÁVEIS

// variavel [operador de atribuicao =] seta um valor qualquer

/* let = let it change (permita que isso mude)
   const = não permite mudanca */

username = 'lucas'
idade = 36

console.log(username, idade)

// **convencao para nomes compostos (camel case)

let meuCodigo = true

// ESCOPO DE BLOCO (BLOCK SCAPE)

if (2 == 2) {
    var message = 'ola mundo' // let e const nao ira rodar fora do bloco **var permite
}

console.log(message)

//FIXME: TIPOS DE VARIÁVEIS ** TIPOS PRIMITIVOS

let nome = 'lucas' //string (text)
let age = 36       //number
let float = 79.5   //number
let bool = true    //boolean (true or false)

console.log(typeof bool)

//FIXME: OPERADORES ARITMÉTICOS (Math)

let primeiro = 2
let segundo = 2

console.log('pe = ', primeiro ** segundo)
console.log('m = ', primeiro * segundo)
console.log('d = ', primeiro / segundo)
console.log('a = ', primeiro + segundo)
console.log('s = ', primeiro - segundo)
console.log('rd = ', primeiro % 3)

//* ordem de precedencia

console.log((2 + 3) * 10)

//* Math

console.log(Math.abs(-10))
console.log(Math.sqrt(16))

//FIXME: BOOLEANOS (True / False)

// * OPERADORES RELACIONAIS > utilizados para comparar valores e verificar relacao (true or false)

// comparacao == (===)
// diferenciacao !== (!==)
// maior que >
// maior ou igual >=
// menor que <
// menor ou igual <=

// * OPERADORES LOGICOS > combinam duas ou mais sentencas permitindo a comparacao entre valores

// AND > &&
// OR  > ||
// NOT > !

let maior = true // atribuicao
let cnh = true

console.log(maior == true ? 'Entrada Permitida' : 'entrada Não Permitida') // * operador condicional ternario

console.log(maior == true && cnh == false ? 'Condutor Habilitado!' : 'Condutor Não Habilitado!')

console.log(!maior) //false

//FIXME: COERÇÃO DE TIPOS (CONVERSÃO)

// * Explícita: conversão manual de tipos de variáveis (Dev)

let numero = 10

console.log(numero, typeof numero)
console.log(numero, typeof numero.toString())
console.log(Number(numero), typeof numero)
console.log(parseFloat('12.5'), typeof numero)
console.log(parseInt('10.5'), typeof numero)
console.log(Boolean(10), typeof numero) //true

// * Implícita: conversão automática (Javascript)

console.log(10 + 1) //11
console.log('10' + 1 + 1) //1011 *por conta do + o javascript entende tudo como string e concatena 
console.log('10' - 1) //9 *o que nao acontece para as outras operacoes
console.log('10' * 3) //30
console.log(10 - 'asdf') //retorna NaN: Not a Number

//FIXME: ESTRUTURAS CONDICIONAIS *CONTROLADAS (CONTROLE DE FLUXO): IF...ELSE / SWITCH CASE

//* Determinadas linhas serao executadas apenas se determinada condicao for satisfeita

//IF...ELSE (SE/SENAO)

let nota = 5.1

if (nota >= 7) {
    console.log('Aprovado')
} else if (nota >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}

//SWITCH CASE (ESCOLHA CASO)

/*TODO: IMPORTANTE: A estrutura switch em JavaScript não é adequada para avaliar condições como >= diretamente nos case. 
O switch é projetado para comparar valores exatos, e não intervalos ou condições.*/

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

/** Neste caso, ele segue a sintaxe correta do switch, comparando o valor das variáveis satisfacao e atendimento com 
os case correspondentes.*/

let satisfacao = 1
let atendimento = 2

switch (satisfacao) {
    case 1:
        console.log('Consegui resolver') 
        break
    case 2: 
        console.log('Resolvi em partes')
        break
    case 3:
        console.log('Não consegui resolver')
        break
    default:
        console.log('Sem avaliação')
}

switch (atendimento) {
    case 1:
        console.log('Muito bom') 
        break
    case 2: 
        console.log('Regular')
        break
    case 3:
        console.log('Ruim')
        break
    default:
        console.log('Sem avaliação')
}

console.clear()

//FIXME: ESTRUTURAS CONDICIONAIS NÃO CONTROLADAS (LAÇOS DE REPETIÇÃO) 

// WHILE (ENQUANTO) *Verificação no início

//* comando para importar bibliotecas no node

        const input = require('readline-sync') // funcao require(requerindo) atributo com aspas simples

        let numeroAleatorio = 5

        let numeroInput = Number(input.question('Tente adivinhar um numero inteiro entre 1 e 5: '))

        while (numeroAleatorio !== numeroInput) { // enquanto condicao verdadeira (true)
            console.log(numeroInput, typeof numeroInput,': Voce errou!')
            numeroInput = Number(input.question('Escolha outro numero: '))
        }

        console.log('Voce acertou!!!') // se condicao false: sai do laco(loop) e imprime essa declaracao

        console.clear()

// DO...WHILE (FAÇA/ENQUANTO) *Verificação no final

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

//FIXME: REPETICÃO CONTROLADA (LAÇO NUMÉRICO)

// FOR (PARA)

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

console.clear()

// //Estrutura controlada for: Estabelece exatamente quantas vezes determinada iteracao sera repetida

// //*Laco: Toda a estrutura
// //*Iteracao: Uma volta (ciclo completo)

for (let i = 0; i <= 5; i++) {
    console.log('repeticao: ', i)
}

console.clear()

//PROBLEMA (Somar 3 notas e imprimir a media)

let notaAluno // aqui esta indefinido
let soma = 0

for (let i = 1; i <= 3; i++) {
    notaAluno = Number(input.question(`Informe a nota ${i} do aluno: `)) //notaAluno = input do usuario * aqui utilizo template string ${}

    soma += notaAluno // soma + notaAluno joga em soma
}

console.log(`Media do aluno: ${soma / 3}`)

console.clear()


//---------------------------- ESTRUTURA DE DADOS ---------------------


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

//FIXME: ARRAYS > MÉTODOS DE ARRAYS
//* métodos são como funções dentro de uma variável

// exemplos de funções: Number() String() console.log()

//TODO: **Fatiamento: .slice

let lista1 = [1, 2, 3, 4, 5]

console.log(lista1.slice(0,3)) // busca os elementos do indice 0 até o indice 2
console.log(lista1.slice(3)) // busca os elementos a partir do indice 3

console.clear

//TODO: **Adicionando elementos: .push (inclui no final do array) | .unshift (inclui no inicio do array)

console.log('antes do push: ', lista1)

lista1.push(10,20,'lucas')

console.log('depois do push: ', lista1)

lista1.unshift('zero', 0)

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

//FIXME: FUNÇÕES *Evita repeticao de codigo *bloco de codigo que se pode reaproveitar diversas vezes *melhor manutencao e qualidade do codigo 

// Definicao de funcao ** Aqui atribuimos um nome pela qual a funcao sera chamada

function nomeFuncao(parametro1, parametro2, etc) {
    declaração
}

// COMO ENVIAR PARAMETROS PARA UMA FUNCAO

// aqui eu declaro (defino) uma funcao
function saudacao(nome, tema='Variáveis') { //parametro default caso nao seja atribuido na chamada
    console.log(`Que legal, ${nome}! Você está aprendendo sobre ${tema} em Javascript!`)
}
// aqui eu chamo a funcao pelo nome e atribuo valores aos parametros(variaveis) estabelecidos na definicao
saudacao('Lucas')
saudacao('Beatriz', 'Funções')
saudacao('João','Arrow Function')

// RETORNO DA FUNCAO (return) 

// aqui eu apenas imprimo o resultado da operacao da soma das variaveis

function soma(n1, n2) {
    console.log('Soma=', n1 + n2)
}

soma(10, 20)

// aqui a ideia e tornar a funcao generica atribuindo de fato uma funcao a ela

function soma(n1, n2) {
    return n1 + n2 //detecta e encerra
    console.log('Qualquer coisa') //isso nao imprime pois foi detectado e encerrado no return para imprimir tem que vir antes do return
}

let resultado = soma(10, 20) //aqui eu guardo a funcao em uma variavel

console.log('Soma =', resultado) //aqui eu imprimo a variavel que guarda a operacao
console.log('Média =', resultado / 2)

// outro exemplo da utilizacao do return

function maiorQue50(numero) {
    if (numero > 50) {
        return true
    }

    return false
}

console.clear()

// FUNCAO ANONIMA (ARROW FUNCTION)

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

//RETURN

// function maiorQue50(numero) {
//     if(numero > 50)
//         return true
// }

// return false

//FIXME: OBJETOS

// Como criar um objeto

const pessoa = {
    nome: 'Lucas',
    idade: 36
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
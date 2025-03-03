//TODO: Let's Code

//FIXME: VARIÁVEIS

// variavel [operador de atribuicao =] seta um valor qualquer

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

//FIXME: OPERADORES ARITMÉTICOS (MATEMÁTICA)

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

//FIXME: BOOLEANOS

// * OPERADORES RELACIONAIS > utilizados para comparar valores e verificar se a relacao e true or false

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

//FIXME: ESTRUTURAS CONDICIONAIS (CONTROLE DE FLUXO)

//* Determinadas linhas serao executadas apenas se determinada condicao for satisfeita

//if...else

let nota = 5.1

if (nota >= 7) {
    console.log('Aprovado')
} else if (nota >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}

//switch case (escolha caso)

/**IMPORTANTE: A estrutura switch em JavaScript não é adequada para avaliar condições como >= diretamente nos case. 
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





















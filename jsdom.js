// Manipulação do DOM em JavaScript

// O DOM (Document Object Model) é uma representação em árvore da estrutura de um documento HTML que permite que os programas alterem a 
// estrutura, o estilo e o conteúdo do documento.

// A Manipulação do DOM em JavaScript permite que os desenvolvedores interajam e alterem dinamicamente os elementos de uma página web. 
// Com isso, é possível modificar textos, estilos, atributos, eventos e a própria estrutura do documento.

// O código abaixo ilustra uma forma básica de manipulação do DOM:

const titulo = document.getElementById("titulo");
titulo.textContent = "Novo Título";

// Esse código seleciona um elemento com o `id="titulo"` e altera seu texto.

// Agora, vamos explorar as principais formas de selecionar elementos no DOM:

// ---

// TODO: **1. document.getElementById()**
// Seleciona um único elemento pelo seu `id`. Como o `id` deve ser único na página, essa é a maneira mais rápida de acessar um elemento 
// específico.

// ### **Exemplo**:

const titulo = document.getElementById("meuTitulo");
titulo.style.color = "blue"; // Altera a cor do título para azul

// **Vantagem**: Rápido e eficiente para buscar um único elemento.

// ---

//TODO: **2. document.getElementsByTagName()**
// Seleciona todos os elementos com a mesma **tag**, retornando um **HTMLCollection** (parecido com um array, mas sem métodos de array como 
// `.map()` ou `.forEach()`). Diferente do NodeList ele não retorna uma lista, o que dificulta a manipulação pelo fato de não ser possível 
// utilizar métodos de lista, o que não é o ideal. Neste caso, o recomendado é utilizar sempre o querySelectorAll() para selecionar múltiplos 
// elementos de uma classe.

// ### **Exemplo**:

const paragrafos = document.getElementsByTagName("p");
paragrafos[0].style.fontWeight = "bold"; // Deixa o primeiro parágrafo em negrito

// **Vantagem**: Útil para modificar um conjunto de elementos da mesma tag.

// ---

//TODO: **3. document.getElementsByClassName()**
// Seleciona todos os elementos que possuem uma determinada **classe**, retornando também um **HTMLCollection**. Diferente do NodeList
// ele não retorna uma lista, o que dificulta a manipulação pelo fato de não ser possível utilizar métodos de lista, o que não é o ideal.
// Neste caso, o recomendado é utilizar sempre o querySelectorAll() para selecionar múltiplos elementos de uma classe.

// ### **Exemplo**:

const itens = document.getElementsByClassName("item");
for (let i = 0; i < itens.length; i++) {
    itens[i].style.backgroundColor = "lightgray"; // Altera a cor de fundo de todos os itens
}

// **Vantagem**: Permite selecionar vários elementos com a mesma classe de forma rápida.

// ---

//TODO: **4. document.querySelector()**
// Seleciona **apenas o primeiro elemento** que corresponde a um seletor CSS.

// ### **Exemplo**:

const primeiroItem = document.querySelector(".item"); // seleciona tanto 'id' como 'classe'
primeiroItem.style.border = "2px solid red"; // Adiciona uma borda vermelha no primeiro item com a classe "item"

// **Vantagem**: Muito flexível, pois permite seleções complexas usando sintaxe CSS.

// ---

//TODO: **5. document.querySelectorAll()**
// Seleciona **todos os elementos** que correspondem ao seletor CSS, retornando um **NodeList**, que permite o uso de `.forEach()`.

// ### **Exemplo**:

const todosOsItens = document.querySelectorAll(".item"); // busca todos os elementos .item
// const todosOsItens = document.querySelectorAll(".items .item"); // busca todos os elementos .item da classe .items
todosOsItens.forEach(item => item.style.color = "green"); // Altera a cor do texto de todos os itens para verde

console.log(todosOsItens[1]) // mostra o item 2 da lista

// **Vantagem**: Muito útil quando precisamos trabalhar com múltiplos elementos de forma eficiente.

// ---

//TODO: **6. document.getElementsByName()**
// Seleciona elementos pelo atributo `name`, geralmente usado em formulários.

// ### **Exemplo**:

const radios = document.getElementsByName("genero");
radios.forEach(radio => {
    if (radio.checked) {
        console.log(`Selecionado: ${radio.value}`);
    }
});

// **Vantagem**: Perfeito para lidar com grupos de inputs.

// ---

//TODO: **7. document.createElement()**
// Cria um novo elemento HTML dinamicamente.

// ### **Exemplo**:

const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Parágrafo criado dinamicamente!";
document.body.appendChild(novoParagrafo);

// **Vantagem**: Permite criar elementos do zero e adicioná-los ao DOM.

// ---

//TODO: **8. document.removeChild()**
// Remove um elemento filho de um nó pai.

// ### **Exemplo 1**: removeChild()

const lista = document.getElementById("minhaLista");
const primeiroItem = lista.firstElementChild;
lista.removeChild(primeiroItem); // Remove o primeiro item da lista

// **Vantagem**: Útil para remover elementos sem precisar recarregar a página.

// ### **Exemplo 2**: remove()

const items = document.querySelector('.items')

items.remove() // remove todos os 'items' da lista

// ---

//TODO: **9. document.replaceChild()**
// Substitui um elemento filho por outro.

// ### **Exemplo**:

const novoTitulo = document.createElement("h2");
novoTitulo.textContent = "Título Substituto";

const tituloAntigo = document.getElementById("titulo");
document.body.replaceChild(novoTitulo, tituloAntigo);

// **Vantagem**: Boa alternativa para atualizar o DOM sem removê-lo completamente.

// ---

//TODO: **10. document.innerHTML vs document.textContent**

// ### **innerHTML**
// Retorna ou define o **HTML interno** de um elemento.

const div = document.getElementById("conteudo");
div.innerHTML = "<strong>Texto em negrito!</strong>"; // Permite tags de marcacao HTML dentro da string

// ### **textContent**
// Retorna ou define apenas o **texto puro**.

const div = document.getElementById("conteudo");
div.textContent = "<strong>Texto puro!</strong>"; // Mostra tudo como texto

// **Vantagem** do `textContent`: Mais seguro, pois impede ataques de **XSS** (Cross-Site Scripting).

// ---

//TODO: **11. Alterando atributos e classes**

// ### **setAttribute() e getAttribute()**

const link = document.querySelector("a");
link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href")); // Mostra "https://google.com"

// ### **classList**

const caixa = document.getElementById("caixa");
caixa.classList.add("ativo"); // Adiciona a classe "ativo"
caixa.classList.remove("inativo"); // Remove a classe "inativo"
caixa.classList.toggle("visivel"); // Alterna entre adicionar/remover "visivel"

// ---

//FIXME: ## **Resumo das principais funções**
// | Método                          | Retorna                           | Seleção                   |
// |---------------------------------|-----------------------------------|---------------------------|
// | `getElementById(id)`            | Elemento único (`HTMLElement`)    | Pelo `id` único           |
// | `getElementsByTagName(tag)`     | Coleção (`HTMLCollection`)        | Pela `tag`                |
// | `getElementsByClassName(classe)`| Coleção (`HTMLCollection`)        | Pela `classe`             |
// | `querySelector(seletor)`        | Primeiro elemento (`HTMLElement`) | Seletor CSS               |
// | `querySelectorAll(seletor)`     | Lista (`NodeList`)                | Todos os que correspondem |
// | `getElementsByName(name)`       | Coleção (`NodeList`)              | Pelo atributo `name`      |

// ---

// ## **Conclusão**
// A manipulação do DOM em JavaScript é essencial para criar interações dinâmicas em páginas web. Cada método tem seu uso específico, 
// e escolher o correto pode impactar diretamente a performance e a organização do código.

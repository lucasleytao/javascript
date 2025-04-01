# Manipulação do DOM em JavaScript: Guia Completo

O DOM (Document Object Model) é uma representação em árvore da estrutura de um documento HTML que permite que os programas alterem a estrutura, o estilo e o conteúdo do documento.

## Conceitos Fundamentais

O DOM representa o documento como nós e objetos, permitindo que linguagens como JavaScript se conectem e manipulem páginas web. Quando uma página é carregada, o navegador cria o DOM do documento, que pode então ser modificado.

## Métodos de Seleção de Elementos

### 1. getElementById
Seleciona um elemento pelo seu ID (único no documento).

```javascript
// Seleciona o elemento com ID "cabecalho"
const cabecalho = document.getElementById("cabecalho");
cabecalho.style.color = "blue";
```

### 2. getElementsByTagName
Retorna uma coleção HTML de todos elementos com a tag especificada.

```javascript
// Seleciona todos os parágrafos
const paragrafos = document.getElementsByTagName("p");

// Altera o primeiro parágrafo
if (paragrafos.length > 0) {
  paragrafos[0].textContent = "Primeiro parágrafo modificado!";
}
```

### 3. getElementsByClassName
Retorna uma coleção de elementos com a classe especificada.

```javascript
// Seleciona todos os elementos com classe "destaque"
const destaques = document.getElementsByClassName("destaque");

// Adiciona borda a todos os elementos com classe "destaque"
for (let i = 0; i < destaques.length; i++) {
  destaques[i].style.border = "2px solid green";
}
```

### 4. querySelector
Retorna o primeiro elemento que corresponde ao seletor CSS especificado.

```javascript
// Seleciona o primeiro elemento com classe "item"
const primeiroItem = document.querySelector(".item");

// Seleciona o primeiro link dentro de um elemento com ID "navegacao"
const primeiroLink = document.querySelector("#navegacao a");
primeiroLink.style.fontWeight = "bold";
```

### 5. querySelectorAll
Retorna uma NodeList estática de todos os elementos que correspondem ao seletor CSS.

```javascript
// Seleciona todos os botões dentro de elementos com classe "card"
const botoesCard = document.querySelectorAll(".card button");

// Adiciona evento de clique a todos os botões selecionados
botoesCard.forEach(botao => {
  botao.addEventListener("click", function() {
    alert("Botão clicado!");
  });
});
```

## Outros Métodos Importantes

### 6. parentNode / parentElement
Acessa o nó pai de um elemento.

```javascript
const filho = document.querySelector(".filho");
const pai = filho.parentNode;
pai.style.backgroundColor = "#f0f0f0";
```

### 7. children
Retorna uma coleção dos elementos filhos de um elemento.

```javascript
const lista = document.getElementById("minhaLista");
const itens = lista.children;

for (let item of itens) {
  item.style.listStyleType = "square";
}
```

### 8. createElement / appendChild
Cria novos elementos e os adiciona ao DOM.

```javascript
// Cria um novo elemento div
const novaDiv = document.createElement("div");
novaDiv.textContent = "Novo elemento criado dinamicamente";
novaDiv.className = "nova-classe";

// Adiciona ao final do body
document.body.appendChild(novaDiv);
```

### 9. removeChild
Remove um elemento filho de seu pai.

```javascript
const elementoParaRemover = document.getElementById("remover");
elementoParaRemover.parentNode.removeChild(elementoParaRemover);

// Método moderno (mais simples)
elementoParaRemover.remove();
```

### 10. classList
Manipulação de classes de forma eficiente.

```javascript
const elemento = document.getElementById("meuElemento");

// Adiciona classe
elemento.classList.add("ativo");

// Remove classe
elemento.classList.remove("inativo");

// Alterna classe
elemento.classList.toggle("destaque");

// Verifica se contém classe
if (elemento.classList.contains("ativo")) {
  console.log("Elemento está ativo");
}
```

## Manipulação de Atributos

### 11. getAttribute / setAttribute
Lê e modifica atributos de elementos.

```javascript
const link = document.querySelector("a");

// Obtém o valor do atributo href
const url = link.getAttribute("href");

// Define um novo atributo
link.setAttribute("target", "_blank");
link.setAttribute("data-info", "link-externo");
```

### 12. Dataset
Acessa atributos data-* de forma conveniente.

```javascript
// Para <div id="produto" data-id="123" data-categoria="eletronicos">
const produto = document.getElementById("produto");

console.log(produto.dataset.id); // "123"
console.log(produto.dataset.categoria); // "eletronicos"

// Modifica um atributo data
produto.dataset.estoque = "15";
```

## Manipulação de Estilos

### 13. style
Acessa e modifica estilos inline.

```javascript
const caixa = document.getElementById("caixa");

// Define múltiplos estilos
caixa.style.cssText = "width: 200px; height: 200px; background-color: coral;";

// Ou individualmente
caixa.style.borderRadius = "10px";
caixa.style.boxShadow = "3px 3px 5px rgba(0,0,0,0.3)";
```

## Manipulação de Conteúdo

### 14. textContent vs innerHTML
Formas diferentes de manipular conteúdo.

```javascript
const conteudo = document.getElementById("conteudo");

// textContent: mais seguro (não interpreta HTML)
conteudo.textContent = "<strong>Texto</strong> sem formatação";

// innerHTML: interpreta tags HTML (cuidado com XSS)
conteudo.innerHTML = "<strong>Texto</strong> com formatação";
```

### 15. insertAdjacentHTML
Insere HTML em posições específicas de forma eficiente.

```javascript
const container = document.getElementById("container");

// Posições possíveis: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
container.insertAdjacentHTML('beforeend', '<div class="novo-item">Item adicionado</div>');
```

## Eventos no DOM

### 16. addEventListener
Adiciona ouvintes de eventos a elementos.

```javascript
const botao = document.getElementById("meuBotao");

function handleClick(event) {
  console.log("Botão clicado!", event);
}

// Adiciona ouvinte
botao.addEventListener("click", handleClick);

// Remove ouvinte (quando necessário)
// botao.removeEventListener("click", handleClick);
```

## Boas Práticas

1. **Cache de seleções**: Armazene referências a elementos frequentemente acessados.
   ```javascript
   // Ruim: seleciona o elemento toda vez que é usado
   function mudaCor() {
     document.getElementById("elemento").style.color = "red";
   }
   
   // Bom: armazena a referência
   const elemento = document.getElementById("elemento");
   function mudaCor() {
     elemento.style.color = "red";
   }
   ```

2. **Manipulação em lote**: Para muitas alterações, use DocumentFragment ou manipule fora do DOM.
   ```javascript
   const fragmento = document.createDocumentFragment();
   
   for (let i = 0; i < 100; i++) {
     const novoItem = document.createElement("li");
     novoItem.textContent = `Item ${i}`;
     fragmento.appendChild(novoItem);
   }
   
   document.getElementById("lista").appendChild(fragmento);
   ```

3. **Delegação de eventos**: Use um único ouvinte para múltiplos elementos.
   ```javascript
   document.getElementById("lista").addEventListener("click", function(e) {
     if (e.target.tagName === "LI") {
       console.log("Item da lista clicado:", e.target.textContent);
     }
   });
   ```

## Considerações de Performance

- `getElementById` é o método mais rápido para seleção única.
- `querySelector` e `querySelectorAll` são mais versáteis, mas um pouco mais lentos.
- Coleções HTML (como as retornadas por `getElementsByTagName`) são "live" e podem impactar performance.
- NodeLists (como as retornadas por `querySelectorAll`) são estáticas.

Este guia cobre os principais aspectos da manipulação do DOM em JavaScript. A prática consistente com esses métodos e conceitos é essencial para desenvolver aplicações web interativas e eficientes.
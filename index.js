//FIXME: MANIPULANDO ELEMENTOS DO DOM

// 1.primeiro seleciona o elemento
const items = document.querySelector('.items') //busca todos os itens da classe .items
const button = document.querySelector('.btn')

// 2.agora podemos manipular o elemento

// items.remove() //remove todos os itens da classe .items
// items.firstElementChild.remove() //remove o primeiro elemento da classe .items
// items.lastElementChild.remove() //remove o ultimo elemento da classe .items

// items.children[0].textContent='item um' //usa o metodo de index para acessar os itens de .items

// items.children[1].innerHTML='<h1>item dois</h1>' 

button.style.background='tomato'
button.style.color='blue'

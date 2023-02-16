let produtos = [];

function adicionarItem(){
    produtos.push(item.value);
    lista.innerHTML = "";

    for (let i = 0; i < produtos.length; i++){
       lista.innerHTML += `<li class="list-group-item">${produtos[i]}</li>`;
    }
}



//int: inteiro
//float: decimal
//array: agrupamento de valores

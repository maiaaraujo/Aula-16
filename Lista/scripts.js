let produtos = [];

function adicionarItem(){
    produtos.push(item.value);

    lista.innerHTML = "";

   
    localStorage.setItem("produtos", JSON.stringify(produtos))

    listarItens();     
}

function listarItens(){
    let itens = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = "";

    if (itens && itens.length > 0)
        for (let i = 0; i < itens.length; i++){
            lista.innerHTML += `<li class="list-group-item">${itens[i]}</li>`;
     }

listarItens();     
    
}




//int: inteiro
//float: decimal
//array: agrupamento de valores

function addProd() {
    const input1 = document.getElementById('nome')
    const input2 = document.getElementById('preco')

    const nome = input1.value
    const preco = input2.value

    const obj = { nome ,preco }
    POSThttp('/addProd', obj)
    .then(res => {
        console.log(res)
        setDados('_pedidos', JSON.stringify(obj))
    })
    .catch(err => {
        console.log(err)

    })
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

function addCart(nome, preco) {
    const prod_zerado = {nome: nome, preco: preco, quantidade: 1}
   
    const prod_cart = getDados('_pedidos');
  
    const produtos = !!prod_cart ? prod_cart : [];
    let encontrada = false


    const novo = produtos.map(obj => {
        if(obj.nome == nome) {
            obj.quantidade++
            encontrada = true
        }
  
        return obj 
        // console.log(novo)
    })
    // console.log(novo)
    if(!encontrada) {
        novo.push(prod_zerado)
    }
    const dados = setDados('_pedidos', JSON.stringify(novo))

    
    // 
}


function finalizarCarrinho() {
    const prod_cart = getDados('_pedidos')
    console.log(prod_cart)
    let total = 0
    prod_cart.forEach((produto) => {
        total = total + (produto.preco * produto.quantidade)
        
    })

    console.log('total',total)

    const prod_car = JSON.stringify(getDados('_pedidos'))

    POSThttp('/addPedidos', {produtos: prod_cart, total})
    .then(res => {
        
        console.log(res)
        setDados('_todos_pedidos', JSON.stringify(total))
        localStorage.removeItem('_pedidos')
        console.log(res)
        
    })
    .catch(err => {
        console.log(err)
        setDados('_pedidos', {})
    })
    
}

finalizarCarrinho()
function addCart(nome, preco) {
    const produtos = [
        {nome: nome, preco: preco, quantidade: 0}
    ]


    let novo = produtos.map(obj => {
        if(obj.nome == nome) {
            obj.quantidade++
        }

        return obj
    })

    setDados('_pedidos', JSON.stringify(novo))
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/FakeIfood')
.then(() => console.log('Conectado...'))
.catch(err => console.log('Erro: ' + err))


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    senha: {
        type: String,
        minlength: 6
    },
    nome: {
        type: String
    },
    sobrenome:{
        type: String
    }
})

const pedidosSchema = new mongoose.Schema({
    produtos: {
        type: Array
    },
    total: {
        type: Number
    }
})

const produtosSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    preco:{
        type: Number
    }
})

const UserModel = mongoose.model('users', userSchema)
const PedidosModel = mongoose.model('pedidos', pedidosSchema)
const ProdutosModel = mongoose.model('produtos', produtosSchema)

module.exports = {UserModel, PedidosModel, ProdutosModel}
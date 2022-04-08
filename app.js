const express = require("express");
const app = express();
const port = 3000;
const db = require("./database/connect.dados")
app.use(express.json())
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post('/add', async(req, res) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
        const user = await db.UserModel.create({
            email,
            senha
        })
        console.log(user)
        console.log(user._id)
        res.status(200).send({id: user._id})
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.post('/update', async(req, res) => {
  try {
      const id = req.body.id
      console.log(id)
      const user = await db.UserModel.findByIdAndUpdate(id, req.body, {new: true})
      console.log(user)
      res.status(200).send('Ok')
  } catch (error) {
      console.log(error)
      res.status(500).send(error)
  }
})



app.get("/create-acount", (req, res) => {
  res.render("create-acount");
});


app.get('/cadastro/segunda-etapa/:id', (req, res) => {
  const id = req.params.id
  res.render('nome-sobrenome', {id})
})



app.post('/autentication', async(req, res) => {
  try {
      const email = req.body.email
      const senha = req.body.senha
      const user = await db.UserModel.find({email, senha})
    
      if(user[0]) {
        const perfil = {
          logado: true,
          email: user[0].email,
          nome: user[0].nome,
          sobrenome: user[0].sobrenome
        }
        res.status(200).json(perfil)
    }
  } catch (error) {
    console.log(error)
    res.status(401).json({error})
  }
})

app.get('/login', (req, res) => {
  res.render('login')
})


app.post('/verificarConta', async(req, res) => {
  try {
    console.log(req.body)
      const user = await db.UserModel.find(req.body)
      console.log(user)
      
      if(user[0]) {
          return res.status(200).json(user)
      }else{
        return res.status(401).json({msg: 'erro'})
      }

      
  } catch (error) {
      console.log(error)
      res.status(500).json({msg: error})
  }
})

app.get('/pedidos', async(req, res) => {
  const prod = await db.ProdutosModel.find()
  res.render('pedidos', { prod })
})


app.post('/addProd', async(req, res) => {
  try {
    const nome = req.body.nome
    const preco = req.body.preco
    const produtos = await db.ProdutosModel.create({
      nome,
      preco
    })

    res.status(201).json({produtos})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: error})
  }
})

app.post('/addPedidos', async(req, res) => {
  try {
    const pedidos = await db.PedidosModel.create(req.body)
    
    res.status(201).json(pedidos)
  } catch (error) {
    res.status(500).json({msg: error})
  }
})

app.get('/recebendoProdutos', async(req, res) => {
  const pedidos = await db.PedidosModel.find()
  //console.log(JSON.parse(pedidos[0].produtos))

  res.render('receberProdutos', {pedidos})
})


app.listen(port, console.log("Server is runing..."));

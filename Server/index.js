const express = require('express')
var bodyParser = require('body-parser')

//Carregando módulos
const index_Routes = require('./routes/index_Routes')

//Chama a o express criando uma nova aplicação dentro da variavel app
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Rotas

app.use('/cinema', index_Routes)

//Inicializa Servidor
const port = 3000
app.listen(port, () => {
    console.log(`essa porra ta rodando no http://localhost:3000`)
})

/* node ejs */
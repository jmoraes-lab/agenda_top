const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const routes = require ('./routes')

require('dotenv').config()


app.use(express.urlencoded({ extended: true })) // Aceita requisições do tipo url-encoded, ou seja, requisições de formulários e etc.
app.use(express.json()) // Aceita JSON como requisição (importante para APIs)

app.engine('handlebars',engine())
app.set('view engine','handlebars')

app.use('/',routes)

app.listen(8089, () => {
    console.log("Servidor iniciado 8089")
})


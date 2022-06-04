const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const routes = require ('./routes')
const flash = require("express-flash")
const session = require("express-session")
const FileStore = require("session-file-store")(session)

require('dotenv').config()


app.use(express.urlencoded({ extended: true })) // Aceita requisições do tipo url-encoded, ou seja, requisições de formulários e etc.
app.use(express.json()) // Aceita JSON como requisição (importante para APIs)

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine','handlebars')



app.use(
    session({
        name: 'session',
        secret: '#@session@#',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 3600000,
            httpOnly: true,
            rolling: true
        },
    }),
)

app.use(function(req, res, next) {
    res.locals.session = req.session
    next()
})

app.use(flash())

app.use('/',routes)

app.listen(8089, () => {
    console.log("Servidor iniciado 8089")
})


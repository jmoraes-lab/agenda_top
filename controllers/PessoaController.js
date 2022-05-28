const { Pessoa } = require ('../models')
class PessoaController {
    static index(req, res) {
        res.render('pessoa/index')
    }

    static create(req, res) {
        res.render('pessoa/create')
    }

    static async store(req, res) {
        const { nome, email, data_nascimento, salario} = req.body
        console.log(req.body)
        
        await Pessoa.create({
            nome: nome,
            email: email,
            data_nascimento: data_nascimento,
            salario:salario
        })
        res.redirect('/pessoa')
    }
    
}

module.exports = PessoaController
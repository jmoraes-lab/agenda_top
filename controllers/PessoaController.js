const { Pessoa } = require ('../models')
class PessoaController {
    static async index(req, res) {
        const pessoas = await Pessoa.findAll({ raw: true })
        res.render('pessoa/index', {
            pessoas: pessoas
        })
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
    

    static async edit(req, res) {
        const pessoa = await Pessoa.findByPk(req.params.id, { raw: true })

        res.render('pessoa/edit', {
            pessoa: pessoa
        })
    }

    static async update(req, res) {
        const pessoa = await Pessoa.findByPk(req.params.id)
        await pessoa.update({
            nome: req.body.nome,
            email: req.body.email,
            data_nascimento: req.body.data_nascimento,
            salario: req.body.salario
        })

        res.redirect('/pessoa')
    }
}

module.exports = PessoaController
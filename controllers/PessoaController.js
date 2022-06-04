const { Pessoa } = require ('../models')
class PessoaController {
    static async index(req, res) {
        const pessoas = await Pessoa.findAll()
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
        //const pessoa = await Pessoa.findByPk(req.params.id, { raw: true })
        const pessoa = await Pessoa.findByPk(req.params.id)
        res.render('pessoa/edit', {
            pessoa: pessoa
        })
    }

    static async update(req, res) {
        const pessoa = await Pessoa.findByPk(req.params.id)
        await pessoa.update({
            nome: req.body.nome,
            email: req.body.email,
            data_nascimento: req.body.data_nascimento.split('/').reverse().join('-'), //mudando para padrao americano 2000-00-00
            salario: req.body.salario.replace('.', '').replace(',', '.')    // retirando o ponto 
            
        })

        res.redirect('/pessoa')
    }

    static async destroy(req, res) {
        const pessoa = await Pessoa.findByPk(req.params.id)
        await pessoa.destroy()

        res.redirect('/pessoa')
    }

}

module.exports = PessoaController
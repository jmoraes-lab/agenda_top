const { Router } = require('express')
const router = Router()
const IndexController = require('./controllers/indexController')
const PessoaController = require('./controllers/PessoaController')
router.get('/', IndexController.index)
router.get('/pessoa', PessoaController.index)
router.get('/pessoa/create', PessoaController.create)
router.post('/pessoa/store', PessoaController.store)
router.get('/pessoa/edit/:id', PessoaController.edit)
router.post('/pessoa/update/:id', PessoaController.update)
router.get('/pessoa/destroy/:id', PessoaController.destroy)


module.exports = router

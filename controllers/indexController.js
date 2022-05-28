module.exports = class IndexController {
    static index(req, res){
      
        res.render('index')
    }
    static create(req, res){
        res.render('form')
    }

    


}
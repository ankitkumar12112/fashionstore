const menu = require('../../models/menu')
function homecontroller() {
return{
   async index( req, res) {

    const pizzas=await menu.find()
    console.log(pizzas)
    return res.render('home',{pizzas:pizzas})

} 
}
}

module.exports= homecontroller 

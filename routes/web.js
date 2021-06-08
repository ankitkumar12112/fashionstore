const homecontroller= require('../app/http/controllers/homecontroller')
const authcontroller= require('../app/http/controllers/authcontroller')
const cartcontroller= require('../app/http/controllers/customers/cartcontroller')


function initroutes (app) {

    app.get ('/', homecontroller().index) 
 
 app.get('/login' ,   authcontroller().login)
 app.get('/register' ,  authcontroller().register)
 

 app.get('/cart' , cartcontroller().index)
//  app.post('/update-cart-' , cartcontroller().update)
// app.post('/register' ,  authcontroller().postRegister)
}

module.exports=initroutes 
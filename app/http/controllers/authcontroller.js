function authcontroller() {
return{
    register( req, res) {  res.render('auth/register.ejs') 

    }, login( req, res) {  res.render('auth/login.ejs')
}
//postRegister()

}}

module.exports=authcontroller 
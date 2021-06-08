function cartcontroller() {
return{
    index( req, res) {  res.render('customers/cart.ejs') 

    },
    update(req,res){

let cart= {
    items: {
        pizzaId : {
            item : {
                pizzaObject, qty:0
            },
        },
        totalQty:0,
        totalPrice:0,
    }
}

        return res.json({data: 'all ok'})


    }
}}
module.exports=cartcontroller 
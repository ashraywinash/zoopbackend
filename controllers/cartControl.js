
const { cart } = require("../models/cart")


async function createCart(req,res){

    try {
        
        const new_cart = await cart.create({
            etc: req.body.etc,
            storeId: req.body.storeId,
            userId: req.body.userId,
            listOfItems: req.body.listOfItems,
            
        })


    } catch (error) {
        return res.status(400).send({'message':null})
    }

}

async function getCartByStoreId(req,res){

    const carts = await cart.findById(req.body.id)

    return res.send({"message": carts})

}

module.exports = {
    createCart,
    getCartByStoreId
}
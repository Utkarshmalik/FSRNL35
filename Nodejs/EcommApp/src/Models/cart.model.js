const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user_gfg',
        required:true
    },
    products:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:'Product_gfg'
    }
});


const Cart = mongoose.model("Cart_gfg",CartSchema);


module.exports = Cart;

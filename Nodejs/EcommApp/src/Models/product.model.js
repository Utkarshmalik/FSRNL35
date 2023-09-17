const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:["Electronics","Fashion","Jewellery"]
    },
    price:{
        type:Number,
        required:true
    }
});


const Product = mongoose.model("Product_gfg",ProductSchema);


module.exports = Product;

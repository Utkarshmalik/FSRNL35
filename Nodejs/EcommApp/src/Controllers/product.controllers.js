const Cart = require("../Models/cart.model");
const Product = require("../Models/product.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


exports.createProduct=  async (req,res)=>{

    const productData = req.body;

    const {price, name, description , category} = productData;

    //validations here 

    if(price<0){
        return res.status(400).send({message:"Price of a product cant be negative"});
    }

    if(!name){
        return res.status(400).send({message:"Name of a product cant be empty"});
    }


    const newProduct = new Product(productData);


    try{
        const response = await newProduct.save();
     
        return res.status(201).send(response);
        
    }catch(err){
        return res.status(500).send({message:"Internal Server Error"});
    }
}

exports.getAllProducts = async (req,res)=>{

    const {maxPrice, category} = req.query;

    const query={};

    if(maxPrice){
        query.price={
            $lte:maxPrice
        }
    }

    if(category){
        query.category=category;
    }


    try{

        const products = await Product.find(query);

        if(!products.length){
            return res.status(404).send({message:"No Products are available"});
        }

        return res.status(200).send(products);

    }catch(err){
        return res.status(500).send({message:"Internal Server Error"});
    }


}


exports.getProductViaId=async (req,res)=>{

    const id= req.params.id;

     if( !ObjectId.isValid(id) ||  ((String)(new ObjectId(id)) !== id)){
                return res.status(400).send({message:"Invalid Object Id Passed"});
    }

    try{
        const product = await Product.findById(req.params.id);

        if(!product){
            return res.status(404).send({message:"Product not found"});
        }

        return res.status(200).send(product);

    }
    catch(err){
         console.log(err);
        return res.status(500).send({message:"Internal Server Error"});
    }

}


exports.updateProduct=async (req,res)=>{

    const id= req.params.id;
    const updatedDetails = req.body;

     if( !ObjectId.isValid(id) ||  ((String)(new ObjectId(id)) !== id)){
                return res.status(400).send({message:"Invalid Object Id Passed"});
    }


    try{
        const response = await Product.findByIdAndUpdate(id, updatedDetails, {
            new:true
        });

        if(!response){
                return res.status(404).send({message:"Product not found"});
        }

        return res.status(200).send(response);

    }
    catch(err){
         console.log(err);
        return res.status(500).send({message:"Internal Server Error"});
    }

}


exports.deleteProduct=async (req,res)=>{

    const id= req.params.id;

     if( !ObjectId.isValid(id) ||  ((String)(new ObjectId(id)) !== id)){
                return res.status(400).send({message:"Invalid Object Id Passed"});
    }


    try{
        const response = await Product.findByIdAndDelete(id);

        if(!response){
                return res.status(404).send({message:"Product not found"});
        }

        return res.status(200).send(response);

    }
    catch(err){
         console.log(err);
        return res.status(500).send({message:"Internal Server Error"});
    }

}


exports.addProductToCart = async (req,res)=>{

   
    const id= req.params.id;

     if( !ObjectId.isValid(id) ||  ((String)(new ObjectId(id)) !== id)){
                return res.status(400).send({message:"Invalid Object Id Passed"});
    }

    try{
        const product = await Product.findById(req.params.id);

        if(!product){
            return res.status(404).send({message:"Product not found"});
        }

        
        //check whether there exists a cart for this user or not 

        const user =  req.user;

        var cart  =  await Cart.findOne({userId:user._id});

        console.log(cart);

        if(!cart){

            const cartyObj={
                userId:user._id,
                products:[id]
            }

            cart = await Cart.create(cartyObj);

            return res.status(201).send(cart);
        }else{

            cart.products.push(id);

            await cart.save();

            return res.status(200).send(cart);
        }
    

    }
    catch(err){
         console.log(err);
        return res.status(500).send({message:"Internal Server Error"});
    }


}
































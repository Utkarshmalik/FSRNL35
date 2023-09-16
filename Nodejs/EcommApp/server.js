const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ObjectId = mongoose.Types.ObjectId;

const app = express();

const dbURL= "mongodb+srv://utmalik:qwerty123@cluster0.mzc2yil.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURL)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the database");
})


app.use(bodyParser.json());


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


//create a new product 

app.post("/products",async (req,res)=>{

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

})



// get all products

app.get("/products",async (req,res)=>{

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


})


// get a product via product id 

app.get("/products/:id", async (req,res)=>{

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

})



// update a product via product id 

app.put("/products/:id", async (req,res)=>{

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

})



// delete a product via product id 

app.delete("/products/:id", async (req,res)=>{

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

})






app.listen(3000,()=>{
    console.log(`Your application is running on port 3000`);
})
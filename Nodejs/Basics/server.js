

const express = require("express");
var { productsData } = require("./products");
const bodyParser = require("body-parser");
const app = express();


// app.get("/",(req,res)=>{
//     res.status(201).send("We are learning nodejs");
// })

app.use(bodyParser.json());


app.get("/products",(req,res)=>{
    res.status(200).send(productsData);
})


app.get("/products/:id",(req,res)=>{

    const product = productsData.find((product)=> product.id==req.params.id);

    if(!product){
        return res.status(404).send({message:"Product Not Found"});
    }
    
    res.status(200).send(product);
})


app.post("/products",(req,res)=>{

   const newProduct = req.body;
   newProduct.id = Math.floor(Math.random() * 100).toString();
   productsData.push(newProduct);

   return res.status(201).send({message:"Product created successfully"});

})

app.put("/products/:id",(req,res)=>{


    var product = productsData.find((product)=> product.id==req.params.id);

    if(!product){
        return res.status(404).send({message:"Product Not Found"});
    }


    const updateValues = req.body;

    Object.keys(updateValues).forEach((key)=>{
        product[key]=updateValues[key];
    })


    return res.status(200).send(product);
})





app.delete("/products/:id",(req,res)=>{

    const productId = req.params.id;

    const product = productsData.find((product)=> product.id==req.params.id);

    if(!product){
        return res.status(404).send({message:"Product Not Found"});
    }

    productsData = productsData.filter((product)=>{
        return product.id!==productId;
    })

    return res.status(200).send({message:`Product with id:${productId} has been deleted successfully`});
})




app.listen(3000,()=>{
    console.log("Your application is running on port 3000");
})
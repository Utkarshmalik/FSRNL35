const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


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



require("./src/Routes/product.routes")(app);
require("./src/Routes/auth.routes")(app);


app.listen(3000,()=>{
    console.log(`Your application is running on port 3000`);
})
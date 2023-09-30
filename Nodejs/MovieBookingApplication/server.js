const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config()
const { DB_URL } = require("./configs/db.config");
const { PORT } = require("./configs/server.config");


const app = express();



mongoose.connect(DB_URL)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the database");
})


app.use(bodyParser.json());



require("./src/Routes/auth.routes")(app);


app.listen(PORT,()=>{
    console.log(`Your application is running on port 3000`);
})
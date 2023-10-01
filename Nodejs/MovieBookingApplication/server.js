const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config()
const { DB_URL } = require("./configs/db.config");
const { PORT } = require("./configs/server.config");
const cors = require("cors");

const app = express();

app.use(cors())


mongoose.connect(DB_URL)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the database");
})


app.use(bodyParser.json());



require("./src/Routes/auth.routes")(app);
require("./src/Routes/movie.routes")(app);
require("./src/Routes/theatre.routes")(app);
require("./src/Routes/booking.routes")(app);
require("./src/Routes/payment.routes")(app);


app.listen(PORT,()=>{
    console.log(`Your application is running on port 3000`);
})
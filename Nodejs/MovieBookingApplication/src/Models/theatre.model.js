

const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
      city:{
        type:String,
        required:true
    },
      pinCode:{
        type:Number,
        required:true
    },
    movies:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:'movie_gfg_35'
    }
})

module.exports = mongoose.model("theatre_gfg_35",theatreSchema);
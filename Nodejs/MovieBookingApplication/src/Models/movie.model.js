const mongoose = require("mongoose");
const { releaseStatus } = require("../utils/constants");



const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    casts:{
        type:[String],
        required:true
    },
    trailerUrl:{
        type:String,
        required:true
    },
    posterUrl:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    releaseDate:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    releaseStatus:{
        type:String,
        required:true,
        enum: Object.values(releaseStatus)
    }
})


const movieModel = mongoose.model("movie_gfg_35",movieSchema);

module.exports = movieModel;
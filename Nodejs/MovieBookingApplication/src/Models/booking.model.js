const mongoose = require("mongoose");
const { bookingStatus } = require("../utils/constants");

const bookingSchema = new mongoose.Schema({

    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user_gfg",
        required:true
    },
    movieId:{
          type:mongoose.SchemaTypes.ObjectId,
        ref:"movie_gfg_35",
        required:true

    },
    theatreId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"theatre_gfg_35",
        required:true

    },
    timings:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:Object.values(bookingStatus),
        default:bookingStatus.inProgress
    },
    totalCost:{
        type:Number
    },
    noOfSeats:{
        type:Number
    }

});

const bookingModel = mongoose.model("booking_gfg_35",bookingSchema);


module.exports = bookingModel;
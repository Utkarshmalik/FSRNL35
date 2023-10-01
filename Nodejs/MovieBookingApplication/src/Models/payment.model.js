const mongoose = require("mongoose");
const { paymentStatus } = require("../utils/constants");



const paymentSchema = new mongoose.Schema({

    bookingId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"booking_gfg_35"
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        requried:true,
        enum:Object.values(paymentStatus),
        default:paymentStatus.pending
    }

})

const paymentModel = mongoose.model("payment_gfg_35",paymentSchema);


module.exports =  paymentModel;
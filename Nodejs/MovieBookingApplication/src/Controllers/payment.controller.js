const bookingModel = require("../Models/booking.model");
const paymentModel = require("../Models/payment.model");
const { paymentStatus, bookingStatus } = require("../utils/constants");

const createPayment=async (req,res)=>{

    const {bookingId, status,amount} =  req.body;

    const savedBooking = await bookingModel.findById(bookingId);


  
    try{
        const payment = await paymentModel.create(req.body);

        if(payment.status===paymentStatus.success){

            savedBooking.status =  bookingStatus.completed;
            await savedBooking.save();

        }
        return res.status(200).send({message:"Payment is successful"});
        
    }catch(err){
        return res.status(500).send({message:"Internal Server Error"+err});
    }


}

const getAllBookings=async (req,res)=>{
 try{
        const bookings = await bookingModel.find({}).populate("movieId").populate("theatreId").populate("userId");
        return res.status(200).send(bookings);
    }catch(err){
        return res.status(500).send({message:"Internal Server Error"+err});
    }



}


const getAllPayments=async (req,res)=>{

}


const getPaymentByPaymentId=async (req,res)=>{

}

module.exports={
    createPayment,
    getAllPayments,
    getPaymentByPaymentId
}


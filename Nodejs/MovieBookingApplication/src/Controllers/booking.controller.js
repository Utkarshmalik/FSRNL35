const bookingModel = require("../Models/booking.model");
const { bookingStatus } = require("../utils/constants");


const createBooking=async (req,res)=>{

    const user = req.user;

    const {movieId, theatreId, timings, noOfSeats } = req.body;

    const bookingObj={
        theatreId:theatreId,
        movieId:movieId,
        userId:user._id,
        timings:timings,
        totalCost:noOfSeats*500,
        noOfSeats
    };

    try{
        const booking = await bookingModel.create(bookingObj);
        return res.status(200).send(booking);
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


const getBookingById=async (req,res)=>{

    const id = req.params.id;

 try{
        const bookings = await bookingModel.findById(id).populate("movieId").populate("theatreId").populate("userId");
        return res.status(200).send(bookings);
    }catch(err){
        return res.status(500).send({message:"Internal Server Error"+err});
    }
}

const updateBooking=()=>{

}

const cancelBooking=async (req,res)=>{

    const id = req.params.id;

 try{
        const savedBooking = await bookingModel.findById(id);

        if(!savedBooking){
            return res.status(400).send({message:"Invalid Booking Id"});
        }

        if(!savedBooking.userId.equals(req.user._id)){
            return res.status(403).send({message:"User has insufficient permissions to cancel this booking"});
        }

        savedBooking.status =  bookingStatus.cancelled;
        await savedBooking.save();
        return res.status(200).send({message:"Booking cancelled successfully"});
    }catch(err){
        return res.status(500).send({message:"Internal Server Error"+err});
    }

}



module.exports={
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    cancelBooking
}
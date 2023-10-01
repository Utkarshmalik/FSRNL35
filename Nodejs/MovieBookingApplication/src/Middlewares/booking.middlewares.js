

const validateCreateBookingRequest = async (req,res,next)=>{

    const {theatreId, movieId}  = req.body;


    const savedTheatre = await theatreModel.findById(theatreId);

    if(!savedTheatre){
        return res.status(400).send({message:"Theatre doesn't exists"});
    }

    const savedMovie = await movieModel.findById(movieId);

    if(!savedMovie){
        return res.status(400).send({message:"Movie doesn't exists"});
    }

    if(!savedTheatre.movies.includes(movieId)){
        return res.status(400).send({message:"Failed! Selected Movie is not available in given theatre"});
    }
    
    next();
}


module.exports={
    validateCreateBookingRequest
}
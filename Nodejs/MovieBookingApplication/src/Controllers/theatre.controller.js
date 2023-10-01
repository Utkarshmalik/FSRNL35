const movieModel = require("../Models/movie.model");
const theatreModel = require("../Models/theatre.model");


const createTheatre= async (req,res)=>{

    try{
    const theatre = await theatreModel.create(req.body);

    return res.status(201).send(theatre);

    }catch(err){
    return res.status(500).send({message:err.message});

    }
}

const getAllTheatres = async (req,res)=>{
       try{
    const theatres = await theatreModel.find({});

    return res.status(200).send(theatres);

    }catch(err){
    return res.status(500).send({message:err.message});

    }
}


const getTheatreById = async (req,res)=>{

    const id = req.params.id;

       try{
    const theatre = await theatreModel.findById(id).populate("movies");

    if(!theatre){
        return res.status(404).send({message:"Theatre Not Found"});
    }

    return res.status(200).send(theatre);

    }catch(err){
    return res.status(500).send({message:err.message});

    }

}

const addMoviesToTheatre= async (req,res)=>{

    const {theatreId, movieId} = req.params;

    const savedTheatre = await theatreModel.findById(theatreId);

    if(!savedTheatre){
        return res.status(400).send({message:"Theatre doesn't exists"});
    }

    const savedMovie = await movieModel.findById(movieId);

    if(!savedMovie){
        return res.status(400).send({message:"Movie doesn't exists"});
    }

    savedTheatre.movies.push(movieId);

    await savedTheatre.save();

    return res.status(200).send({message:"Movie Added successfully"});
}


const checkIfMovieRunningInTheatre = async (req,res)=>{ 

    const {theatreId, movieId} = req.params;

    const savedTheatre = await theatreModel.findById(theatreId);

    if(!savedTheatre){
        return res.status(400).send({message:"Theatre doesn't exists"});
    }

    const savedMovie = await movieModel.findById(movieId);

    if(!savedMovie){
        return res.status(400).send({message:"Movie doesn't exists"});
    }
    
    const response = {
        isRunning : savedTheatre.movies.includes(movieId)
    }

    return res.status(200).send(response);
}


module.exports={
    createTheatre,
    getAllTheatres,
    getTheatreById,
    addMoviesToTheatre,
    checkIfMovieRunningInTheatre
}


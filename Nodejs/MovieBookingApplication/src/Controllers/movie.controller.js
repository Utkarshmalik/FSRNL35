const movieModel = require("../Models/movie.model")


const createMovie= async (req,res)=>{

    try{
    const movie = await movieModel.create(req.body);

    return res.status(201).send(movie);

    }catch(err){
    return res.status(500).send({message:err.message});

    }
}

const getAllMovies = async (req,res)=>{
       try{
    const movies = await movieModel.find({});

    return res.status(200).send(movies);

    }catch(err){
    return res.status(500).send({message:err.message});

    }
}


const getMovieById = async (req,res)=>{

    const id = req.params.id;

       try{
    const movie = await movieModel.findById(id);

    if(!movie){
        return res.status(404).send({message:"Movie Not Found"});
    }

    return res.status(200).send(movie);

    }catch(err){
    return res.status(500).send({message:err.message});

    }

}


module.exports={
    createMovie,
    getAllMovies,
    getMovieById
}


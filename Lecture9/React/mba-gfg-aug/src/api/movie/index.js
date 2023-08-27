import axios from 'axios';


export const getAllMovies = async ()=>{

    const response = await axios.get("https://movie-booking-application.onrender.com/mba/api/v1/movies");
    
    return response;

}


export const getMovieById = async (id)=>{

    const response = await axios.get(`https://movie-booking-application.onrender.com/mba/api/v1/movies/${id}`);
    
    return response;

}
import axios from 'axios';

const endPoint = process.env.REACT_APP_MBA_BACKEND_URL;

export const getAllMovies = async ()=>{

    const response = await axios.get(`${endPoint}/mba/api/v1/movies`);
    
    return response;

}

export const getMovieById = async (id)=>{

    const response = await axios.get(`${endPoint}/mba/api/v1/movies/${id}`);
    
    return response;

}


export const createMovie = async (movieDetails)=>{

    const response = await axios.post(`${endPoint}/mba/api/v1/movies`
    ,movieDetails,{
        headers:{
            "x-access-token":localStorage.getItem("token")
        }
    });
    
    return response;

}
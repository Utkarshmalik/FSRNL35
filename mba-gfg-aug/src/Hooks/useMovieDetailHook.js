import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../api/movie";


const useMovieDetailHook = ()=>{

    const {movieId} =  useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovieDetals =async ()=>{

        const response = await getMovieById(movieId);
        setMovieDetails(response.data);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchMovieDetals();
    },[])

    return {isLoading, movieDetails};
}

export {useMovieDetailHook}
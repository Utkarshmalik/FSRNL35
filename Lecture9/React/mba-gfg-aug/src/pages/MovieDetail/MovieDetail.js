import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import Spinner from "../../Components/common/Spinner/Spinner";
import { getMovieById } from "../../api/movie";
import ReactPlayer from "react-player";
import "./MovieDetail.css";

function MovieDetail(){

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

    const showMovieDetails=()=>{

        return <div className="bg-light">

            <div className="bg-black box">
                <ReactPlayer url={movieDetails.trailerUrl} controls={true} className="video" width="70%" height="100%" />
            </div>

            <hr/>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <h3> {movieDetails.name}</h3>
                <h6> {movieDetails.director}</h6>
                <h6> {movieDetails.releaseDate}</h6>

            </div>
        </div>

    }

    return <div>

        <Header/>

        <div>
            {(isLoading) ? <Spinner/> : showMovieDetails() }

        </div>

    </div>
}

export default MovieDetail;
import { useEffect, useState } from "react";
import Spinner from "../../Components/common/Spinner/Spinner";
import { getAllMovies } from "../../api/movie";
import Header from "../../Components/Header/Header";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
function LandingPage(){

    const [isLoading, changeIsLoading] = useState(true);
    const [movieData, setMovieData] = useState(null);
    const navigate=useNavigate();

    const fetchMovies=async ()=>{
        const response= await getAllMovies();
        changeIsLoading(false);
        setMovieData(response.data);
    }
    useEffect(()=>{
        fetchMovies();
    },[]);


    const onMovieClick=(movieId)=>{
        navigate(`/movies/${movieId}`);
    }


    const showMovies=()=>{
        return <div className="d-flex flex-wrap justify-content-center align-items-center ">
            {
                movieData.map((movie)=>{

                   return  <div onClick={()=>onMovieClick(movie._id)} className="border border-light border-5 m-2 p-2 movie">
                        <div className="d-flex flex-column justify-content-center align-items-center ">

                            <img src={movie.posterUrl} style={{height:"200px"}} />
                            <h5> {movie.name} </h5>
                        </div> 
                    </div>    

                })
            }
        </div>
    }
    
    return <div className="bg-dark text-white">

        <Header/>

        <h2 className="text-center fw-bolder px-2"> Recommended Movies </h2>

        {
        (isLoading) ? <Spinner/> : showMovies()
        }
    </div>

}

export default LandingPage;
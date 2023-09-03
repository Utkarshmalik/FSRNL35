
import { useContext, useEffect, useState } from "react";
import { getAllMovies } from "../api/movie"
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";

const useLandingPageLogic=()=>{

       const {theme} = useContext(ThemeContext);
    const isDarkTheme = theme==="dark";

    const [isLoading, changeIsLoading] = useState(true);

    const [movieData, setMovieData] = useState([]);
    
    const navigate=useNavigate();

    const fetchMovies=async ()=>{
        const response= await getAllMovies();
        changeIsLoading(false);
        setMovieData(response.data);
    }

    //componentDidMount 
    //componentDidUpdate 
    //componentWillUnMount


    useEffect(()=>{
        fetchMovies();

        return ()=>{
        }

    },[]);


    const onMovieClick=(movieId)=>{
        navigate(`/movies/${movieId}`);
    }


    const showMovies=()=>{
        return <div className="d-flex flex-wrap justify-content-center align-items-center ">
            {
                movieData.map((movie)=>{

                   return  <div onClick={()=>onMovieClick(movie._id)} className= {((isDarkTheme)?"border-light":"border-dark") + " border border-5 m-2 p-2 movie"}>
                        <div className="d-flex flex-column justify-content-center align-items-center ">

                            <img src={movie.posterUrl} style={{height:"200px"}} />
                            <h5> {movie.name} </h5>
                        </div> 
                    </div>    

                })
            }
        </div>
    }

    return {isLoading, showMovies};

}

export  {useLandingPageLogic};
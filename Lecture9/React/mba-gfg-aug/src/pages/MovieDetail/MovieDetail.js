import Header from "../../Components/Header/Header";
import Spinner from "../../Components/common/Spinner/Spinner";
import ReactPlayer from "react-player";
import "./MovieDetail.css";
import { useMovieDetailHook } from "../../Hooks/useMovieDetailHook";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function MovieDetail(){ 

    const {isLoading, movieDetails} = useMovieDetailHook();
       const  {theme} = useContext(ThemeContext);
    const isDarkTheme = theme==="dark";

    return <div>

        <Header/>

        <div>
            {(isLoading) ? <Spinner/> : <div className="bg-light">

                    <div className={((isDarkTheme)?"bg-black":"bg-light")+ " box"}>
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
        </div>

    </div>
}

export default MovieDetail;
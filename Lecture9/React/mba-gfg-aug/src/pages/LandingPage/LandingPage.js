import Spinner from "../../Components/common/Spinner/Spinner";
import Header from "../../Components/Header/Header";
import "./LandingPage.css";
import {useLandingPageLogic} from "../../Hooks/useLandingPageHook";

function LandingPage(){

    const {isLoading, showMovies} = useLandingPageLogic();

    return <div className="bg-dark text-white">
        <Header/>
        <h2 className="text-center fw-bolder px-2"> Recommended Movies </h2>
        {(isLoading) ? <Spinner/> : showMovies() }
    </div>
}


export default LandingPage;
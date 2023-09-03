import Spinner from "../../Components/common/Spinner/Spinner";
import Header from "../../Components/Header/Header";
import "./LandingPage.css";
import {useLandingPageLogic} from "../../Hooks/useLandingPageHook";
import {ThemeContext} from '../../App';
import { useContext } from "react";

function LandingPage(){

    const {theme} = useContext(ThemeContext);
    const isDarkTheme = theme==="dark";

    const {isLoading, showMovies} = useLandingPageLogic();

    return <div className={ (isDarkTheme)?"bg-dark text-white":"bg-light text-dark"}>
        <Header/>
        <h2 className="text-center fw-bolder px-2"> Recommended Movies </h2>
        {(isLoading) ? <Spinner/> : showMovies() }
    </div>
}


export default LandingPage;
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage/LandingPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import AuthHoc from './HOC/AuthHOC';
import MovieCreatePage from './pages/MovieCreation/MovieCreatePage';
import PageNotFound from './Components/common/PageNotFound/PageNotFound';

function App() {
  return <Router>

    <Routes>
          <Route path="/login" element={<Login/>} />
          <Route exact path="/" element={<AuthHoc id="landingPage"><LandingPage/></AuthHoc> }  />
          <Route  path="/movies/:movieId" element={<AuthHoc id="getMovie"><MovieDetail/></AuthHoc>}  />
          <Route  path="/movies/create" element={<AuthHoc id="createMovie"><MovieCreatePage/></AuthHoc>}  />
          <Route  path="/*" element={<PageNotFound/>}  />
    </Routes>
     


    </Router>
}

export default App;

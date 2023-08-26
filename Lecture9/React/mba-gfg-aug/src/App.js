import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return <Router>

    <Routes>
          <Route path="/login" element={<Login/>} />
          <Route exact path="/" element={<LandingPage/>}  />
          <Route  path="/*" element={<h1>  Page not Found</h1>}  />
    </Routes>
     


    </Router>
}

export default App;

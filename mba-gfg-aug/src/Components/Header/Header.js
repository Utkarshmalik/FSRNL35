import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { useContext } from 'react';

function Header() {

    const  {theme, changeTheme} = useContext(ThemeContext);

    const isDarkTheme = theme==="dark";
    
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem("userTypes")==="ADMIN";

    const onLogout=()=>{
        localStorage.clear();
        navigate("/login");
    }

    const onToggleTheme=()=>{
      if(theme==="dark"){
        changeTheme("light");
      }else{
        changeTheme("dark");
      }
    }

    const onCreateMovie=()=>{
      navigate("/movies/create");
    }

  return (
    <>
      <Navbar bg={(isDarkTheme)?"dark":"light"} data-bs-theme={ (isDarkTheme)?"dark":"light"}>
        <Container>
          <Navbar.Brand href="#home">Book My Show </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="#features">Shows</Nav.Link>
            <Nav.Link href="#pricing">Events</Nav.Link>
          </Nav>
        </Container>
        {isAdmin && 
                <Button className='mx-4' onClick={onCreateMovie} variant={(isDarkTheme)?"light":"dark"}>  Create Movie  </Button>

        }
        <Button className='mx-4' onClick={onLogout} variant={(isDarkTheme)?"light":"dark"}>  Logout </Button>

        <Button className='mx-4' onClick={onToggleTheme} variant={(isDarkTheme)?"light":"dark"}>   Theme </Button>

      </Navbar>
    </>
  );
}

export default Header;
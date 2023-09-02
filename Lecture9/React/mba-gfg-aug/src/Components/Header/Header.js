import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
    const isAdmin = localStorage.getItem("userTypes")==="ADMIN";

    const onLogout=()=>{
        localStorage.clear();
        navigate("/login");
    }
    const onCreateMovie=()=>{
      navigate("/movies/create");
    }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Book My Show </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="#features">Shows</Nav.Link>
            <Nav.Link href="#pricing">Events</Nav.Link>
          </Nav>
        </Container>
        {isAdmin && 
                <Button className='mx-4' onClick={onCreateMovie} variant='light'>  Create Movie  </Button>

        }
        <Button onClick={onLogout} variant='light'>  Logout </Button>
      </Navbar>
    </>
  );
}

export default Header;
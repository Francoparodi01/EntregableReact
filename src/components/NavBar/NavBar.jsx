import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { AiOutlineCreditCard } from "react-icons/ai";
import CartWidget from '../CartWidget/CartWidget';
import { HiUserCircle } from "react-icons/hi";
import '../.././Style.css';



function NavBar() {
  return (
    <Navbar className='navBar' expand="lg">
      <Container>
          <Navbar.Brand href="#home">
            <AiOutlineCreditCard size={70}/>
          </Navbar.Brand>
        <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id='textoNavBar' href="#home">Home</Nav.Link>
                <Nav.Link id='textoNavBar' href="#link">About us</Nav.Link>
                <Nav.Link id='textoNavBar' href="#link">Products</Nav.Link>
              </Nav>
                <CartWidget/>
                <Button id='divSteam' variant="secondary"><HiUserCircle size={25} id='SteamLogo'/> Iniciar sesión</Button>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
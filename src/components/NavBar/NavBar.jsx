import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { GiAk47 } from "react-icons/gi";
import CartWidget from '../CartWidget/CartWidget';
import { FaSteam } from "react-icons/fa";
import '../.././Style.css';



function NavBar() {
  return (
    <Navbar className='navBar' expand="lg">
      <Container>
          <Navbar.Brand href="#home">
            <GiAk47 size={70}/>
          </Navbar.Brand>
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id='textoNavBar' href="#home">Home</Nav.Link>
                <Nav.Link id='textoNavBar' href="#link">About us</Nav.Link>
                  <NavDropdown title="Category" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/category/jewelery">Jewelery</NavDropdown.Item>
                    <NavDropdown.Item href="/category/electronics">Electronics</NavDropdown.Item>
                    <NavDropdown.Item href="/category/men's clothing">Men's clothing</NavDropdown.Item>
                    <NavDropdown.Item href="/category/women's clothing">Women's clothing</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
                <CartWidget/>
                <Button id='divSteam' variant="secondary"><FaSteam size={25} id='SteamLogo'/> Iniciar sesión</Button>{' '}
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
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
        <Navbar.Brand href="#home">MercadoCs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id='textoNavBar' href="#home">Home</Nav.Link>
                <Nav.Link id='textoNavBar' href="#link">Shop</Nav.Link>
                <Nav.Link id='textoNavBar' href="#link">Sell Inventory</Nav.Link>
                  <NavDropdown title="Deals" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">$200 or above</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">$100 and above</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">$50 and above</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">$25 to $50</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">$10 to $25</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">$5 to $10</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.7">$1 to $5</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.8">$0.5 to $1 </NavDropdown.Item>
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
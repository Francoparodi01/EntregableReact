import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { AiOutlineUser} from "react-icons/ai";
import CartWidget from '../CartWidget/CartWidget';
import { AiFillShopping } from "react-icons/ai";
import NigthMode from '../NightMode/NigthMode';
import React, {useState, useEffect} from "react";
import '../.././Style.css';


const NavBar = () => {
  const [navColor, setNavColor] = useState("#8b77fd")
  
  const onChangeColor = (event) => {
      const color = event.target.value;
      setNavColor(color)
  }
  console.log(navColor);

  return (
    <Navbar className='navBar' expand="lg" style={{backgroundColor: navColor}}>
      <Container>
          <Navbar.Brand href="#home">
            <AiFillShopping size={70}/>
          </Navbar.Brand>
          <Navbar.Brand href="/">MyShop</Navbar.Brand>
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
                  <NigthMode handleColor={onChangeColor}/>
              </Nav>
                <CartWidget/>
                <Button id='divSteam' variant="secondary"><AiOutlineUser size={25} id='SteamLogo'/> Iniciar sesión</Button>{' '}
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
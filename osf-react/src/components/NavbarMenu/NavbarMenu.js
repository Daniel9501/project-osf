import React from 'react';
import { Navbar,Nav,NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarMenu.scss';
import './NavbarMenu.css';
import Hamburger from '../../../node_modules/hamburger-react';
import logo from '../Img/logo.webp';
import NavImage from '../Img/dropdown-img.webp';

function NavbarMenu() {
    return(
        // Navigation bar
        <Navbar bg="light" expand="lg" sticky="top">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" >{/* Hamburger Menu */}
                    <Hamburger></Hamburger>
                </Navbar.Toggle>

                <Navbar.Brand href="#home" className="logo">
                    <img className="logoImg" src={logo} alt="Logo" />
                </Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav">{/* Dropdown when press on Hamburger Menu */}
                    <Nav className="mr-auto" sticky="none">
                        <NavDropdown title="SERVICES" id="basic-nav-dropdown" sticky="none">
                            <NavDropdown title="PRODUCT CATEGORIES" id="nav-drop-categ" sticky="none">
                                <NavDropdown.Item href="#action/3.1">Accessories</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Alcohol</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Art</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Books</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Drink</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Electronics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">Flower & Plants</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.8">Food</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.9">Gadgets</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.10">Garden</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.11">Grocery</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.12">Home</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.13">Jewelry</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.14">Kids & Baby</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.15">Men's Fashion</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.16">Mobile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.17">Motorcycles</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.18">Movies</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.19">Music</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.20">Ofiice</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.21">Pets</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.22">Romantic</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.23">Sport</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.24">Toys</NavDropdown.Item>
                            </NavDropdown>
                        
                            <NavDropdown title="SALE" id="nav-drop-categ" sticky="none">
                                <NavDropdown.Item href="#action/3.1">Accessories</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Alcohol</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Art</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Books</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Drink</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Electronics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">Flower & Plants</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.8">Food</NavDropdown.Item>
                            </NavDropdown>
                        </NavDropdown>
                        <NavDropdown title="COMPANY" id="basic-nav-dropdown" sticky="none"></NavDropdown>
                        <NavDropdown title="LIBRARY" id="basic-nav-dropdown" sticky="none"></NavDropdown>          
                        <NavDropdown title="CONTACT US" id="basic-nav-dropdown" sticky="none"></NavDropdown>
                        <Image src={NavImage} fluid sticky="none"/>
                    </Nav>   
                </Navbar.Collapse>
        </Navbar>
        
    );
}

export default NavbarMenu;


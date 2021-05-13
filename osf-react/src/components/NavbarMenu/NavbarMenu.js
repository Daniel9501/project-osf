import React from 'react';
import { Navbar,Nav,NavDropdown, Image, Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarMenu.scss';
import './NavbarMenu.css';
import Hamburger from '../../../node_modules/hamburger-react';
import logo from '../Img/logo.webp';
import NavImage from '../Img/dropdown-img.webp';
import Search from '../Img/search.png';
import ProfileUser from '../Img/profileUser.png'; 
import Heart from '../Img/Heart.png';
import BagForShopping from '../Img/BagForShopping.png';

function NavbarMenu() {
    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <Hamburger></Hamburger>
            </Navbar.Toggle>
            <Navbar.Brand href="#home" className="logo">
                <img className="logoImg" src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
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
            <div className="footerDetails">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                CONTACT
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <div>
                                <h5>Headquarters:</h5>
                                <h5>5600, Blvd. des Galeries, Bur 530</h5>
                                <h5>Quebeb, Quebec G2K 2H6</h5><br />
                                <h5>contact@osf-global.com</h5><br />
                                <h5>+1 (888) 548-4344</h5>
                            </div>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                CATEGORIES
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                ABOUT
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            
            <Navbar expand="lg" id="navBarBottom">
                <div className="flex1">
                <div className="numberFooter">
                    <h1>0</h1>
                </div>  
                <div className="numberFooter">
                    <h1>0</h1>
                </div> 
                </div>     
                <Image  className="imgFooter" src={Search} />
                <Image  className="imgFooter" src={ProfileUser} />
                <Image  className="imgFooter" src={Heart} />
                <Image  className="imgFooter" src={BagForShopping} />
            </Navbar>
            
        </Navbar>
        
    );
}

export default NavbarMenu;


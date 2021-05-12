import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarMenu.scss';
import './NavbarMenu.css';
import Hamburger from '../../../node_modules/hamburger-react';
import logo from '../Img/logo.webp';

function NavbarMenu() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <Hamburger></Hamburger>
            </Navbar.Toggle>
            <Navbar.Brand href="#home" className="logo">
                <img className="logoImg" src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                        <NavDropdown title="PRODUCT CATEGORIES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Accessories</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Alcohol</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Art</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Books</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Drink</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Electronics</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gadgets</NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success" style={{marginTop: 40 }}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarMenu;



import NavDropdown from '../../../node_modules/react-bootstrap/NavDropdown';
import Nav from '../../../node_modules/react-bootstrap/Nav';
import Form from '../../../node_modules/react-bootstrap/Form';
import FormControl from '../../../node_modules/react-bootstrap/FormControl';
import Button from '../../../node_modules/react-bootstrap/Button';
import Navbar from '../../../node_modules/react-bootstrap/Navbar';
import './NavbarMenu.scss';
import Hamburger from '../../../node_modules/hamburger-react';
function NavbarMenu() {
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-p</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <Hamburger></Hamburger>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarMenu;


import React from 'react';
import { Navbar, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavbarMenu/NavbarMenu.css';
import Search from '../Img/search.png';
import ProfileUser from '../Img/profileUser.png'; 
import Heart from '../Img/Heart.png';
import BagForShopping from '../Img/BagForShopping.png';
function Footer() {
    return(
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
    );
}

export default Footer;


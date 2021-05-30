import React from 'react';
import { Link } from 'react-router-dom';

import './PagesFooterDesktop.css';

import Facebook from '../Img/Socialicons/f.png';
import Google from '../Img/Socialicons/g.png';
import Twitter from '../Img/Socialicons/t.png';
import Pinterest from '../Img/Socialicons/p.png';
import HourGlass from '../Img/clepsidra.png';

function PagesfooterDesktop() {
    return(
        <div className="footerDetailsDesktop"> 
            <div className="copyRight">
                <p className="text">&copy;Copyright2019.<br />All rights reserved.</p>
            </div>
            <div className="detailsContact">
            <p className="textDetailsB">CONTACT</p>
            <p className="textDetailsa">Headquarters:</p>
            <p className="textDetailsa">5600, Blvd. des Galeries, Bur 530</p>
            <p className="textDetailsa">Quebec,Quebec G2K 2H6</p><br />
            <p className="textDetailsa">contact@osf-global.com</p><br />
                <p className="textDetailsa">+1 (888) 548-4344</p>
            </div>
            <div className="Categories">
                <p className="textDetailsB">CATEGORIES</p>
            </div>
            <div className="detailsCategories">
                <Link to="/404"><p className="textDetailsd">Alcohol</p></Link>
                <Link to="/404"><p className="textDetailsd">Art</p></Link>
                <Link to="/404"><p className="textDetailsd">Books</p></Link>
                <Link to="/404"><p className="textDetailsd">Drink</p></Link>
                <Link to="/404"><p className="textDetailsd">Electronics</p></Link>
            </div>
            <div className="detailsCategoriesSecond">
                <Link to="/404"><p className="textDetailsd">Home</p></Link>
                <Link to="/404"><p className="textDetailsd">Jewelry</p></Link>
                <Link to="/404"><p className="textDetailsd">Kids & Baby</p></Link>
                <Link to="/404"><p className="textDetailsd">Men's Fashion</p></Link>
                <Link to="/404"><p className="textDetailsd">Mobile</p></Link>
                <Link to="/404"><p className="textDetailsd">Motorcycles</p></Link>
                <Link to="/404"><p className="textDetailsd">Movies</p></Link>
                <Link to="/404"><p className="textDetailsd">Music</p></Link>
            </div>
            <div className="detailsCategoriesThird">
                <Link to="/404"><p className="textDetailsd">Sport</p></Link>
                <Link to="/404"><p className="textDetailsd">Toys</p></Link>
                <Link to="/404"><p className="textDetailsd">Travel</p></Link>
                <Link to="/404"><p className="textDetailsd">Women's Fashion</p></Link>
            </div>
            <div className="About">
                <p className="textDetailsB">ABOUT</p>
            </div>
            <div className="detailsCategoriesAbout">
                <Link to="/404"><p className="textDetailsd">About us</p></Link>
                <Link to="/404"><p className="textDetailsd">Delivery</p></Link>
                <Link to="/404"><p className="textDetailsd">Testimonials</p></Link>
                <Link to="/404"><p className="textDetailsd">Contact</p></Link>
            </div>
            <div className="socialIcons">
                <Link to={{ pathname: "https://facebook.com" }} target="_blank"><img className="facebook" src={Facebook} alt="Facebook" /></Link>
                <Link to={{ pathname: "https://www.google.com" }} target="_blank"><img className="google dist" src={Google} alt="Google" /></Link>
                <Link to={{ pathname: "https://twitter.com" }} target="_blank"><img className="twitter dist" src={Twitter} alt="Twitter" /></Link>
                <Link to={{ pathname: "https://www.pinterest.com" }} target="_blank"><img className="pinterest dist" src={Pinterest} alt="Pinterest" /></Link>
            </div>
            <div className="hourGlassContainer">
                <Link to="/Release"><img className="hourGlass" src={HourGlass} alt="HourGlass" /></Link>
            </div>
        </div>
    );
}

export default PagesfooterDesktop;


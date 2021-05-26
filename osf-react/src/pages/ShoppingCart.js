import React from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import Services from '../components/Main/Services/Services.js';
import TitleCart from '../components/ShoppingCart/TitleCart/TitleCart.js';
import BodyCart from '../components/ShoppingCart/BodyCart/BodyCart.js';

import './ShoppingCart.css';

function ShoppingCart() {
  return (
    <div className="entirePage">
        <div className="navigationMenu">
            <NavbarMenu />
        </div>
        <div className="mainPage">
            <TitleCart />
            <BodyCart />
            <Services />
            <Pagesfooter />
            <Footer /> 
        </div>
         
    </div>
  );
}

export default ShoppingCart;

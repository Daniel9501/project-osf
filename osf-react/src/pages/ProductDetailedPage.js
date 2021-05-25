import React from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import Services from '../components/Main/Services/Services.js';
import Popular from '../components/PDP/PopularItems/Popular.js';
import Titlepdp from '../components/PDP/Titlepdp/Titlepdp.js';
import Item from '../components/PDP/Item/Item.js';

import './CategoryLandingPage.css';
function ProductDetailedPage() {
  return (
    <div className="entirePage">
        <div className="navigationMenu">
            <NavbarMenu />
        </div>
        <div className="mainPage">
            <Titlepdp />
            <Item />
            <Popular />
            <Services />
            <Pagesfooter />
            <Footer /> 
        </div>
         
    </div>
  );
}

export default ProductDetailedPage;

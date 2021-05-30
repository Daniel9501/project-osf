import React from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import PagesfooterDesktop from '../components/PagesFooter/PagesFooterDesktop.js';
import Services from '../components/Main/Services/Services.js';
import TitleCart from '../components/ShoppingCart/TitleCart/TitleCart.js';
import BodyCart from '../components/ShoppingCart/BodyCart/BodyCart.js';

import './ShoppingCart.css';

function ShoppingCart() {
  return (
    <div>
      <div className="entirePageMobileSC">
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
      <div className="entirePageDesktopSC">
        <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        <div className="secondRow">
          <TitleCart />
        </div>
        <div className="thirdRow">
          <BodyCart />
        </div>
        <div className="theSeventhRow">
          <PagesfooterDesktop />
        </div>
      </div>       
  </div>
  );
}

export default ShoppingCart;

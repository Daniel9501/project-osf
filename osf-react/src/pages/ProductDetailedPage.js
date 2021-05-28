import React from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import Services from '../components/Main/Services/Services.js';
import Popular from '../components/PDP/PopularItems/Popular.js';
import Titlepdp from '../components/PDP/Titlepdp/Titlepdp.js';
import Item from '../components/PDP/Item/Item.js';
import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop.js';
import PagesfooterDesktop from '../components/PagesFooter/PagesFooterDesktop.js';
import Cards from '../components/CLPMobile/Cards/Cards.js';
import Description from '../components/PDP/Item/Description.js';

import './ProductDetailedPage.css';

function ProductDetailedPage() {
  return (
    <div className="productDetailedPage">
      <div className="entirePageMobile">
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
      <div className="entirePageDesktop">
        <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        <div className="secondRow">
          <Titlepdp />
          <Item />
          <Description />
        </div>
        <div className="thirdRow">
        </div>
        <div className="theFifthRow">
          <Cards /> 
        </div>
        <div className="theSeventhRow">
          <PagesfooterDesktop />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailedPage;

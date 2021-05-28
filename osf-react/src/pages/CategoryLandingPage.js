import React from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import PagesfooterDesktop from '../components/PagesFooter/PagesFooterDesktop.js';
import ClpBreadCrumb from '../components/CLPMobile/BreadCrumb/ClpBreadCrumb.js'
import ClpServices from '../components/CLPMobile/Title/ClpServices.js'
import Filter from '../components/CLPMobile/Filter/Filter.js'
import './CategoryLandingPage.css';
import Cards from '../components/CLPMobile/Cards/Cards.js';
import CardsDesktopLanding from '../components/CLPMobile/CardsDesktopLanding/CardsDesktopLanding.js';
import FeaturedProducts from '../components/Main/FeaturedProducts/FeaturedProducts.js';
function CategoryLandingPage() {
  return (
    <div className="categoryLandingPage">
      <div className="entirePageMobile">
        <div className="navigationMenu">
            <NavbarMenu />
        </div>
        <div className="mainPage">
            <ClpBreadCrumb />
            <ClpServices />
            <Filter />
            <Cards />
            <Pagesfooter />
            <Footer /> 
        </div>
      </div>
      <div className="entirePageDesktop">
        <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        <div className="secondRow">
          <ClpBreadCrumb />
          <ClpServices />
          <Filter />
        </div>
        <div className="thirdRow">
          <CardsDesktopLanding />
        </div>
        <div className="theFifthRow">
          <FeaturedProducts /> 
        </div>
        <div className="theSeventhRow">
          <PagesfooterDesktop />
        </div>
      </div> 
    </div>
  );
}

export default CategoryLandingPage;

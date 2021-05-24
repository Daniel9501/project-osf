import React from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import ClpBreadCrumb from '../components/CLPMobile/BreadCrumb/ClpBreadCrumb.js'
import ClpServices from '../components/CLPMobile/Title/ClpServices.js'
import Filter from '../components/CLPMobile/Filter/Filter.js'
import './CategoryLandingPage.css';
import Cards from '../components/CLPMobile/Cards/Cards.js';
function CategoryLandingPage() {
  return (
    <div className="entirePage">
        <div className="navigationMenu">
            <NavbarMenu />
        </div>
        <div className="mainPage">
            <ClpBreadCrumb />
            <Filter />
            <ClpServices />
            <Cards />
            <Pagesfooter />
            <Footer /> 
        </div>
         
    </div>
  );
}

export default CategoryLandingPage;

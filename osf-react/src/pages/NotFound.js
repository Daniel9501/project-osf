import React from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import ClpBreadCrumb from '../components/CLPMobile/BreadCrumb/ClpBreadCrumb.js'
import Title from '../components/Not-Found/Title/Title.js';
import Body from '../components/Not-Found/Body/Body.js';
import './NotFound.css';

function NotFoundPage() {
  return (
    <div className="entirePage">
        <div className="navigationMenu">
            <NavbarMenu />
        </div>
        <div className="mainPage">
            <ClpBreadCrumb />
            <Title />
            <Body />
            <Pagesfooter />
            <Footer /> 
        </div>
         
    </div>
  );
}

export default NotFoundPage;

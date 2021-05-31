import React from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import PagesfooterDesktop from '../components/PagesFooter/PagesFooterDesktop.js';
import NotFoundCrumb from '../components/Not-Found/BreadCrumb/NotFoundCrumb.js'
import Title from '../components/Not-Found/Title/Title.js';
import Body from '../components/Not-Found/Body/Body.js';
import './NotFound.css';

function NotFoundPage() {
  return (
    <div>
      <div className="entirePageMobileNFPA">
        <div className="navigationMenu">
            <NavbarMenu />
        </div>
        <div className="mainPage">
            <NotFoundCrumb />
            <Title />
            <Body />
            <Pagesfooter />
            <Footer /> 
        </div> 
      </div>
      <div className="entirePageDesktopNFPA">
        <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        <div className="secondRow">
              <NotFoundCrumb />
        </div>
        <div className="thirdRow">
          <Title />
        </div>
        <div className="theFifthRow">
          <Body />
        </div>
        <div className="theSeventhRow">
          <PagesfooterDesktop />
        </div>
      </div> 
    </div>
  );
}

export default NotFoundPage;

import React from 'react';
import { useState, useEffect } from 'react';
import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import Slider from '../components/Main/Slider/Slider.js';
import Sales from '../components/Main/Sales/Sales.js';
import Services from '../components/Main/Services/Services.js';
import Banner from '../components/Main/Banner/Banner.js';
import Products from '../components/Main/Products/Products.js';
import Cookies from '../components/Cookies/Cookies.js';
import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop.js';

import './HomePage.css';

function HomePage() {
  const [buttonCookies, setButtonCookies] = useState(false);
  const [timedCookies, setTimedCookies] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedCookies(true)
    }, 10000);
  },[]);

  return (
    <div>
      <div className="entirePageMobile">
        <Cookies trigger={buttonCookies} setTrigger={setButtonCookies}></Cookies>
        <Cookies trigger={timedCookies} setTrigger={setTimedCookies}></Cookies>
        <div className="navigationMenu">
          <NavbarMenu />
        </div>

        <div className="mainPage">
          <div className="firstRow">
            <Slider />
          </div>
          <Products />
          <Banner /> 
          <Services />
          <Pagesfooter />
        </div>
        <div className="footerPageMobile">
          <Footer /> 
        </div>
      </div>
      <div className="entirePageDesktop">
        <Cookies trigger={buttonCookies} setTrigger={setButtonCookies}></Cookies>
        <Cookies trigger={timedCookies} setTrigger={setTimedCookies}></Cookies>
        <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        <div className="secondRow">
          <Sales />
        </div>
      </div>
    </div>
  );
}


export default HomePage;

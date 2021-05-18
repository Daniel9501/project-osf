import React from 'react';
import './App.css';
import NavbarMenu from './components/NavbarMenu/NavbarMenu.js';
import Footer from './components/Footer/Footer.js';
import Pagesfooter from './components/PagesFooter/PagesFooter.js';
import Slider from './components/Main/Slider/Slider.js';
import Sales from './components/Main/Sales/Sales.js';
import Services from './components/Main/Services/Services.js';
import Banner from './components/Main/Banner/Banner.js';
import Products from './components/Main/Products/Products.js';
import LatestPosts from './components/Main/LatestPosts/LatestPosts.js';
function App() {
  return (
    <div className="entirePage">
      <div className="navigationMenu">
        <NavbarMenu />
      </div>

      <div className="mainPage">
        <div className="firstRow">
          <Slider />
          <Sales />
        </div>
        <Products />
        <Banner />
        <LatestPosts />
        <Services />
        <Pagesfooter />
      </div>
      
      <div className="footerPageMobile">
        <Footer /> 
      </div>
         
    </div>
  );
}

export default App;

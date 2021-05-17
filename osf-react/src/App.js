import React from 'react';
import './App.css';
import NavbarMenu from './components/NavbarMenu/NavbarMenu.js';
import Footer from './components/Footer/Footer.js';
import Pagesfooter from './components/PagesFooter/PagesFooter.js';

function App() {
  return (
    <div className="entirePage">
      <div className="navigationMenu">
        <NavbarMenu />
      </div>
      <div className="mainPage">
        <Pagesfooter />
      </div>
      <div className="footerPageMobile">
        <Footer /> 
      </div>
         
    </div>
  );
}

export default App;

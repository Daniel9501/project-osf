import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './HomePage.js';
// import CategoryLandingPage from './CategoryLandingPage.js';
// import NotFoundPage from './NotFound.js';


ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    {/* <CategoryLandingPage /> */}
    {/* <NotFoundPage /> */}
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


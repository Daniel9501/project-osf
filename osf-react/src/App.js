import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import NotFoundPage from './pages/NotFound.js';
import CategoryLandingPage from './pages/CategoryLandingPage.js';
import ProductDetailedPage from './pages/ProductDetailedPage.js';
import ShoppingCart from './pages/ShoppingCart.js';
import Release from './pages/Release.js';

function App() {
    return (
        <Router>
            <Switch>    
                <Route exact path="/Home" component={HomePage}/>
                <Route exact path="/404" component={NotFoundPage} />
                <Route exact path="/CategoryLanding" component={CategoryLandingPage} />
                <Route exact path="/ProductDetailed" component={ProductDetailedPage} />
                <Route exact path="/ShoppingCart" component={ShoppingCart} />
                <Route exact path="/Release" component={Release} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    )
}

export default App

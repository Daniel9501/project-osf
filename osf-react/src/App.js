import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import NotFoundPage from './pages/NotFound.js';
import CategoryLandingPage from './pages/CategoryLandingPage.js';

function App() {
    return (
        <Router>
            <Switch>    
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/404" component={NotFoundPage} />
                <Route exact path="/CategoryLanding" component={CategoryLandingPage} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    )
}

export default App

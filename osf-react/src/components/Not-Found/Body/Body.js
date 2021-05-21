import React from 'react';

import './Body.css';

function Body() {
    return (
        <div className="bodyContainer">
            <div className="oops">
                Oops!
            </div>
            <div className="details">
                <h4>Sorry, this page could not be found!</h4>
                <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                    ridiculus mus.<br /><br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button className="goBack">Go back to Homepage</button>
                <h4 className="searchOurSite">Search Our site</h4>
                <input className="search" type="text" placeholder="Search.." name="search"></input>
            </div>
        </div>
    );
  }

export default Body;


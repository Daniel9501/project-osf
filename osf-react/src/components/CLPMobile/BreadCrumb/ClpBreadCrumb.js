import React from 'react';
import {Link} from 'react-router-dom';

import './ClpBreadCrumb.css';

function ClpBreadCrumb() {
    return (
        <div className="clpBread">
            <Link to="/Home"><span className="homeCrumb">Home</span></Link>
            <p>/</p>
            <Link to="/CategoryLanding">Category Landing</Link>
        </div>
    );
  }

export default ClpBreadCrumb;

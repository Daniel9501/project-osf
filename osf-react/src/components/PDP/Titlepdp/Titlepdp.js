import React from 'react'
import { Link } from 'react-router-dom';

import './Titlepdp.css';

function Titlepdp() {
    return (
        <div className="pdpBread">
            <div className="breadCrumbPdp">
                <Link to="/Home"><span className="homeCrumb">Home</span></Link>
                <p className="slasha">/</p>
                <Link to="/Home"><span className="homeCrumb">OSF Theme</span></Link>
                <p className="slasha">/</p>
                <Link to="/CategoryLanding">Kristina Dam Oak</Link>
                <Link className="linkto" to="/CategoryLanding">Table With White Marble Top</Link>
            </div>
            <div className="titlea">
                <h4 className="lineProductsa">
                    <span className="popularItemsa">
                        V-Neck Cardigan
                    </span>
                </h4>
            </div>
        </div>
    )
}

export default Titlepdp

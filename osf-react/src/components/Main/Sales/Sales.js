import React from 'react';
import Button from '../../../../node_modules/@material-ui/core/Button';
import './Sales.css';

import ImgSales from '../../Img/Main/salesImage.webp';
import Facebook from '../../Img/Socialicons/f.png';


function Sales() {
    return (
        <div className="sales">
            <div className="image">
                <img className="imageSales" src={ImgSales} alt="salesImage" />
                <h1 className="textBig">55%</h1>
                <h3 className="textTitle">SUMMER<br />SALES</h3>
            </div> 
            <div className="text">
                <h4 className="textText">Follow us on Facebook</h4>
                <h5 className="textDetails">Sed ut perspiciatis unde omnis iste<br />natus error sit </h5>
            </div>
            <div className="facebookButton">
                <Button variant="outlined" color="primary" href="https://www.facebook.com/">
                    <img src={Facebook} alt="facebook" />
                    <span className="facebookText">Follow</span>
                </Button>
            </div>
        </div>
    );
  }

export default Sales;

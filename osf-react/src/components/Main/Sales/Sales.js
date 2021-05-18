import React from 'react';
import Button from '../../../../node_modules/@material-ui/core/Button';
import './Sales.css';
import ImgSales from '../../Img/Main/salesImage.webp';
import Facebook from '../../Img/Socialicons/f.png';
function Sales() {
    return (
        <div className="sales">
            <div className="image">
                <img src={ImgSales} alt="salesImage" />
            </div> 
            <div className="text">
                <h1>55%</h1>
                <h3>SUMMER<br />SALES</h3>
                <h4>Follow us on Facebook</h4>
                <h5>Sed ut perspiciatis unde omnis iste<br />natus error sit </h5>
            </div>
            <div className="facebookButton">
                <Button variant="outlined" color="primary" href="https://www.facebook.com/">
                    <img src={Facebook} alt="facebook" />
                    Follow
                </Button>
            </div>
        </div>
    );
  }

export default Sales;

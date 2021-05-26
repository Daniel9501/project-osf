import React from 'react'
import image from '../../Img/PdpImages/PG.10216885.JJ8UTXX.PZ.jpg';
import image2 from '../../Img/Shopping/x.webp';
import './BodyCart.css';

function BodyCart() {
    return (
        <div className="bodyPage">
            <div className="firstBody">
                <div className="details">
                    
                    <div className="titlep">Kristina Dam Oak Table With White Marble Top</div>
                    <div className="pricep">$2,195.00</div>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="increase">
                        <button className="minus">-</button>
                        <button className="number">1</button>
                        <button className="plus">+</button>
                    </div>
                    <div className="lastDiva"> 
                            $2,195
                    </div>
                    <button className="deleteButton">
                            <img src={image2} alt="" />
                    </button>
                </div><br />
                <div className="details">
                    
                    <div className="titlep">Kristina Dam Oak Table With White Marble Top</div>
                    <div className="pricep">$2,195.00</div>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="increase">
                        <button className="minus">-</button>
                        <button className="number">1</button>
                        <button className="plus">+</button>
                    </div>
                    <div className="lastDiva"> 
                            $2,195
                    </div>
                    <button className="deleteButton">
                            <img src={image2} alt="" />
                    </button>
                </div>
                
            </div>
            <div className="secondBody">
                <div className="couponCode">
                    <input className="couponButton" type="text" placeholder="Enter Coupon Code"></input>
                    <button className="applyButton">APPLY</button>
                </div>
                <div className="couponCode couponCodeMargin">
                    <button className="applyButtona">UPDATE CART</button>
                    <button className="applyButtonab">PROCEED TO CHECKOUT</button>
                </div>
                <div className="couponCode couponCodeMargin">
                    <span className="sampleText">CART SUBTOTAL</span>
                    <span className="sampleTextBold">$3,489</span>
                </div>
                <div className="couponCode couponCodeMargin">
                    <span className="sampleTextBold">SHIPPING<br />AND<br />HANDLING</span>
                    <ul>
                        <li>
                            <input type="radio" id="f-option" name="selector"></input>
                            <label className="sampleText" for="f-option">Flat Rate:<span className="sampleTextBold">$10.00</span></label>
                        </li>
                        <li>
                            <input type="radio" id="f-option1" name="selector" style={{border: "10px solid #EFE5CE"}}></input>
                            <label className="sampleText" for="f-option1">Free Shipping</label>
                        </li>
                        <li>
                            <input type="radio" id="f-option2" name="selector"></input>
                            <label className="sampleText" for="f-option2">International:<span className="sampleTextBold">$60.00</span></label>
                        </li>
                        <li>
                            <input type="radio" id="f-option3" name="selector"></input>
                            <label className="sampleText" for="f-option3">Local Delivery:<span className="sampleTextBold">$5.00</span></label>
                        </li>
                        <li>
                            <input type="radio" id="f-option4" name="selector"></input>
                            <label className="sampleText" for="f-option4">Local Pickup (Free)</label>
                        </li>
                    </ul>
                </div>
                <div className="couponCode couponCodeMargin">
                    <span className="sampleTextBold">ORDER TOTAL:</span>
                    <span className="sampleTextBold sampleTextBoldSize">$3,489</span>
                </div>
            </div>
        </div>
    )
}

export default BodyCart

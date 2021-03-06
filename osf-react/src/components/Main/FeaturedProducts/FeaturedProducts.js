import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Card1 from '../../Img/Main/Products/card1.webp';
import Card2 from '../../Img/Main/Products/card2.webp';
import Card3 from '../../Img/Main/Products/card3.webp';
import Card4 from '../../Img/Main/Products/card4.webp';
import Card5 from '../../Img/Main/Products/card5.webp';
import Card6 from '../../Img/Main/Products/card6.webp';
import Card7 from '../../Img/Main/Products/card7.webp';
import Plus from '../../Img/Plus.webp';
import Heart from '../../Img/Heart.webp';
import ArrorLeft from '../../Img/Desktop/arrow-left.webp';
import ArrorRight from '../../Img/Desktop/arrow-right.webp';

import './FeaturedProducts.css';

const photos = [
    {
        id: 'photo1',
        name: 'Photo 1',
        img: Card1,
        title: "Kristina Dam Oak Table With White Marble Top",
        currency: "$",
        cost: " 799.55",
        buy: "BUY NOW"
    },
    {
        id: 'photo2',
        name: 'Photo 2',
        img: Card2,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 659.55",
        buy: "BUY NOW"
    },
    {
        id: 'photo3',
        name: 'Photo 3',
        img: Card3,
        title: "Activate Facial Mask and Charcoal Soap",
        currency: "$",
        cost: " 129.55",
        buy: "BUY NOW"
    },
    {
        id: 'photo4',
        name: 'Photo 4',
        img: Card4,
        title: "Cocktail Table Walnut | YES",
        currency: "$",
        cost: " 299.99",
        buy: "BUY NOW"
    },
    {
        id: 'photo5',
        name: 'Photo 5',
        img: Card5,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 659.55",
        buy: "BUY NOW"
    },
    {
        id: 'photo6',
        name: 'Photo 6',
        img: Card6,
        title: "TORY DESK CALENDAR",
        currency: "$",
        cost: " 410.99",
        buy: "BUY NOW"
    },
    {
        id: 'photo7',
        name: 'Photo 7',
        img: Card7,
        title: "CH445 Wing Chair on SUITE NY",
        currency: "$",
        cost: " 330.55",
        buy: "BUY NOW"
    },
    {
        id: 'photo8',
        name: 'Photo 8',
        img: Card5,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 330.55",
        buy: "BUY NOW"
    }
]

class FeaturedProducts extends Component {
    constructor(){

        super()
        this.state={
            show:false
        }
    }
    operation(id){
        this.setState({
            show:true,
            id:id
        })
    }
     
    render() { 
        return (
            <div className="featuredProductsContainer">
                <h1 className="titleFTPC">Featured Products</h1>
                <h1 className="detailsFTPC">Unde omnis iste natus error sit voluptatem</h1>
                <div className="titlea">
                    <h4 className="lineProductsHP">
                        <button className="previous">
                            <img src={ArrorLeft} alt="" />
                        </button>
                        <span className="popularItemsa">
                            ///
                        </span>
                        <button className="next">
                            <img src={ArrorRight} alt="" />
                        </button>
                    </h4>
                </div>
                <div className="test">
                <div className="testa">
                {photos.map((photo) => {
                    return(
                        <div className="card-container">
                            <div className="img-container">
                                <div className="overlayCardImage">
                                    <img className="imgContainerCards" src={photo.img} alt=""/>
                                    <div className="imagePlusHeart">
                                        <Link to='/ShoppingCart'><img className="plusImage" src={Plus} alt="Plus"></img></Link>
                                        <Link to='/ProductDetailed'><img className="heartImage" src={Heart} alt="Heart"></img></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <div className="card-body">
                                    <h3 className="photoTitleH">{photo.title}</h3>
                                </div>
                            </div>
                            <div className="btn">
                                <button className="currencyCostBtn" key={photo.id} onClick={() => this.operation(photo.id)}>{photo.currency + photo.cost}</button>
                                { 
                                    this.state.show && this.state.id===photo.id?
                                        <div className="hideCardButton">
                                            <Link to='/ProductDetailed'><button className="hideButtonCurrency" >{photo.currency + photo.cost}</button></Link>
                                            <Link to='/ShoppingCart'><button className="hideButtonBuyNow">BUY NOW</button></Link>
                                        </div>
                                        
                                     :null
                                }
                                
                            </div>   
                        </div> 
                    )
                })}
                </div>
                </div>
            </div>
        )
    }
}

export default FeaturedProducts

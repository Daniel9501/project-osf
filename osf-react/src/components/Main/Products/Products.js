import React, {Component} from 'react';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './Products.css';
import { Link } from 'react-router-dom';
import Slider from '../../../../node_modules/react-slick';
import Card1 from '../../Img/Main/Products/card1.webp';
import Card2 from '../../Img/Main/Products/card2.webp';
import Card3 from '../../Img/Main/Products/card3.webp';
import Card4 from '../../Img/Main/Products/card4.webp';
import Card5 from '../../Img/Main/Products/card5.webp';
import Card6 from '../../Img/Main/Products/card6.webp';
import Card7 from '../../Img/Main/Products/card7.webp';
import Button from '../../../../node_modules/react-bootstrap/Button';
import Plus from '../../Img/Plus.webp';
import Heart from '../../Img/Heart.webp';


const photos = [
    {
        name: 'Photo 1',
        img: Card1,
        title: "Kristina Dam Oak Table With White Marble Top",
        currency: "$",
        cost: " 799.55"
    },
    {
        name: 'Photo 2',
        img: Card2,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 659.55"
    },
    {
        name: 'Photo 3',
        img: Card3,
        title: "Activate Facial Mask and Charcoal Soap",
        currency: "$",
        cost: " 129.55"
    },
    {
        name: 'Photo 4',
        img: Card4,
        title: "Cocktail Table Walnut | YES",
        currency: "$",
        cost: " 299.99"
    },
    {
        name: 'Photo 5',
        img: Card5,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 659.55"
    },
    {
        name: 'Photo 6',
        img: Card6,
        title: "TORY DESK CALENDAR",
        currency: "$",
        cost: " 410.99"
    },
    {
        name: 'Photo 7',
        img: Card7,
        title: "CH445 Wing Chair on SUITE NY",
        currency: "$",
        cost: " 330.55"
    }
]

class Products extends Component{
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    operation(){
        this.setState({
            show:true
        })
    }
    render(){
        const settings ={
            dots: true,
            fade: true,
            fadeSpeed: 1000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow:1,
            arrows: false,
            slidesToScroll:1,
            focusOnSelect: true,
            className: "slides"
        }
    
        return (
            <div className="products">
                <div className="title">
                    <h4 className="lineProducts">
                        <span className="popularItems">
                            Popular Items 
                        </span>
                    </h4>
                </div>
                <div className="card">
                    <Slider {...settings}>
                        {photos.map((photo) => {
                            return(
                                <div className="cardCard">
                                    <div className="cardImage">
                                        <div className="overlayCardImage">
                                            <img className="imgProducts" src={photo.img} alt=""/>       
                                        </div>
                                    </div>
                                    <div className="imagePlusHeart">
                                        <Link to='/ShoppingCart'><img className="plusImage" src={Plus} alt="Plus"></img></Link>
                                        <Link to='/ProductDetailed'><img className="heartImage" src={Heart} alt="Heart"></img></Link>
                                    </div>
                                    <div className="cardTitle">
                                        <h3 className="photoTitle">{photo.title}</h3>
                                    </div>
                                    <div className="cardButton">
                                        <Button className="buttonCurrency" variant="light" onClick={() => this.operation()}>{photo.currency + photo.cost}</Button>
                                        { 
                                            this.state.show?
                                                <div className="hideCardButton">
                                                    <Link to='/ProductDetailed'><button className="hideButtonCurrency" onClick={() => this.operation()}>{photo.currency + photo.cost}</button></Link>
                                                    <Link to='/ShoppingCart'><button className="hideButtonBuyNow">BUY NOW</button></Link>
                                                </div>
                                            :null
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="oooo">

                </div>
            </div>
        );
    }
}

export default Products;

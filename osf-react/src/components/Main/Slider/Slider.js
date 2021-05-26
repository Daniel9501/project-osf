import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Slider.css';
import Img1 from '../../Img/Main/firstImage1.webp';
import Img2 from '../../Img/Main/firstImage2.webp';
import Img3 from '../../Img/Main/firstImage3.webp';
import Img4 from '../../Img/Main/firstImage4.webp';

function Slider() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="firstDiv">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100 firstImage" src={Img1} alt="Img1" />
                    <Carousel.Caption>
                        <h4 className="title">Control and manage any device with cloud solutions</h4>
                        <p className="content">Improve business performance and the user experience with the right mix of IoT technology and processes<br />
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed</p>
                        <div className="buttonView">
                            <Link to='/CategoryLanding'><button className="viewMoreButton" href="#">VIEW MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 firstImage" src={Img2} alt="Img2" />
                    <Carousel.Caption>
                        <h4 className="title">Control and manage any device with cloud solutions</h4>
                        <p className="content">Improve business performance and the user experience with the right mix of IoT technology and processes<br />
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed</p>
                        <div className="buttonView">
                            <Link to='/CategoryLanding'><button className="viewMoreButton" href="#">VIEW MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 firstImage" src={Img3} alt="Img3" />
                    <Carousel.Caption>
                        <h4 className="title">Control and manage any device with cloud solutions</h4>
                        <p className="content">Improve business performance and the user experience with the right mix of IoT technology and processes<br />
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed</p>
                        <div className="buttonView">
                            <Link to='/CategoryLanding'><button className="viewMoreButton" href="#">VIEW MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 firstImage" src={Img4} alt="Img4" />
                    <Carousel.Caption>
                        <h4 className="title">Control and manage any device with cloud solutions</h4>
                        <p className="content">Improve business performance and the user experience with the right mix of IoT technology and processes<br />
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed</p>
                        <div className="buttonView">
                            <Link to='/CategoryLanding'><button className="viewMoreButton" href="#">VIEW MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }

export default Slider;

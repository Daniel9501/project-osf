import React, {useEffect, useRef, useState} from 'react';

import NavbarMenu from '../components/NavbarMenu/NavbarMenu.js';
import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop.js';
import Footer from '../components/Footer/Footer.js';
import Pagesfooter from '../components/PagesFooter/PagesFooter.js';
import PagesfooterDesktop from '../components/PagesFooter/PagesFooterDesktop.js';
import Arrow from '../components/Img/Desktop/arrow-right.webp';
import './Release.css';

function Release() {

    const [timerMonths, setTimerMonths] = useState('00');
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    
    let interval = useRef();

    const startTimer = () => {
      const countdownDate = new Date('May 31, 2021 15:00:00').getTime();
      
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const months = Math.floor(distance % 1)/1;
        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)));
        const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((distance % (1000*60)) / 1000);

        if (distance < 0){
          clearInterval(interval.current);
        }else{
          setTimerMonths(months);
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    }

    useEffect(()=> {
      const someref = interval.current
      startTimer()
      return ()=> {
        clearInterval(someref)
      }
    }, [])

  return (
    <div>
      <div className="entirePageMobileR">
        <div className="navigationMenu">
            <NavbarMenu />
        </div>
        <div className="mainPage">
            <Pagesfooter />
            <Footer /> 
        </div> 
      </div>
      <div className="entirePageDesktopR">
        <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        <div className="theFifthRow">
            <div className="timerContainer">
                <h3 className="timeTitle">We Will Release OSF Academy</h3>    
                <h3 className="timeText">We are working hard and estimated release time products below.
                <br />Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat non lectus imperdiet</h3>    
                <div className="containerGridRelease">
                    <button className="circleData">{timerMonths}</button>
                    <button className="circleData">{timerDays}</button>
                    <button className="circleData">{timerHours}</button>
                    <button className="circleData">{timerMinutes}</button>
                    <button className="circleData">{timerSeconds}</button>
                    <h4 className="textDataRelease">Months</h4>
                    <h4 className="textDataRelease">Days</h4>
                    <h4 className="textDataRelease">Hours</h4>
                    <h4 className="textDataRelease">Minutes</h4>
                    <h4 className="textDataRelease">Seconds</h4>
                </div>
                <form className="formDetails">
                    <input className="inputField" type="text" placeholder="Enter your email to receive the latest announcements" />
                    <img className="arrowForm" src={Arrow} alt="Arrow" />
                </form>
            </div>
        </div>
        <div className="theSeventhRow">
          <PagesfooterDesktop />
        </div>
      </div> 
    </div>
  );
}

export default Release;

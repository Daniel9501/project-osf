import React from 'react';
import './Cookies.css';

import x from '../Img/x.webp';
function Cookies(props) {
  return (props.trigger) ? (
    <div className="cookies">
      <div className="cookies-inner">
        <button className="closeButton" onClick={() => props.setTrigger(false)}>
          <img src={x} alt=""></img>
        </button>
        <h3>This website uses cookies</h3><br />
        <p>OSF uses its own and third-party cookies for statical purposes, to know your preferences, for website performance and interaction with social media offering publicity tailored to your interests. If you continue
          browsing, we consider that you accept its use.<br />You cand expand this information consulting our <span>Cookies Policy Page</span>.
        </p>
        <button className="acceptButton" onClick={() => props.setTrigger(false)}><h4>ACCEPT</h4></button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Cookies;

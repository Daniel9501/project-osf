import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import Logo from './img/logo.webp';
class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <img className="navbar-logo" src={Logo} height="40px" />
                <div className="menu-icon">
                    
                </div>
                <ul>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })} 
                </ul>
            </nav>
        )

    }
}

export default Navbar
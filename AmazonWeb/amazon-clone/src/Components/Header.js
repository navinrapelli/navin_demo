import React from 'react'
import img from './img.png'
import './Header.css';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const[{basket}]=useStateValue(); 
    return (
        <nav className="header">
            <Link to="/">
            <img className="header_logo" src={img} alt=""/>
            </Link>
         
         <div className="header_search">
            <input type="text" className="header_serchInput"/>
            <SerachIcon className="header_searchlogo"/>
        </div>

        <div className="header_nav">
            <Link to="/login"  className="header_link">
                <div className="header_option">
                <span className="header_optionone">hewllo</span>
                <span className="header_optiontwo">Sign in</span>
                </div>
            </Link>
        </div>

            
        <div className="header_nav">
            <Link to="/"  className="header_link">
                <div className="header_option">
                <span className="header_optionone">return</span>
                <span className="header_optiontwo">Order</span>
                </div>
            </Link>
         
        </div>
            
        <div className="header_nav">
            <Link to="/"  className="header_link">
                <div className="header_option">
                <span className="header_optionone">Your</span>
                <span className="header_optiontwo">Prime</span>
                </div>
            </Link>
        </div>

        <Link to="/checkout" className="header_link"> 
        <div className="header_optionbasket">
          
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className="header_optionalLineTwo header_basktCount">{basket?.length}</span>
        </div>
        
        
        </Link>
        </nav>

    )
}

export default Header

import React from 'react'
import "../styles/Header.css"
import logoSvg from "./images/logo.svg"
import shoppingcartSvg from "./images/icon-cart.svg"
import { assetsBaseUrl, loggedInUser } from "../../data"

const Header = () => {
    return (
        <div className="header-container">
          <nav className="navbar">
            <div className="logo-container">
              <img className="logo" src={logoSvg}/>
            </div>
      
            <div className="nav-links">
              <span>Collections</span>
              <span>Men</span>  
              <span>Women</span>
              <span>About</span>
              <span>Contact</span>
            </div>
      
            <div className="user-actions">
              <img className="shopping-cart" src={shoppingcartSvg}/>
              <img className="profile-picture" src={`${assetsBaseUrl}${loggedInUser.profileImage}`}/>
            </div>
          </nav>
        </div>
      )
}

export default Header

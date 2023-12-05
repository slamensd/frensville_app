import React from 'react';
import logo from '../assets/images/logo-1.png'; // Adjust the path as necessary
import coinIcon from '../assets/images/coin60.png'; // Adjust the path as necessary

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="Frensville Logo" />
      <div className="header-coin-balance">
        <img className="header-coin-icon" src={coinIcon} alt="Coin" />
        <span><p>24,156</p></span>
      </div>
    </div>
  );
};

export default Header;

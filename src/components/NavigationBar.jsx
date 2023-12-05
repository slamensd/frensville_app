import React from 'react';

const NavigationBar = () => {
  return (
    <div className="bottom-nav-bar">
      <div className="nav-icon"><i className="fas fa-home"></i></div> {/* Home icon */}
      <div className="nav-icon"><i className="fas fa-trophy"></i></div> {/* Earn icon */}
      <button className="center-button"><i class="fa fa-qrcode" aria-hidden="true"></i></button> {/* Central square button */}
      <div className="nav-icon"><i className="fas fa-gift"></i></div> {/* Redeem icon */}
      <div className="nav-icon"><i className="fas fa-user"></i></div> {/* Account icon */}
    </div>
  );
};

export default NavigationBar;

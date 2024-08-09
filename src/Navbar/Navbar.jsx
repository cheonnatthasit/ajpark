import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [sidenavWidth, setSidenavWidth] = useState("0");

  const openNav = () => {
    setSidenavWidth("250px");
  };

  const closeNav = () => {
    setSidenavWidth("0");
  };

  return (
    <div className="navbar top-0 mt-0">
      <div className="start">
        <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth }}>
          <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
   
        <span style={{ fontSize: "25px", cursor: "pointer" }} onClick={openNav}>
          &#9776; 
        </span>
      </div>

      <div className="Navcenter">
      </div>

      <div className="end">
      
      </div>

    </div>
  );
}

export default Navbar;

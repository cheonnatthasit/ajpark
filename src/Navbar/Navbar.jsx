import React, { useState } from "react";
import "./navbar.css";
import { GoHomeFill } from "react-icons/go";
import { MdBedroomChild } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { Link } from "react-router-dom";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 ">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold"><p><Link to='/'>AJ PARK</Link> </p></div>

        <div className="md:hidden">
          <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
          <p className="text-white"> <Link to='/Contact'>Contact</Link></p>       
          </li>
          <li>
            <a href="#" className="text-white">
              Service
            </a>
          </li>
        </ul>
      </div>

      {/* เมนูมือถือ */}
      <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <li className="py-2 flex-row">
          <a href="../App.jsx" className="text-white flex  items-center ">
            <GoHomeFill style={{ fontSize:"25px",color: "white", marginRight: "8px" }} />
            <p>Home</p>
          </a>
        </li>
        <li className="py-2 flex-row">
          <a href="../App.jsx" className="text-white flex  items-center ">
          <MdBedroomChild style={{ fontSize:"25px",color: "white", marginRight: "8px" }} />
            <p>ประเภทห้อง</p>
          </a>
        </li>
        <li className="py-2 flex-row">
          <a href="../App.jsx" className="text-white flex  items-center ">
          <GiNightSleep style={{ fontSize:"25px",color: "white", marginRight: "8px" }} />
            <p>ห้องพักรายวัน</p>
          </a>
        </li>
        <li className="py-2 flex-row">
          <a href="../App.jsx" className="text-white flex  items-center ">
          <RiCustomerServiceFill style={{ fontSize:"25px",color: "white", marginRight: "8px" }} />
            <p>ติดต่อ - สอบถาม</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

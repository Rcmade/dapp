import React, { useRef } from "react";
import "./NavStyle.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const menuRef = useRef(null);
  // Toggle Navigation
  const toggleMenu = () => {
    menuRef.current.classList.toggle("hidemenu");
  };
  return (
    <>
      <nav className="header ">
        <div className="container">
          <Link to="/" className="navLogoLink">
            {/*  Add Your logo image  */}
            <img src="/logo192.png" className=" navLogoImg sm:h-9" alt="Logo" />
            {/* Add Your Brand name  */}
            <span className="navLogoText">LOgo</span>
          </Link>

          {/*  Three Line Icon */}
          <button type="button" className="threeLine" onClick={toggleMenu}>
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {/* Navigation menu  */}
          <div className="ulDiv hidemenu mobileMenu" ref={menuRef}>
            <ul className="navUl ">
              <li className="navLink">
                <Link to="/">Home</Link>
              </li>
              <li className="navLink">
                <Link to="/contact">Contact</Link>
              </li>

              {/* Repeat This For more Menu */}
              {/*  <li className="navLink">
                <Link to="/about">About</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

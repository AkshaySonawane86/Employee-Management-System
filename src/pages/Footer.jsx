import React from "react";
import '../css/Navbar.css';
import '../css/Footer.css';

function Footer() {
  return (
   <>
     <footer className="right-content">

      <h1>Employee Management System</h1>
      <ul>
         <li><a href="/home" aria-label="Home link">Home</a></li>
         <li><a href="/about" aria-label="About link">About</a></li>
         <li><a href="/service" aria-label="Service link">Service</a></li>
         <li><a href="/Contact" aria-label="Contact link">Contact</a></li>
      </ul>

      {/* <p>&copy; <span id="year"></span> EMP All rights reserved.</p> */}
      </footer>
   </>
  );
}

export default Footer;
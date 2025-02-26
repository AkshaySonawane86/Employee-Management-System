import React from "react";
import '../css/Navbar.css';
import '../css/Home.css';
import newImage from '../img/NewImage.jpg'; 

function Home() {
    return (
     <>
        <div className="right-content" id="home">
      <img src={newImage} alt="new"/>
      <p>A powerful and efficient system to manage your workforce, track attendance, and streamline payroll in one place.</p>
      <button>Get Started</button>
    </div>
     </>
    );
  }
  
  export default Home;
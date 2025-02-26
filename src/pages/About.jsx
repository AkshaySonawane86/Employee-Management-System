import React from "react";
import '../css/Navbar.css';
import '../css/About.css';
import newImage from '../img/NewImage.jpg'; 

function About() {
    return (
     <>
        <div className="right-content" id="about">
         
        <img src={newImage} alt="new"/>
          <p>Our Employee Management System is designed to help organizations manage their employees efficiently. From hiring to retirement, we streamline HR processes with automation and intelligent tools.</p>
          <div className="about-box">
            <div className="about-box1">
                <button>Our Mission</button>
                <p className="hidden-text1">To simplify workforce management and enhance organizational productivity through a modern and efficient employee management solution.</p>
            </div>

            <div className="about-box2">  
            <button>Our Vision</button>
            <p className="hidden-text2">To become the go-to platform for businesses seeking a seamless and smart way to manage employees.</p>
            </div>
          </div>
        </div>
     </>
    );
  }
  
  export default About;
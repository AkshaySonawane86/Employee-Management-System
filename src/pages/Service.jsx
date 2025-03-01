import React from "react";
import '../css/Navbar.css';
import '../css/Service.css';
import newImage from '../img/NewImage.jpg'; 

function Service() {
    return (
     <>
        <div className="right-content" id="service">
          <h1>Explore our powerful features for employee     
            management</h1>
            <div id="box"></div>
            <div className="box">
                <div className="box1">
                    <h3>Employee Management</h3>
                    <img src={newImage} alt="new"/>
                    <h4>Store employee records</h4>
                    <button>Get Started</button>
                </div>

                <div className="box1">
                    <h3>Attendance Tracking</h3>
                    <img src={newImage} alt="new"/>
                    <h4>Track attendance & leave</h4>
                    <button>Get Started</button>
                </div>

                <div className="box1">
                    <h3>Payroll System</h3>
                    <img src={newImage} alt="new"/>
                    <h4>Process salaries easily</h4>
                    <button>Get Started</button>
                </div>

                <div className="box1">
                    <h3>Performance Reports</h3>
                    <img src={newImage} alt="new"/>
                    <h4>Generate reports  </h4>
                    <button>Get Started</button>
                </div>

            </div>
        </div>
     </>
    );
  }
  
  export default Service;
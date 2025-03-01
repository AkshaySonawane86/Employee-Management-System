import React from "react";
import '../css/Navbar.css';
import '../css/Contact.css';

function Contact() {
    return (
     <>
       <div className="right-content" id="contact">
          <h1>Contact</h1>
          <div className="box"></div>
          <label for="name">Name</label>
          <input type="text" required />
          <label for="email">Email</label>
          <input type="email" required />
          <label for="message">Message</label>
          <textarea name="message"></textarea>
          <button>Submit</button>
        </div>
     </>
    );
  }
  
  export default Contact;
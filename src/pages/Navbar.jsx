
import React, { useState } from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import Home from './Home';
// import About from './About';
// import Service from './Service';
// import Contact from './Contact';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Emp</h1>
      </div>
      <button className="menu-toggle" id="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// // import { Link, Route, Routes, Router } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import Home from './Home';
// import About from './About';
// import Service from './Service';
// import Contact from './Contact';
// import '../css/Navbar.css';

// const Navbar = () => {
//   // const [search, setSearch] = useState('');
//   // const navigate = useNavigate();

//   const [isOpen,setIsOpen]=useState(false);

//   // const handleSearch = (e) => {
//   //   e.preventDefault(); 
//   //   if (search.trim()) {
      
//   //     navigate(`/?search=${search}`);
//   //   } else {
//   //     alert('Please enter a search term!');
//   //   }
//   // };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h1>Emp</h1>
//       </div>
//       <button class="menu-toggle" id="menu-toggle" onClick={()=>setIsOpen(!isOpen)}>☰</button>
//       <div className={`nav-links ${isOpen ? "active" : ""}`}>
//          <Router>
//         <Link to="#home">Home</Link>
//         <Link to="#about">About</Link>
//         <Link to="#service">Service</Link>
//         <Link to="#contact">Contact</Link>
//         {/* <Link to="/login">Login</Link> */}
        
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/#home" element={<Home/>} />
//           <Route path="/#about" element={<About/>} />
//           <Route path="/#service" element={<Service/>} />
//           <Route path="/#contact" element={<Contact/>}/>
//         </Routes>
//         </Router>
//       </div>
//       {/* <form onSubmit={handleSearch} className={`search-form ${isOpen ? "active" : ""}`}>
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search Movies"
//         />
//         <button type="submit">Search</button>
//       </form> */}
//     </nav>
//   );
// };

// export default Navbar;

import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
// import Footer from './pages/Footer';
// import Login from './componets/Login';
// import AddEmp from './componets/AddEmp';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Service from './pages/Service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    {/* <Login />
    <AddEmp /> */}
    <Router> {/* BrowserRouter should wrap the entire app */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

    {/* <Home/>
    <About />
    <Service/>
    <Contact/>
    <Footer/> */}
   </>
  );
}

export default App;
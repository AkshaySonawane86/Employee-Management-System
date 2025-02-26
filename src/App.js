import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
// import Login from './componets/Login';
// import AddEmp from './componets/AddEmp';
import Home from './pages/Home';
import Service from './pages/Service';

function App() {
  return (
   <>
    {/* <Login />
    <AddEmp /> */}
    <Home/>
    <About />
    <Service/>
    <Contact/>
    <Footer/>
   </>
  );
}

export default App;
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/"exact element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
      <Footer/>
      <BackToTop/>
    </BrowserRouter>
  );
}

export default App;

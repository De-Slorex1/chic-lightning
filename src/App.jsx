import { useState } from 'react';
import './App.css'
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
// import NavComponent from './Components/NavComponent';
// import FooterComponent from './Components/FooterComponent';
// import ProductCatalog from './Pages/ProductCatalog';
// import AboutPage from './Pages/AboutPage';
// import GalleryPage from './Pages/GalleryPage';
// import ContactPage from './Pages/ContactPage';
// import ErrorPage from './pages/ErrorPage';
// import Offers from './pages/Offers'
import "aos/dist/aos.css";
import ProductCatalog from './pages/ProductCatalog';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Offers from './pages/Offers';
import FooterComponent from './components/FooterComponent';
// import NavComp from './components/navComponent';
import Home from './pages/HomePage';
import Navbar from './components/Navbar';

AOS.init({
  duration: 900,
  easing: "ease-in-out",
  once: true,
  offset: 120,
});

function App() {
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/catalog" element={<ProductCatalog setCartCount={setCartCount}/>} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/gallery" element={<GalleryPage />} /> 
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<ErrorPage />}/>
          <Route path="/offers" element={<Offers />}/>
      </Routes>

    <FooterComponent />
      
    </>
  )
}

export default App

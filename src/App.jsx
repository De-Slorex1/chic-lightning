import { useState } from 'react';
import './App.css'
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import NavComponent from './Components/NavComponent';
import HomePage from './Pages/HomePage';
import FooterComponent from './Components/FooterComponent';
import ProductCatalog from './Pages/ProductCatalog';
// import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import ContactPage from './Pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Offers from './pages/Offers'
import "aos/dist/aos.css";

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
    <NavComponent cartCount={cartCount} />

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<ProductCatalog setCartCount={setCartCount}/>} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<ErrorPage/>}/>
        <Route path="/offers" element={<Offers/>}/>
    </Routes>

    <FooterComponent />
      
    </>
  )
}

export default App

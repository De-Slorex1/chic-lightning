import React from "react";
import "./Offers.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

import { useEffect } from "react";

const Offers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const offerss = [
    {
      title: "20% OFF Ceiling Lights",
      desc: "Upgrade your home with stylish ceiling lights at discounted prices.",
    },
    {
      title: "Buy 2 Lamps, Get 1 Free",
      desc: "Perfect for bedrooms, offices, and living rooms.",
    },
    {
      title: "Free Delivery",
      desc: "Get free delivery on orders above ₦100,000.",
    },
    {
      title: "Outdoor Lighting Sale",
      desc: "Save up to 30% on selected outdoor lighting products.",
    },
    {
      title: "Smart LED Deals",
      desc: "Enjoy exclusive discounts on smart lighting solutions.",
    },
    {
      title: "Weekend Flash Sale",
      desc: "Limited-time offers available every weekend.",
    },
  ];

  return (
    <section className="offerss-page">
      <div className="offerss-hero">
        <h1 data-aos="fade-up">Special Offers</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Brighten your space while saving money.
        </p>
      </div>

      <div className="offerss-grid">
        {offerss.map((offers, index) => (
          <div
            key={index}
            className="offers-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="offers-badge">HOT DEAL</div>

            <h3>{offers.title}</h3>
            <p>{offers.desc}</p>

            <Link to="/catalog">
            <button>Shop Now</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
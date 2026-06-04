import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom';
import container from '../assets/Container (1).png'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import hero2 from '../assets/hero2.png'

import {
  FaRegLightbulb,
  FaFan,
  FaHome,
  FaTag,
  FaTruck,
} from "react-icons/fa";

import { GiWallLight } from "react-icons/gi";
import { TbLamp } from "react-icons/tb";
import { MdLightbulbOutline } from "react-icons/md";

function HomePage() {

  const products = [
    {
      id: 1,
      name: "Crystal Cascade Chandelier",
      price: "$1,299.00",
      image: product1,
      spec1Title: "MATERIALS",
      spec1: "K9 Crystal, Gold Brass",
      spec2Title: "SIZE",
      spec2: '32" W × 48" H',
    },
    {
      id: 2,
      name: "Modern Geometric Sconce",
      price: "$345.00",
      image: product2,
      spec1Title: "MATERIALS",
      spec1: "Brushed Nickel",
      spec2Title: "LIGHT SOURCE",
      spec2: "Integrated LED",
    },
    {
      id: 3,
      name: "Aero-Static Ceiling Fan",
      price: "$580.00",
      image: product3,
      spec1Title: "CONTROL",
      spec1: "Remote & App",
      spec2Title: "EFFICIENCY",
      spec2: "Energy Star",
    },
  ];

  return (
    <div className="home">

      <div className="main-layout">


        <div className="content">

          {/* HERO */}
          <section className="hero">

            <img
              src={container}
              alt="Hero"
              className="hero-image" 
            />

            <div className="hero-overlay">

              <div className="hero-content">
                <h1  data-aos="fade-right" data-aos-delay="100">Elegant Lighting <br /> for Every Space</h1>

                <p>
                  Discover a curated collection of designer fixtures
                  that blend architectural precision with artisanal warmth.
                </p>

                <div className="hero-buttons">

                     
                  <Link to= "/catalog">
                  <button className="primary-btns"  data-aos="fade-up" data-aos-delay="400">
                    Explore Catalog
                  </button></Link>

                  <Link to="gallery">
                  <button className="secondary-btns"  data-aos="fade-up" data-aos-delay="400">
                    View Gallery
                  </button></Link>

                </div>

              </div>

            </div>

          </section>

          {/* BRANDS */}
          <section className="brands">

            <p>AUTHORIZED DISTRIBUTOR OF GLOBAL BRANDS</p>

            <div className="brand-list">
              <span>LUMIERE</span>
              <span>ArteDesign</span>
              <span>CRYSTALUX</span>
              <span>VOGUE</span>
              <span>HELIO</span>
            </div>

          </section>

          {/* PRODUCTS */}
          <section className="productss">

            <div className="section-title">
              <div>
                <h2>Popular Selections</h2>
              <p>Hand-picked excellence for your refined home.</p>
              </div>

              <Link to="/catalog" className="details-link">
                See All Products
              </Link>
            </div>

            <div className="products-grid">

              {products.map((product) => (
                <div className="card" key={product.id}>

                  <div className="card-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-image"
                    />
                  </div>

                  <div className="card-content">

                    <h3>{product.name}</h3>

                    <p className="price">
                      {product.price}
                    </p>

                    <hr />

                    <div className="product-specs">

                      <div>
                        <span>{product.spec1Title}</span>
                        <p>{product.spec1}</p>
                      </div>

                      <div>
                        <span>{product.spec2Title}</span>
                        <p>{product.spec2}</p>
                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* OFFERS */}
          <section className="offers">

            <h2 className="offer-title">
              Exclusive Seasonal Offers
            </h2>

            <div className="offers-top">

              <div className="offer-card">

                <img
                  src={hero2}
                  alt="Summer Sale"
                  className="offer-image"
                />

                <div className="offer-content">

                  <span>Limited Time</span>

                  <h2>
                    Summer Illumination Sale
                  </h2>

                  <p>
                    Up to 30% off on all ceiling fixtures and
                    outdoor collections.
                  </p>

                  <Link to="/offers">
                  <button className="tetiary-btns">
                    Claim Offer
                  </button>
                  </Link>

                </div>

              </div>

              <div className="logistics-card">

                <FaTruck className="truck-icon" />

                <h3>Free Logistics</h3>

                <p>
                  Complimentary white-glove delivery on all
                  orders over $2,500.
                </p>

                <Link
                  to="/about"
                  className="details-link"
                >
                  Details →
                </Link>

              </div>

            </div>

            <div className="offers-bottom">

              <div className="info-card design-card">

                <h3>Design Consult</h3>

                <p>
                  Speak with our architectural lighting
                  specialists for a free room assessment.
                </p>

                <Link to="/contact"><button>
                  Book Now
                </button></Link>

              </div>

              <div className="info-card newsletter-card">

                <div>

                  <h3>Newsletter Perks</h3>

                  <p>
                    Join our inner circle for 10%
                    off your first purchase.
                  </p>

                </div>

                <div className="newsletter">

                  <input
                    type="email"
                    placeholder="Email address"
                  />

                  <button type="submit">
                    Join
                  </button>

                </div>

              </div>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}

export default HomePage;
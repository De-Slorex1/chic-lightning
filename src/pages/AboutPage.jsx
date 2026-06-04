import React, { useState } from "react";
import "./AboutPage.css";
import Faq from "../components/Faq";
import abouthero from "../assets/about-hero.png";
import aboutlegacy from "../assets/aboutlegacy.png";
import { Link } from 'react-router-dom';


function AboutPage() {
  const [active, setActive] = useState(null);

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="hero">
        <img
          src={abouthero}
          alt="Luxury lighting"
        />

        <div className="hero-overlay" data-aos="fade-up">
          <h1>Since 1971</h1>
          <p>
            Crafting environments where light meets architectural precision
          </p>
        </div>
      </section>

      {/* LEGACY SECTION */}
      <section className="legacy-section">

        <div className="legacy-card">
          <h2>A Legacy of Radiance</h2>

          <p>
            Founded in 1971 by master artisan Elias Vance, Chic Lighting &
            Design began as a small workshop dedicated to restoring antique
            lanterns in the heart of the design district.
          </p>

          <p>
            Over five decades, we have evolved into a premier consultancy and
            supplier, marrying traditional craftsmanship with cutting-edge LED
            technology.
          </p>

          <div className="mission-philosophy">

            <div>
              <h4>OUR MISSION</h4>
              <p>
                To illuminate spaces with intentionality, enhancing human
                experience through technology and aesthetic grace.
              </p>
            </div>

            <div>
              <h4>OUR PHILOSOPHY</h4>
              <p>
                We believe light is the most crucial element of architecture.
                It shapes volume, dictates mood and affects the soul.
              </p>
            </div>

          </div>
        </div>

        <div className="legacy-image">
          <img
            src={aboutlegacy}
            alt="Design blueprint"
          />
        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stats-header">
          <div>
            <h2>Expertise in Every Beam</h2>

            <p>
              Our team consists of certified lighting designers, electrical
              engineers and interior curators with a combined experience of
              over 120 years.
            </p>
          </div>

          <Link to="/contact">
          <button>Meet the Team</button>
          </Link>
        </div>

        <div className="stats-grid">

          <div className="stat" data-aos="fade-down" data-aos-delay="100">
            <h3>500+</h3>
            <p>COMMERCIAL PROJECTS</p>
          </div>

          <div className="stat" data-aos="fade-down" data-aos-delay="200">
            <h3>12k+</h3>
            <p>RESIDENTIAL CURATIONS</p>
          </div>

          <div className="stat" data-aos="fade-down" data-aos-delay="300">
            <h3>14</h3>
            <p>DESIGN AWARDS</p>
          </div>

        </div>

      </section>

      <Faq />

      {/* CTA */}
      <section className="cta-section">

        <div>
          <h3>Ready to illuminate your project?</h3>

          <p>
            Contact our design team today for a custom consultation.
          </p>
        </div>

       <Link to="/contact">
        <button>Get In Touch</button>
       </Link>

      </section>

    </div>
  );
}

export default AboutPage;
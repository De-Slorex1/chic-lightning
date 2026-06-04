import React from "react";
import { 
  ShoppingBag, 
  User, 
  ArrowRight,
  ArrowLeft,
  ChevronRight, 
  ChevronLeft, 
  X, 
  Download, 
  Check, 
  Sun, 
  ArrowUpRight, 
  Menu,
  Sparkles,
  Info,
  Calendar,
  Layers,
  Sliders,
  Send,
  CheckIcon,
  CircleCheck
} from 'lucide-react';
import "./GalleryPage.css";
import { Link, NavLink } from 'react-router-dom';

const GalleryPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="gallery-page">
        <div className="page-header" data-aos="fade-up" data-aos-delay="100">
          <h1>Luminous Inspiration</h1>

          <p>
            Explore our curated collections of architectural lighting, where
            form meets function in a dance of shadow and brilliance.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pro">
        <div className="products">
          <a className="all" href="/">All Collections</a>
          <a href="#chandeliers">Chandeliers</a>
          <a href="#pendants">Pendants</a>
          <a href="#led">LED Systems</a>
          <a href="#outdoor">Outdoor</a>
        </div>
      </section>

      {/* Chandelier Gallery */}
      <section className="gallery-section">
        <div className="gallery-section-header">
          <div className="gallery-title">
            <span className="accent-line"></span>

            <div className="gallery-content" id="chandeliers">
              <h3>Chandelier Gallery</h3>
              <p>
                Grand statements for high ceilings and luxury foyers.
              </p>
            </div>
          </div>

          <a href="/catalog" className="view-all">
            View All
          </a>
        </div>

        <div className="gallery-images">
          <div className="image-large">
            <img
              src="Large Card.png"
              alt="Luxury Chandelier"
              className="gallery-image"
            />
          </div>

          <div className="image-small">
            <img
              src="public\Small Card .png"
              alt="Modern Chandelier"
              className="gallery-image"
            />
          </div>
        </div>
      </section>

      <section className="pendant-section">
            <div className="gallery-wrapper">

        <header className="gallery-header" id="pendants">

          <h1>Pendant Light Gallery</h1>

          <div className="header-underline"></div>

        </header>



        <div className="gallery-grid">

          {/* Left Column */}

          <div className="gallery-col">

            <div className="img-box landscape">

              <img src="public\cont.png" />

            </div>

            <div className="img-box portrait-long">

              <img src="public\chanderlier b.png" alt="Industrial Navy Pendant" />

            </div>

          </div>



          {/* Center Main Column */}

          <div className="gallery-col">

            <div className="img-box full-height">

              <img src="public\sittingroomlight.png" alt="Large Wooden Slat Pendant" />

            </div>

          </div>



          {/* Right Column */}

          <div className="gallery-col">

            <div className="img-box portrait-long">

              <img src="public\white chandelier.png" alt="White Ribbed Pendants" />

            </div>

            <div className="img-box landscape relative">

              <img src="public\Container (19).png" alt="Linear Office Light" />

              {/* Replication of the Figma UI tag in your screenshot */}

              

            </div>

          </div>

        </div>

      </div>

      </section>


<section className="led-section" >
  <h2 className="led-title" id="led">Smart LED Integrations</h2>

  <div className="led-container">

    <div className="led-left">
      <h3>Architectural Recessing</h3>

      <p className="led-description">
        Discover how our linear LED solutions disappear into the architecture
        to create floating ceilings and luminous coves.
      </p>

      <div className="led-feature">
        <CircleCheck size={16} />
        <span>Zero-glare Technology</span>
      </div>

      <div className="led-feature">
        <CircleCheck size={16} />
        <span>App-controlled Kelvin Tuning</span>
      </div>
    </div>

    <div className="led-image">
      <img src="/public\coridorr.png" />
    </div>

    <div className="led-right">
      <div className="led-icon">☀</div>

      <h3>The Smart Core</h3>

      <p>
        Seamlessly integrate your lighting with Lutron, Control4, and Savant
        systems for total atmospheric control.
      </p>

      <button className="button-outline">
        Download Tech Specs
      </button>
    </div>

  </div>
</section>

<section className="outdoor-section">
  <div className="outdoor-container">

    <div className="outdoor-header">
      <div>
        <h2 className="outdoor-title" id="outdoor">Outdoor Luminescence</h2>

        <p className="outdoor-description">
          Extending your design vision beyond the four walls with
          weather-resistant elegance.
        </p>
      </div>

      <div className="arrow-container">
        <button className="arrow-btn">
          <ArrowLeft size={20} />
        </button>

        <button className="arrow-btn">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>

    <div className="outdoor-gallery">

      <div className="gallery-card">
        <img src="/poolside.png" alt="Aegean Series" />

        <h5>Aegean Series</h5>
        <p>Submersible Precision</p>
      </div>

      <div className="gallery-card">
        <img src="/darkhome.png" alt="Sentry Wall" />

        <h5>Sentry Wall</h5>
        <p>Bi-Directional Wash</p>
      </div>

      <div className="gallery-card">
        <img src="/greenflowers.png" alt="Wilder Bollard" />

        <h5>Wilder Bollard</h5>
        <p>Low-Profile Guidance</p>
      </div>

    </div>

  </div>
</section>

<section className="projects-section">
  <div className="projects-container">

    <h2 className="projects-title">
      Ready to illuminate your project?
    </h2>

    <p className="projects-description">
      Our designers are ready to help you curate the perfect lighting
      plan for your commercial or residential space.
    </p>

    <div className="button-group">
      <Link to="/contact">
      <button className="button-solid">
        Request a Consultation
      </button>
      </Link>

      <Link to="/catalog">
      <button className="button-outline">
        Browse Full Catalog
      </button>
      </Link>
    </div>

  </div>
</section>
    
    </>
  );
};

export default GalleryPage;
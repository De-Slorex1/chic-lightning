
import React, { useEffect } from "react";
import "./ContactPage.css";

import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <div className="contact">

                <h1
                    data-aos="fade-up"
                    className="contact-title"
                >
                    Get in Touch
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="contact-description"
                >
                    Connecting premium light design with academic precision.
                    Whether you're planning a grand installation or seeking
                    technical advice, our experts are here to illuminate your vision.
                </p>


                <div className="contact-container">

                    {/* Left Column */}
                    <div className="contact-info-column">

                        {/* Studio Card */}
                        <div
                            data-aos="fade-right"
                            className="studio-card"
                        >
                            <div className="info-card studio-card">

                                <h3 className="card-title">Our Studio</h3>

                                <div className="info-item">
                                    <img
                                        className="address-icon"
                                        src="adress.png"
                                        alt="Address Icon"
                                    />

                                    <div className="info-text">
                                        <div className="add">Address</div>

                                        <p>
                                            482 Lumière Avenue
                                            <br />
                                            Design District, New York 10014
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <img
                                        className="phone-icon"
                                        src="phone.png"
                                        alt="Phone Icon"
                                    />

                                    <div className="info-text">
                                        <div className="add">Phone</div>
                                        <p>+1 (212) 555-0198</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <img
                                        className="email-icon"
                                        src="email.png"
                                        alt="Email Icon"
                                    />

                                    <div className="info-text">
                                        <div className="add">Email</div>
                                        <p>concierge@chiclighting.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Business Hours */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="200"
                            className="info-card-hours-card"
                        >
                            <div className="info-card hours-card">

                                <h3 className="card-title">
                                    Business Hours
                                </h3>

                                <div className="hours-list">

                                    <div className="hours-row">
                                        <div className="day">Mon - Fri</div>
                                        <div className="time">
                                            9:00 AM - 6:00 PM
                                        </div>
                                    </div>

                                    <div className="hours-row">
                                        <div className="day">Saturday</div>
                                        <div className="time">
                                            10:00 AM - 4:00 PM
                                        </div>
                                    </div>

                                    <div className="hours-row closed">
                                        <div className="sun">Sunday</div>
                                        <div className="clo">Closed</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Form Section */}
                    <div
                        data-aos="fade-left"
                        className="contact-form-card"
                    >
                        <h2 className="form-title">
                            Professional Inquiry & Feedback
                        </h2>

                        <p className="form-subtitle">
                            Please fill out the form below for project inquiries,
                            technical feedback, or customized lighting solutions.
                            Our consultants respond within 24 business hours.
                        </p>

                        <form className="inquiry-form">

                            <div className="form-row">

                                <div className="form-group">
                                    <label htmlFor="fullName">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        id="fullName"
                                        className="fullname"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="emailAddress">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="emailAddress"
                                        className="fullname"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>


                            <div className="form-group textarea-group">

                                <label htmlFor="message">
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    className="message"
                                    placeholder="Describe your lighting needs or provide feedback..."
                                    rows="5"
                                    required
                                ></textarea>

                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                            >
                                SUBMIT REQUEST
                            </button>

                        </form>
                    </div>
                </div>


                {/* Map */}
                <div
                    className="maps"
                >
                    <img
                        className="map"
                        src="map.png"
                        alt="map"
                    />
                </div>


                {/* Download Cards */}
                <div className="download-grid-container">

                    {/* Card 1 */}
                    <div
                        data-aos="zoom-in-left"
                        data-aos-delay="100"
                        className="download-card"
                    >
                        <div className="card-image-wrapper">
                            <img
                                src="first image.png"
                                alt="Product Catalog PDF"
                                className="card-image"
                            />
                        </div>

                        <div className="card-content">
                            <h3 className="card-heading">
                                Product Catalog PDF
                            </h3>

                            <p className="card-description">
                                Our complete 2024 collection featuring over
                                200 architectural lighting pieces.
                            </p>

                            <a href="#" className="download-link">
                                <img
                                    src="dowload.png"
                                    alt="Download"
                                    className="download-icon"
                                />

                                Download PDF
                            </a>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div
                        data-aos="zoom-in-left"
                        data-aos-delay="300"
                        className="download-card"
                    >
                        <div className="card-image-wrapper">
                            <img
                                src="second image.png"
                                alt="Company Brochure PDF"
                                className="card-image"
                            />
                        </div>

                        <div className="card-content">
                            <h3 className="card-heading">
                                Company Brochure PDF
                            </h3>

                            <p className="card-description">
                                Learn about our design philosophy,
                                academic partnerships, and firm history.
                            </p>

                            <a href="#" className="download-link">
                                <img
                                    src="dowload.png"
                                    alt="Download"
                                    className="download-icon"
                                />

                                Download PDF
                            </a>
                        </div>
                    </div>


                    {/* Card 3 */}
                    <div
                        data-aos="zoom-in-left"
                        data-aos-delay="500"
                        className="download-card"
                    >
                        <div className="card-image-wrapper">
                            <img
                                src="third image.png"
                                alt="Specifications DOC"
                                className="card-image"
                            />
                        </div>

                        <div className="card-content">
                            <h3 className="card-heading">
                                Specifications DOC
                            </h3>

                            <p className="card-description">
                                Technical data sheets, lumen outputs,
                                and installation guides for contractors.
                            </p>

                            <a href="#" className="download-link">
                                <img
                                    src="dowload.png"
                                    alt="Download"
                                    className="download-icon"
                                />

                                Download DOC
                            </a>
                        </div>
                    </div>

                </div>


                {/* Sitemap */}
                <div className="sitemap-container">

                   <div className="sitemap-container">
                    <h2 className="sitemap-main-title">Sitemap</h2>

                    <div className="sitemap-grid">
                        {/* Products Column */}
                        <div className="sitemap-column">
                            <h3 className="sitemap-heading">PRODUCTS</h3>
                            <ul className="sitemap-list">
                                <li><a href="/products/ceiling">Ceiling Lights</a></li>
                                <li><a href="/products/wall">Wall Lights</a></li>
                                <li><a href="/products/lamps">Lamps</a></li>
                                <li><a href="/products/led-strips">LED Strips</a></li>
                                <li><a href="/products/outdoor">Outdoor</a></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="sitemap-column">
                            <h3 className="sitemap-heading">COMPANY</h3>
                            <ul className="sitemap-list">
                                <li><a href="/about/story">Our Story</a></li>
                                <li><a href="/about/team">Design Team</a></li>
                                <li><a href="/about/careers">Careers</a></li>
                                <li><a href="/about/press">Press</a></li>
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div className="sitemap-column">
                            <h3 className="sitemap-heading">RESOURCES</h3>
                            <ul className="sitemap-list">
                                <li><a href="/resources/guides">Installation Guides</a></li>
                                <li><a href="/resources/warranty">Warranty Info</a></li>
                                <li><a href="/resources/safety">Safety Specs</a></li>
                            </ul>
                        </div>

                        {/* Education Column */}
                        <div className="sitemap-column">
                            <h3 className="sitemap-heading">EDUCATION</h3>
                            <ul className="sitemap-list">
                                <li><a href="/education/blog">Lighting Blog</a></li>
                                <li><a href="/education/calculator">Lumen Calculator</a></li>
                                <li><a href="/education/color-theory">Color Theory</a></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className="sitemap-column">
                            <h3 className="sitemap-heading">SUPPORT</h3>
                            <ul className="sitemap-list">
                                <li><a href="/support/contact">Contact Us</a></li>
                                <li><a href="/support/shipping">Shipping</a></li>
                                <li><a href="/support/returns">Returns</a></li>
                            </ul>
                        </div>

                        {/* Legal Column */}
                        <div className="sitemap-column">
                            <h3 className="sitemap-heading">LEGAL</h3>
                            <ul className="sitemap-list">
                                <li><a href="/legal/privacy">Privacy Policy</a></li>
                                <li><a href="/legal/terms">Terms of Service</a></li>
                                <li><a href="/legal/accessibility">Accessibility</a></li>
                            </ul>
                        </div>
                    </div>
        
                    
                </div>

                   
                </div>

            </div>
        </>
    );
};

export default ContactPage;


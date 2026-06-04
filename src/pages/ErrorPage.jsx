import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="error-card">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>

        <p>
          The page you're looking for seems to have faded into the dark.
        </p>

        <Link to="/" className="home-btn">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
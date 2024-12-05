import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./styles/404Page.css"; 

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className="not-found-page">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-description">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="not-found-link">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

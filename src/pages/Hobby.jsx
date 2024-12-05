import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { hobbiesData } from "./data/hobbiesData";
import "./styles/Hobby.css";

const Hobby = () => {
  return (
    <div className="hobby-page">
      <Header />
      <div className="hobby-hero">
        <h1 className="hobby-title">
          <span className="typewriter">My Hobbies</span>
        </h1>
        <p className="hobby-subtitle">
          Dive into the passions that make life colorful and exciting.
        </p>
      </div>

      <div className="hobby-grid">
        {hobbiesData.map((hobby) => (
          <Link to={`/hobby/${hobby.id}`} key={hobby.id} className="hobby-card">
            <div className="hobby-card-content">
              <h2 className="hobby-card-title">{hobby.name}</h2>
              <p className="hobby-card-description">{hobby.description}</p>
              <span className="hobby-card-action">Explore →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hobby;

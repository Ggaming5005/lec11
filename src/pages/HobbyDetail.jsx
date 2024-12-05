import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { hobbiesData } from "./data/hobbiesData";
import "./styles/HobbyDetail.css";

const HobbyDetail = () => {
  const { id } = useParams();
  const hobby = hobbiesData.find((h) => h.id === id);

  if (!hobby) {
    return (
      <div className="hobby-detail-page">
        <Header />
        <div className="hobby-detail-hero not-found">
          <h1 className="hobby-detail-title">Hobby Not Found</h1>
          <p className="hobby-detail-description">
            We couldn’t find the hobby you were looking for. 😢
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`hobby-detail-page ${id}-page`}>
      <Header />
      <div className="hobby-detail-hero">
        <h1 className="hobby-detail-title typewriter">{hobby.name}</h1>
        <p className="hobby-detail-description animate-fade-in">
          {hobby.details.heroDescription}
        </p>
      </div>

      <div className="hobby-content">
        <div className="hobby-text animate-slide-in">
          <p className="hobby-paragraph">{hobby.details.content}</p>
          <h2 className="hobby-highlights-title">Highlights:</h2>
          <ul className="hobby-highlights">
            {hobby.details.highlights.map((highlight, index) => (
              <li key={index} className="highlight-item">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="hobby-image-container animate-zoom-in">
          <img
            src={`/assets/images/${id}.jpg`}
            alt={hobby.name}
            className="hobby-image"
          />
        </div> */}
      </div>
    </div>
  );
};

export default HobbyDetail;

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Header from "../components/Header";
import "./styles/Home.css";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".hidden-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            I am a{" "}
            <span className="dynamic-text">
              <Typewriter
                options={{
                  strings: ["Designer", "Developer", "Dreamer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div className="links">
            <a href="/projects" className="btn">
              View Projects
            </a>
            <a href="/hobby" className="btn">
              Explore Hobbies
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section hidden-section">
        <div className="about-content">
          <h2 className="section-title highlight">About Me</h2>
          <p className="section-text">
            Hi, I'm Gio! Based in Georgia, I am a designer, developer, and
            dreamer who thrives on creativity and problem-solving. My work spans
            crafting interactive user interfaces, debugging games, and
            contributing to innovative projects.
          </p>
          <p className="section-text">
            I bring expertise in improving software quality and delivering
            seamless user experiences, collaborating with teams to ensure
            success in every project.
          </p>
          <div className="links">
            <a href="/projects" className="btn rainbow-hover">
              See My Work
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section hidden-section">
        <div className="contact-content">
          <h2 className="section-title highlight">Contact Me</h2>
          <p className="section-text glowing">Email: giorgi@example.com</p>
          <p className="section-text glowing">
            Roblox Username: giogeims_YTUBER
          </p>
          <p className="section-text">
            Let’s connect and bring your ideas to life!
          </p>
        </div>
      </section>

      {/* Redirect Section */}
      <section className="redirect-section hidden-section">
        <div className="redirect-content">
          <h2 className="section-title highlight">Discover More</h2>
          <div className="links">
            <a href="/projects" className="btn rainbow-hover">
              Explore Projects
            </a>
            <a href="/hobby" className="btn rainbow-hover">
              My Hobbies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

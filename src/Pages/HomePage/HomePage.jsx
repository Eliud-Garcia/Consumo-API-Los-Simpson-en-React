import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className="home-container">
      {/* HERO */}
      <section className="hero">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png"
          alt="The Simpsons Logo"
          className="main-logo"
        />
        <h2 className="hero-subtitle">
          ¡Sumérgete en el mundo de Springfield! 🍩
        </h2>
        <p className="hero-text">
          Explora personajes, episodios y lugares emblemáticos de <strong>Los Simpson</strong> usando nuestra aplicación interactiva impulsada por API.
        </p>
      </section>

      {/* FEATURE SECTIONS */}
      <section className="features">
        <Link to="/Personajes" className="feature-card characters">
          <img
            src="https://cdn.thesimpsonsapi.com/500/character/1.webp"
            alt="Characters"
          />
          <h3>Characters</h3>
          <p>Meet all your favorite Springfield citizens.</p>
        </Link>

        <Link to="/Episodios" className="feature-card episodes">
          <img
            src="https://cdn.thesimpsonsapi.com/500/episode/1.webp"
            alt="Episodes"
          />
          <h3>Episodes</h3>
          <p>Relive the funniest and most iconic moments.</p>
        </Link>

        <Link to="/Lugares" className="feature-card locations">
          <img
            src="https://cdn.thesimpsonsapi.com/500/location/5.webp"
            alt="Locations"
          />
          <h3>Locations</h3>
          <p>Explore the most famous places in Springfield.</p>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;

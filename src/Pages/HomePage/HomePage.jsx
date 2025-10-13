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
            alt="personajes"
          />
          <h3>Personajes</h3>
          <p>Conoce a todos tus ciudadanos favoritos de Springfield.</p>
        </Link>

        <Link to="/Episodios" className="feature-card episodes">
          <img
            src="https://cdn.thesimpsonsapi.com/500/episode/1.webp"
            alt="Episodios"
          />
          <h3>Episodios</h3>
          <p>Revive los momentos más divertidos e icónicos.</p>
        </Link>

        <Link to="/Lugares" className="feature-card locations">
          <img
            src="https://cdn.thesimpsonsapi.com/500/location/5.webp"
            alt="lugares"
          />
          <h3>Lugares</h3>
          <p>Explora los lugares más famosos de Springfield.</p>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;

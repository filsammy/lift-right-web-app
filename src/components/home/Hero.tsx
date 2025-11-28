import { Link } from "react-router-dom";
import { useUIStore } from "../../store/useUIStore";
import "./Hero.css";

export default function Hero() {
  const darkMode = useUIStore((state) => state.darkMode);

  return (
    <section className={`hero ${darkMode ? "hero--dark" : "hero--light"}`}>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-main">LiftRight</span>
            <span className="hero__title-tagline">
              TRAIN RIGHT FOR A FIT LIFE.
            </span>
          </h1>

          <p className="hero__description">
            Transform your fitness journey with expert coaching,
            state-of-the-art equipment, and a community that pushes you to be
            your best. Truly a journey with no sideways.
          </p>

          <div className="hero__cta-group">
            <Link to="/membership" className="hero__cta hero__cta--primary">
              View Memberships
            </Link>
            <Link to="/programs" className="hero__cta hero__cta--secondary">
              Explore Programs
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="hero__scroll-indicator">
            <span className="hero__scroll-text">Scroll to explore</span>
            <span className="hero__scroll-icon">↓</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hero__decoration hero__decoration--1"></div>
        <div className="hero__decoration hero__decoration--2"></div>
        <div className="hero__decoration hero__decoration--3"></div>
      </div>
    </section>
  );
}

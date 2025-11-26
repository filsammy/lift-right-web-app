import { Link } from "react-router-dom";
import { useUIStore } from "../../store/useUIStore";
import "./Footer.css";

export default function Footer() {
  const darkMode = useUIStore((state) => state.darkMode);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${darkMode ? "footer--dark" : "footer--light"}`}>
      <div className="footer__container">
        {/* Column 1: About */}
        <div className="footer__column">
          <h3 className="footer__heading">
            <span className="footer__logo-text">LiftRight</span>
            <span className="footer__logo-icon">🏋️</span>
          </h3>
          <p className="footer__description">
            Train Smart. Lift Right.
            <br />
            Your journey to fitness excellence starts here.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              📘
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              📷
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="footer__social-link" aria-label="YouTube">
              📺
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer__column">
          <h4 className="footer__title">Quick Links</h4>
          <nav className="footer__links">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/programs" className="footer__link">
              Programs
            </Link>
            <Link to="/coaches" className="footer__link">
              Coaches
            </Link>
            <Link to="/membership" className="footer__link">
              Membership
            </Link>
            <Link to="/contact" className="footer__link">
              Contact
            </Link>
          </nav>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer__column">
          <h4 className="footer__title">Contact Us</h4>
          <div className="footer__contact">
            <p className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>123 Fitness Street, Gym City, GY 12345</span>
            </p>
            <p className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <span>(555) 123-4567</span>
            </p>
            <p className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <span>info@liftright.gym</span>
            </p>
            <p className="footer__contact-item">
              <span className="footer__contact-icon">🕐</span>
              <span>
                Mon-Fri: 5AM-11PM
                <br />
                Sat-Sun: 6AM-10PM
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} LiftRight. All rights reserved.
        </p>
        <div className="footer__legal">
          <a href="#" className="footer__legal-link">
            Privacy Policy
          </a>
          <span className="footer__separator">•</span>
          <a href="#" className="footer__legal-link">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

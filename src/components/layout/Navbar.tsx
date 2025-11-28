import { Link, useLocation } from "react-router-dom";
import { useUIStore } from "../../store/useUIStore";
import "./Navbar.css";
import Logo from "../../assets/LiftRightLogo.png";

export default function Navbar() {
  const location = useLocation();
  const {
    darkMode,
    toggleDarkMode,
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useUIStore();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/programs", label: "Programs" },
    { path: "/coaches", label: "Coaches" },
    { path: "/membership", label: "Membership" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className={`navbar ${darkMode ? "navbar--dark" : "navbar--light"}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${
                isActive(link.path) ? "navbar__link--active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="navbar__actions">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="navbar__theme-toggle"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <i className="las la-sun" style={{ color: "#FCD34D" }}></i>
            ) : (
              <i className="las la-sun"></i>
            )}
          </button>

          {/* Join Now Button (Desktop) */}
          <Link to="/membership" className="navbar__cta">
            Join Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="navbar__menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__mobile-link ${
                isActive(link.path) ? "navbar__mobile-link--active" : ""
              }`}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/membership"
            className="navbar__mobile-cta"
            onClick={closeMobileMenu}
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
}

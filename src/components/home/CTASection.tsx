import { Link } from "react-router-dom";
import { useUIStore } from "../../store/useUIStore";
import "./CTASection.css";

export default function CTASection() {
  const darkMode = useUIStore((state) => state.darkMode);

  return (
    <section
      className={`cta-section ${
        darkMode ? "cta-section--dark" : "cta-section--light"
      }`}
    >
      <div className="cta-section__container">
        <div className="cta-section__content">
          <i className="las la-rocket cta-section__icon"></i>
          <h2 className="cta-section__title">Ready to Transform?</h2>
          <p className="cta-section__description">
            Join thousands of members who have already started their fitness
            journey with LiftRight. Your transformation starts today!
          </p>
          <div className="cta-section__buttons">
            <Link
              to="/membership"
              className="cta-section__button cta-section__button--primary"
            >
              Get Started Now
            </Link>
            <Link
              to="/contact"
              className="cta-section__button cta-section__button--secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

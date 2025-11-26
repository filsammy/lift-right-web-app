import { useState } from "react";
import { useUIStore } from "../store/useUIStore";
import "./Contact.css";

export default function Contact() {
  const darkMode = useUIStore((state) => state.darkMode);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <header className="contact-page__header">
          <h1 className="contact-page__title">Get In Touch</h1>
          <p className="contact-page__subtitle">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </header>

        <div className="contact-page__content">
          {/* Contact Form */}
          <div
            className={`contact-page__form-wrapper ${
              darkMode
                ? "contact-page__form-wrapper--dark"
                : "contact-page__form-wrapper--light"
            }`}
          >
            <h2 className="contact-page__form-title">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="contact-page__form">
              <div className="contact-page__field">
                <label htmlFor="name" className="contact-page__label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`contact-page__input ${
                    darkMode
                      ? "contact-page__input--dark"
                      : "contact-page__input--light"
                  }`}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="email" className="contact-page__label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`contact-page__input ${
                    darkMode
                      ? "contact-page__input--dark"
                      : "contact-page__input--light"
                  }`}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="message" className="contact-page__label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`contact-page__input contact-page__textarea ${
                    darkMode
                      ? "contact-page__input--dark"
                      : "contact-page__input--light"
                  }`}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <button type="submit" className="contact-page__submit">
                Send Message
              </button>

              {formSubmitted && (
                <div className="contact-page__success">
                  ✓ Message sent successfully! (Demo only)
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`contact-page__info ${
              darkMode
                ? "contact-page__info--dark"
                : "contact-page__info--light"
            }`}
          >
            <h2 className="contact-page__info-title">Contact Information</h2>

            <div className="contact-page__info-items">
              <div className="contact-page__info-item">
                <span className="contact-page__info-icon">📍</span>
                <div>
                  <h3 className="contact-page__info-heading">Address</h3>
                  <p className="contact-page__info-text">
                    123 Fitness Street
                    <br />
                    Gym City, GY 12345
                  </p>
                </div>
              </div>

              <div className="contact-page__info-item">
                <span className="contact-page__info-icon">📞</span>
                <div>
                  <h3 className="contact-page__info-heading">Phone</h3>
                  <p className="contact-page__info-text">(555) 123-4567</p>
                </div>
              </div>

              <div className="contact-page__info-item">
                <span className="contact-page__info-icon">✉️</span>
                <div>
                  <h3 className="contact-page__info-heading">Email</h3>
                  <p className="contact-page__info-text">info@liftright.gym</p>
                </div>
              </div>

              <div className="contact-page__info-item">
                <span className="contact-page__info-icon">🕐</span>
                <div>
                  <h3 className="contact-page__info-heading">Hours</h3>
                  <p className="contact-page__info-text">
                    Monday - Friday: 5AM - 11PM
                    <br />
                    Saturday - Sunday: 6AM - 10PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="contact-page__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7094707094336!2d121.02706931484287!3d14.553500889829293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0e5e1%3A0x1187e2e6e9ddaa0!2sMakati%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LiftRight Gym Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

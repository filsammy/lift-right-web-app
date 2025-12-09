import { useUIStore } from "../../store/useUIStore";
import "./Features.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "las la-user-tie",
    title: "Expert Coaches",
    description:
      "Train with certified professionals who are dedicated to helping you achieve your fitness goals.",
  },
  {
    icon: "las la-dumbbell",
    title: "Modern Equipment",
    description:
      "State-of-the-art facilities with the latest fitness equipment for optimal training results.",
  },
  {
    icon: "las la-clock",
    title: "Flexible Hours",
    description:
      "Open early mornings to late nights, fitting perfectly into your busy lifestyle.",
  },
  {
    icon: "las la-users",
    title: "Strong Community",
    description:
      "Join a supportive community of like-minded individuals on their fitness journey.",
  },
];

export default function Features() {
  const darkMode = useUIStore((state) => state.darkMode);

  return (
    <section
      className={`features ${darkMode ? "features--dark" : "features--light"}`}
    >
      <div className="features__container">
        {/* Header */}
        <div className="features__header">
          <p className="features__subtitle">Why Choose Us</p>
          <h2 className="features__title">Built For Your Success</h2>
          <p className="features__description">
            We provide everything you need to transform your fitness journey and
            achieve your goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card__icon-wrapper">
                <i className={`feature-card__icon ${feature.icon}`}></i>
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

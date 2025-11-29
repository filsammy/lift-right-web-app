import type { Membership } from "../../data/memberships";
import { useUIStore } from "../../store/useUIStore";
import "./PricingCard.css";

interface PricingCardProps {
  membership: Membership;
}

export default function PricingCard({ membership }: PricingCardProps) {
  const darkMode = useUIStore((state) => state.darkMode);

  return (
    <div
      className={`pricing-card ${
        darkMode ? "pricing-card--dark" : "pricing-card--light"
      } ${membership.popular ? "pricing-card--popular" : ""}`}
    >
      {membership.popular && (
        <div className="pricing-card__badge">
          <i className="las la-crown"></i> Most Popular
        </div>
      )}

      <div className="pricing-card__header">
        <h3 className="pricing-card__name">{membership.name}</h3>
        <div className="pricing-card__price">
          <span className="pricing-card__currency">₱</span>
          <span className="pricing-card__amount">{membership.price}</span>
          <span className="pricing-card__period">/month</span>
        </div>
      </div>

      <ul className="pricing-card__features">
        {membership.features.map((feature, index) => (
          <li key={index} className="pricing-card__feature">
            <span className="pricing-card__check">
              <i className="las la-check"></i>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="pricing-card__button">Choose Plan</button>
    </div>
  );
}

import { memberships } from "../data/memberships";
import PricingCard from "../components/ui/PricingCard";
import "./Membership.css";

export default function Membership() {
  return (
    <div className="membership-page">
      <div className="membership-page__container">
        <header className="membership-page__header">
          <h1 className="membership-page__title">Membership Plans</h1>
          <p className="membership-page__subtitle">
            Choose the perfect plan that fits your fitness goals and lifestyle.
            All plans include access to our world-class facilities.
          </p>
        </header>

        <div className="membership-page__grid">
          {memberships.map((membership) => (
            <PricingCard key={membership.id} membership={membership} />
          ))}
        </div>

        <footer className="membership-page__footer">
          <p className="membership-page__note">
            💡 All plans come with a 7-day money-back guarantee. No long-term
            contracts required.
          </p>
        </footer>
      </div>
    </div>
  );
}

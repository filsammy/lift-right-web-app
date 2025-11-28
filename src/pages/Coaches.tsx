import { coaches } from "../data/coaches";
import CoachCard from "../components/ui/CoachCard";
import { useUIStore } from "../store/useUIStore";
import "./Coaches.css";

export default function Coaches() {
  const darkMode = useUIStore((state) => state.darkMode);

  return (
    <div className={`coaches-page ${darkMode ? "coaches-page--dark" : "coaches-page--light"}`}>
      <div className="coaches-page__container">
        <header className="coaches-page__header">
          <h1 className="coaches-page__title">Meet Our Coaches</h1>
          <p className="coaches-page__subtitle">
            Our certified trainers are dedicated to helping you reach your
            fitness potential with personalized guidance and expertise.
          </p>
        </header>

        <div className="coaches-page__grid">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </div>
    </div>
  );
}

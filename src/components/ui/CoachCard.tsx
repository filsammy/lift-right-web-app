import type { Coach } from "../../data/coaches";
import { useUIStore } from "../../store/useUIStore";
import "./CoachCard.css";

interface CoachCardProps {
  coach: Coach;
}

export default function CoachCard({ coach }: CoachCardProps) {
  const darkMode = useUIStore((state) => state.darkMode);

  return (
    <div
      className={`coach-card ${
        darkMode ? "coach-card--dark" : "coach-card--light"
      }`}
    >
      <div className="coach-card__image-wrapper">
        <img src={coach.image} alt={coach.name} className="coach-card__image" />
      </div>

      <div className="coach-card__content">
        <h3 className="coach-card__name">{coach.name}</h3>

        <div className="coach-card__specialization">
          <i className="las la-dumbbell coach-card__icon"></i>
          <span className="coach-card__value">{coach.specialization}</span>
        </div>

        <div className="coach-card__experience">
          <i className="las la-award coach-card__icon"></i>
          <span className="coach-card__value">{coach.experience}</span>
        </div>

        <p className="coach-card__bio">{coach.bio}</p>

        <button className="coach-card__button">View Profile</button>
      </div>
    </div>
  );
}

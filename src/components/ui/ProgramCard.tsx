import type { Program } from "../../data/programs";
import { useUIStore } from "../../store/useUIStore";
import "./ProgramCard.css";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const darkMode = useUIStore((state) => state.darkMode);

  return (
    <div
      className={`program-card ${
        darkMode ? "program-card--dark" : "program-card--light"
      }`}
    >
      <div className="program-card__icon">{program.icon}</div>
      <h3 className="program-card__title">{program.title}</h3>
      <p className="program-card__description">{program.description}</p>
      <button className="program-card__button">Learn More</button>
    </div>
  );
}

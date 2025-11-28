import { programs } from "../data/programs";
import ProgramCard from "../components/ui/ProgramCard";
import { useUIStore } from "../store/useUIStore";
import "./Programs.css";

export default function Programs() {
  const darkMode = useUIStore((state) => state.darkMode);

  return (
    <div className={`programs-page ${darkMode ? "programs-page--dark" : "programs-page--light"}`}>
      <div className="programs-page__container">
        <header className="programs-page__header">
          <h1 className="programs-page__title">Our Programs</h1>
          <p className="programs-page__subtitle">
            Choose from our diverse range of training programs designed to help
            you achieve your fitness goals.
          </p>
        </header>

        <div className="programs-page__grid">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}

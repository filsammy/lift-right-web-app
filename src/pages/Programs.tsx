import { programs } from "../data/programs";
import ProgramCard from "../components/ui/ProgramCard";
import "./Programs.css";

export default function Programs() {
  return (
    <div className="programs-page">
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

import { useUIStore } from "../../store/useUIStore";
import "./Stats.css";

// Import your background image
// import statsBackground from "../../assets/stats-bg.jpg";

interface Stat {
  icon: string;
  number: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: "las la-users",
    number: "5000",
    suffix: "+",
    label: "Active Members",
  },
  {
    icon: "las la-dumbbell",
    number: "15",
    suffix: "",
    label: "Years Experience",
  },
  {
    icon: "las la-trophy",
    number: "50",
    suffix: "+",
    label: "Expert Coaches",
  },
  {
    icon: "las la-medal",
    number: "100",
    suffix: "%",
    label: "Success Rate",
  },
];

export default function Stats() {
  const darkMode = useUIStore((state) => state.darkMode);

  // Replace this URL with your actual background image path
  const backgroundImage =
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80";

  return (
    <section
      className={`stats ${darkMode ? "stats--dark" : "stats--light"}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="stats__container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <i className={`stat-card__icon ${stat.icon}`}></i>
              <div className="stat-card__number">
                {stat.number}
                {stat.suffix && (
                  <span className="stat-card__suffix">{stat.suffix}</span>
                )}
              </div>
              <p className="stat-card__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

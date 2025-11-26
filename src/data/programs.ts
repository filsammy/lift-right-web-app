export interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const programs: Program[] = [
  {
    id: 1,
    title: "Strength Training",
    description: "Build muscle mass and increase overall strength with compound movements and progressive overload techniques.",
    icon: "💪"
  },
  {
    id: 2,
    title: "Weight Loss",
    description: "Achieve your target weight through customized cardio routines and metabolic conditioning workouts.",
    icon: "🔥"
  },
  {
    id: 3,
    title: "Group Classes",
    description: "Join energetic group sessions including HIIT, cycling, yoga, and more in a motivating community environment.",
    icon: "👥"
  },
  {
    id: 4,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals with personalized workout plans and nutrition guidance.",
    icon: "🎯"
  },
  {
    id: 5,
    title: "Powerlifting",
    description: "Master the big three lifts (squat, bench, deadlift) with competition-focused programming and technique work.",
    icon: "🏋️"
  },
  {
    id: 6,
    title: "Functional Fitness",
    description: "Improve everyday movement patterns, mobility, and athleticism with varied functional training methods.",
    icon: "⚡"
  }
];
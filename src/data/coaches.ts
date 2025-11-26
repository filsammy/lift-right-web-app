export interface Coach {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
}

export const coaches: Coach[] = [
  {
    id: 1,
    name: "Coach Name #1",
    specialization: "Strength & Conditioning",
    experience: "8 years",
    bio: "Certified strength coach with expertise in powerlifting and Olympic weightlifting. Placeholder bio text for demonstration purposes.",
    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=Coach+1"
  },
  {
    id: 2,
    name: "Coach Name #2",
    specialization: "Weight Loss & Nutrition",
    experience: "6 years",
    bio: "Specialized in metabolic conditioning and sustainable nutrition planning. Placeholder bio text for demonstration purposes.",
    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=Coach+2"
  },
  {
    id: 3,
    name: "Coach Name #3",
    specialization: "Functional Fitness",
    experience: "10 years",
    bio: "Former athlete focusing on mobility, injury prevention, and athletic performance. Placeholder bio text for demonstration purposes.",
    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=Coach+3"
  },
  {
    id: 4,
    name: "Coach Name #4",
    specialization: "Group Classes & HIIT",
    experience: "5 years",
    bio: "High-energy instructor specializing in group motivation and interval training. Placeholder bio text for demonstration purposes.",
    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=Coach+4"
  },
  {
    id: 5,
    name: "Coach Name #5",
    specialization: "Bodybuilding & Aesthetics",
    experience: "7 years",
    bio: "Competition bodybuilder with extensive knowledge in hypertrophy training. Placeholder bio text for demonstration purposes.",
    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=Coach+5"
  },
  {
    id: 6,
    name: "Coach Name #6",
    specialization: "Yoga & Flexibility",
    experience: "9 years",
    bio: "Certified yoga instructor focusing on flexibility, balance, and mind-body connection. Placeholder bio text for demonstration purposes.",
    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=Coach+6"
  }
];
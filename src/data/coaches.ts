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
    name: "Johnny Bravo",
    specialization: "Strength & Conditioning",
    experience: "8 years",
    bio: "Certified strength coach with expertise in powerlifting and Olympic weightlifting. Placeholder bio text for demonstration purposes.",
    image: "https://i.pinimg.com/736x/f4/4e/02/f44e02220acc838f5b2bf0f423b3c651.jpg"
  },
  {
    id: 2,
    name: "Zal Dy",
    specialization: "Weight Loss & Nutrition",
    experience: "6 years",
    bio: "Specialized in metabolic conditioning and sustainable nutrition planning. Placeholder bio text for demonstration purposes.",
    image: "https://i.pinimg.com/1200x/94/b6/39/94b6393d041f64cab24e5cd1a8774a6a.jpg"
  },
  {
    id: 3,
    name: "CATT",
    specialization: "Functional Fitness",
    experience: "10 years",
    bio: "Former athlete focusing on mobility, injury prevention, and athletic performance. Placeholder bio text for demonstration purposes.",
    image: "https://i.pinimg.com/1200x/ee/ec/c3/eeecc37b325c2ac22cc90a54d4e8f63a.jpg"
  },
  {
    id: 4,
    name: "Coco",
    specialization: "Group Classes & HIIT",
    experience: "5 years",
    bio: "High-energy instructor specializing in group motivation and interval training. Placeholder bio text for demonstration purposes.",
    image: "https://i.pinimg.com/736x/ea/19/ac/ea19ac8b730d5cd9c9a069dcf6f548dd.jpg"
  },
  {
    id: 5,
    name: "The Rock",
    specialization: "Bodybuilding & Aesthetics",
    experience: "7 years",
    bio: "Competition bodybuilder with extensive knowledge in hypertrophy training. Placeholder bio text for demonstration purposes.",
    image: "https://i.pinimg.com/736x/e5/82/37/e58237e0bd12f9989582cd32745682ae.jpg"
  },
  {
    id: 6,
    name: "G.M.",
    specialization: "Yoga & Flexibility",
    experience: "9 years",
    bio: "Certified yoga instructor focusing on flexibility, balance, and mind-body connection. Placeholder bio text for demonstration purposes.",
    image: "https://i.pinimg.com/736x/6d/2a/9f/6d2a9f686bd5ca70b6a04c60a20f5679.jpg"
  }
];
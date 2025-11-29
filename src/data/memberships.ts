export interface Membership {
  id: number;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export const memberships: Membership[] = [
  {
    id: 1,
    name: "Basic",
    price: 2699,
    features: [
      "24/7 Gym Access",
      "Locker Room Access",
      "Mobile App",
      "Free Wifi",
      "Equipment Usage"
    ]
  },
  {
    id: 2,
    name: "Standard",
    price: 4499,
    popular: true,
    features: [
      "Everything in Basic",
      "Group Classes (Unlimited)",
      "Guest Pass (2 per month)",
      "Nutrition Consultation",
      "Workout Plan Template",
      "Sauna & Steam Room"
    ]
  },
  {
    id: 3,
    name: "Premium",
    price: 7499,
    features: [
      "Everything in Standard",
      "Personal Training (4 sessions/month)",
      "Priority Class Booking",
      "Massage Therapy (1 per month)",
      "Recovery Zone Access",
      "Towel Service",
      "Free Parking"
    ]
  },
  {
    id: 4,
    name: "VIP Elite",
    price: 11499,
    features: [
      "Everything in Premium",
      "Personal Training (8 sessions/month)",
      "Customized Meal Plan",
      "Private Locker",
      "Unlimited Guest Passes",
      "Athletic Therapy Access",
      "Exclusive VIP Events",
      "Premium Supplements Discount"
    ]
  }
];
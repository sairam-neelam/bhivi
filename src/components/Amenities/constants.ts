import {
  Booking,
  Coffee,
  Dumbbell,
  EventLogo,
  Lounge,
  Price,
  Sports,
  Wifi,
} from "../../assets";

export const AMENITIES: { name: string; logo: string }[] = [
  {
    name: "Community Events",
    logo: EventLogo,
  },
  {
    name: "Gym Facilities",
    logo: Dumbbell,
  },
  {
    name: "High-Speed Wifi",
    logo: Wifi,
  },
  {
    name: "Cafe & Tea bar",
    logo: Coffee,
  },
  {
    name: "Affordable",
    logo: Price,
  },
  {
    name: "Comfort Lounges",
    logo: Lounge,
  },
  {
    name: "Quick Booking",
    logo: Booking,
  },
  {
    name: "Sports Area",
    logo: Sports,
  },
];

export const AMENITIES_TITLE = "Why Choose us?";

import { Product, Bundle, Testimonial } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Regular Lean Pork Cut",
    price: "₱320",
    unit: "kg",
    category: "pork",
    description: "Siksik sa laman, perfect pang-adobo o sinigang.",
  },
  {
    id: "p2",
    name: "Pork Belly (Liempo)",
    price: "₱385",
    unit: "kg",
    category: "pork",
    description: "Freshly cut daily. Tamang-tama ang taba at laman.",
  },
  {
    id: "c1",
    name: "Whole Chicken",
    price: "₱195",
    unit: "kg",
    category: "chicken",
    description: "Farm-fresh chicken, double-inspected for quality.",
  },
  {
    id: "s1",
    name: "Frozen Tuna Steak",
    price: "₱450",
    unit: "kg",
    category: "seafood",
    description: "Premium quality tuna, blast-frozen for freshness.",
  },
];

export const BUNDLES: Bundle[] = [
  {
    id: "b1",
    title: "Family Weekender Pack",
    price: "₱1,250",
    savings: "Save ₱150",
    description: "Sapat para sa 3-4 days na ulam ng pamilya.",
    items: ["1kg Pork Liempo", "1kg Whole Chicken", "500g Ground Pork", "500g Tuna Steak"],
  },
  {
    id: "b2",
    title: "Negosyo Starter Kit",
    price: "₱4,800",
    savings: "Bulk Price applied",
    description: "Para sa mga karinderya at home-selling business.",
    items: ["5kg Ground Pork", "5kg Chicken Choice Cuts", "2kg Pork Chop", "Free Delivery"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aling Nena",
    role: "Karinderya Owner",
    content: "Dito na ako kumukuha ng supply para sa turo-turo ko. Ang linis ng pagkaka-cut at laging presko ang dating!",
    rating: 5,
  },
  {
    name: "Ricardo M.",
    role: "Dad of 3",
    content: "Sulit ang Negosyo packs nila. Mas mura kaysa sa supermarket pero pareho lang ang quality. Recommended!",
    rating: 5,
  },
  {
    name: "Jessa Santos",
    role: "Home Cook",
    content: "Mabilis mag-reply sa Messenger. Order ngayon, dating agad within the hour. Fresh talaga yung chicken!",
    rating: 5,
  },
];

export const CONTACT_INFO = {
  phone: "0917-123-4567",
  messenger: "m.me/karnemastersph",
  address: "123 Mabini St., Poblacion, Manila (Near Public Market)",
  hours: "Daily: 6:00 AM - 7:00 PM",
};

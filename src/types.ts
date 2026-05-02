import { ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  price: string;
  unit: string;
  category: "pork" | "chicken" | "seafood" | "bundle";
  description: string;
  image?: string;
  isPromo?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Bundle {
  id: string;
  title: string;
  price: string;
  savings: string;
  items: string[];
  description: string;
}

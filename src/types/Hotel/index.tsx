import { ImageProduct } from "types/HardProducts";

export interface HotelCardType {
  hotels: Hotel[];
  department: string;
  metaTags: string;
  metaDescription: string;
}
export interface HotelSliderType {
  hotel: Hotel;
}

export interface Hotel {
  id: number;
  title: string;
  metaTags: string;
  metaDescription: string;
  description: string;
  stars: number;
  price: string;
  overview: string;
  persons: string;
  Fully: string;
  English: string;
  metaImage: ImageProduct[];
  link: string;
}

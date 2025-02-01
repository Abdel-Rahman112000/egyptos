export interface ShoppingCardType {
  shops: ShoppingType[];
  category_name: string;
  metaDescription: string;
  metaTags: string;
}
export interface ShoppingType {
  id: number;
  name: string;
  description: string;
  cost: string;
  images: Image[];
}

export interface Image {
  id: number;
  shoppingId: number;
  image: string;
  created_at: string;
  updated_at: string;
}

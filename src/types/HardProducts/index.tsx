export interface HardProductsType {
  products: Products[];
  category: string;
}
export interface ProductSliderType {
  product: Products;
}
interface Products {
  id: number;
  code: unknown;
  categoryId: number;
  taxId: number;
  brandId: number;
  title: string;
  description: string;
  metaTags: string;
  metaDescription: string;
  more: unknown;
  type: number;
  home: number;
  stars: number;
  price: string;
  quantity: number;
  endDate: unknown;
  discount: number;
  overview: string;
  highlight: unknown;
  program: unknown;
  include: unknown;
  execlude: unknown;
  know: unknown;
  persons: string;
  Fully?: string;
  English?: string;
  anything: unknown;
  images: ImageProduct[];
}
export interface ImageProduct {
  id: number;
  productId: number;
  image: string;
  created_at: string;
  updated_at: string;
}

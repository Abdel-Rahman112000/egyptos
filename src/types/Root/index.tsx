import { Hotel } from "types/Hotel";

export interface Root {
  lang: string;
  siteInformation: SiteInformation;
  siteContent: SiteContent[];
  banners: Banner[];
  blogs: Blog[];
  brands: Brand[];
  projects: Project[];
  contactus: Contactus;
  social: Social;
  socialMedia: SocialMedum[];
  metaTitle: string;
  metaTags: string;
  metaDescription: string;
  metaURL: string;
  metaImage: string;
  homeBlogs: HomeBlog[];
  products: Product[];
  sliders: Slider[];
  Categories: Category[];
  shippings: Shipping[];
  category_hotels: HotelCat[];
  SiteColor: SiteColor;
  hotels: Hotel[];
  languages: Language[];
}

export interface Data {
  egyptos: true | false;
  status: true | false;
}
export interface SiteInformation {
  id: number;
  about: string;
  home: string;
  about_us: string;
  blog_us: string;
  contact_us: string;
  explorer_us: string;
  product_us: string;
  service_us: string;
  hotel_us: string;
  description: string;
  image: string;
  aboutMetaTags: string;
  aboutMetaDescription: string;
  download: unknown;
  title: string;
  metaTags: string;
  metaDescription: string;
  logo: string;
  icon: string;
  phone1: string | null;
  phone2: string | null;
  phone3: string | null;
  phone4: string | null;
  home_contact_image: string;
  home_number_image: string;
  email: string;
  address: string;
  map: string;
  subscribe: string;
  footer_logo: string;
  pdf: string;
  pdf2: string;
  about_image: string;
  about_title: string;
  about_description: string;
  explorer_image: string;
  explorer_title: string;
  explorer_description: string;
  product_image: string;
  product_title: string;
  hotel_title: string;
  product_description: string;
  service_image: string;
  service_title: string;
  service_description: string;
  blog_image: string;
  blog_title: string;
  blog_description: string;
  contact_image: string;
  contact_title: string;
  contact_description: string;
  home_about_title: string;
  home_about_description: string;
  home_about_image: string;
  address_trans: string;
  subscribe_now: string;
  reach_all_now: string;
  contact: string;
  phone: string;
  email_trans: string;
  call_us: string;
  you_will_be: string;
  contactMetaDescription: string;
  contactMetaTags: string;
  book_now: string;
  vedio: string;
}
export interface HotelCat {
  id: string;
  title: string;
  metaTags: string;
  description: string;
  image: string;
}

export interface SiteColor {
  created_at: string;
  id: number;
  mainColor: string;
  secondaryColor: string;
  textColor: string;
  updated_at: string;
}
export interface SiteContent {
  id: number;
  position: string;
  title?: string;
  description?: string;
}

export interface Banner {
  id: number;
  position: string;
  link: string;
  name: unknown;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  metaDescription: string;
  image: string;
  created_at: string;
  created_dm: string;
}

export interface Brand {
  created_at: string;
  id: number;
  image: string;
  image_path: string[];
  link: null;
  name: null;
  updated_at: string;
}

export interface Project {
  id: number;
  position: string;
  title: string;
  description: unknown;
}

export interface Contactus {
  id: number;
  whatsup: string;
  viber: unknown;
  telegram: unknown;
  phone: string;
  updated_at: string;
  created_at: string;
}

export interface Social {
  id: number;
  title: string;
  icon: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface SocialMedum {
  id: number;
  title: string;
  icon: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface HomeBlog {
  id: number;
  title: string;
  description: string;
  metaTags: string;
  metaDescription: string;
  image: string;
  views?: number;
}

export interface Product {
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
  highlight?: string;
  program: unknown;
  include: unknown;
  execlude: unknown;
  know?: string;
  persons: string;
  Fully: string;
  English: string;
  unknownthing: unknown;
  images: Image[];
}

export interface Image {
  id: number;
  productId: number;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Slider {
  id: number;
  title: unknown;
  description?: string;
  image: string;
}

export interface Category {
  id: number;
  title: string;
  metaTags?: string;
  metaDescription?: string;
  image_path: string[];
  image: string;
}

export interface Shipping {
  id: number;
  name: string;
  cost: string;
  description: string;
  image?: string;
}

export interface Language {
  id: number;
  name: string;
  code: string;
  direction: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
  image_path: string[];
  web_name: string;
}

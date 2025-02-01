export interface AboutType {
  siteInformation: SiteInformation;
  metaTitle: string;
  metaTags: string;
  metaDescription: string;
  metaURL: string;
  metaImage: string;
}

export interface SiteInformation {
  id: number;
  about: string;
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
  phone1: string;
  phone2: unknown;
  phone3: unknown;
  phone4: unknown;
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
}

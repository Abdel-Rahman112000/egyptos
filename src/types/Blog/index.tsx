import { Banner } from "types/Root";

export interface BlogType {
  //   banners: Banner[];
  blog: BlogIdType;
}

export interface BlogIdType {
  id: number;
  title: string;
  description: string;
  metaTags: string;
  metaDescription: string;
  image: string;
  created_at: string;
  updated_at: string;
  image_path: string[];
}

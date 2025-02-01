// src/react-helmet.d.ts
declare module "react-helmet" {
  import { ReactNode } from "react";

  export interface HelmetProps {
    children?: ReactNode;
    defaultTitle?: string;
    title?: string;
    titleTemplate?: string;
    meta?: { name: string; content: string }[];
    link?: { rel: string; href: string }[];
    script?: { src: string; type: string }[];
    // Add other relevant types if needed
  }

  export const Helmet: React.FC<HelmetProps>;
  export default Helmet;
}

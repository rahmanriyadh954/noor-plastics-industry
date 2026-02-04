
export enum Category {
  CRATES = 'Industrial Crates',
  GARMENTS = 'Garments Accessories',
  MOLDS = 'Custom Molds',
  HOUSEHOLD = 'Household',
}

export enum Material {
  HDPE = 'HDPE (High-Density Polyethylene)',
  PP = 'PP (Polypropylene)',
  ABS = 'ABS (Acrylonitrile Butadiene Styrene)',
  PVC = 'PVC (Polyvinyl Chloride)',
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  material: Material;
  size: string;
  weight: string;
  loadCapacity: string;
  image: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

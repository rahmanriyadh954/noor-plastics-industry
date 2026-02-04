
import React from 'react';
import { Settings, PencilRuler, Factory, CheckCircle2, Truck } from 'lucide-react';
import { Product, Category, Material, ProcessStep, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'crate-hd-01',
    name: 'HEAVY-DUTY STACKABLE CRATE',
    category: Category.CRATES,
    material: Material.HDPE,
    size: '600 x 400 x 300 mm',
    weight: '2.5 kg',
    loadCapacity: '50 kg',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Designed for rigorous industrial environments. Features reinforced corners and ergonomic handles.',
    features: ['UV Resistant', 'High Impact Strength', 'Stackable up to 10 units', 'Zero-waste production'],
  },
  {
    id: 'hanger-px-09',
    name: 'PRECISION GARMENT HANGER',
    category: Category.GARMENTS,
    material: Material.PP,
    size: '450 mm Standard',
    weight: '85g',
    loadCapacity: '5 kg',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    description: 'Anti-slip industrial hangers for high-volume retail export. Durable and sleek finish.',
    features: ['Anti-slip surface', '360° Swivel Hook', 'Ergonomic curves', 'Lightweight yet strong'],
  },
  {
    id: 'mold-custom-X',
    name: 'AUTOMOTIVE DASH COMPONENT MOLD',
    category: Category.MOLDS,
    material: Material.ABS,
    size: 'Custom Engineering',
    weight: 'N/A',
    loadCapacity: 'Extreme Precision',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    description: 'Custom-engineered high-precision mold for complex automotive interiors.',
    features: ['Tolerance +/- 0.05mm', 'Hardened Steel core', 'Rapid cooling channels'],
  },
  {
    id: 'house-bin-05',
    name: 'ERGO-GRIP STORAGE BIN',
    category: Category.HOUSEHOLD,
    material: Material.PP,
    size: '30L Capacity',
    weight: '1.2 kg',
    loadCapacity: '20 kg',
    image: 'https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?auto=format&fit=crop&q=80&w=800',
    description: 'Versatile household storage solution with transparent lids and secure latches.',
    features: ['BPA Free', 'Food Grade Safe', 'Airtight Seal', 'Modular design'],
  },
];

export const CLIENTS = [
  'Samsung', 'Walton', 'RFL', 'Pran', 'BSRM', 'Akij', 'Unilever', 'Honda', 'Toyota'
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: 1, title: 'ENGINEERING DESIGN', description: 'CAD/CAM modeling with structural simulation for maximum durability.' },
  { number: 2, title: 'PRECISION MOLD MAKING', description: 'High-grade steel fabrication using state-of-the-art CNC machinery.' },
  { number: 3, title: 'INJECTION MOLDING', description: '24/7 automated high-tonnage production with real-time pressure monitoring.' },
  { number: 4, title: 'QUALITY ASSURANCE', description: 'Rigorous 10-point inspection including stress, thermal, and weight testing.' },
  { number: 5, title: 'LOGISTICS & SHIPPING', description: 'Just-in-time delivery systems for global supply chain integration.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahim Ullah',
    company: 'Logistics Director, RFL',
    content: 'PolyMolding has transformed our supply chain with crates that last 40% longer than traditional competitors.',
    avatar: 'https://i.pravatar.cc/150?u=rahim'
  },
  {
    id: 't2',
    name: 'Sarah Chen',
    company: 'Operations, Samsung Electronics',
    content: 'Their custom molding precision is unmatched. The tolerance levels they achieve for our components are world-class.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'PRODUCTS', path: '/products' },
  { name: 'SERVICES', path: '/services' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'CONTACT HQ', path: '/contact' },
];

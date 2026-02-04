
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ChevronRight, Download, Send, AlertCircle, Maximize2 } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) return (
    <div className="pt-40 pb-24 text-center">
      <h2 className="text-3xl font-industrial font-bold">PRODUCT NOT FOUND</h2>
      <Link to="/products" className="text-orange-600 mt-4 inline-block font-industrial">BACK TO CATALOG</Link>
    </div>
  );

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 mb-12 uppercase">
          <Link to="/" className="hover:text-zinc-900 transition-colors">HOME</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-zinc-900 transition-colors">PRODUCTS</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-orange-600">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div 
              className="relative aspect-square bg-zinc-100 overflow-hidden cursor-zoom-in border border-zinc-200"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <motion.img 
                src={product.image} 
                alt={product.name}
                animate={{ scale: isZoomed ? 1.5 : 1 }}
                className="w-full h-full object-cover origin-center transition-all duration-500"
              />
              <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur p-3 rounded-full text-zinc-900 shadow-xl pointer-events-none">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-zinc-100 border border-zinc-200 overflow-hidden grayscale hover:grayscale-0 cursor-pointer transition-all">
                  <img src={product.image} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details & Info */}
          <div className="flex flex-col">
            <span className="text-orange-600 font-industrial font-bold tracking-[0.4em] text-sm uppercase mb-4">ENGINEERING SPECS</span>
            <h1 className="text-4xl md:text-6xl font-industrial font-bold leading-none uppercase industrial-italic mb-8">{product.name}</h1>
            
            <p className="text-zinc-600 text-lg leading-relaxed mb-12 pb-12 border-b border-zinc-100">
              {product.description}
            </p>

            <div className="space-y-8">
              <h3 className="font-industrial font-bold text-2xl uppercase tracking-wider">TECHNICAL SPECIFICATIONS</h3>
              <div className="overflow-hidden border border-zinc-200">
                <table className="w-full text-left font-industrial">
                  <tbody className="divide-y divide-zinc-200">
                    <tr className="bg-zinc-50">
                      <th className="p-4 uppercase tracking-widest text-sm font-bold text-zinc-500 w-1/3">Material</th>
                      <td className="p-4 font-bold">{product.material}</td>
                    </tr>
                    <tr>
                      <th className="p-4 uppercase tracking-widest text-sm font-bold text-zinc-500">Dimensions</th>
                      <td className="p-4 font-bold">{product.size}</td>
                    </tr>
                    <tr className="bg-zinc-50">
                      <th className="p-4 uppercase tracking-widest text-sm font-bold text-zinc-500">Weight</th>
                      <td className="p-4 font-bold">{product.weight}</td>
                    </tr>
                    <tr>
                      <th className="p-4 uppercase tracking-widest text-sm font-bold text-zinc-500">Load Capacity</th>
                      <td className="p-4 font-bold">{product.loadCapacity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h4 className="font-industrial font-bold uppercase tracking-widest text-sm">Key Features</h4>
                <div className="grid grid-cols-2 gap-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-600">
                      <Check className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 flex flex-col sm:flex-row gap-4">
                <button className="flex-grow bg-zinc-950 text-white font-industrial font-bold py-5 px-8 tracking-widest hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" /> REQUEST BULK QUOTE
                </button>
                <button className="bg-zinc-100 text-zinc-900 font-industrial font-bold py-5 px-8 tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-3">
                  <Download className="w-5 h-5" /> DOWNLOAD DATASHEET
                </button>
              </div>
              
              <div className="bg-zinc-50 p-6 flex gap-4 items-start border border-zinc-200">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <p className="text-xs text-zinc-500 leading-relaxed font-medium uppercase tracking-wider">
                  NOTE: COLORS AND SIZES CAN BE CUSTOMIZED FOR LARGE SCALE ORDERS. PLEASE CONTACT OUR ENGINEERING DEPARTMENT FOR MOLD MODIFICATIONS.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-24 border-t border-zinc-100">
            <h2 className="text-3xl font-industrial font-bold uppercase mb-12">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map(rp => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group block bg-zinc-50 border border-zinc-200 p-6 hover:bg-white hover:shadow-xl transition-all">
                   <div className="aspect-video bg-zinc-200 mb-6 overflow-hidden">
                     <img src={rp.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                   </div>
                   <h4 className="font-industrial font-bold text-xl uppercase mb-2 group-hover:text-orange-600 transition-colors">{rp.name}</h4>
                   <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">{rp.category}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

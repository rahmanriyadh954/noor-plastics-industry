
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowUpRight, Scale, Box, Component } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category, Material } from '../types';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', ...Object.values(Category)];

  return (
    <div className="pt-48 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-industrial font-bold tracking-[0.3em] text-sm">PRECISION CATALOG</span>
              <h1 className="text-5xl md:text-7xl font-industrial font-bold mt-4 industrial-italic uppercase leading-none">Industrial Inventory</h1>
              <p className="text-zinc-600 mt-6 text-lg leading-relaxed">
                Browse our full range of high-performance logistics and garment solutions. Every product is engineered for maximum life-cycle durability.
              </p>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="SEARCH PRODUCTS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-zinc-300 py-4 pl-12 pr-4 font-industrial tracking-widest text-sm focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 border-b border-zinc-200 pb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 font-industrial text-sm tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-zinc-950 text-white shadow-xl' 
                    : 'bg-white text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white group border border-zinc-200 overflow-hidden"
            >
              <Link to={`/product/${product.id}`} className="block relative h-64 overflow-hidden bg-zinc-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-zinc-950 text-white p-2 group-hover:bg-orange-600 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-orange-600 uppercase">{product.category}</span>
                  <div className="h-1 w-12 bg-zinc-200" />
                </div>
                <h3 className="text-2xl font-industrial font-bold uppercase mb-6 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 pt-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4" /> <span>{product.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Component className="w-4 h-4" /> <span>{product.material.split(' ')[0]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4" /> <span>{product.weight}</span>
                  </div>
                </div>

                <Link 
                  to={`/product/${product.id}`} 
                  className="mt-8 block w-full text-center py-4 bg-zinc-50 hover:bg-orange-600 hover:text-white font-industrial font-bold tracking-[0.2em] text-xs transition-all uppercase"
                >
                  VIEW FULL SPECS
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
             <div className="w-24 h-24 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-8">
               <Filter className="w-10 h-10 text-zinc-400" />
             </div>
             <h3 className="text-2xl font-industrial font-bold uppercase">NO PRODUCTS MATCHED YOUR FILTERS</h3>
             <button 
               onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
               className="mt-6 text-orange-600 font-industrial tracking-widest hover:underline"
             >
               RESET ALL FILTERS
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

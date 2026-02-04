
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Microscope, Zap, PenTool, Database } from 'lucide-react';

const Services: React.FC = () => {
  const capabilities = [
    { icon: Layers, title: "High-Volume Production", desc: "Automated injection lines capable of 24/7 high-tonnage output for enterprise clients." },
    { icon: ShieldCheck, title: "Quality Lab Testing", desc: "Internal stress, thermal, and weight tolerance labs ensuring 100% compliance." },
    { icon: Microscope, title: "Precision Engineering", desc: "Micro-tolerances down to 0.05mm for complex automotive and electronics parts." },
    { icon: Database, title: "Material Science", desc: "Expert selection of HDPE, PP, ABS, and recycled blends tailored to product use cases." },
    { icon: PenTool, title: "Custom Mold Design", desc: "Full-cycle CAD/CAM mold engineering from concept to hardened steel fabrication." },
    { icon: Zap, title: "Rapid Prototyping", desc: "Turnaround of functional 3D prototypes and pilot molds within 14 business days." }
  ];

  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-24 text-center">
          <span className="text-orange-600 font-industrial font-bold tracking-[0.4em] uppercase text-sm">OUR CAPABILITIES</span>
          <h1 className="text-5xl md:text-8xl font-industrial font-bold uppercase industrial-italic mt-4">CUSTOM MOLDING</h1>
          <p className="text-zinc-500 mt-8 text-xl max-w-3xl mx-auto leading-relaxed">
            We provide full-spectrum plastic engineering. From concept sketches to massive production runs, PolyMolding is your technical partner in manufacturing.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-zinc-200 border border-zinc-200">
          {capabilities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 hover:bg-zinc-50 transition-colors group"
            >
              <item.icon className="w-12 h-12 text-zinc-900 group-hover:text-orange-600 mb-8 transition-colors" />
              <h3 className="text-2xl font-industrial font-bold uppercase mb-4 tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 grid lg:grid-cols-2 items-center gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-industrial font-bold uppercase leading-tight">ADVANCED TOOLING & FABRICATION</h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Our mold-making shop is equipped with the latest CNC, EDM, and Wire Cut machines. We use premium grade H13, P20, and S50C steel for molds ensuring a lifecycle of over 1 million shots.
            </p>
            <div className="space-y-4">
               {[
                 "In-house Tool Design & Build",
                 "Multi-Cavity & Family Molds",
                 "Overmolding & Insert Molding",
                 "Gas-Assist Molding Technology"
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-6 h-6 bg-orange-600 flex items-center justify-center rounded-full">
                     <Zap className="w-3 h-3 text-white" />
                   </div>
                   <span className="font-industrial font-bold text-sm tracking-widest">{text.toUpperCase()}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1565127014016-758c527f30d4?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-[500px] object-cover border-8 border-zinc-100 shadow-2xl"
               alt="Services Detail"
             />
             <div className="absolute -bottom-8 -left-8 bg-zinc-950 p-10 text-white border-l-8 border-orange-600 max-w-xs">
               <h4 className="font-industrial font-bold text-3xl mb-2">1,000,000+</h4>
               <p className="text-[10px] tracking-widest uppercase text-zinc-400 font-bold">SHOTS GUARANTEED PER MOLD</p>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

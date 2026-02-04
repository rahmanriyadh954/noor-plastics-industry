
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Zap, Recycle, ShieldCheck, Factory, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLIENTS, PROCESS_STEPS, TESTIMONIALS, PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const trustBarRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const scrollToSection = () => {
    if (trustBarRef.current) {
      trustBarRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-zinc-950 overflow-hidden">
        <motion.div style={{ y: yParallax }} className="absolute inset-0 opacity-40 scale-110">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Manufacturing Facility"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-orange-500 font-industrial font-bold text-sm md:text-base inline-block mb-4"
            >
              EST. 1999 • GLOBAL PRECISION ENGINEERING
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-industrial font-bold text-white leading-tight md:leading-[1.1] industrial-italic tracking-tighter">
              HEAVY DUTY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 py-3 inline-block leading-normal">PRECISION</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-zinc-400 mt-6 text-lg md:text-2xl max-w-xl leading-relaxed font-medium"
            >
              Forging the future of industrial logistics with zero-defect manufacturing and sustainable material science.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <Link 
                to="/contact" 
                className="group relative overflow-hidden bg-orange-600 text-white font-industrial font-bold px-10 py-6 tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,88,12,0.4)] active:scale-95 flex items-center justify-center gap-3"
              >
                <span className="relative z-10">CONTACT US</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-zinc-950 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
              <Link 
                to="/products" 
                className="group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border border-white/20 font-industrial font-bold px-10 py-6 tracking-[0.2em] transition-all active:scale-95"
              >
                VIEW CATALOG <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Fixed Scroll Indicator */}
        <button 
          onClick={scrollToSection}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group z-20 cursor-pointer"
        >
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5"
           >
             <div className="w-1 h-2 bg-orange-600 rounded-full" />
           </motion.div>
           <span className="text-white/40 font-industrial text-[9px] tracking-[0.6em] uppercase group-hover:text-orange-500 transition-colors">SCROLL TO EXPLORE</span>
        </button>
      </section>

      {/* Trust Bar (Marquee) - Added scroll-mt to fix overlap on scroll */}
      <section ref={trustBarRef} className="bg-zinc-100 py-16 border-y border-zinc-200 scroll-mt-24">
        <div className="marquee">
          <div className="marquee-content">
            {/* Duplicated multiple times to ensure continuous flow on all screen widths */}
            {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
              <div key={idx} className="flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 px-12 group cursor-default inline-flex">
                <span className="font-industrial text-4xl font-bold tracking-tighter text-zinc-900 group-hover:text-orange-600 transition-colors">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary & Stats */}
      <section className="py-32 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-[650px] object-cover rounded-sm shadow-2xl"
              alt="Industrial Precision"
            />
            <div className="absolute -bottom-10 -right-10 bg-orange-600 p-12 text-white hidden lg:block shadow-2xl border-l-[10px] border-zinc-950">
               <h3 className="font-industrial text-5xl font-bold">25+</h3>
               <p className="font-industrial tracking-widest text-sm mt-2">YEARS OF EXCELLENCE</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.span variants={itemVariants} className="text-orange-600 font-industrial font-bold tracking-[0.3em] text-sm">OUR CAPACITY</motion.span>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-industrial font-bold leading-[0.9] industrial-italic uppercase">Scaling Industrial Power Through Design</motion.h2>
            <motion.p variants={itemVariants} className="text-zinc-600 leading-relaxed text-xl font-medium">
              We operate at the intersection of mechanical engineering and industrial logistics, delivering plastic solutions that aren't just molded—they're engineered for lifetime durability.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-10 pt-10 border-t border-zinc-100">
              <div className="space-y-2">
                <h4 className="text-5xl font-industrial font-bold text-zinc-900">1200+</h4>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">Global Partners</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-5xl font-industrial font-bold text-zinc-900">0.05%</h4>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">Defect Accuracy</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-5xl font-industrial font-bold text-zinc-900">50K+</h4>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">Daily Output</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-5xl font-industrial font-bold text-zinc-900">100%</h4>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">Green Initiative</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-zinc-950 py-32 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-industrial font-bold tracking-[0.4em] text-sm">TECHNICAL CATALOG</span>
              <h2 className="text-5xl md:text-7xl text-white font-industrial font-bold mt-4 industrial-italic uppercase">Product Lines</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/products" className="group flex items-center gap-4 text-white hover:text-orange-500 font-industrial text-sm tracking-widest transition-all">
                <span>EXPLORE ALL SOLUTIONS</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.slice(0, 4).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative h-[500px] overflow-hidden bg-zinc-900 border border-zinc-800/50"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-orange-500 font-bold text-[9px] tracking-[0.4em] uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">{product.category}</span>
                  <h3 className="text-white font-industrial text-3xl font-bold group-hover:text-orange-500 transition-colors uppercase leading-tight">{product.name}</h3>
                  <div className="h-0.5 bg-orange-600 w-0 group-hover:w-16 transition-all duration-500 mt-6" />
                  <Link to={`/product/${product.id}`} className="inline-flex items-center gap-2 mt-8 text-[10px] font-bold tracking-[0.3em] text-white/50 group-hover:text-white transition-colors uppercase">
                    TECHNICAL DATA <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-24">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-orange-600 font-industrial font-bold tracking-[0.3em] text-sm"
             >
               OUR WORKFLOW
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-industrial font-bold mt-4 uppercase industrial-italic"
             >
               Steps to Perfection
             </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-0 border border-zinc-200 shadow-2xl">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group p-10 border-r border-zinc-100 last:border-r-0 hover:bg-zinc-50 transition-all duration-500"
              >
                <div className="text-7xl font-industrial font-bold text-zinc-100 group-hover:text-orange-500/10 transition-colors absolute top-6 left-6 -z-0">
                  0{step.number}
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-1.5 bg-zinc-900 group-hover:bg-orange-600 transition-all duration-500" />
                  <h4 className="text-xl font-industrial font-bold uppercase tracking-tight leading-none group-hover:text-orange-600 transition-colors">{step.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-orange-600 py-20 text-white relative overflow-hidden">
        <motion.div 
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 font-industrial text-[20rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none"
        >
          INDUSTRIAL POWER PRECISION STRENGTH
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center gap-8 group">
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition-all duration-500">
              <Zap className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-industrial text-3xl font-bold tracking-tighter uppercase">HIGH-IMPACT</h4>
              <p className="text-orange-100/80 text-sm uppercase tracking-widest font-bold mt-1">Extreme Load Stability</p>
            </div>
          </div>
          <div className="flex items-center gap-8 group md:border-x border-white/20 md:px-12">
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition-all duration-500">
              <Recycle className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-industrial text-3xl font-bold tracking-tighter uppercase">RECYCLABLE</h4>
              <p className="text-orange-100/80 text-sm uppercase tracking-widest font-bold mt-1">Eco-System Circularity</p>
            </div>
          </div>
          <div className="flex items-center gap-8 group">
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition-all duration-500">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-industrial text-3xl font-bold tracking-tighter uppercase">QUALIFIED</h4>
              <p className="text-orange-100/80 text-sm uppercase tracking-widest font-bold mt-1">Global Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-20">
             <span className="text-orange-600 font-industrial font-bold tracking-[0.3em] text-sm">B2B RELATIONS</span>
             <h2 className="text-5xl font-industrial font-bold uppercase mt-4 industrial-italic">Success Stories</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12">
             {TESTIMONIALS.map((t, idx) => (
               <motion.div 
                 key={t.id} 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white p-16 shadow-xl border border-zinc-100 hover:border-orange-500 transition-all duration-500 relative overflow-hidden group"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
                 <p className="text-2xl text-zinc-700 italic leading-relaxed mb-12 font-medium relative z-10">"{t.content}"</p>
                 <div className="flex items-center gap-6 relative z-10">
                   <div className="relative">
                    <img src={t.avatar} className="w-16 h-16 rounded-full border-2 border-orange-500 shadow-lg grayscale group-hover:grayscale-0 transition-all" alt={t.name} />
                    <div className="absolute -bottom-1 -right-1 bg-orange-600 p-1 rounded-full shadow-lg">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                   </div>
                   <div>
                     <h4 className="font-industrial font-bold text-xl uppercase leading-none tracking-tight">{t.name}</h4>
                     <p className="text-[10px] text-orange-600 font-black mt-2 uppercase tracking-[0.2em]">{t.company}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA - Shrinked as requested */}
      <section className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1565127014016-758c527f30d4?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-industrial font-bold text-white mb-8 industrial-italic uppercase leading-[0.9] tracking-tighter">
              READY TO <br /> <span className="text-orange-600">INNOVATE?</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium">
              Join forces with the leaders in precision molding. Let's engineer the next generation of industrial products together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="inline-block bg-orange-600 hover:bg-white hover:text-orange-600 text-white font-industrial font-bold px-12 py-5 tracking-[0.3em] text-lg transition-all shadow-2xl active:scale-95"
              >
                CONTACT US
              </Link>
              <Link 
                to="/about" 
                className="inline-block bg-transparent border-2 border-white/20 hover:border-white text-white font-industrial font-bold px-12 py-5 tracking-[0.3em] text-lg transition-all active:scale-95"
              >
                OUR LEGACY
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

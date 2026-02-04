
import React from 'react';
import { motion } from 'framer-motion';
import { History, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-zinc-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-24 flex flex-col items-center text-center">
          <span className="text-orange-500 font-industrial font-bold tracking-[0.4em] uppercase text-sm">BORN IN 1999</span>
          <h1 className="text-5xl md:text-8xl font-industrial font-bold uppercase industrial-italic mt-4">THE POLYMOLDING LEGACY</h1>
          <p className="text-zinc-400 mt-8 text-xl max-w-3xl leading-relaxed">
            From our humble beginnings with a single manual press to becoming the primary supplier for global electronics and logistics giants.
          </p>
        </header>

        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-orange-500">
               <History className="w-10 h-10" />
               <h2 className="text-3xl font-industrial font-bold uppercase">Our Evolution</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-lg">
              PolyMolding Industrial HQ was founded on the principle that precision shouldn't be a premium, but a standard. For 25 years, we've invested in the finest German and Japanese machinery to ensure our output is world-class.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-zinc-800">
               <div>
                  <h4 className="text-orange-500 font-industrial font-bold text-2xl uppercase">Integrity</h4>
                  <p className="text-sm text-zinc-500 mt-2">Upholding the highest ethical standards in manufacturing and workforce safety.</p>
               </div>
               <div>
                  <h4 className="text-orange-500 font-industrial font-bold text-2xl uppercase">Precision</h4>
                  <p className="text-sm text-zinc-500 mt-2">Zero-tolerance for defects through multiple QA gates.</p>
               </div>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute inset-0 bg-orange-600 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all" />
             <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" className="w-full grayscale group-hover:grayscale-0 transition-all duration-700" alt="Legacy" />
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-zinc-900 p-10 space-y-4">
            <Target className="w-12 h-12 text-orange-500" />
            <h3 className="font-industrial font-bold text-2xl uppercase">OUR MISSION</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">To lead the global transition towards high-durability, zero-waste plastic solutions in industrial logistics.</p>
          </div>
          <div className="bg-zinc-900 p-10 space-y-4">
            <Award className="w-12 h-12 text-orange-500" />
            <h3 className="font-industrial font-bold text-2xl uppercase">STANDARDS</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">ISO 9001:2015 Certified. Compliance with EU REACH and RoHS environmental standards.</p>
          </div>
          <div className="bg-zinc-900 p-10 space-y-4">
            <Users className="w-12 h-12 text-orange-500" />
            <h3 className="font-industrial font-bold text-2xl uppercase">WORKFORCE</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">A family of over 450 engineers, technicians, and operators committed to excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

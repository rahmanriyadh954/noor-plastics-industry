
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Navbar should have a solid background if scrolled OR if we are not on the Home page
  const shouldHaveSolidBg = isScrolled || !isHomePage;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      {/* Top Bar */}
      <AnimatePresence>
        {(!isScrolled) && (
          <motion.div 
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`hidden md:block text-zinc-400 border-b border-zinc-800/50 py-2.5 overflow-hidden ${
              shouldHaveSolidBg ? 'bg-zinc-950' : 'bg-zinc-950/20 backdrop-blur-sm'
            }`}
          >
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-[10px] font-industrial tracking-[0.2em]">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>PLOT 42, INDUSTRIAL ZONE 2, GAZIPUR</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <Mail className="w-3.5 h-3.5 text-orange-600" />
                  <span>SALES@POLYMOLDING-BD.COM</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <Phone className="w-3.5 h-3.5 text-orange-600" />
                  <span>+880 1234-567890</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Facebook className="w-3.5 h-3.5 hover:text-orange-500 cursor-pointer" />
                <Linkedin className="w-3.5 h-3.5 hover:text-orange-500 cursor-pointer" />
                <Twitter className="w-3.5 h-3.5 hover:text-orange-500 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-500 ease-in-out border-b ${
          shouldHaveSolidBg 
            ? 'bg-zinc-950 shadow-2xl py-3 border-zinc-800/50' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 bg-orange-600 flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 ease-in-out shadow-lg shadow-orange-600/20">
              <span className="text-white font-black text-2xl -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-industrial font-bold text-2xl tracking-tight leading-none">POLYMOLDING</span>
              <span className="text-orange-500 text-[9px] font-bold tracking-[0.3em] leading-none uppercase mt-0.5">Noor Plastics Industry</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-industrial tracking-[0.2em] transition-all duration-300 hover:text-orange-500 relative group py-1 ${
                  location.pathname === link.path ? 'text-orange-500' : 'text-zinc-200'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-industrial text-xs px-7 py-3 rounded-sm transition-all duration-300 shadow-lg shadow-orange-600/20 active:scale-95"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white bg-zinc-800/50 rounded-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm md:hidden z-[110]"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-zinc-950 p-8 md:hidden shadow-2xl z-[120] border-l border-zinc-800"
              >
                <div className="flex justify-between items-center mb-12">
                   <div className="text-white font-industrial font-bold text-xl tracking-tight">MENU</div>
                   <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white"><X /></button>
                </div>
                <div className="flex flex-col gap-6">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.path}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between text-2xl font-industrial transition-colors pb-4 border-b border-zinc-800 ${
                          location.pathname === link.path ? 'text-orange-500' : 'text-zinc-100 hover:text-orange-500'
                        }`}
                      >
                        {link.name}
                        <ChevronRight className={`w-5 h-5 transition-transform ${location.pathname === link.path ? 'translate-x-1' : ''}`} />
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link 
                      to="/contact" 
                      className="mt-6 block bg-orange-600 text-center py-5 text-white font-industrial text-xl tracking-[0.2em] shadow-lg shadow-orange-600/10"
                    >
                      CONTACT US
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

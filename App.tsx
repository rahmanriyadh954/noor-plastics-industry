
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AiChatbot from './components/AiChatbot';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.3" />
    <path d="M17.4 5.3a8.34 8.34 0 0 1 2.6 6.2 8.34 8.34 0 0 1-2.6 6.2" />
    <path d="M9.1 12.1a1 1 0 0 1 0-1.4 5 5 0 0 1 7 0 1 1 0 0 1 0 1.4" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

// High-fidelity WhatsApp SVG logo
const WhatsAppBrandedIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="white"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.548 0 10.061-4.512 10.063-10.062.002-2.69-1.047-5.221-2.954-7.13s-4.439-2.956-7.13-2.956c-5.545 0-10.061 4.512-10.063 10.062-.001 2.031.547 3.513 1.55 5.078l-.994 3.63 3.709-.974zm12.034-11.303c-.19-.094-1.129-.558-1.303-.622-.174-.064-.3-.095-.426.095-.126.19-.489.622-.599.749-.11.127-.221.143-.411.048-.19-.095-.802-.296-1.527-.945-.565-.503-.946-1.124-1.057-1.314-.111-.19-.012-.293.083-.387.086-.085.19-.222.285-.333.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.333-.048-.095-.426-1.028-.584-1.409-.154-.372-.323-.322-.442-.328l-.377-.007c-.127 0-.333.048-.507.238-.174.19-.665.651-.665 1.587 0 .937.681 1.841.776 1.968.095.127 1.339 2.045 3.245 2.868.453.196.806.313 1.082.401.455.144.87.123 1.198.074.365-.054 1.129-.461 1.287-.905.158-.444.158-.825.111-.905-.047-.08-.174-.127-.364-.221z"/>
  </svg>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />

        {/* WhatsApp Button - Bottom Left with Branded Logo */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('https://wa.me/8801787794226', '_blank')}
          className="fixed bottom-8 left-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:bg-[#128C7E] transition-all border-2 border-white/20"
          title="Chat on WhatsApp"
        >
          <WhatsAppBrandedIcon />
        </motion.button>

        {/* AI Chatbot - Bottom Right */}
        <AiChatbot />
      </div>
    </Router>
  );
};

export default App;

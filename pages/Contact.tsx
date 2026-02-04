
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Globe, MessageCircle, Building2, UserCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    category: 'INDUSTRIAL CRATES',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { companyName, contactName, email, phone, category, message } = formData;
    
    const whatsappMessage = `*New Project Inquiry - Noor Plastics*%0A%0A` +
      `*Company:* ${companyName}%0A` +
      `*Name:* ${contactName}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Category:* ${category}%0A%0A` +
      `*Message:* ${message}`;
    
    const whatsappUrl = `https://wa.me/8801787794226?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-20">
          <span className="text-orange-600 font-industrial font-bold tracking-[0.4em] uppercase text-sm">GLOBAL HEADQUARTERS</span>
          <h1 className="text-5xl md:text-8xl font-industrial font-bold industrial-italic uppercase mt-4">CONTACT HQ</h1>
          <p className="text-zinc-500 mt-8 text-xl max-w-2xl leading-relaxed">
            Ready to initiate a high-precision project? Reach out to our engineering, sales, or support teams directly.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-zinc-200 p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-sm"
            >
              <h3 className="text-3xl font-industrial font-bold uppercase mb-10 flex items-center gap-4">
                <span className="w-1.5 h-10 bg-orange-600 block"></span>
                PROJECT INQUIRY
              </h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleWhatsAppSubmit}>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5" /> Company Name
                  </label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    placeholder="Engineering Corp Ltd."
                    className="w-full bg-zinc-50 border border-zinc-200 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:bg-white font-medium transition-all" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                    <UserCircle2 className="w-3.5 h-3.5" /> Contact Name
                  </label>
                  <input 
                    type="text" 
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 border border-zinc-200 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:bg-white font-medium transition-all" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@company.com"
                    className="w-full bg-zinc-50 border border-zinc-200 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:bg-white font-medium transition-all" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full bg-zinc-50 border border-zinc-200 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:bg-white font-medium transition-all" 
                  />
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Product Interest</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 border border-zinc-200 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:bg-white font-industrial tracking-widest text-sm transition-all"
                  >
                    <option value="INDUSTRIAL CRATES">INDUSTRIAL CRATES</option>
                    <option value="GARMENTS ACCESSORIES">GARMENTS ACCESSORIES</option>
                    <option value="CUSTOM MOLD ENGINEERING">CUSTOM MOLD ENGINEERING</option>
                    <option value="HOUSEHOLD SOLUTIONS">HOUSEHOLD SOLUTIONS</option>
                  </select>
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Project Message</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-zinc-50 border border-zinc-200 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:bg-white font-medium transition-all" 
                  />
                </div>
                <div className="md:col-span-2 pt-6">
                  <button 
                    type="submit"
                    className="w-full bg-zinc-950 text-white font-industrial font-bold py-6 tracking-[0.3em] hover:bg-orange-600 transition-all flex items-center justify-center gap-4 group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                    SUBMIT VIA WHATSAPP
                  </button>
                  <p className="text-[10px] text-zinc-400 text-center mt-4 uppercase tracking-widest font-bold">
                    Our team typically responds within 2-4 business hours.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Contact Details Side Bar */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-industrial font-bold text-2xl uppercase tracking-widest mb-8 pb-4 border-b-2 border-orange-600 inline-block">DIRECT CHANNELS</h3>
              <div className="space-y-8">
                <div className="flex gap-4 group cursor-default">
                  <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-industrial font-bold text-[10px] tracking-[0.2em] text-zinc-400 uppercase">OFFICE PHONE</h4>
                    <p className="font-bold text-lg">+880 1711-XXXXXX</p>
                  </div>
                </div>
                <div 
                  className="flex gap-4 group cursor-pointer"
                  onClick={() => window.open('https://wa.me/8801234567890', '_blank')}
                >
                  <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-industrial font-bold text-[10px] tracking-[0.2em] text-zinc-400 uppercase">DIRECT WHATSAPP</h4>
                    <p className="font-bold text-lg text-green-600 underline decoration-green-600/30 underline-offset-4">+880 1712-XXXXXX</p>
                  </div>
                </div>
                <div className="flex gap-4 group cursor-default">
                  <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-industrial font-bold text-[10px] tracking-[0.2em] text-zinc-400 uppercase">FACTORY HQ</h4>
                    <p className="font-bold text-lg leading-tight">Plot 12, Tongi Industrial Area, Gazipur, Bangladesh.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-industrial font-bold text-2xl uppercase tracking-widest mb-8 pb-4 border-b-2 border-orange-600 inline-block">DEPARTMENT EMAILS</h3>
              <div className="space-y-6">
                <div className="group">
                  <h4 className="font-industrial font-bold text-[10px] tracking-[0.2em] text-zinc-400 mb-1 uppercase">SALES & PROCUREMENT</h4>
                  <a href="mailto:sales@polymolding-bd.com" className="font-bold hover:text-orange-600 transition-colors">sales@polymolding-bd.com</a>
                </div>
                <div className="group">
                  <h4 className="font-industrial font-bold text-[10px] tracking-[0.2em] text-zinc-400 mb-1 uppercase">MOLD ENGINEERING</h4>
                  <a href="mailto:engineering@polymolding-bd.com" className="font-bold hover:text-orange-600 transition-colors">engineering@polymolding-bd.com</a>
                </div>
                <div className="group">
                  <h4 className="font-industrial font-bold text-[10px] tracking-[0.2em] text-zinc-400 mb-1 uppercase">CAREER INQUIRIES</h4>
                  <a href="mailto:hr@polymolding-bd.com" className="font-bold hover:text-orange-600 transition-colors">hr@polymolding-bd.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-950 p-10 text-white rounded-sm"
            >
              <Clock className="w-10 h-10 text-orange-600 mb-6" />
              <h4 className="font-industrial font-bold text-2xl uppercase mb-3">OPERATIONAL HOURS</h4>
              <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-widest font-medium">
                Manufacturing: 24/7 Operations<br />
                Office: SAT - THU | 09:00 - 18:00
              </p>
            </motion.div>
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="mt-24 h-[500px] w-full bg-zinc-100 border border-zinc-200 relative overflow-hidden group rounded-sm shadow-xl">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-50 grayscale group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="bg-zinc-950 text-white p-10 border-l-[12px] border-orange-600 shadow-2xl">
               <MapPin className="w-10 h-10 text-orange-600 mb-6" />
               <h4 className="font-industrial font-bold text-3xl uppercase">VISIT OUR FACILITY</h4>
               <p className="font-industrial tracking-[0.3em] text-[11px] text-zinc-400 mt-3 font-bold">CLICK TO OPEN IN GOOGLE MAPS</p>
             </div>
          </div>
          <a href="https://maps.google.com" target="_blank" className="absolute inset-0 z-10"></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  MessageCircle, 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  ShieldCheck,
  Zap,
  Tag
} from 'lucide-react';
import { PRODUCTS, BUNDLES, TESTIMONIALS, CONTACT_INFO } from './constants';
import { Product } from './types';

export default function App() {
  const [filter, setFilter] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-master-red selection:text-white">
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-master-red text-white font-black text-xl px-2.5 py-0.5 rounded italic">KM</div>
            <span className="text-xl sm:text-2xl font-black text-master-brown tracking-tighter uppercase italic">
              KARNE<span className="text-master-red">MASTERS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-black uppercase tracking-widest text-gray-500">
            <button onClick={() => scrollToSection('products')} className="hover:text-master-red transition-colors focus:outline-hidden">Catalog</button>
            <button onClick={() => scrollToSection('bundles')} className="hover:text-master-red transition-colors focus:outline-hidden">Sulit Bundles</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-master-red transition-colors focus:outline-hidden">About</button>
            <div className="h-4 w-px bg-gray-200" />
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold text-gray-400 leading-none">Open Daily</p>
              <p className="text-xs font-black text-master-brown">7:00 AM - 7:00 PM</p>
            </div>
            <button onClick={() => scrollToSection('contact')} className="bg-master-green text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">
              Messenger
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-master-brown focus:outline-hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-xl font-black uppercase tracking-tight text-master-brown">
              <button onClick={() => scrollToSection('products')} className="text-left border-b border-gray-100 pb-2">Products</button>
              <button onClick={() => scrollToSection('bundles')} className="text-left border-b border-gray-100 pb-2">Bundles</button>
              <button onClick={() => scrollToSection('about')} className="text-left border-b border-gray-100 pb-2">About Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-left bg-master-red text-white p-4 rounded-xl text-center shadow-lg">
                Order via Messenger
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-16 sm:pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative bg-master-cream overflow-hidden border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-7/12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-master-red-light text-master-red px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block italic">
                  Sariwa Kada Araw • Sigurado
                </span>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-6">
                  ANG KARNE NG <span className="text-master-red italic">BAYAN</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-500 font-medium mb-10 max-w-lg">
                  Quality na pang-chef, <span className="text-black font-bold italic">presyong pang-pamilya.</span> Garantisadong presko at malinis para sa inyong hapag-kainan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="flex justify-center items-center space-x-2 bg-master-red text-white text-xl font-black px-10 py-5 rounded-2xl hover:bg-master-red-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-master-red/20 uppercase tracking-tight"
                  >
                    <span>Order Now</span>
                    <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={() => scrollToSection('bundles')}
                    className="flex justify-center items-center space-x-2 border-2 border-master-brown text-master-brown text-xl font-black px-10 py-5 rounded-2xl hover:bg-master-brown hover:text-white transition-all uppercase tracking-tight"
                  >
                    <span>View Prices</span>
                  </button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-16 border-t border-gray-200 pt-8">
                  <div>
                    <p className="text-3xl font-black tracking-tighter">100%</p>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Daily Restock</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black italic tracking-tighter">₱195+</p>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Family Packs</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black tracking-tighter">4.9/5</p>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Suki Rating</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-5/12 grid grid-cols-1 gap-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 italic">Today's Special Cuts</h2>
              {PRODUCTS.slice(0, 3).map((p, i) => (
                <div key={p.id} className={`group relative p-6 rounded-2xl border transition-all cursor-pointer overflow-hidden ${i === 2 ? 'bg-master-red text-white border-none' : 'bg-white border-gray-100 hover:border-master-red'}`}>
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <p className={`text-[10px] font-black uppercase mb-1 ${i === 2 ? 'text-red-200' : 'text-master-red'}`}>{i === 2 ? 'Negosyo Bundle' : 'Premium Choice'}</p>
                      <h3 className="text-xl font-black uppercase tracking-tight">{p.name}</h3>
                      <p className={`text-xs font-medium ${i === 2 ? 'text-red-100' : 'text-gray-500'}`}>{p.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black">{p.price}</p>
                      <p className={`text-[10px] font-bold uppercase ${i === 2 ? 'text-red-200' : 'text-gray-400'}`}>Per {p.unit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRODUCT SHOWCASE --- */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-master-red text-xs font-black uppercase tracking-widest mb-2 block italic">— Master Selection</span>
                <h2 className="text-5xl font-black text-master-brown mb-4 uppercase tracking-tighter">STOCK CATALOG</h2>
                <p className="text-gray-500 font-medium max-w-lg">Piliin ang pinaka-presko para sa iyong mesa. Wholesale prices available for bulk orders.</p>
              </div>
              <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-xl">
                {['all', 'pork', 'chicken', 'seafood'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                      filter === cat 
                        ? 'bg-white text-master-red shadow-sm' 
                        : 'text-gray-400 hover:text-master-brown'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-master-cream p-6 rounded-2xl border border-transparent hover:border-master-red/20 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-black uppercase text-master-red tracking-widest bg-white px-2 py-0.5 rounded border border-gray-100 shadow-sm">{product.category}</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase leading-tight mb-2 tracking-tight group-hover:text-master-red transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-xs font-medium mb-8 leading-relaxed italic">"{product.description}"</p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Price Unit</p>
                        <p className="text-2xl font-black leading-none">{product.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Kilo</p>
                        <ChevronRight className="text-master-red ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* --- PROMO / BUNDLES --- */}
        <section id="bundles" className="py-24 bg-master-brown text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <span className="text-master-red-light text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block italic">Bestsellers Only</span>
                <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-4">MAS MADAMI, <span className="text-master-red">MAS SULIT!</span></h2>
                <p className="text-gray-400 font-medium max-w-xl">Save more with our curated family and business bundles. Bulk savings daily.</p>
              </div>
              <button className="bg-white text-master-brown px-8 py-4 rounded-xl font-black uppercase tracking-tight hover:bg-master-red hover:text-white transition-all transform hover:-rotate-1">
                Order Bundle Now
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BUNDLES.map((bundle) => (
                <div 
                  key={bundle.id}
                  className="bg-white/5 border border-white/10 rounded-3xl p-10 group hover:border-master-red transition-all"
                >
                  <div className="flex justify-between items-start mb-10">
                    <h3 className="text-3xl font-black uppercase tracking-tight leading-none italic">{bundle.title}</h3>
                    <div className="bg-master-red text-white text-[10px] font-black uppercase px-3 py-1 rounded italic tracking-widest">
                      {bundle.savings}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-12">
                    {bundle.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group/item">
                        <CheckCircle2 size={16} className="text-master-red opacity-50 group-hover/item:opacity-100 transition-opacity" />
                        <span className="text-sm font-bold tracking-tight uppercase group-hover/item:text-master-red transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-white/10">
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Bundle Total</p>
                      <p className="text-4xl font-black">{bundle.price}</p>
                    </div>
                    <ArrowRight size={32} className="text-master-red" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-20 bg-master-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Star size={80} className="text-master-red" />
                  </div>
                  <p className="text-lg font-black italic text-master-brown mb-8 leading-tight tracking-tight relative z-10 uppercase">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-xl bg-master-red text-white flex items-center justify-center font-black italic">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-master-brown uppercase tracking-tight leading-none mb-1">{t.name}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT / FINAL CTA --- */}
        <section id="contact" className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="bg-master-brown rounded-[48px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <div className="md:w-1/2 p-12 sm:p-20 text-white">
                <span className="text-master-red text-xs font-black uppercase tracking-[.3em] mb-6 inline-block italic">Bukas Kahit Anong Oras</span>
                <h2 className="text-6xl font-black italic tracking-tighter leading-[0.85] uppercase mb-8">HANDA KAMING <span className="text-master-red">MAGSERBISYO.</span></h2>
                <p className="text-gray-400 font-medium mb-12 text-lg">Special requests? Bulk orders? O gusto lang mag-check ng current prices? Chat lang sa mga Masters!</p>
                
                <div className="grid gap-10">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-master-red border border-white/10">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Hotline Call/Text</p>
                      <p className="text-2xl font-black italic tracking-tighter">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-master-red border border-white/10">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Pick-up Location</p>
                      <p className="text-xl font-bold tracking-tight text-gray-300">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gray-100 min-h-[400px] relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-white p-12 rounded-[32px] shadow-2xl text-center border-t-8 border-master-red">
                    <div className="w-16 h-16 bg-master-cream rounded-2xl flex items-center justify-center text-master-red mx-auto mb-6">
                      <MapPin size={32} />
                    </div>
                    <h4 className="text-2xl font-black mb-2 uppercase tracking-tight italic leading-none">Poblacion Store</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Near Public Market</p>
                    <button className="w-full bg-master-brown text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-master-red hover:shadow-lg hover:shadow-master-red/30 transition-all italic">Open Google Maps</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- BOTTOM STICKY BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white px-6 sm:px-10 py-4 flex justify-between items-center sm:static sm:bg-master-cream sm:text-master-brown sm:border-t sm:border-gray-200">
        <div className="flex items-center gap-4 sm:gap-10">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-master-green rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest">Accepting Orders Now</span>
          </div>
          <p className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-gray-400 italic">📍 Visit us at: {CONTACT_INFO.address}</p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black uppercase text-master-red tracking-widest leading-none mb-1">Hotline</span>
            <span className="text-sm font-black tracking-widest italic leading-none">{CONTACT_INFO.phone}</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Action Button */}
      <div className="sm:hidden fixed bottom-20 left-6 right-6 z-40">
        <button 
          onClick={() => scrollToSection('contact')}
          className="w-full bg-master-red text-white h-16 rounded-2xl flex items-center justify-center font-black uppercase tracking-widest shadow-2xl animate-bounce italic"
        >
          <MessageCircle size={20} className="mr-2" />
          Chat to Order
        </button>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 flex items-center justify-center border-t border-gray-100">
        <p className="text-[10px] font-black uppercase text-gray-300 tracking-[0.4em] italic leading-none">Ang Master sa Presko • Ang Master sa Sulit</p>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/image.png";
import { useAppStore } from "../store";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContactModal } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative transition-all duration-500 ${scrolled ? 'bg-[#0a0a14]/60 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10' : 'bg-transparent'} rounded-2xl`}>
          {/* Subtle gradient overlay for iOS-like effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

          {/* Inner glow */}
          {scrolled && (
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] pointer-events-none"></div>
          )}

          <div className="relative flex justify-between items-center h-16 px-6">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <span className="font-bold text-2xl tracking-tight text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">
                Scale<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">X</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-semibold text-slate-300/90 hover:text-white transition-all relative group px-3 py-2">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <a href="/services" className="text-sm font-semibold text-slate-300/90 hover:text-white transition-all relative group px-3 py-2">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <button onClick={openContactModal} className="relative group bg-white/90 hover:bg-white text-black px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-all"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mx-4 mt-3"
        >
          <div className="relative bg-[#0a0a14]/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            <div className="relative px-6 py-6 space-y-1">
              <a onClick={() => setIsOpen(false)} href="/" className="block text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all">Home</a>
              <a onClick={() => setIsOpen(false)} href="/services" className="block text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all">Services</a>
              <button onClick={() => { setIsOpen(false); openContactModal(); }} className="w-full mt-4 bg-white/90 hover:bg-white text-black px-5 py-4 rounded-xl font-bold shadow-lg transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

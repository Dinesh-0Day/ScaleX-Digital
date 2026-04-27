import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useAppStore } from "../store";

export function Footer() {
  const { openContactModal } = useAppStore();

  return (
    <footer id="contact" className="bg-[#030712] pt-12 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              
              <span className="font-bold text-2xl tracking-tight text-white">Scale<span className="text-indigo-500">X</span></span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses with modern digital solutions to scale rapidly in an ever-evolving digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 hover:scale-110 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 hover:scale-110 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 hover:scale-110 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 hover:scale-110 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/service/game-development" className="hover:text-indigo-400 transition-colors">Game Development</Link></li>
              <li><Link to="/service/360-marketing" className="hover:text-indigo-400 transition-colors">360° Marketing</Link></li>
              <li><Link to="/service/api-integration" className="hover:text-indigo-400 transition-colors">API Integration</Link></li>
              <li><Link to="/service/payment-gateway" className="hover:text-indigo-400 transition-colors">Payment Gateways</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Explore More</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/#case-studies" className="hover:text-indigo-400 transition-colors">Case Studies</Link></li>
              <li>
                <button onClick={openContactModal} className="hover:text-indigo-400 transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-indigo-500 flex-shrink-0 mt-1" size={20} />
                <span>123 Innovation Drive,<br />Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-indigo-500 flex-shrink-0" size={20} />
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">+1 (800) 123-4567</Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-indigo-500 flex-shrink-0" size={20} />
                <button onClick={openContactModal} className="hover:text-indigo-400 transition-colors text-left">hello@scalex.com</button>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 gap-3 text-center md:grid-cols-3 md:items-center">
          <p className="text-slate-500 text-sm md:text-left">
            &copy; {new Date().getFullYear()} ScaleX Digital. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            Made with <span className="text-red-500">❤️</span> by ScaleX Team
          </p>
          <div className="flex justify-center md:justify-end space-x-6 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

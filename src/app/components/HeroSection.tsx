import React from "react";
import { motion } from "motion/react";
import heroImg from "../../imports/image-1.png";
import { ArrowRight, Sparkles, Code2, Rocket, Zap, MonitorSmartphone, Globe, Database } from "lucide-react";
import { useAppStore } from "../store";

export function HeroSection() {
  const { openContactModal } = useAppStore();

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#030712] min-h-screen flex flex-col justify-center">
      {/* High-end animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0 relative"
          >
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            >
              <Sparkles size={16} className="text-indigo-400" />
              <span className="text-sm uppercase tracking-wider">Next-Gen Digital Agency</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient-x">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              We engineer world-class solutions in Game Development, 360° Marketing, API Integration, and beyond. Scale faster with ScaleX.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={openContactModal} className="group relative bg-white text-black hover:bg-slate-100 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030712] bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-slate-400"><span className="text-white font-bold">500+</span> happy clients</p>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image / 3D Element Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="lg:col-span-6 relative perspective-1000 hidden lg:block"
          >
            {/* Decorative elements behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 rounded-[2rem] opacity-30 blur-2xl animate-pulse"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-slate-900/50 backdrop-blur-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1760670399462-f5e479452c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZSUyMHNjcmVlbnxlbnwxfHx8fDE3NzYzNjYyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="ScaleX Digital Solutions" 
                className="w-full h-auto object-cover min-h-[500px] transform group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 left-0 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-xl flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Code2 className="text-blue-400" size={16} />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs">Clean Code</p>
                  <p className="text-slate-400 text-[10px]">Scalable Arch</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-0 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-xl flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Rocket className="text-purple-400" size={16} />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs">Fast Delivery</p>
                  <p className="text-slate-400 text-[10px]">Agile sprints</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Infinite Tech Marquee at the bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 border-y border-white/10 backdrop-blur-md py-4 overflow-hidden flex items-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll whitespace-nowrap">
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                <li className="flex items-center gap-2 text-slate-400 text-sm font-semibold uppercase tracking-wider"><Zap size={16} className="text-yellow-500"/> High Performance</li>
                <li className="flex items-center gap-2 text-slate-400 text-sm font-semibold uppercase tracking-wider"><Globe size={16} className="text-blue-500"/> Global Reach</li>
                <li className="flex items-center gap-2 text-slate-400 text-sm font-semibold uppercase tracking-wider"><MonitorSmartphone size={16} className="text-purple-500"/> Responsive Design</li>
                <li className="flex items-center gap-2 text-slate-400 text-sm font-semibold uppercase tracking-wider"><Database size={16} className="text-emerald-500"/> Secure Data</li>
                <li className="flex items-center gap-2 text-slate-400 text-sm font-semibold uppercase tracking-wider"><Code2 size={16} className="text-indigo-500"/> Custom APIs</li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Need to add global keyframes for the marquee to index.css or inject it via standard Tailwind config later, but inline style works for now if tailwind arbitrary values fail. */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Users, Code2, Globe, Activity, Heart, ShieldCheck, Zap } from "lucide-react";
import { useAppStore } from "../store";

const stats = [
  { label: "Happy Clients", value: "300+", icon: Users, suffix: "+" },
  { label: "Lines of Code", value: "2M", icon: Code2, suffix: "+" },
  { label: "Countries Served", value: "25+", icon: Globe, suffix: "" },
  { label: "Success Rate", value: "99%", icon: Activity, suffix: "" },
];

export function AboutSection() {
  const { openContactModal } = useAppStore();
  
  return (
    <section id="about" className="py-16 bg-[#030712] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <Heart size={14} /> Who We Are
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              Engineering growth for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">modern businesses.</span>
            </h3>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              At ScaleX, we blend visionary creativity with deep technical expertise. Whether it's immersive game development, sophisticated API ecosystems, or data-driven 360° marketing, our dedicated team pushes the boundaries of what's possible on the web.
            </p>
            
            <button onClick={openContactModal} className="group relative bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/10 overflow-hidden inline-flex items-center gap-2 mt-6">
              <span className="relative z-10">Work With Us</span>
              <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </button>
          </motion.div>
          
          <div className="flex flex-col gap-6 lg:-mt-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  className="bg-[#111] border border-white/5 p-6 rounded-3xl hover:bg-[#151515] transition-colors group relative overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[0px]"></div>
                  
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 group-hover:text-white transition-all duration-300 shadow-inner border border-white/5">
                    <stat.icon size={20} />
                  </div>
                  
                  <h4 className="text-3xl lg:text-4xl font-bold text-white mb-1 flex items-baseline">
                    {stat.value.replace('+', '')}
                    <span className="text-indigo-400 text-2xl ml-1">{stat.suffix}</span>
                  </h4>
                  
                  <p className="text-slate-400 font-medium tracking-wide text-xs uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { text: "Tailored digital solutions", icon: Zap },
                { text: "Agile development process", icon: ShieldCheck },
                { text: "24/7 Dedicated support", icon: Heart },
                { text: "Data-driven marketing", icon: Activity }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5"
                >
                  <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <item.icon size={14} />
                  </div>
                  <span className="text-slate-300 font-medium text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

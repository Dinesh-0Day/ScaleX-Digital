import React from "react";
import { motion } from "motion/react";
import { Building2 } from "lucide-react";

const clients = [
  "TechCorp",
  "GameStudio",
  "DataFlow",
  "CloudNet",
  "PayFast",
  "ShopHub",
  "MediaPro",
  "DevZone",
  "AppNest",
  "CodeLabs",
  "PixelCraft",
  "GrowthX",
  "InnovateLabs",
  "NextGen Solutions",
  "DigiCraft",
  "FutureTech"
];

export function TrustedClientsSection() {
  return (
    <section className="py-12 bg-[#030712] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold tracking-wide uppercase mb-4">
            <Building2 size={14} className="text-indigo-400" /> Trusted Partnerships
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">500+ Companies</span>
          </h3>
          <p className="text-slate-400 text-sm">
            Leading brands choose ScaleX for their digital transformation
          </p>
        </motion.div>

        {/* Scrolling Marquee */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-[30px] border border-white/10 py-8">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                >
                  <Building2 size={18} className="text-indigo-400" />
                  <span className="text-white font-bold text-lg tracking-wide">{client}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "1000+", label: "Projects Delivered" },
            { value: "25+", label: "Countries Served" },
            { value: "99%", label: "Client Retention" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-1">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

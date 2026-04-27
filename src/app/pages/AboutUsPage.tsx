import React, { useEffect } from "react";
import { motion } from "motion/react";

export function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">About ScaleX</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            ScaleX helps brands grow through product-focused engineering, growth marketing, and performance-led execution.
            We work as a strategic partner, not just a vendor.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Core Focus", value: "Growth + Execution" },
              { label: "Delivery Model", value: "Strategy to Deployment" },
              { label: "Support", value: "Long-term Partnership" },
            ].map((item) => (
              <div key={item.label} className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <p className="text-xs uppercase text-slate-400">{item.label}</p>
                <p className="text-white font-bold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { motion } from "motion/react";

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Contact & Support</h1>
          <p className="text-slate-300 mb-6">Reach our team for sales, integrations, or project planning.</p>
          <div className="space-y-4 text-slate-200">
            <p><span className="text-slate-400">Phone:</span> +1 (800) 123-4567</p>
            <p><span className="text-slate-400">Email:</span> hello@scalex.com</p>
            <p><span className="text-slate-400">Address:</span> 123 Innovation Drive, Tech Valley, CA 94043</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

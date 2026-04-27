import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Compass, Search, Home } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[420px] h-[420px] rounded-full bg-indigo-500/20 blur-[130px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[130px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 min-h-[70vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 sm:p-10 md:p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-200 text-xs sm:text-sm font-semibold mb-5"
          >
            <Compass className="w-4 h-4" />
            PAGE NOT FOUND
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-blue-400">
            404
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            We couldn’t find that page
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            The page may have moved, the link may be outdated, or the URL might be mistyped.
            Try one of the quick actions below to continue.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-bold hover:scale-105 transition-transform"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 text-white px-6 py-3 font-semibold hover:bg-white/20 transition-all"
            >
              <Search className="w-4 h-4" />
              Browse Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {[
              { label: "Popular", value: "Game Development", to: "/service/game-development" },
              { label: "Trending", value: "360 Marketing", to: "/service/360-marketing" },
              { label: "Technical", value: "API Integration", to: "/service/api-integration" },
            ].map((item) => (
              <Link key={item.value} to={item.to} className="rounded-2xl border border-white/10 bg-black/20 p-4 hover:border-cyan-300/40 hover:bg-white/10 transition-all">
                <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">{item.label}</p>
                <p className="text-white font-semibold flex items-center gap-2">
                  {item.value}
                  <ArrowRight className="w-4 h-4" />
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Gamepad2, Settings, TrendingUp, CreditCard, ChevronRight, MousePointer2 } from "lucide-react";

const services = [
  {
    id: "game-development",
    title: "Game Development",
    description: "Professional game development for card games, casino games, prediction games, and more. Aviator, Color Prediction, Matka, Ludo, Investment Scripts, and 400+ ready-to-launch games available.",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBzY3JlZW58ZW58MXx8fHwxNzc2MzY2NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#3b82f6] to-[#06b6d4]", // Blue to Cyan
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "360-marketing",
    title: "360° Marketing & Advertising",
    description: "Multi-platform advertising across Meta, Google (Ads, SEO, Profile Manager), Telegram (TON & Euro Cabinet), Unity, Snapchat, X, Flipkart, Amazon, Meesho, and more.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3NjI5ODM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#8b5cf6] to-[#ec4899]", // Purple to Pink
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Seamlessly connect your systems and third-party services. We build robust, secure, and scalable API solutions tailored for you.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzc2MzY2NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#10b981] to-[#14b8a6]", // Emerald to Teal
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway",
    description: "Secure and fast payment gateway integrations supporting global transactions, multi-currency, and crypto payments.",
    icon: CreditCard,
    image: null,
    color: "from-[#f97316] to-[#f59e0b]", // Orange to Amber
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background radial lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-20 gap-5 sm:gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6"
            >
              <MousePointer2 size={14} /> Our Expertise
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              Solutions that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">scale</span>
              <br className="hidden sm:block" /> your business.
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-md leading-relaxed">
              From concept to launch, ScaleX offers a full suite of digital solutions to empower your brand and drive growth.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col ${service.span}`}
            >
              <Link to={`/service/${service.id}`} className="absolute inset-0 z-30 block"></Link>
              {/* Glowing gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-8 relative z-20 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-[#111] rounded-[14px] flex items-center justify-center">
                      <service.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronRight size={18} className="text-white" />
                  </motion.div>
                </div>

                <div className="mt-8">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{service.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bento Image handling */}
              {service.image ? (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} mix-blend-overlay`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent"></div>
                </div>
              ) : (
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all hover:scale-105"
          >
            View All Services
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

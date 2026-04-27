import React from "react";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router";

const caseStudies = [
  {
    id: "metaverse-gaming",
    title: "MetaVerse Gaming Platform",
    client: "GameVerse Studios",
    category: "Game Development",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    results: [
      { label: "User Growth", value: "500K+", icon: Users },
      { label: "Revenue Increase", value: "320%", icon: TrendingUp },
      { label: "App Store Rating", value: "4.8★", icon: Award }
    ],
    description: "Built a complete VR gaming ecosystem using Unreal Engine 5 with multiplayer capabilities and in-app purchases.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform Scale",
    client: "ShopFast India",
    category: "API Integration & Marketing",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    results: [
      { label: "Daily Orders", value: "50K+", icon: TrendingUp },
      { label: "Payment Success", value: "99.8%", icon: Award },
      { label: "Customer Base", value: "2M+", icon: Users }
    ],
    description: "Integrated multiple payment gateways (Razorpay, Stripe, PayPal) and launched 360° marketing campaign across social platforms.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "telegram-marketing",
    title: "Telegram Marketing Campaign",
    client: "EuroTech Solutions",
    category: "360° Marketing",
    image: "https://images.unsplash.com/photo-1636743094110-5e153f93ad7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    results: [
      { label: "Reach", value: "1M+", icon: Users },
      { label: "Conversion Rate", value: "18%", icon: TrendingUp },
      { label: "ROI", value: "450%", icon: Award }
    ],
    description: "Executed targeted Telegram Euro cabinet ads campaign reaching millions across European markets with incredible results.",
    color: "from-indigo-500 to-purple-500"
  }
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <Award size={14} /> Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Case Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Real results from real clients - see how we've helped businesses achieve extraordinary growth
          </motion.p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20 mix-blend-overlay`}></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${study.color} text-white text-xs font-bold`}>
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-indigo-400 text-sm font-semibold mb-2">{study.client}</p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <result.icon className="text-indigo-400 mb-2" size={20} />
                        <p className="text-white font-bold text-lg">{result.value}</p>
                        <p className="text-slate-400 text-xs">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link to={`/case-study/${study.id}`} className="group/btn inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm hover:gap-3 transition-all">
                    View Full Case Study <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

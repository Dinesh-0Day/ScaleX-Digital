import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Image, ShoppingBag, Target, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../../store';

const metaServices = [
  {
    title: 'Facebook Ads',
    description: 'Reach 3 billion users with precise targeting',
    icon: Users,
    features: [
      'News Feed Ads',
      'Stories Ads',
      'Marketplace Ads',
      'Video Ads',
      'Carousel Ads',
      'Lead Generation Forms'
    ]
  },
  {
    title: 'Instagram Ads',
    description: 'Visual storytelling for 2 billion users',
    icon: Image,
    features: [
      'Feed Ads',
      'Stories & Reels Ads',
      'Shopping Ads',
      'Explore Ads',
      'Collection Ads',
      'Influencer Partnerships'
    ]
  },
  {
    title: 'Meta Business Suite',
    description: 'Unified management for all Meta platforms',
    icon: ShoppingBag,
    features: [
      'Cross-platform posting',
      'Unified inbox management',
      'Analytics & insights',
      'Ad account management',
      'Content scheduling',
      'Audience insights'
    ]
  },
  {
    title: 'Advanced Targeting',
    description: 'Precision audience targeting capabilities',
    icon: Target,
    features: [
      'Demographic targeting',
      'Interest-based targeting',
      'Behavioral targeting',
      'Lookalike audiences',
      'Custom audiences',
      'Retargeting campaigns'
    ]
  }
];

export function MetaMarketingPage() {
  const { openContactModal } = useAppStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-32">
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-8xl mb-6">
            📘
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Meta Advertising
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-2xl text-slate-300 mb-8">
            Facebook & Instagram - Reach 5 billion users
          </motion.p>

          <motion.button onClick={openContactModal} whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-blue-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl">
            Launch Meta Campaign
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {metaServices.map((service, idx) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-8 hover:border-pink-500/50 transition-all">
                <service.icon className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-2xl font-black text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-16 text-center bg-gradient-to-r from-blue-600 to-pink-600 rounded-3xl p-12">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Dominate Social Media?</h2>
          <p className="text-white/90 text-lg mb-8">Let's build your Meta advertising strategy</p>
          <button onClick={openContactModal} className="bg-white text-blue-600 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}

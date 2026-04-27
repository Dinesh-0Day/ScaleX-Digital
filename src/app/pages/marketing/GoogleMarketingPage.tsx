import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, BarChart, Target, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../../store';

const googleServices = [
  {
    title: 'Google Ads',
    description: 'Pay-per-click advertising across Google Search, Display Network, YouTube, and Shopping',
    icon: Target,
    features: [
      'Search Ads - Appear at the top of Google search results',
      'Display Ads - Visual ads across 2M+ websites',
      'YouTube Ads - Video advertising on the world\'s largest video platform',
      'Shopping Ads - Product listings with images and prices',
      'Performance Max - AI-powered campaigns across all Google channels',
      'Remarketing - Re-engage previous website visitors'
    ]
  },
  {
    title: 'SEO (Search Engine Optimization)',
    description: 'Organic search rankings and website visibility improvements',
    icon: Search,
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Link Building & Outreach',
      'Content Optimization',
      'Local SEO for Business Listings'
    ]
  },
  {
    title: 'Google Profile Manager',
    description: 'Manage your Google Business Profile for local visibility and customer engagement',
    icon: MapPin,
    features: [
      'Business Profile Setup & Verification',
      'NAP (Name, Address, Phone) Consistency',
      'Reviews Management & Response',
      'Posts & Updates Publishing',
      'Insights & Analytics Tracking',
      'Multi-Location Management'
    ]
  },
  {
    title: 'Google Analytics',
    description: 'Track, analyze and optimize your website performance',
    icon: BarChart,
    features: [
      'GA4 Setup & Configuration',
      'Custom Event Tracking',
      'Conversion Tracking',
      'Audience Insights',
      'Custom Reports & Dashboards',
      'E-commerce Analytics'
    ]
  }
];

export function GoogleMarketingPage() {
  const { openContactModal } = useAppStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-32">
      {/* Header */}
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-yellow-900/30 to-blue-900/30"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.1) 3px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.1) 3px)', backgroundSize: '50px 50px' }}></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-8xl mb-6"
          >
            🔍
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400"
          >
            Google Marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-300 mb-8"
          >
            Dominate search results and reach billions of users
          </motion.p>

          <motion.button
            onClick={openContactModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl"
          >
            Get Started with Google
          </motion.button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {googleServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-8 hover:border-yellow-500/50 transition-all">
                <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-red-600 to-yellow-500 rounded-3xl p-12"
        >
          <h2 className="text-4xl font-black text-white mb-4">Ready to Grow with Google?</h2>
          <p className="text-white/90 text-lg mb-8">Let's create a winning strategy for your business</p>
          <button
            onClick={openContactModal}
            className="bg-white text-red-600 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            Start Your Campaign
          </button>
        </motion.div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle2, Crown } from 'lucide-react';
import { useAppStore } from '../../store';

const telegramServices = [
  {
    title: 'Telegram TON Cabinet',
    description: 'Advertise using TON cryptocurrency on Telegram\'s native ad platform',
    icon: Zap,
    features: [
      'Pay with TON cryptocurrency',
      'Target Telegram channels and groups',
      'Cost-effective CPM rates',
      'Real-time campaign analytics',
      'Geo-targeting capabilities',
      'Automated bidding system'
    ],
    highlight: 'Crypto-based advertising'
  },
  {
    title: 'Telegram Euro Cabinet',
    description: 'Premium advertising accounts with Euro payment options',
    icon: Crown,
    features: [
      'Exclusive Euro cabinet access',
      'Premium targeting options',
      'Higher ad placement priority',
      'Dedicated account manager',
      'Advanced audience insights',
      'White-label reporting'
    ],
    highlight: 'Premium tier access'
  }
];

const advantages = [
  '800M+ monthly active users',
  'High engagement rates',
  'Precise audience targeting',
  'Cost-effective advertising',
  'Multiple ad formats',
  'Real-time analytics'
];

export function TelegramMarketingPage() {
  const { openContactModal } = useAppStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-32">
      {/* Header */}
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-cyan-900/40 to-blue-900/40"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)', backgroundSize: '100px 100px' }}></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-8xl mb-6"
          >
            ✈️
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
          >
            Telegram Advertising
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-300 mb-8"
          >
            Reach 800M+ users with TON & Euro Cabinet access
          </motion.p>

          <motion.button
            onClick={openContactModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl"
          >
            Get Telegram Cabinet Access
          </motion.button>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {telegramServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-8 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-full">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Telegram */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12"
        >
          <h2 className="text-4xl font-black text-white mb-8 text-center">Why Advertise on Telegram?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <motion.div
                key={advantage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">{advantage}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={openContactModal}
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Start Telegram Advertising
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

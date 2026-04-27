import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Spade, Gamepad2, Trophy, Dices, Crown, Dice6, Sparkles, TrendingUp } from 'lucide-react';
import { useAppStore } from '../store';
import image7 from '../../imports/image-7.png';
import image8 from '../../imports/image-8.png';
import metaLogo from '../../assets/logos/meta.svg';
import googleLogo from '../../assets/logos/google.svg';
import telegramLogo from '../../assets/logos/telegram.svg';
import unityLogo from '../../assets/logos/unity.svg';
import snapchatLogo from '../../assets/logos/snapchat.svg';
import xLogo from '../../assets/logos/x.svg';
import flipkartLogo from '../../assets/logos/flipkart.svg';
import amazonLogo from '../../assets/logos/amazon.svg';
import meeshoLogo from '../../assets/logos/meesho.ico';
import jiliLogo from '../../assets/logos/apis/jili.png';
import evolutionLogo from '../../assets/logos/apis/evolution.svg';
import spribeLogo from '../../assets/logos/apis/spribe.svg';
import turboGamesLogo from '../../assets/logos/apis/turbogames.svg';
import hp100Logo from '../../assets/logos/apis/100hp-logo.png';
import inoutLogo from '../../assets/logos/apis/inout.svg';
import smartsoftLogo from '../../assets/logos/apis/smartsoft.svg';
import pgsoftLogo from '../../assets/logos/apis/pgsoft.svg';
import bgamingLogo from '../../assets/logos/apis/bgaming.svg';
import razorpayLogo from '../../assets/logos/payments/razorpay.svg';
import stripeLogo from '../../assets/logos/payments/stripe.svg';
import paypalLogo from '../../assets/logos/payments/paypal.svg';
import alipayLogo from '../../assets/logos/payments/alipay.svg';
import wechatLogo from '../../assets/logos/payments/wechat.svg';
import usdtLogo from '../../assets/logos/payments/usdt.svg';
import bitcoinLogo from '../../assets/logos/payments/bitcoin.svg';
import ethereumLogo from '../../assets/logos/payments/ethereum.svg';

const serviceData = {
  "game-development": {
    title: "Game Development",
    subtitle: "Premium Gaming Solutions for Every Platform",
    description: "We specialize in developing engaging card games, casino games, prediction games, and more. From high-demand titles like Aviator, Color Prediction, Matka, Ludo, and Investment Scripts to classic favorites, we deliver high-quality, scalable gaming solutions with real money integration, multiplayer support, and stunning graphics.",
    features: [
      "Real Money Gaming Integration",
      "Multiplayer & Live Game Support",
      "Secure Payment Gateway Integration",
      "Cross-Platform Development (iOS, Android, Web)",
      "Admin Panel & Analytics Dashboard",
      "Tournament & Leaderboard Systems",
      "Live Dealer Integration",
      "Custom Game Logic & Rules",
      "High-Performance Backend Infrastructure",
      "24/7 Technical Support & Maintenance"
    ],
    image: "https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBzY3JlZW58ZW58MXx8fHwxNzc2MzY2NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-[#3b82f6] to-[#06b6d4]",
  },
  "360-marketing": {
    title: "360° Marketing & Advertising",
    subtitle: "Multi-Platform Growth Solutions",
    description: "Comprehensive advertising and marketing solutions across all major platforms. From Meta and Google to Telegram, Unity, and e-commerce marketplaces - we maximize your reach and ROI with data-driven strategies and expert campaign management.",
    features: [
      "Performance Marketing & Media Buying",
      "Influencer & KOL Campaigns",
      "Conversion Rate Optimization (CRO)",
      "Multi-Platform Campaign Management",
      "Analytics & Reporting Dashboard"
    ],
    platforms: [
      {
        id: 'meta',
        name: 'Meta Ads',
        icon: '📘',
        description: 'Facebook & Instagram advertising campaigns',
        color: 'from-blue-600 to-blue-400',
        logo: metaLogo,
      },
      {
        id: 'google',
        name: 'Google',
        icon: '🔍',
        description: 'Ads, SEO & Profile Manager',
        color: 'from-red-600 to-yellow-500',
        logo: googleLogo,
      },
      {
        id: 'telegram',
        name: 'Telegram Ads',
        icon: '✈️',
        description: 'TON & Euro Cabinet',
        color: 'from-blue-500 to-cyan-500',
        logo: telegramLogo,
      },
      {
        id: 'unity',
        name: 'Unity Ads',
        icon: '🎮',
        description: 'In-game advertising',
        color: 'from-gray-700 to-gray-500',
        logo: unityLogo,
      },
      {
        id: 'snapchat',
        name: 'Snapchat',
        icon: '👻',
        description: 'Stories & Discover ads',
        color: 'from-yellow-400 to-yellow-300',
        logo: snapchatLogo,
      },
      {
        id: 'x',
        name: 'X (Twitter)',
        icon: '𝕏',
        description: 'Promoted posts & trends',
        color: 'from-black to-gray-700',
        logo: xLogo,
      },
      {
        id: 'flipkart',
        name: 'Flipkart',
        icon: '🛒',
        description: 'Seller Central & Ads',
        color: 'from-yellow-500 to-blue-600',
        logo: flipkartLogo,
      },
      {
        id: 'amazon',
        name: 'Amazon',
        icon: '📦',
        description: 'PPC & Sponsored Products',
        color: 'from-orange-500 to-yellow-600',
        logo: amazonLogo,
      },
      {
        id: 'meesho',
        name: 'Meesho',
        icon: '🛍️',
        description: 'Platform marketing',
        color: 'from-pink-600 to-purple-600',
        logo: meeshoLogo,
      }
    ],
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3NjI5ODM2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-[#8b5cf6] to-[#ec4899]",
  },
  "api-integration": {
    title: "API Integration",
    subtitle: "Connecting Your Digital Ecosystem",
    description: "Seamlessly integrate third-party services, payment gateways, CRM systems, and high-demand gaming content APIs. We build secure, scalable, and ultra-fast integrations for casino, crash, slots, live dealer, and aggregator ecosystems with one-wallet architecture.",
    features: [
      "REST & GraphQL API Development",
      "Gaming API Integration: Jili, JDB, Evolution, Spribe, Turbo Games, 100HP, InOut, SmartSoft, PG Soft, BGaming",
      "Additional Providers: Pragmatic Play, Playtech, NetEnt, Habanero, BetGames, Evolution Live",
      "Aggregator API Support (single API, multi-provider architecture)",
      "Wallet, Bet/Win, Rollback, and Round Settlement Flows",
      "Webhook/Event Processing + Reconciliation",
      "Microservices Architecture",
      "Legacy System Migration",
      "High-Performance Data Sync"
    ],
    providers: [
      { id: 'jili', name: 'Jili', logo: jiliLogo, short: 'JI', category: 'Slots & Fishing', accent: 'from-cyan-400 to-blue-500' },
      { id: 'jdb', name: 'JDB', logo: null, short: 'JD', category: 'Arcade & Casino', accent: 'from-emerald-400 to-teal-500' },
      { id: 'evolution', name: 'Evolution', logo: evolutionLogo, short: 'EV', category: 'Live Casino', accent: 'from-violet-400 to-fuchsia-500' },
      { id: 'spribe', name: 'Spribe', logo: spribeLogo, short: 'SP', category: 'Crash Games', accent: 'from-pink-400 to-rose-500' },
      { id: 'turbogames', name: 'Turbo Games', logo: turboGamesLogo, short: 'TG', category: 'Instant Games', accent: 'from-amber-400 to-orange-500' },
      { id: '100hp', name: '100HP', logo: hp100Logo, short: 'HP', category: 'Slots & Instant', accent: 'from-lime-400 to-emerald-500' },
      { id: 'inout', name: 'InOut', logo: inoutLogo, short: 'IO', category: 'Provider Suite', accent: 'from-sky-400 to-cyan-500' },
      { id: 'smartsoft', name: 'SmartSoft', logo: smartsoftLogo, short: 'SS', category: 'Crash & RNG', accent: 'from-purple-400 to-indigo-500' },
      { id: 'pgsoft', name: 'PG Soft', logo: pgsoftLogo, short: 'PG', category: 'Mobile Slots', accent: 'from-yellow-400 to-amber-500' },
      { id: 'bgaming', name: 'BGaming', logo: bgamingLogo, short: 'BG', category: 'Slots & Casual', accent: 'from-red-400 to-pink-500' }
    ],
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzc2MzY2NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-[#10b981] to-[#14b8a6]",
  },
  "payment-gateway": {
    title: "Payment Gateway Integration",
    subtitle: "Secure Global Transactions",
    description: "Enable smooth, frictionless checkouts for your customers worldwide. We integrate leading fiat, high-risk, and crypto payment processors tailored to your business model, region, and compliance requirements.",
    features: [
      "Razorpay, Stripe, PayPal & Popular Global Processors",
      "Gaming-ready Third-party Automatic Payment Routing",
      "Crypto Payment Integrations (USDT, BTC, ETH and more)",
      "Chinese Payment Rails Support (Alipay, WeChat Pay through supported partners)",
      "Subscription & Billing Logic",
      "Multi-Currency Support",
      "PCI-DSS Compliant Architectures",
      "Risk Rules, Fraud Controls, and Reconciliation"
    ],
    paymentSuites: [
      {
        title: "Mainstream Gateways",
        description: "Reliable payment rails for standard businesses and scalable checkout flows.",
        items: ["Razorpay", "Stripe", "PayPal", "Cashfree", "PayU", "CCAvenue"],
        accent: "from-indigo-500 to-cyan-500",
      },
      {
        title: "High-risk & Gaming-ready Third-party",
        description: "Automatic routing and aggregator-first architecture for gaming and high-volume operations.",
        items: ["Third-party automatic routing", "Payout + collection orchestration", "Fallback gateway switching", "Risk-based transaction routing"],
        accent: "from-purple-500 to-pink-500",
      },
      {
        title: "Chinese Payment Support",
        description: "Cross-border compatible setup through supported payment partners and licensed channels.",
        items: ["Alipay (partner-led)", "WeChat Pay (partner-led)", "UnionPay options (where available)", "Multi-currency settlement mapping"],
        accent: "from-emerald-500 to-teal-500",
      },
      {
        title: "Crypto Payment Layer",
        description: "Modern crypto checkout for global users with conversion-ready wallet flows.",
        items: ["USDT, BTC, ETH support", "On-chain payment tracking", "Auto-confirmation callbacks", "Wallet + ledger reconciliation"],
        accent: "from-amber-500 to-orange-500",
      },
    ],
    paymentLogos: [
      { id: 'razorpay', name: 'Razorpay', logo: razorpayLogo, accent: 'from-sky-400 to-blue-500' },
      { id: 'stripe', name: 'Stripe', logo: stripeLogo, accent: 'from-indigo-400 to-violet-500' },
      { id: 'paypal', name: 'PayPal', logo: paypalLogo, accent: 'from-cyan-400 to-blue-500' },
      { id: 'cashfree', name: 'Cashfree', logo: null, short: 'CF', accent: 'from-emerald-400 to-teal-500' },
      { id: 'payu', name: 'PayU', logo: null, short: 'PU', accent: 'from-lime-400 to-green-500' },
      { id: 'ccavenue', name: 'CCAvenue', logo: null, short: 'CC', accent: 'from-amber-400 to-orange-500' },
      { id: 'alipay', name: 'Alipay', logo: alipayLogo, accent: 'from-blue-400 to-cyan-500' },
      { id: 'wechat', name: 'WeChat Pay', logo: wechatLogo, accent: 'from-green-400 to-emerald-500' },
      { id: 'unionpay', name: 'UnionPay', logo: null, short: 'UP', accent: 'from-rose-400 to-red-500' },
      { id: 'usdt', name: 'USDT', logo: usdtLogo, accent: 'from-emerald-400 to-teal-500' },
      { id: 'bitcoin', name: 'Bitcoin', logo: bitcoinLogo, accent: 'from-orange-400 to-amber-500' },
      { id: 'ethereum', name: 'Ethereum', logo: ethereumLogo, accent: 'from-slate-300 to-indigo-400' },
    ],
    paymentMetrics: [
      { label: "Gateway Mix", value: "Fiat + Crypto + 3rd Party" },
      { label: "Routing Mode", value: "Automatic Fallback" },
      { label: "Settlement", value: "Daily / T+1 Ready" },
      { label: "Coverage", value: "India + Global + Cross-border" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwcGF5bWVudHN8ZW58MXx8fHwxNzc2MzY2NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-[#f97316] to-[#f59e0b]",
  }
};

export function ServicePage() {
  const { id } = useParams();
  const service = serviceData[id as keyof typeof serviceData];
  const { openContactModal } = useAppStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
        <Link to="/services" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 bg-[#030712] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header Banner */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mb-16">
        {id === 'game-development' ? (
          <>
            {/* Gaming-specific header */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30"></div>
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.1) 3px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.1) 3px)', backgroundSize: '50px 50px' }}></div>
            </div>

            {/* Floating game icons */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 opacity-20"
              >
                <Spade className="w-16 h-16 text-red-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-40 right-20 opacity-20"
              >
                <Trophy className="w-20 h-20 text-yellow-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-32 left-1/4 opacity-20"
              >
                <Dices className="w-14 h-14 text-purple-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 right-1/3 opacity-20"
              >
                <Gamepad2 className="w-18 h-18 text-blue-400" />
              </motion.div>
            </div>
          </>
        ) : id === '360-marketing' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-indigo-900/30"></div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.22) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.18) 0%, transparent 32%)' }}></div>
          </>
        ) : (
          <div className="absolute inset-0">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-[#030712]/80 backdrop-blur-sm"></div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent`}></div>
            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} mix-blend-overlay opacity-40`}></div>
          </div>
        )}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {id === 'game-development' ? (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="inline-block mb-6"
              >
                <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-300 font-bold tracking-wide">PREMIUM GAMING SOLUTIONS</span>
                    <Gamepad2 className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
                  GAME
                </span>
                <br />
                <span className="text-white">DEVELOPMENT</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl text-cyan-300 font-bold mb-8"
              >
                Build. Play. Win. Repeat.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white font-semibold">🎮 15+ Game Types</span>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white font-semibold">🏆 400+ Ready Games</span>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white font-semibold">💰 Real Money Gaming</span>
                </div>
              </motion.div>
            </>
          ) : id === '360-marketing' ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200 text-xs sm:text-sm font-semibold mb-5"
              >
                MULTI-PLATFORM PERFORMANCE MARKETING
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
              >
                360 Marketing that
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300"> scales revenue</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
              >
                Clear strategy, channel-wise execution, and measurable outcomes across Meta, Google, Telegram, marketplaces, and more.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-7 flex flex-wrap items-center justify-center gap-3"
              >
                {['ROI-Focused', 'Full Funnel', 'Weekly Reporting'].map((pill) => (
                  <span key={pill} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white">
                    {pill}
                  </span>
                ))}
              </motion.div>
            </>
          ) : (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
              >
                {service.subtitle}
              </motion.p>
            </>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {id === 'game-development' ? (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16 text-center"
          >
            <div className="inline-block mb-6">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
                Why Choose Us?
              </h2>
              <div className="h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            </div>
            <p className="text-slate-300 text-xl leading-relaxed max-w-4xl mx-auto mb-10">
              {service.description}
            </p>

            <motion.button
              onClick={openContactModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-5 rounded-full font-black text-lg shadow-2xl shadow-purple-500/50 transition-all overflow-hidden inline-flex items-center gap-3"
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Your Gaming Project</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </motion.button>
          </motion.div>
        ) : id === '360-marketing' ? (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Overview</h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-5xl">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Platforms Managed', value: '9+' },
                  { label: 'Campaign Focus', value: 'Performance' },
                  { label: 'Reporting', value: 'Weekly' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
                    <p className="text-white text-xl font-bold mt-1">{item.value}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={openContactModal}
                className="group relative bg-white text-black hover:bg-slate-100 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all overflow-hidden inline-flex"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Campaign <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        ) : id === 'payment-gateway' ? (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Payment Infrastructure Overview</h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-5xl">
                {service.description}
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-5xl">
                We design payment architecture for scale: reliable checkout, smart routing, fraud controls, and reconciliation-ready operations across fiat, third-party high-risk rails, Chinese partner channels, and crypto.
              </p>

              <button
                onClick={openContactModal}
                className="group relative bg-white text-black hover:bg-slate-100 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all overflow-hidden inline-flex"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
                <span className="relative z-10 flex items-center gap-2">
                  Discuss Your Payment Stack <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light mb-10">
              {service.description}
            </p>

            <button
              onClick={openContactModal}
              className="group relative bg-white text-black hover:bg-slate-100 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all overflow-hidden inline-flex"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        )}

        {/* Popular Games Section */}
        {id === 'game-development' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 relative"
          >
            {/* Glowing background effects */}
            <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  className="inline-block mb-4"
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 text-sm font-bold">OUR EXPERTISE</span>
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
                  Popular Games We Develop
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  From classic card games to modern casino experiences
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {/* Card & Casino Games */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="relative group"
                >
                  {/* Outer glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>

                  <div className="relative bg-gradient-to-br from-[#1a0b0f] via-[#2d1619] to-[#1a0b0f] rounded-3xl border-2 border-red-500/30 overflow-hidden shadow-2xl">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 animate-spin-slow" style={{ padding: '2px', borderRadius: '1.5rem' }}></div>
                    </div>

                    {/* Inner pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }}></div>

                    <div className="relative p-8">
                      {/* Header with badge */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="px-4 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30">
                            <span className="text-red-300 text-xs font-black tracking-widest">CASINO COLLECTION</span>
                          </div>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg shadow-red-500/50"
                          >
                            <Spade className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>
                        <h3 className="text-3xl font-black text-white mb-2 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                          Card & Casino Games
                        </h3>
                        <p className="text-slate-400 text-sm">Classic & Modern Variants</p>
                      </div>

                      {/* Screenshot with frame */}
                      <div className="relative rounded-2xl overflow-hidden mb-8 border-2 border-red-500/20 shadow-2xl group-hover:border-red-500/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-pink-500/10"></div>
                        <img
                          src={image7}
                          alt="Card & Casino Games"
                          className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                        {/* Floating badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-red-500/50">
                          <span className="text-white text-xs font-bold">9 Games</span>
                        </div>
                      </div>

                      {/* Game Names - Better Layout */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: 'Aviator', icon: Sparkles },
                          { name: 'Matka', icon: Crown },
                          { name: 'Color Prediction', icon: Dice6 },
                          { name: 'Ludo', icon: Gamepad2 },
                          { name: 'Investment Scripts', icon: TrendingUp },
                          { name: 'Teen Patti', icon: Spade },
                          { name: 'Rummy', icon: Dices },
                          { name: 'Roulette', icon: Trophy },
                          { name: '400+ More', icon: Sparkles }
                        ].map((game, idx) => (
                          <motion.div
                            key={game.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + idx * 0.05 }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            className="relative group/chip"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg blur opacity-0 group-hover/chip:opacity-50 transition-opacity"></div>
                            <div className="relative flex flex-col items-center gap-2 px-2 py-3 rounded-lg bg-gradient-to-br from-red-950/50 to-pink-950/30 border border-red-500/20 hover:border-red-500/60 transition-all backdrop-blur-sm">
                              <game.icon className="w-5 h-5 text-red-400 group-hover/chip:scale-125 transition-transform" />
                              <span className="text-xs text-slate-300 font-bold text-center leading-tight">{game.name}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Sports & Casual Games */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="relative group"
                >
                  {/* Outer glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '1s' }}></div>

                  <div className="relative bg-gradient-to-br from-[#0a1419] via-[#132532] to-[#0a1419] rounded-3xl border-2 border-blue-500/30 overflow-hidden shadow-2xl">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 animate-spin-slow" style={{ padding: '2px', borderRadius: '1.5rem' }}></div>
                    </div>

                    {/* Inner pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }}></div>

                    <div className="relative p-8">
                      {/* Header with badge */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                            <span className="text-blue-300 text-xs font-black tracking-widest">SPORTS & BETTING</span>
                          </div>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50"
                          >
                            <Trophy className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>
                        <h3 className="text-3xl font-black text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                          Sports & Casual Games
                        </h3>
                        <p className="text-slate-400 text-sm">Betting & Entertainment</p>
                      </div>

                      {/* Screenshot with frame */}
                      <div className="relative rounded-2xl overflow-hidden mb-8 border-2 border-blue-500/20 shadow-2xl group-hover:border-blue-500/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10"></div>
                        <img
                          src={image8}
                          alt="Sports & Casual Games"
                          className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                        {/* Floating badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-blue-500/50">
                          <span className="text-white text-xs font-bold">7 Games</span>
                        </div>
                      </div>

                      {/* Game Names - Better Layout */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: 'Aviator', icon: Sparkles },
                          { name: 'Color Prediction', icon: Dice6 },
                          { name: 'Matka', icon: Crown },
                          { name: 'Ludo', icon: Gamepad2 },
                          { name: 'Investment Scripts', icon: TrendingUp },
                          { name: 'Fantasy', icon: Trophy },
                          { name: '400+ More', icon: Sparkles }
                        ].map((game, idx) => (
                          <motion.div
                            key={game.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + idx * 0.05 }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            className="relative group/chip"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover/chip:opacity-50 transition-opacity"></div>
                            <div className="relative flex flex-col items-center gap-2 px-2 py-3 rounded-lg bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/20 hover:border-blue-500/60 transition-all backdrop-blur-sm">
                              <game.icon className="w-5 h-5 text-blue-400 group-hover/chip:scale-125 transition-transform" />
                              <span className="text-xs text-slate-300 font-bold text-center leading-tight">{game.name}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Stats Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { label: 'Games Developed', value: '400+', icon: Gamepad2 },
                  { label: 'Active Players', value: '10M+', icon: Trophy },
                  { label: 'Success Rate', value: '99%', icon: Sparkles },
                  { label: 'Support', value: '24/7', icon: CheckCircle2 }
                ].map((stat, idx) => (
                  <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                    <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Marketing Platforms Section */}
        {id === '360-marketing' && service.platforms && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16 relative"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Advertising Platforms</span>
              </h2>
              <p className="text-slate-400 text-lg">Click on any platform to explore advertising solutions</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {service.platforms.map((platform: any, idx: number) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative group cursor-pointer"
                  onClick={() => window.location.href = `/marketing/${platform.id}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all h-full min-h-[230px] flex flex-col">
                    <div className="text-center flex-1 flex flex-col">
                      {platform.logo ? (
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-2.5 group-hover:scale-110 transition-transform">
                          <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">{platform.icon}</div>
                      )}
                      <h3 className="text-xl font-black text-white mb-2">{platform.name}</h3>
                      <p className="text-sm text-slate-400 line-clamp-2">{platform.description}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-semibold">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* API Providers Section */}
        {id === 'api-integration' && service.providers && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Gaming API <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Partners</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                Multi-provider architecture with wallet sync, rollback safety, and high-availability transactions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {service.providers.map((provider: any, idx: number) => (
                <motion.div
                  key={provider.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + idx * 0.04 }}
                  className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-emerald-400/40 transition-all min-h-[150px] flex flex-col justify-center"
                >
                  <div className={`absolute -top-10 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${provider.accent} opacity-20 blur-2xl`}></div>
                  {provider.logo ? (
                    <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md p-2.5">
                      <img src={provider.logo} alt={provider.name} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${provider.accent} text-white font-black text-lg flex items-center justify-center shadow-lg`}>
                      {provider.short}
                    </div>
                  )}
                  <h3 className="text-white font-bold text-sm mb-1">{provider.name}</h3>
                  <p className="text-slate-400 text-xs">{provider.category}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { label: 'Providers Supported', value: '10+', note: 'Top gaming APIs onboarded' },
                { label: 'Integration Model', value: 'One Wallet', note: 'Unified balance management' },
                { label: 'Go-Live Support', value: 'End-to-End', note: 'Sandbox to production rollout' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-black/20 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="text-2xl font-black text-white mt-1">{item.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-emerald-600/25 to-cyan-600/25 border border-emerald-400/30 rounded-3xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Why teams choose us for API Integration</h3>
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  'Single architecture for multiple providers',
                  'Transaction-safe wallet and rollback flows',
                  'Faster turnaround with ready integration playbooks',
                  'Monitoring, logs, and reconciliation support',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-slate-100">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-300 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={openContactModal}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-emerald-700 font-bold hover:scale-105 transition-transform"
              >
                Get API Integration Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Payment Gateway Showcase */}
        {id === 'payment-gateway' && service.paymentSuites && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Smart Payment Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">for Growth</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                From mainstream gateways to gaming-focused third-party automation and crypto rails, we design resilient payment architecture end-to-end.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {service.paymentSuites.map((suite: any, idx: number) => (
                <motion.div
                  key={suite.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + idx * 0.06 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <div className={`absolute -top-12 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${suite.accent} opacity-20 blur-2xl`}></div>
                  <h3 className="text-white text-xl font-black mb-2">{suite.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{suite.description}</p>
                  <ul className="space-y-2.5">
                    {suite.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-2 text-slate-200 text-sm">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-amber-300 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {service.paymentLogos && (
              <div className="mt-8">
                <h3 className="text-white text-2xl font-black mb-4">Popular Gateways & Payment Rails</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {service.paymentLogos.map((item: any) => (
                    <div
                      key={item.id}
                      className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 min-h-[126px] flex flex-col items-center justify-center text-center"
                    >
                      <div className={`absolute -top-10 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${item.accent} opacity-20 blur-2xl`}></div>
                      {item.logo ? (
                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md p-2 mb-2">
                          <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} text-white font-black text-sm flex items-center justify-center mb-2`}>
                          {item.short}
                        </div>
                      )}
                      <p className="text-xs sm:text-sm font-semibold text-white">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.paymentMetrics && (
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.paymentMetrics.map((metric: any) => (
                  <div key={metric.label} className="bg-black/20 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">{metric.label}</p>
                    <p className="text-white text-sm sm:text-base font-bold mt-1">{metric.value}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 rounded-3xl border border-orange-400/30 bg-gradient-to-r from-orange-500/15 to-amber-500/15 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Need complete gateway setup for your platform?
              </h3>
              <p className="text-slate-200 mb-5 max-w-4xl">
                We handle provider selection, merchant onboarding flow, API integration, transaction webhooks, failover routing, payout logic, and reconciliation dashboards.
              </p>
              <button
                onClick={openContactModal}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-orange-700 font-bold hover:scale-105 transition-transform"
              >
                Get Payment Gateway Integration Plan
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Key Features Section */}
        {id === 'game-development' ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="relative mt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Deliver</span>
              </h3>
              <p className="text-slate-400 text-lg">Complete end-to-end gaming solutions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-lg leading-tight block">{feature}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}>
                <CheckCircle2 size={16} />
              </div>
              Key Features
            </h3>

            <ul className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`}></div>
                  </div>
                  <span className="text-slate-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle2, Target, BarChart3, Layers3, ArrowRight } from 'lucide-react';
import { useAppStore } from '../../store';

import metaLogo from '../../../assets/logos/meta.svg';
import googleLogo from '../../../assets/logos/google.svg';
import telegramLogo from '../../../assets/logos/telegram.svg';
import unityLogo from '../../../assets/logos/unity.svg';
import snapchatLogo from '../../../assets/logos/snapchat.svg';
import xLogo from '../../../assets/logos/x.svg';
import amazonLogo from '../../../assets/logos/amazon.svg';
import flipkartLogo from '../../../assets/logos/flipkart.svg';
import meeshoLogo from '../../../assets/logos/meesho.ico';

type PlatformConfig = {
  name: string;
  shortTag: string;
  subtitle: string;
  logo: string;
  heroGradient: string;
  keyStats: { label: string; value: string }[];
  adProducts: string[];
  targeting: string[];
  optimization: string[];
  fitFor: string[];
};

const platformData: Record<string, PlatformConfig> = {
  meta: {
    name: 'Meta Ads',
    shortTag: 'Facebook + Instagram + Reels',
    subtitle: 'Scale paid social with full-funnel creative testing and precision audience strategy.',
    logo: metaLogo,
    heroGradient: 'from-blue-500/30 via-violet-500/20 to-pink-500/30',
    keyStats: [
      { label: 'Core Focus', value: 'Social Conversion' },
      { label: 'Best For', value: 'Lead + Sales' },
      { label: 'Reporting', value: 'Weekly + Cohorts' },
    ],
    adProducts: ['Image/Video Ads', 'Reels & Stories Ads', 'Carousel & Collection', 'Lead Generation Forms'],
    targeting: ['Demographic + Interest + Behavior', 'Custom & Lookalike Audiences', 'Placement-level Controls', 'Retargeting by funnel stage'],
    optimization: ['Creative fatigue monitoring', 'CPA/ROAS bid strategy', 'Landing page match testing', 'Audience expansion with safeguards'],
    fitFor: ['D2C brands', 'App installs', 'Service businesses', 'Growth-stage startups'],
  },
  google: {
    name: 'Google Marketing',
    shortTag: 'Search + YouTube + Display + Shopping',
    subtitle: 'Capture high-intent demand and scale with Performance Max plus search-first strategy.',
    logo: googleLogo,
    heroGradient: 'from-red-500/25 via-yellow-500/20 to-blue-500/25',
    keyStats: [
      { label: 'Core Focus', value: 'Intent-Led Growth' },
      { label: 'Best For', value: 'Demand Capture' },
      { label: 'Reporting', value: 'Channel Breakdown' },
    ],
    adProducts: ['Search Campaigns', 'Performance Max', 'YouTube Action Ads', 'Shopping + Merchant Feed'],
    targeting: ['Keywords + search themes', 'Audience signals & first-party data', 'Geo + device + language', 'Brand exclusions & negatives'],
    optimization: ['Search term mining', 'Asset group performance', 'Feed quality improvements', 'Conversion value rules'],
    fitFor: ['E-commerce', 'Lead-gen websites', 'Local businesses', 'High-intent categories'],
  },
  telegram: {
    name: 'Telegram Ads',
    shortTag: 'TON & Euro cabinet strategy',
    subtitle: 'Run channel-led campaigns with crisp copy, strict moderation readiness, and audience fit.',
    logo: telegramLogo,
    heroGradient: 'from-sky-500/30 via-cyan-500/20 to-blue-500/30',
    keyStats: [
      { label: 'Core Focus', value: 'Community Reach' },
      { label: 'Best For', value: 'Niche Audiences' },
      { label: 'Reporting', value: 'Campaign-Level Insights' },
    ],
    adProducts: ['Channel Promotion', 'Bot/Mini-app Promotion', 'TON Campaign Setup', 'Euro Cabinet Priority Setup'],
    targeting: ['Channel/topic-based placement', 'Geo/language options (cabinet dependent)', 'Device and audience selection', 'Segment-wise exclusions'],
    optimization: ['Moderation-safe creative', 'Channel shortlist refinement', 'Bid + CPM pacing control', 'Message-hook A/B tests'],
    fitFor: ['Gaming', 'Finance/crypto', 'Community products', 'Emerging markets'],
  },
  unity: {
    name: 'Unity Ads',
    shortTag: 'Mobile game user acquisition',
    subtitle: 'Acquire quality players and monetize game inventory with lifecycle-focused campaign design.',
    logo: unityLogo,
    heroGradient: 'from-slate-400/20 via-slate-600/20 to-zinc-500/20',
    keyStats: [
      { label: 'Core Focus', value: 'Game UA + ROAS' },
      { label: 'Best For', value: 'Mobile Games' },
      { label: 'Reporting', value: 'LTV Cohorts' },
    ],
    adProducts: ['Playable/Video Creatives', 'Install Campaigns', 'Retargeting Campaigns', 'Ad Monetization Support'],
    targeting: ['Device & OS segmentation', 'Country-tier targeting', 'Event-based optimization', 'Audience suppression lists'],
    optimization: ['D1/D7 retention tracking', 'Creative iteration loops', 'Bid by quality cohorts', 'Store listing alignment'],
    fitFor: ['Hypercasual studios', 'Real-money gaming', 'Midcore game launches', 'Global scale campaigns'],
  },
  snapchat: {
    name: 'Snapchat Ads',
    shortTag: 'Short-form visual growth',
    subtitle: 'Drive top-of-funnel awareness and measurable conversion using mobile-first creative workflows.',
    logo: snapchatLogo,
    heroGradient: 'from-yellow-300/30 via-amber-300/20 to-lime-300/20',
    keyStats: [
      { label: 'Core Focus', value: 'Visual Discovery' },
      { label: 'Best For', value: 'Youth Segments' },
      { label: 'Reporting', value: 'Pixel + Event Data' },
    ],
    adProducts: ['Story Ads', 'Collection Ads', 'Single Video/Image Ads', 'AR Lenses (where relevant)'],
    targeting: ['Demographic + interest clusters', 'Pixel-based retargeting', 'Lookalike expansion', 'Placement-aware creative testing'],
    optimization: ['Swipe-up CTR testing', 'Hook-first video cuts', 'Audience overlap control', 'Creative refresh cadence'],
    fitFor: ['Fashion/beauty', 'D2C consumer brands', 'App growth', 'Gen Z audience capture'],
  },
  x: {
    name: 'X (Twitter) Ads',
    shortTag: 'Conversation + trend-led media',
    subtitle: 'Amplify launches, announcements, and narratives using event-timed paid distribution.',
    logo: xLogo,
    heroGradient: 'from-zinc-500/20 via-neutral-600/20 to-slate-500/20',
    keyStats: [
      { label: 'Core Focus', value: 'Reach + Conversation' },
      { label: 'Best For', value: 'Announcements' },
      { label: 'Reporting', value: 'Engagement + CTR' },
    ],
    adProducts: ['Promoted Posts', 'Follower Campaigns', 'Website Traffic Campaigns', 'Trend/Keyword-Led Amplification'],
    targeting: ['Keyword & interest targeting', 'Follower lookalikes', 'Conversation/topic targeting', 'Geo and language controls'],
    optimization: ['Post-level creative rotation', 'Timing with events', 'Audience pruning', 'Landing page relevance checks'],
    fitFor: ['Tech launches', 'Thought leadership brands', 'News-driven campaigns', 'B2B awareness'],
  },
  flipkart: {
    name: 'Flipkart Marketplace Ads',
    shortTag: 'Marketplace visibility + conversions',
    subtitle: 'Improve listing discoverability and sponsored placement share in high-competition categories.',
    logo: flipkartLogo,
    heroGradient: 'from-blue-500/30 via-cyan-500/20 to-indigo-500/30',
    keyStats: [
      { label: 'Core Focus', value: 'Marketplace Sales' },
      { label: 'Best For', value: 'Catalog Push' },
      { label: 'Reporting', value: 'SKU-level KPIs' },
    ],
    adProducts: ['Sponsored Product Visibility', 'Keyword-Led Listing Push', 'Catalog Portfolio Promotion', 'Sale Event Acceleration'],
    targeting: ['Search keyword intent', 'Category-level competition mapping', 'SKU profitability tiers', 'Event window segmentation'],
    optimization: ['Bid by margin bands', 'Inventory sync with ad spend', 'Top SKU budget shielding', 'Sale calendar planning'],
    fitFor: ['Electronics', 'Fashion', 'Home products', 'Fast-moving SKUs'],
  },
  amazon: {
    name: 'Amazon Advertising',
    shortTag: 'Sponsored Products + Brands + Display',
    subtitle: 'Grow discoverability and brand recall with marketplace-native ad formats and listing strategy.',
    logo: amazonLogo,
    heroGradient: 'from-amber-500/25 via-orange-500/20 to-yellow-500/25',
    keyStats: [
      { label: 'Core Focus', value: 'Marketplace Revenue' },
      { label: 'Best For', value: 'Catalog Brands' },
      { label: 'Reporting', value: 'ACOS/ROAS + NTB' },
    ],
    adProducts: ['Sponsored Products', 'Sponsored Brands', 'Sponsored Display', 'Storefront Traffic Campaigns'],
    targeting: ['Keyword + ASIN targeting', 'Category/contextual targeting', 'Audience retargeting', 'Brand defense campaigns'],
    optimization: ['Search term harvesting', 'Listing content alignment', 'Brand-store funnel mapping', 'Creative moderation readiness'],
    fitFor: ['Private label brands', 'Multi-SKU sellers', 'Seasonal catalogs', 'Performance-led teams'],
  },
  meesho: {
    name: 'Meesho Growth Ads',
    shortTag: 'Value-commerce marketplace scaling',
    subtitle: 'Support seller growth with catalog promotion, offer-led pushes, and high-velocity campaign control.',
    logo: meeshoLogo,
    heroGradient: 'from-pink-500/30 via-fuchsia-500/20 to-purple-500/30',
    keyStats: [
      { label: 'Core Focus', value: 'Value-led Conversion' },
      { label: 'Best For', value: 'Affordable Catalogs' },
      { label: 'Reporting', value: 'Order Volume + ROAS' },
    ],
    adProducts: ['Catalog Promotion', 'Offer & Price-Led Boosting', 'Seasonal Event Push', 'Category Growth Campaigns'],
    targeting: ['Category demand clusters', 'Price-band segmentation', 'Top-converting product focus', 'Region-aware campaigning'],
    optimization: ['Offer timing alignment', 'Low-performing SKU cutoffs', 'Budget shift to high CVR items', 'Creative and title testing'],
    fitFor: ['Value-first brands', 'Regional sellers', 'High-SKU catalogs', 'Growth-stage marketplace stores'],
  },
};

export function MarketingPlatformPage() {
  const { id } = useParams();
  const { openContactModal } = useAppStore();
  const platform = id ? platformData[id] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!platform) {
    return (
      <div className="min-h-screen bg-[#030712] pt-28 pb-16 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Marketing Platform Not Found</h1>
          <p className="text-slate-400 mb-6">Choose a platform from the 360 Marketing service page.</p>
          <Link to="/service/360-marketing" className="text-indigo-400 hover:text-indigo-300">
            Go to 360 Marketing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${platform.heroGradient}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/20 text-slate-200 text-xs sm:text-sm font-semibold mb-4">
                {platform.shortTag}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">{platform.name}</h1>
              <p className="text-slate-300 text-base sm:text-lg">{platform.subtitle}</p>
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-4 flex items-center justify-center shadow-2xl">
              <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">
            {platform.keyStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
                <p className="text-white text-xl font-bold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { title: 'Ad Products', icon: Layers3, items: platform.adProducts },
            { title: 'Targeting Stack', icon: Target, items: platform.targeting },
            { title: 'Optimization Workflow', icon: BarChart3, items: platform.optimization },
            { title: 'Best Fit For', icon: CheckCircle2, items: platform.fitFor },
          ].map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <block.icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h2 className="text-white text-xl font-bold">{block.title}</h2>
              </div>
              <ul className="space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {id === 'telegram' && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-4 rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-indigo-500/15 p-6 sm:p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-4xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-300/40 bg-cyan-500/10 text-cyan-200 text-xs font-semibold mb-3">
                  EURO CABINET - HIGHLIGHTED OFFER
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Telegram Euro Cabinet with advanced targeting
                </h3>
                <p className="text-slate-200 text-sm sm:text-base mb-4">
                  For advertisers who want stronger control and better campaign quality, Euro Cabinet is the preferred setup. We help with setup, campaign structure, and launch support.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Geo + language based targeting',
                    'Topic and audience segmentation',
                    'Device-level campaign controls',
                    'Better campaign-level optimization options',
                    'External link focused campaign planning',
                    'Priority support for setup and launch',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-100 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={openContactModal}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-cyan-700 font-bold hover:scale-105 transition-transform shadow-xl"
                >
                  Contact for Cheapest Euro Cabinet
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-7 sm:p-10 text-center"
        >
          <h3 className="text-white text-2xl sm:text-3xl font-black mb-3">Need a custom growth plan for {platform.name}?</h3>
          <p className="text-white/90 text-sm sm:text-base mb-6">We map your niche, budget, and conversion goals into a focused media plan with execution support.</p>
          <button
            onClick={openContactModal}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-indigo-700 font-bold hover:scale-105 transition-transform"
          >
            Start Campaign Planning
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.section>
      </div>
    </div>
  );
}

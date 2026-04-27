import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, TrendingUp, Search, ShoppingCart, BarChart3, Cpu, Code, Palette, Share2, Megaphone, Sparkles, Spade, Gamepad2, Dices, Trophy, Crown, Dice6 } from "lucide-react";
import { Link } from "react-router";

const allServices = [
  {
    title: "Game Development",
    description: "Complete game development solutions including Aviator, Color Prediction, Matka, Ludo, Investment Scripts, Teen Patti, Rummy, Roulette, and 400+ ready-to-launch games.",
    icon: Gamepad2,
    color: "from-blue-500 to-cyan-500",
    features: ["Aviator", "Color Prediction", "Matka", "Investment Scripts", "400+ Games"],
    link: "/service/game-development"
  },
  {
    title: "360° Marketing & Advertising",
    description: "Comprehensive multi-platform advertising solutions across Meta, Google, Telegram, Unity, Snapchat, X, and major e-commerce platforms. Drive targeted traffic and maximize ROI with expert campaign management.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    link: "/service/360-marketing",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads, SEO & Profile Manager",
      "Telegram Ads - TON & Euro Cabinet",
      "Unity Ads",
      "Snapchat Ads",
      "X (Twitter) Ads",
      "Flipkart Marketplace",
      "Amazon Advertising",
      "Meesho Platform"
    ]
  },
  {
    title: "SEO - Search Engine Optimization",
    description: "Boost your organic visibility and rank higher on search engines. Comprehensive on-page, off-page, and technical SEO strategies tailored to your business.",
    icon: Search,
    color: "from-green-500 to-emerald-500",
    link: "/services/detail/seo-search-engine-optimization",
    features: ["Keyword Research", "On-Page Optimization", "Link Building", "Technical SEO"]
  },
  {
    title: "E-Commerce Management",
    description: "Complete e-commerce solutions from store setup to optimization. Manage product listings, inventory, and drive sales across multiple platforms.",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
    link: "/services/detail/e-commerce-management",
    features: ["Store Setup & Design", "Product Management", "Payment Integration", "Sales Optimization"]
  },
  {
    title: "Web Analytics",
    description: "Make data-driven decisions with comprehensive analytics tracking and reporting. Understand user behavior and optimize for conversions.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    link: "/services/detail/web-analytics",
    features: ["Google Analytics Setup", "Conversion Tracking", "Custom Dashboards", "Performance Reports"]
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with intelligent automation. Nurture leads, automate email campaigns, and increase efficiency.",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500",
    link: "/services/detail/marketing-automation",
    features: ["Email Automation", "Lead Nurturing", "Workflow Setup", "CRM Integration"]
  },
  {
    title: "Website Development",
    description: "Create stunning, responsive websites that convert visitors into customers. Modern design with cutting-edge technology and best practices.",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    link: "/services/detail/website-development",
    features: ["Custom Web Design", "Responsive Development", "CMS Integration", "E-commerce Solutions"]
  },
  {
    title: "Creative and Content",
    description: "Engaging content that tells your brand story. From copywriting to graphic design, we create content that resonates with your audience.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    link: "/services/detail/creative-and-content",
    features: ["Content Writing", "Graphic Design", "Video Production", "Brand Identity"]
  },
  {
    title: "Social Media Presence",
    description: "Build and grow your brand on social media platforms. Strategic content planning, community management, and engagement optimization.",
    icon: Share2,
    color: "from-blue-400 to-indigo-500",
    link: "/services/detail/social-media-presence",
    features: ["Social Strategy", "Content Calendar", "Community Management", "Influencer Marketing"]
  },
  {
    title: "Public Relations (PR) Strategy",
    description: "Enhance your brand reputation with strategic PR campaigns. Media outreach, press releases, and crisis management.",
    icon: Megaphone,
    color: "from-yellow-500 to-orange-500",
    link: "/services/detail/public-relations-pr-strategy",
    features: ["Media Relations", "Press Releases", "Crisis Management", "Brand Reputation"]
  },
  {
    title: "AI Tools for Efficiency",
    description: "Leverage cutting-edge AI tools to automate tasks, improve productivity, and gain competitive advantages in your marketing efforts.",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    link: "/services/detail/ai-tools-for-efficiency",
    features: ["AI Automation", "ChatGPT Integration", "Content Generation", "Process Optimization"]
  }
];

export function AllServicesPage() {
  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive digital solutions to scale your business and dominate your market
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {allServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Animated Icon */}
              <motion.div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} p-2.5 sm:p-3 mb-4`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <service.icon className="w-full h-full text-white drop-shadow-lg" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">{service.title}</h3>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3">
                {service.description}
              </p>

              {/* Compact feature preview */}
              <ul className="space-y-1.5 mb-4">
                {service.features.slice(0, 2).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
                {service.features.length > 2 && (
                  <li className="text-[11px] sm:text-xs text-slate-500 pl-3.5">
                    +{service.features.length - 2} more
                  </li>
                )}
              </ul>

              {/* CTA */}
              {'link' in service ? (
                <Link
                  to={service.link}
                  className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold text-xs sm:text-sm hover:shadow-lg transition-all`}
                >
                  Learn More
                </Link>
              ) : (
                <button className={`px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold text-xs sm:text-sm hover:shadow-lg transition-all`}>
                  Learn More
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

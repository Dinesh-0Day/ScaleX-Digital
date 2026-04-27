import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, TrendingUp, Users, Award, Calendar, MapPin, CheckCircle2, Quote } from "lucide-react";
import { Link, useParams } from "react-router";

const caseStudiesData = {
  "metaverse-gaming": {
    title: "MetaVerse Gaming Platform",
    client: "GameVerse Studios",
    category: "Game Development",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    color: "from-blue-500 to-cyan-500",
    duration: "8 Months",
    location: "Los Angeles, USA",
    overview: "GameVerse Studios approached us with an ambitious vision to create a next-generation VR gaming ecosystem that would revolutionize multiplayer experiences. They needed a platform that could handle thousands of concurrent users while maintaining seamless performance and stunning visual fidelity.",
    challenge: "The main challenge was building a scalable infrastructure that could support complex VR interactions, real-time multiplayer synchronization, and in-app purchase systems while ensuring cross-platform compatibility between PC VR, PlayStation VR, and standalone headsets.",
    solution: "We leveraged Unreal Engine 5's cutting-edge features including Nanite virtualized geometry and Lumen global illumination to create photorealistic environments. Our team implemented a robust backend using AWS GameLift for multiplayer sessions and integrated Stripe for secure payment processing.",
    results: [
      { label: "User Growth", value: "500K+", icon: Users, description: "Active monthly users within first 6 months" },
      { label: "Revenue Increase", value: "320%", icon: TrendingUp, description: "Revenue growth compared to projections" },
      { label: "App Store Rating", value: "4.8★", icon: Award, description: "Average rating across all platforms" }
    ],
    keyFeatures: [
      "Real-time multiplayer with up to 100 players",
      "Cross-platform progression and gameplay",
      "Blockchain-based NFT item marketplace",
      "Voice chat with spatial audio",
      "Custom avatar creation system",
      "Weekly live events and tournaments"
    ],
    technologies: ["Unreal Engine 5", "C++", "AWS GameLift", "PostgreSQL", "Stripe API", "WebRTC", "Redis"],
    testimonial: {
      text: "ScaleX transformed our vision into reality beyond our expectations. The technical expertise and creative approach they brought to the project was phenomenal. We're now industry leaders in VR gaming.",
      author: "Michael Chen",
      role: "CEO, GameVerse Studios",
      image: "https://i.pravatar.cc/150?img=12"
    },
    gallery: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    ]
  },
  "ecommerce-platform": {
    title: "E-Commerce Platform Scale",
    client: "ShopFast India",
    category: "API Integration & Marketing",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    color: "from-purple-500 to-pink-500",
    duration: "5 Months",
    location: "Mumbai, India",
    overview: "ShopFast India was experiencing rapid growth but their existing infrastructure couldn't handle the increasing traffic and transaction volume. They needed a complete overhaul of their payment systems and a comprehensive marketing strategy to scale operations.",
    challenge: "The platform was facing frequent downtime during peak sales, payment failures were causing customer frustration, and their marketing efforts weren't reaching the right audience. They needed to process 50K+ daily orders with 99.9% uptime.",
    solution: "We implemented a microservices architecture with load balancing, integrated multiple payment gateways with intelligent failover systems, and launched a data-driven 360° marketing campaign targeting high-intent customers across Google, Facebook, Instagram, and WhatsApp.",
    results: [
      { label: "Daily Orders", value: "50K+", icon: TrendingUp, description: "Average daily order processing capacity" },
      { label: "Payment Success", value: "99.8%", icon: Award, description: "Transaction success rate achieved" },
      { label: "Customer Base", value: "2M+", icon: Users, description: "Total registered customers" }
    ],
    keyFeatures: [
      "Multi-gateway payment integration",
      "Real-time inventory synchronization",
      "AI-powered product recommendations",
      "Automated email and SMS campaigns",
      "Multi-language and multi-currency support",
      "Advanced analytics dashboard"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Razorpay", "Stripe", "PayPal", "AWS", "Docker"],
    testimonial: {
      text: "The transformation was incredible. We went from constant firefighting to smooth operations. Our revenue tripled and customer satisfaction is at an all-time high. ScaleX is a true partner in our growth.",
      author: "Priya Sharma",
      role: "COO, ShopFast India",
      image: "https://i.pravatar.cc/150?img=45"
    },
    gallery: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    ]
  },
  "telegram-marketing": {
    title: "Telegram Marketing Campaign",
    client: "EuroTech Solutions",
    category: "360° Marketing",
    image: "https://images.unsplash.com/photo-1636743094110-5e153f93ad7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    color: "from-indigo-500 to-purple-500",
    duration: "3 Months",
    location: "Berlin, Germany",
    overview: "EuroTech Solutions needed to penetrate European markets quickly with their B2B SaaS product. Traditional advertising channels weren't delivering the ROI they needed. They required a innovative approach to reach decision-makers at scale.",
    challenge: "The European market is highly competitive and saturated with advertising. They needed to reach C-level executives and business owners in a cost-effective way while maintaining high conversion rates and brand credibility.",
    solution: "We executed a targeted Telegram marketing campaign using exclusive Euro cabinet ad accounts, creating highly personalized ad creatives and leveraging Telegram's advanced targeting capabilities. Combined with LinkedIn outreach and content marketing, we created a multi-touch attribution system.",
    results: [
      { label: "Reach", value: "1M+", icon: Users, description: "Total impressions across European markets" },
      { label: "Conversion Rate", value: "18%", icon: TrendingUp, description: "Lead to customer conversion rate" },
      { label: "ROI", value: "450%", icon: Award, description: "Return on ad spend achieved" }
    ],
    keyFeatures: [
      "Telegram Euro cabinet ad campaigns",
      "Multi-language ad creatives",
      "A/B testing and optimization",
      "CRM integration for lead tracking",
      "Automated follow-up sequences",
      "Performance analytics dashboard"
    ],
    technologies: ["Telegram Ads API", "HubSpot CRM", "Google Analytics", "Zapier", "Python", "PostgreSQL"],
    testimonial: {
      text: "ScaleX's expertise in Telegram marketing opened doors we didn't know existed. The campaign exceeded all our expectations and established us as a major player in the European market.",
      author: "Klaus Mueller",
      role: "VP Marketing, EuroTech Solutions",
      image: "https://i.pravatar.cc/150?img=33"
    },
    gallery: [
      "https://images.unsplash.com/photo-1636743094110-5e153f93ad7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    ]
  }
};

export function CaseStudyDetailPage() {
  const { id } = useParams();
  const caseStudy = caseStudiesData[id as keyof typeof caseStudiesData];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link to="/services" className="text-indigo-400 hover:text-indigo-300">View Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${caseStudy.color} text-white text-sm font-bold mb-4`}>
            {caseStudy.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-slate-400 mb-6">{caseStudy.client}</p>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-indigo-400" />
              <span>{caseStudy.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-indigo-400" />
              <span>{caseStudy.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-[400px]"
        >
          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${caseStudy.color} mix-blend-overlay opacity-20`}></div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {caseStudy.results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <result.icon className="text-indigo-400 mb-4" size={32} />
              <p className="text-4xl font-black text-white mb-2">{result.value}</p>
              <p className="text-indigo-400 font-semibold mb-1">{result.label}</p>
              <p className="text-slate-400 text-sm">{result.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-slate-400 leading-relaxed">{caseStudy.overview}</p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-slate-400 leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
              <p className="text-slate-400 leading-relaxed">{caseStudy.solution}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {caseStudy.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8 md:p-12 mb-16"
        >
          <Quote className="text-indigo-400/30 mb-6" size={48} />
          <p className="text-xl text-white leading-relaxed mb-8 italic">"{caseStudy.testimonial.text}"</p>
          <div className="flex items-center gap-4">
            <img src={caseStudy.testimonial.image} alt={caseStudy.testimonial.author} className="w-16 h-16 rounded-full border-2 border-indigo-500/30" />
            <div>
              <p className="text-white font-bold">{caseStudy.testimonial.author}</p>
              <p className="text-slate-400 text-sm">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudy.gallery.map((image, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden h-64 group">
                <img src={image} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

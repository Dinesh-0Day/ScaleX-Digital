import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, BarChart3, Wrench, Target } from "lucide-react";
import { useAppStore } from "../store";

type DetailData = {
  title: string;
  subtitle: string;
  overview: string;
  researchNotes: string[];
  process: string[];
  deliverables: string[];
  successMetrics: string[];
  tools: string[];
  gradient: string;
};

const serviceDetailData: Record<string, DetailData> = {
  "seo-search-engine-optimization": {
    title: "SEO - Search Engine Optimization",
    subtitle: "People-first organic growth built for search visibility",
    overview:
      "Our SEO approach follows search-engine fundamentals: crawlability, indexability, technical hygiene, and content clarity. We combine technical fixes with intent-led content and internal linking so rankings improve with real user value.",
    researchNotes: [
      "Aligned with Google Search Essentials and SEO Starter Guide priorities.",
      "Focus on crawlable architecture, clean indexing control, and sitemap hygiene.",
      "People-first content strategy with search intent mapping and on-page optimization.",
      "Structured data and internal linking to improve discoverability and relevance.",
    ],
    process: ["Technical audit and indexing checks", "Keyword and intent clustering", "On-page + internal link optimization", "Content and authority growth plan"],
    deliverables: ["SEO audit report", "Keyword maps by page type", "Monthly content briefs", "Ranking + traffic reporting dashboard"],
    successMetrics: ["Organic sessions growth", "Keyword ranking improvements", "Crawl/index health score", "Organic lead conversions"],
    tools: ["Google Search Console", "Screaming Frog", "GA4", "Keyword intelligence tools"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  "e-commerce-management": {
    title: "E-Commerce Management",
    subtitle: "Marketplace + D2C operations that scale revenue",
    overview:
      "We manage your e-commerce lifecycle end-to-end: catalog quality, pricing execution, conversion optimization, and performance-led ad operations. The goal is simple: stable growth with controlled margins.",
    researchNotes: [
      "Catalog quality and merchandising strongly impact conversion and ad efficiency.",
      "Offer-led campaigns perform best when inventory and pricing sync in real time.",
      "Marketplace growth requires SKU prioritization and profitability-based bidding.",
      "Store operations + media performance should be reviewed as one funnel.",
    ],
    process: ["Store and catalog audit", "SKU tiering and pricing strategy", "Marketplace + website optimization", "Weekly growth sprints and reporting"],
    deliverables: ["Catalog optimization sheet", "Sales and margin dashboard", "Campaign calendar", "Conversion improvement backlog"],
    successMetrics: ["Revenue growth", "ROAS/ACOS improvement", "Cart-to-purchase rate", "SKU-level profitability"],
    tools: ["Shopify/WooCommerce", "Marketplace seller panels", "GA4", "Ad platforms"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  "web-analytics": {
    title: "Web Analytics",
    subtitle: "Reliable measurement for better decisions",
    overview:
      "We implement event-driven analytics architecture with GA4 best practices, conversion mapping, and dashboarding. You get clear visibility on what is working, where drop-offs happen, and what to optimize next.",
    researchNotes: [
      "GA4 purchase and key event tracking must be parameter-complete for accurate reporting.",
      "Attribution model comparison is essential before budget reallocation decisions.",
      "Funnel events and checkout step tracking reveal conversion bottlenecks quickly.",
      "Consistent UTM governance improves channel-level decision quality.",
    ],
    process: ["Tracking blueprint", "Event + conversion setup", "Validation and QA", "Dashboard + insight cadence"],
    deliverables: ["Measurement plan", "GA4 event schema", "Funnel exploration reports", "Channel attribution summary"],
    successMetrics: ["Data accuracy score", "Funnel drop-off reduction", "Attribution clarity", "Decision turnaround time"],
    tools: ["GA4", "Google Tag Manager", "Looker Studio", "BigQuery (optional)"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  "marketing-automation": {
    title: "Marketing Automation",
    subtitle: "Behavior-led nurture systems that convert",
    overview:
      "We build automation workflows that segment users by behavior and lifecycle stage, then deliver the right message at the right time. This reduces manual effort and improves lead-to-customer conversion.",
    researchNotes: [
      "Lead nurturing workflows perform better with clear segmentation and trigger logic.",
      "3-5 value-first sequence structure works best for most intent stages.",
      "If/then branching and lead scoring improve handoff quality for sales teams.",
      "Regular testing of subject lines, timing, and CTA improves nurture performance.",
    ],
    process: ["Lifecycle and trigger mapping", "Workflow architecture", "Content sequence deployment", "Performance iteration"],
    deliverables: ["Workflow maps", "Email sequence set", "Lead scoring rules", "Automation performance report"],
    successMetrics: ["MQL rate", "Nurture CTR", "Sales-qualified handoff rate", "Time-to-conversion"],
    tools: ["HubSpot", "CRM + email stack", "Lead scoring", "Retargeting audiences"],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  "website-development": {
    title: "Website Development",
    subtitle: "High-performance websites built to convert",
    overview:
      "We design and develop modern, responsive websites focused on speed, clarity, and conversion outcomes. Every build is structured for scalability, SEO readiness, and marketing integration.",
    researchNotes: [
      "Fast-loading pages and clear UX improve conversion and reduce bounce risk.",
      "Technical SEO readiness from day one supports long-term organic growth.",
      "Component-based architecture accelerates future feature delivery.",
      "Landing-page and CTA placement strategy directly influences lead quality.",
    ],
    process: ["Discovery and wireframing", "UI system and development", "Integration + analytics setup", "QA + launch + post-launch optimization"],
    deliverables: ["Design system", "Responsive frontend", "CMS or custom backend setup", "Launch checklist and monitoring"],
    successMetrics: ["Core Web Vitals", "Conversion rate", "Lead quality", "Engagement depth"],
    tools: ["React/Next/Vite stack", "CMS integrations", "GA4 + Tagging", "Performance tooling"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  "creative-and-content": {
    title: "Creative and Content",
    subtitle: "Messaging and visuals that drive action",
    overview:
      "We create conversion-oriented content and creative systems for paid, organic, and product storytelling. The focus is consistent brand voice, strong hooks, and measurable performance outcomes.",
    researchNotes: [
      "Content strategy works best when mapped to funnel stages and user intent.",
      "Creative fatigue tracking is critical for sustained paid media efficiency.",
      "Multi-format assets (static, short video, carousel) increase channel adaptability.",
      "Narrative consistency across ads, landing pages, and email improves trust.",
    ],
    process: ["Brand and audience calibration", "Creative direction and copy framework", "Production and channel adaptation", "Performance-led refresh cycle"],
    deliverables: ["Content calendar", "Ad and social creative packs", "Brand voice guide", "Iteration report"],
    successMetrics: ["Engagement quality", "CTR uplift", "Content-assisted conversions", "Creative refresh velocity"],
    tools: ["Creative suites", "AI-assisted production tools", "Social schedulers", "Performance dashboards"],
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  "social-media-presence": {
    title: "Social Media Presence",
    subtitle: "Community-first growth with measurable outcomes",
    overview:
      "We build and manage social presence through content strategy, community operations, and response systems. This includes proactive engagement, campaign support, and escalation-ready communication workflows.",
    researchNotes: [
      "Community growth improves when cadence, tone, and moderation are standardized.",
      "Social listening and sentiment tracking help detect issues early.",
      "Cross-team alignment (PR, support, social) is critical during high-volume moments.",
      "Response SLAs and clear escalation paths improve trust during incidents.",
    ],
    process: ["Channel and audience audit", "Content + interaction playbook", "Calendar and publishing operations", "Monitoring, response, and optimization"],
    deliverables: ["Monthly social plan", "Community guidelines", "Escalation matrix", "Performance + sentiment report"],
    successMetrics: ["Engagement rate", "Response time", "Audience growth quality", "Sentiment trend"],
    tools: ["Social listening tools", "Scheduling platforms", "Moderation workflows", "Reporting dashboards"],
    gradient: "from-blue-400/20 to-indigo-500/20",
  },
  "public-relations-pr-strategy": {
    title: "Public Relations (PR) Strategy",
    subtitle: "Reputation management with fast, aligned communication",
    overview:
      "We design PR systems that combine proactive media planning with crisis-ready communications. The objective is clear messaging, faster coordination, and sustained brand credibility.",
    researchNotes: [
      "Crisis response quality depends on pre-defined roles and approval paths.",
      "Prepared holding statements reduce delay in first-response communication.",
      "PR-social alignment prevents mixed messaging across channels.",
      "Post-incident reviews are essential for long-term trust recovery.",
    ],
    process: ["Narrative and risk assessment", "Messaging framework + templates", "Media and stakeholder communication plan", "Crisis simulation and readiness review"],
    deliverables: ["PR strategy deck", "Crisis communication playbook", "Statement templates", "Reputation monitoring setup"],
    successMetrics: ["Message consistency score", "Response-time SLA", "Sentiment recovery curve", "Coverage quality"],
    tools: ["Media databases", "Social monitoring", "Internal comms workflows", "Executive briefing formats"],
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  "ai-tools-for-efficiency": {
    title: "AI Tools for Efficiency",
    subtitle: "Automation and AI workflows for faster execution",
    overview:
      "We implement practical AI systems for content, operations, reporting, and support workflows. Instead of random tooling, we focus on measurable efficiency improvements tied to business KPIs.",
    researchNotes: [
      "AI delivers best results when embedded into repeatable workflows, not isolated tasks.",
      "Prompt/system governance is needed for output consistency and brand safety.",
      "Human review checkpoints remain critical for compliance and quality.",
      "Automation impact should be tracked through cycle-time and output metrics.",
    ],
    process: ["Workflow audit", "Use-case prioritization", "AI tool integration", "Governance and optimization loop"],
    deliverables: ["AI playbook", "Prompt libraries", "Automation pipelines", "Efficiency impact report"],
    successMetrics: ["Execution time saved", "Output consistency", "Team throughput", "Cost-per-deliverable"],
    tools: ["LLM platforms", "Automation tools", "Knowledge bases", "QA checkpoints"],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
};

export function ServiceDetailPage() {
  const { slug } = useParams();
  const { openContactModal } = useAppStore();
  const detail = slug ? serviceDetailData[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!detail) {
    return (
      <div className="min-h-screen bg-[#030712] pt-28 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl text-white font-bold mb-3">Service Detail Not Found</h1>
          <Link to="/services" className="text-indigo-400 hover:text-indigo-300">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${detail.gradient}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">{detail.title}</h1>
          <p className="text-lg sm:text-xl text-cyan-300 font-semibold mb-4">{detail.subtitle}</p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-5xl">{detail.overview}</p>
        </motion.section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[{ title: "Research-backed Direction", icon: Target, items: detail.researchNotes }, { title: "Execution Process", icon: Wrench, items: detail.process }, { title: "Core Deliverables", icon: CheckCircle2, items: detail.deliverables }, { title: "Success Metrics", icon: BarChart3, items: detail.successMetrics }].map((block, idx) => (
            <motion.div key={block.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * idx }} className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <block.icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h2 className="text-white text-xl font-bold">{block.title}</h2>
              </div>
              <ul className="space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
          <h3 className="text-white text-xl font-bold mb-3">Tools & Stack We Use</h3>
          <div className="flex flex-wrap gap-2.5">
            {detail.tools.map((tool) => (
              <span key={tool} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-200 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-7 sm:p-10 text-center">
          <h3 className="text-white text-2xl sm:text-3xl font-black mb-3">Want this service tailored to your business?</h3>
          <p className="text-white/90 text-sm sm:text-base mb-6">We can share a focused strategy, scope, timeline, and execution plan based on your niche and growth goals.</p>
          <button onClick={openContactModal} className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-indigo-700 font-bold hover:scale-105 transition-transform">
            Start Planning
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.section>
      </div>
    </div>
  );
}

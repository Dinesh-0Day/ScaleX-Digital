import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    points: [
      "By accessing or using this website, you agree to these Terms of Service.",
      "If you do not agree, please discontinue use of the website.",
    ],
  },
  {
    title: "2. Services and Scope",
    points: [
      "ScaleX provides digital services including development, integrations, marketing, and related advisory support.",
      "Final scope, pricing, timelines, and deliverables are defined in signed proposals or service agreements.",
      "Website content is informational and does not automatically create a service contract.",
    ],
  },
  {
    title: "3. User Responsibilities",
    points: [
      "You agree to provide accurate information when contacting us or requesting services.",
      "You agree not to misuse the website, interfere with its operation, or attempt unauthorized access.",
      "You are responsible for lawful use of any content, materials, or information obtained from the website.",
    ],
  },
  {
    title: "4. Intellectual Property",
    points: [
      "Website content, branding, and proprietary materials are owned by ScaleX unless stated otherwise.",
      "You may not copy, republish, or commercially use website content without written permission.",
      "Project-specific ownership and usage rights are governed by signed contracts.",
    ],
  },
  {
    title: "5. Payments and Commercial Terms",
    points: [
      "Invoices, payment schedules, and gateway/processing terms are defined in project agreements.",
      "Delayed payments may affect delivery timelines, support availability, or access to deliverables.",
      "Third-party platform costs, API fees, ad spend, or provider charges are typically separate unless explicitly included.",
    ],
  },
  {
    title: "6. Liability and Disclaimer",
    points: [
      "We strive for accuracy and reliability, but do not guarantee uninterrupted availability of the website.",
      "To the maximum extent permitted by law, ScaleX is not liable for indirect, incidental, or consequential losses arising from website use.",
      "Any strategic estimates, growth projections, or performance examples are illustrative and not guaranteed outcomes.",
    ],
  },
  {
    title: "7. Governing Terms and Updates",
    points: [
      "These terms may be updated from time to time to reflect legal, operational, or service changes.",
      "Continued use of the website after updates indicates acceptance of the revised terms.",
    ],
  },
];

export function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-slate-300 leading-relaxed mb-6">
            These Terms of Service govern your use of the ScaleX website and outline the basic legal framework for interacting with our digital services.
          </p>

          <div className="space-y-6">
            {termsSections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
                <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
                  {section.points.map((point) => (
                    <li key={point} className="leading-relaxed">- {point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="text-slate-400 text-sm mt-6 leading-relaxed">
            For personal data handling details, please review our <Link to="/privacy-policy" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

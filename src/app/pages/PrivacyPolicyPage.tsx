import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const sections = [
  {
    title: "1. Information We Collect",
    points: [
      "Contact details you share (name, email, phone, company) through forms, calls, or direct messages.",
      "Project and service information needed to scope work, provide estimates, and deliver services.",
      "Technical usage signals such as pages visited, device/browser information, and session behavior for analytics and performance improvement.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    points: [
      "To respond to inquiries, proposals, support requests, and account-related communication.",
      "To deliver contracted services, integrations, campaigns, and project reporting.",
      "To improve website performance, user experience, and service quality through aggregated analytics.",
      "To comply with legal, security, and fraud-prevention obligations.",
    ],
  },
  {
    title: "3. Cookies and Tracking",
    points: [
      "We use essential cookies required for site functionality and optional cookies for analytics and performance insights.",
      "You can accept or reject non-essential cookies through the cookie banner when you visit the website.",
      "Cookie preferences may be updated by clearing browser storage and choosing again on your next visit.",
    ],
  },
  {
    title: "4. Data Sharing and Processors",
    points: [
      "We may share data with trusted service providers (hosting, analytics, CRM, communication, or payment partners) strictly to operate our services.",
      "We do not sell personal data.",
      "Data sharing is limited to business-necessary purposes and subject to confidentiality and security requirements.",
    ],
  },
  {
    title: "5. Data Retention and Security",
    points: [
      "We retain data for as long as required for service delivery, compliance, dispute resolution, and legitimate business operations.",
      "We implement technical and organizational safeguards to protect data from unauthorized access, misuse, or disclosure.",
      "No internet system is fully risk-free, but we apply reasonable security best practices.",
    ],
  },
  {
    title: "6. Your Rights",
    points: [
      "You may request access, correction, or deletion of your personal information, subject to legal and contractual obligations.",
      "You may request limitation of processing or object to specific processing where applicable by law.",
      "You may contact us for privacy requests using the contact details listed on this website.",
    ],
  },
];

export function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300 leading-relaxed mb-6">
            This Privacy Policy explains how ScaleX collects, uses, stores, and protects information when you use our website or engage with our services.
          </p>

          <div className="space-y-6">
            {sections.map((section) => (
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
            If you have privacy-related questions, please contact us via the contact channels available on the website.
            You can also review our <Link to="/terms-of-service" className="text-indigo-400 hover:text-indigo-300">Terms of Service</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

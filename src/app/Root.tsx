import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingContact } from './components/FloatingContact';
import { CookieConsentBanner } from './components/CookieConsentBanner';

const seoMap: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ScaleX - Digital Growth, Gaming, Marketing & Integrations",
    description:
      "ScaleX helps brands scale through game development, 360 marketing, API integration, payment gateway setup, and high-performance digital solutions.",
  },
  "/services": {
    title: "Services - ScaleX",
    description:
      "Explore ScaleX services: game development, 360 marketing, API integration, payment gateways, SEO, analytics, automation, and AI efficiency systems.",
  },
  "/about": {
    title: "About Us - ScaleX",
    description:
      "Learn about ScaleX, our delivery approach, and how we build scalable technology and growth systems for modern digital businesses.",
  },
  "/contact": {
    title: "Contact ScaleX",
    description:
      "Get in touch with ScaleX for strategy, implementation, and support across development, marketing, APIs, and payment infrastructure.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - ScaleX",
    description:
      "Read how ScaleX collects, uses, stores, and protects user information, cookies, and service-related data across our website and communications.",
  },
  "/terms-of-service": {
    title: "Terms of Service - ScaleX",
    description:
      "Review ScaleX Terms of Service covering service scope, user obligations, intellectual property, liability limits, and legal conditions.",
  },
};

export function Root() {
  const location = useLocation();

  useEffect(() => {
    const fallback = seoMap["/"];
    const exact = seoMap[location.pathname];
    const dynamicService = location.pathname.startsWith("/service/")
      ? {
          title: "Service Detail - ScaleX",
          description:
            "Detailed service information from ScaleX including delivery approach, capabilities, and business outcomes.",
        }
      : undefined;
    const dynamicMarketing = location.pathname.startsWith("/marketing/")
      ? {
          title: "Marketing Platform Solutions - ScaleX",
          description:
            "Platform-specific advertising and growth solutions from ScaleX across Meta, Google, Telegram, and other performance channels.",
        }
      : undefined;
    const dynamicDetail = location.pathname.startsWith("/services/detail/")
      ? {
          title: "Service Insights - ScaleX",
          description:
            "Research-backed service details, process, deliverables, and success metrics designed for clear decision making.",
        }
      : undefined;

    const seo = exact || dynamicService || dynamicMarketing || dynamicDetail || fallback;
    document.title = seo.title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", seo.description);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30 font-sans scroll-smooth relative">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ContactModal />
      <FloatingContact />
      <CookieConsentBanner />
    </div>
  );
}
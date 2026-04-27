import React from 'react';
import { HeroSection } from './components/HeroSection';
import { TrustedClientsSection } from './components/TrustedClientsSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TechStackSection } from './components/TechStackSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <TrustedClientsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TechStackSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
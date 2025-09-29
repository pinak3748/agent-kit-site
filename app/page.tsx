"use client";

import { BentoSection } from "@/components/bentoSection/BentoSection";
import ComplianceSection from "@/components/custom/ComplianceSection";
import { FAQSection } from "@/components/custom/FAQSection";
import { FooterSection } from "@/components/custom/FooterSection";
import HeroSection from "@/components/custom/HeroSection";
import { PricingSection } from "@/components/custom/PricingSection";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-4">
      <Navbar />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="features">
        <BentoSection />
      </section>

      <section id="compliance">
        <ComplianceSection />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <FooterSection />
    </div>
  );
}

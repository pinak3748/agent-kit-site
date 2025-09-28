"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BentoSection } from "@/components/bentoSection/BentoSection";
import ComplianceSection from "@/components/custom/ComplianceSection";
import { PricingSection } from "@/components/custom/PricingSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  fadeIn,
  fadeInUp,
  formReveal,
  imageReveal,
  staggerContainer,
} from "@/lib/animations";
import Navbar from "../components/navbar";

export default function Home() {
  const companyLogos = [
    {
      name: "Apple",
      logo: "/apple.svg",
      text: "Apple",
    },
    {
      name: "BMW",
      logo: "/bmw.svg",
      text: "BMW",
    },
    {
      name: "Coco Cola",
      logo: "/coca-cola.svg",
      text: "Coco Cola",
    },
    {
      name: "Microsoft",
      logo: "/microsoft.svg",
      text: "Mircrosoft",
    },
  ];

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-background py-4">
      <Navbar />

      <motion.div
        className="font-sans flex flex-col min-h-[70vh]"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <main className="w-full mt-4 md:mt-8 lg:mt-10 relative">
          <div className="absolute inset-0 bg-gradient-radial from-blue-200/30 via-purple-100/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-chart-1/10 blur-sm via-chart-2/10 to-transparent"></div>
          <motion.div variants={imageReveal}>
            <AspectRatio ratio={16 / 5} className="overflow-hidden">
              <Image
                src="/hero.jpg"
                alt="AI automation landscape featuring classical garden with marble statue, ancient columns, and lush vegetation"
                className="w-full h-full object-cover object-center px-2"
                loading="eager"
                width={1600}
                height={500}
                fetchPriority="high"
              />
            </AspectRatio>
          </motion.div>

          <div className="bg-muted/30 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  className="space-y-6 lg:space-y-8"
                  variants={fadeInUp}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
                    Say it once, watch AI agents do it{" "}
                    <span className="text-muted-foreground italic font-normal">
                      forever
                    </span>
                  </h1>
                  <motion.div
                    className="space-y-3 lg:space-y-4"
                    variants={fadeIn}
                  >
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                      Used at global enterprises such as
                    </p>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
                      {companyLogos.map((company, index) => (
                        <motion.div
                          key={company.name}
                          className="flex items-center justify-center"
                          aria-label={`${company.name} company logo`}
                          variants={fadeIn}
                          custom={index}
                        >
                          <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-4 sm:h-6 w-auto object-contain opacity-70 filter bg-transparent hover:opacity-100 transition-opacity duration-200"
                            loading="lazy"
                            width={100}
                            height={16}
                            sizes="(max-width: 640px) 64px, 80px"
                            priority={false}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="space-y-4 sm:space-y-6"
                  variants={fadeInUp}
                >
                  {/* Description */}
                  <motion.p
                    className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed"
                    variants={fadeIn}
                  >
                    Automate sales, meetings, operations, support, and admin
                    tasks without writing a line of code.
                  </motion.p>

                  {/* Email Signup Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4"
                    variants={formReveal}
                  >
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground h-10 sm:h-11"
                        required
                        aria-label="Email address for free trial"
                      />
                      <Button
                        type="submit"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 whitespace-nowrap h-10 sm:h-11 text-sm sm:text-base"
                        aria-label="Start free trial"
                      >
                        Try for free
                      </Button>
                    </div>
                  </motion.form>

                  <motion.p
                    className="text-xs sm:text-sm text-muted-foreground"
                    variants={fadeIn}
                  >
                    No credit card required • Start automating in minutes
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </motion.div>

      <BentoSection />

      <ComplianceSection />

      <PricingSection />
    </div>
  );
}

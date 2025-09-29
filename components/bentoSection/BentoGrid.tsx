"use client";

import { motion } from "framer-motion";
import {
  BrainIcon,
  ClockIcon,
  ShieldIcon,
  TrendingUpIcon,
  WorkflowIcon,
  WrenchIcon,
} from "lucide-react";
import { bentoCard, bentoCardLarge } from "@/lib/animations";
import { AnimatedListSection } from "./AnimatedListSection";
import { BentoCard } from "./BentoCard";
import { BentoCardLarge } from "./BentoCardLarge";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import { TerminalDemo } from "./TerminalDemo";
import { BrowserVisual } from "./visuals/BrowserVisual";
import { ChatVisual } from "./visuals/ChatVisual";
import { ImageVisual } from "./visuals/ImageVisual";

export interface BentoGridProps {
  className?: string;
}

export function BentoGrid({ className }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-12 gap-4 items-stretch w-full px-1 md:px-6 max-w-7xl mt-6 sm:mt-10 md:mt-10 ${
        className || ""
      }`}
    >
      <motion.div variants={bentoCardLarge} className="col-span-12">
        <BentoCardLarge
          title="Autonomous Workflows"
          description={[
            "Set up tasks once and let your AI agent run them end-to-end — research, outreach, reporting, and more, all handled without micromanagement.",
            "Never worry about subscriptions and lock-ins.",
          ]}
          icon={WrenchIcon}
          visual={
            <BrowserVisual
              src="/hero.jpg"
              alt="AI automation dashboard showing workflow management"
            />
          }
          aria-label="Autonomous Workflows - AI agents that handle complex tasks independently"
        />
      </motion.div>

      <motion.div
        variants={bentoCard}
        className="col-span-12 md:col-span-6 lg:col-span-5"
      >
        <BentoCard
          title="Smart Context Awareness"
          description={[
            "Understands history, intent, and company knowledge so it acts less like a script, more like a real teammate.",
            "Intent-based context handling.",
          ]}
          icon={BrainIcon}
          visual={<ChatVisual />}
          colSpan={{ mobile: 12, tablet: 6, desktop: 5 }}
          aria-label="Smart Context Awareness - AI that understands context and intent"
        />
      </motion.div>

      <motion.div
        variants={bentoCard}
        className="col-span-12 md:col-span-6 lg:col-span-7"
      >
        <BentoCard
          title="Seamless Integration"
          description={[
            "Connect with your existing tools and workflows without disrupting your current processes.",
            "No extra dependencies, no extra maintenance.",
          ]}
          icon={WorkflowIcon}
          visual={
            <ImageVisual
              src="/hero.jpg"
              alt="Integration dashboard showing connected tools"
            />
          }
          colSpan={{ mobile: 12, tablet: 6, desktop: 7 }}
          aria-label="Seamless Integration - Connect with existing tools and workflows"
        />
      </motion.div>

      <motion.div
        variants={bentoCard}
        className="col-span-12 md:col-span-6 lg:col-span-4"
      >
        <BentoCard
          title="Continuous Learning"
          description={[
            "Learns from usage and feedback, becoming smarter with every task.",
            "Adapts to your business patterns automatically.",
          ]}
          icon={TrendingUpIcon}
          visual={<TerminalDemo />}
          colSpan={{ mobile: 12, tablet: 6, desktop: 4 }}
          aria-label="Continuous Learning - AI that improves with every interaction"
        />
      </motion.div>

      <motion.div
        variants={bentoCard}
        className="col-span-12 md:col-span-6 lg:col-span-4"
      >
        <BentoCard
          title="Enterprise Security"
          description={[
            "Built with enterprise-grade security and compliance standards.",
            "Your data stays secure and private.",
          ]}
          icon={ShieldIcon}
          visual={<OrbitingCirclesDemo />}
          colSpan={{ mobile: 12, tablet: 6, desktop: 4 }}
          aria-label="Enterprise Security - Secure and compliant AI automation"
        />
      </motion.div>

      <motion.div
        variants={bentoCard}
        className="col-span-12 md:col-span-12 lg:col-span-4"
      >
        <BentoCard
          title="Real-time Monitoring"
          description={[
            "Track performance, monitor workflows, and get insights into your automation efficiency.",
            "Always know what your agents are doing.",
          ]}
          icon={ClockIcon}
          visual={<AnimatedListSection />}
          colSpan={{ mobile: 12, tablet: 12, desktop: 4 }}
          aria-label="Real-time Monitoring - Track and monitor AI agent performance"
        />
      </motion.div>
    </div>
  );
}

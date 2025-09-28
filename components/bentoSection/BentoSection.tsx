"use client";

import { motion } from "framer-motion";
import { bentoDescription, bentoGrid, bentoHeader } from "@/lib/animations";
import CustomSeperator from "../custom/Seperator";
import { BentoGrid } from "./BentoGrid";

export interface BentoSectionProps {
  className?: string;
}

export function BentoSection({ className }: BentoSectionProps) {
  return (
    <section
      data-slot="section"
      className={`bg-background text-foreground relative ${className || ""}`}
      aria-labelledby="bento-section-title"
    >
      <CustomSeperator />

      <div className="max-w-container mx-auto flex flex-col items-center gap-6 px-4 py-10">
        <motion.h2
          id="bento-section-title"
          className="text-3xl sm:text-4xl font-bold text-primary leading-tight"
          variants={bentoHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Build AI agents that work like{" "}
          <span className="text-muted-foreground italic font-normal">
            teammates
          </span>
        </motion.h2>

        <motion.p
          className="text-md text-muted-foreground max-w-[840px] text-center font-medium text-balance"
          variants={bentoDescription}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Create autonomous workflows that handle complex tasks end-to-end, with
          the intelligence to know when to act independently and when to
          collaborate.
        </motion.p>

        <motion.div
          variants={bentoGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <BentoGrid />
        </motion.div>
      </div>
    </section>
  );
}

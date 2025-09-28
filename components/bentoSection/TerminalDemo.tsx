"use client";

import { motion } from "framer-motion";
import { bentoVisual } from "@/lib/animations";
import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal";

export function TerminalDemo() {
  return (
    <motion.div
      role="img"
      aria-label="Terminal showing AI agent setup process for customer support automation"
      variants={bentoVisual}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Terminal className="bg-transparent border-0 !w-full !max-w-full">
        <TypingAnimation className="text-wrap !px-2.5">
          &gt; ai-agent setup --workflow customer-support
        </TypingAnimation>

        <AnimatedSpan className="text-green-500 text-wrap !px-2.5">
          ✔ Analyzing customer support patterns.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 text-wrap !px-2.5">
          ✔ Training on historical ticket data.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 text-wrap !px-2.5">
          ✔ Configuring automated responses.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 text-wrap !px-2.5">
          ✔ Setting up escalation rules.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 text-wrap !px-2.5">
          ✔ Integrating with CRM system.
        </AnimatedSpan>

        <AnimatedSpan className="text-blue-500 text-wrap !px-2.5">
          <span>ℹ Workflow created:</span>
          <span className="pl-2">- Auto-ticket routing</span>
          <span className="pl-2">- Response generation</span>
          <span className="pl-2">- Escalation handling</span>
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground text-wrap !px-2.5">
          Success! AI agent is now handling support.
        </TypingAnimation>

        <TypingAnimation className="text-muted-foreground text-wrap !px-2.5">
          Monitoring performance and learning.
        </TypingAnimation>
      </Terminal>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { bentoVisual } from "@/lib/animations";

export function ChatVisual() {
  return (
    <div className="flex justify-center flex-shrink-0 w-full">
      <div className="grow basis-0 sm:p-4">
        <motion.div
          data-slot="chat-illustration"
          className="relative flex w-full flex-col gap-6 p-4 text-xs"
          role="img"
          aria-label="AI agent conversation interface showing automated customer support workflow"
          variants={bentoVisual}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary text-primary-foreground max-w-[280px] rounded-sm px-3 py-2 shadow-sm">
              Need to automate our customer support
            </div>
            <div className="bg-primary text-primary-foreground max-w-[280px] rounded-sm px-3 py-2 shadow-sm">
              Can you handle ticket routing?
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="bg-background text-foreground/80 max-w-[280px] rounded-sm px-3 py-2 shadow-sm">
              Absolutely! I can analyze tickets and route them to the right team
            </div>
            <div className="bg-background text-foreground/80 max-w-[280px] rounded-sm px-3 py-2 shadow-sm">
              I'll also provide initial responses for common queries
            </div>
            <div className="bg-background text-foreground/80 max-w-[280px] rounded-sm px-3 py-2 shadow-sm">
              Setting up the workflow now...
            </div>
            <div className="group-hover:animate-hover relative z-10">
              <div className="border-border/80 bg-foreground text-primary-foreground flex -translate-x-24 rounded-lg border px-2 py-0.5">
                AI Agent
                <div className="absolute -top-6 -left-3">
                  <svg
                    width="18"
                    height="23"
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.64853 1.49706L15.7029 14.5515C16.4589 15.3074 15.9235 16.6 14.8544 16.6H8.69848C8.06196 16.6 7.45151 16.8529 7.00143 17.3029L2.64853 21.6558C1.89257 22.4118 0.6 21.8764 0.6 20.8073V2.34558C0.6 1.2765 1.89257 0.741098 2.64853 1.49706Z"
                      className="fill-foreground stroke-border/80 stroke-1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col items-start gap-4">
            <div className="bg-primary text-primary-foreground max-w-[280px] rounded-sm px-3 py-2 shadow-sm">
              Perfect! Let's test it with some sample tickets
            </div>
          </div> */}
          <div
            data-slot="glow"
            className="absolute w-full top-[50%] scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
          >
            <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100 -translate-y-1/2" />
            <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100 -translate-y-1/2" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

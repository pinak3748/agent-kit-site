"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { bentoVisual } from "@/lib/animations";

export function BrowserVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="min-h-[240px] grow basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:min-h-[360px]">
      <div data-slot="mockup-browser-illustration" className="h-full w-full">
        <div className="relative h-full w-full">
          <motion.div
            className="absolute top-0 left-[50%] z-10 w-full -translate-x-[50%] translate-y-0 transition-all duration-1000 ease-in-out group-hover:-translate-y-4"
            variants={bentoVisual}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div
              data-slot="mockup"
              className="flex relative z-10 overflow-hidden shadow-2xl border border-border/70 dark:border-border/5 dark:border-t-border/15 min-w-[640px] flex-col rounded-[12px]"
            >
              <div className="border-border/70 bg-muted/50 relative flex h-10 items-center gap-2 border-b px-4 py-2 dark:border-b-0">
                <div className="flex gap-2">
                  <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full" />
                  <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full" />
                  <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full" />
                </div>
                <div className="from-foreground/5 to-foreground/2 dark:from-foreground/10 dark:to-foreground/5 text-muted-foreground border-border/10 absolute top-1.5 left-1/2 flex min-w-[240px] -translate-x-1/2 items-center justify-center gap-2 rounded-md border-b bg-linear-to-t px-3 py-1.5 text-center text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-link size-3"
                    role="img"
                    aria-label="Link icon"
                  >
                    <title>Link icon</title>
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <p>127.0.0.1:8000</p>
                </div>
              </div>
              <Image
                alt={alt}
                loading="lazy"
                width="1340"
                height="820"
                decoding="async"
                data-nimg="1"
                src={src}
                style={{ color: "transparent" }}
                role="img"
                aria-label={alt}
              />
            </div>
          </motion.div>
          <div
            data-slot="glow"
            className="absolute w-full top-[50%] translate-y-0 scale-x-200 opacity-20 transition-all duration-1000 group-hover:-translate-y-12 group-hover:opacity-30"
          >
            <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100 -translate-y-1/2" />
            <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}

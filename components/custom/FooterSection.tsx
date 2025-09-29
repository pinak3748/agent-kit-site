"use client";

import { motion } from "framer-motion";
import { Github, Leaf } from "lucide-react";
import { bentoDescription, bentoHeader } from "@/lib/animations";
import CustomSeperator from "./Seperator";

export function FooterSection() {
  return (
    <footer className="bg-background text-foreground relative overflow-hidden">
      <CustomSeperator />

      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-chart-1/10 blur-sm via-chart-2/10 to-transparent"></div>

      <div className="max-w-container mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            variants={bentoHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Nox</h3>
            </div>

            <motion.p
              className="text-muted-foreground leading-relaxed max-w-md"
              variants={bentoDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              Automate sales, meetings, operations, support, and admin tasks
              without writing a line of code. Say it once, watch AI agents do it
              forever.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start lg:items-end space-y-6"
            variants={bentoDescription}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-md font-semibold text-muted-foreground">
              Connect
            </h4>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/pinakfaldu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                  fill="currentColor"
                  aria-label="Follow us on LinkedIn"
                  aria-labelledby="Follow us on LinkedIn"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://x.com/Pinak72813632"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                  fill="currentColor"
                  aria-label="Follow us on Twitter"
                  aria-labelledby="Follow us on Twitter"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://github.com/pinak3748"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Follow us on Github"
              >
                <Github
                  aria-label="Follow us on Github"
                  aria-labelledby="Follow us on Github"
                  role="img"
                  className="w-4 h-4 text-muted-foreground fill-muted-foreground group-hover:fill-white group-hover:stroke-0 group-hover:text-primary-foreground transition-colors"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

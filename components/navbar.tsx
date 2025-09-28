"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className={cn(
        "relative bg-primary backdrop-blur-sm border-b border-border shadow-sm max-w-6xl mx-auto z-50",
        !isMobileMenuOpen ? "rounded-2xl" : "rounded-t-2xl",
      )}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="absolute inset-0  bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl pointer-events-none !rounded-2xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-secondary-foreground" />
            </div>
            <span className="text-xl font-semibold text-primary-foreground">
              Nox
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
            >
              Customers
            </a>
            <a
              href="/"
              className="text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
            >
              Use Case
            </a>
            <a
              href="/"
              className="text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
            >
              Pricing
            </a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              Log in
            </Button>
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-sm">
              Try for free
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 z-[100] -mt-1 "
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary border-t border-border rounded-b-2xl shadow-2xl">
              <div className="absolute inset-0 bg-primary rounded-b-2xl"></div>
              <div className="relative z-10">
                <a
                  href="/"
                  className="block px-3 py-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
                >
                  Customers
                </a>
                <div className="px-3 py-2">
                  <Button className="flex items-center space-x-1 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium">
                    <span>Use Cases</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
                <a
                  href="/"
                  className="block px-3 py-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
                >
                  Pricing
                </a>
                <div className="pt-4 pb-3 border-t border-border">
                  <div className="flex flex-col space-y-2 px-3">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      Log in
                    </Button>
                    <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-sm">
                      Try for free
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

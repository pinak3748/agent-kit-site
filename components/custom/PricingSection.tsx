"use client";

import { motion } from "framer-motion";
import { Check, Globe, Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { bentoDescription, bentoGrid, bentoHeader } from "@/lib/animations";
import CustomSeperator from "./Seperator";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started with AI automation",
    features: [
      "Up to 5 AI agents",
      "Basic workflow templates",
      "Email support",
      "Standard integrations",
      "Monthly analytics reports",
      "Community access",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline",
    icon: Zap,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "Advanced features for growing businesses and teams",
    features: [
      "Up to 25 AI agents",
      "Custom workflow builder",
      "Priority support",
      "Advanced integrations",
      "Real-time analytics",
      "API access",
      "Team collaboration tools",
      "Custom branding",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default",
    popular: true,
    icon: Star,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited AI agents",
      "Custom development",
      "Dedicated support",
      "Enterprise integrations",
      "Advanced security",
      "Custom analytics",
      "SLA guarantee",
      "On-premise deployment",
      "Custom training",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "secondary",
    icon: Globe,
  },
];

export function PricingSection() {
  return (
    <section
      className="bg-background text-foreground relative"
      aria-labelledby="pricing-section-title"
    >
      <CustomSeperator />
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 px-12 py-10 md:py-24">
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          variants={bentoHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2
            id="pricing-section-title"
            className="text-3xl sm:text-4xl font-bold text-primary leading-tight"
          >
            Simple, transparent{" "}
            <span className="text-muted-foreground italic font-normal">
              pricing
            </span>
          </h2>
        </motion.div>

        <motion.p
          className="text-md text-muted-foreground max-w-[840px] text-center font-medium text-balance"
          variants={bentoDescription}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Choose the perfect plan for your team. Start free, upgrade anytime. No
          hidden fees, no surprises.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 md:mt-16"
          variants={bentoGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricingPlans.map((plan, _index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                variants={bentoDescription}
                className={`relative ${plan.popular ? "lg:scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary-foreground text-primary px-3 py-1 border-[0.2px] border-primary/20 shadow shadow-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`group text-card-foreground p-0 shadow-xs relative flex flex-col overflow-hidden rounded-xl transition-all h-full ${
                    plan.popular
                      ? "border-primary bg-gradient-to-b from-primary to-primary/95"
                      : "border-border"
                  }`}
                  tabIndex={0}
                  aria-label={`${plan.name} pricing plan`}
                >
                  {!plan.popular && (
                    <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-chart-1/10 blur-sm via-chart-2/10 to-transparent" />
                  )}
                  <CardContent className="flex flex-col gap-6 p-6 flex-shrink-0 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            plan.popular
                              ? "bg-primary-foreground/10 text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="size-5" />
                        </div>
                        <h3
                          className={`text-xl font-semibold  ${
                            plan.popular
                              ? "text-primary-foreground/90"
                              : "text-primary"
                          }`}
                        >
                          {plan.name}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-3xl font-bold ${
                            plan.popular
                              ? "text-primary-foreground/90"
                              : "text-primary"
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`text-muted-foreground font-medium ${
                            plan.popular
                              ? "text-primary-foreground/90"
                              : "text-muted-foreground"
                          }`}
                        >
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {plan.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4
                        className={`text-sm font-semibold ${
                          plan.popular
                            ? "text-primary-foreground/90"
                            : "text-primary"
                        }`}
                      >
                        What's included:
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={`${plan.name}-${feature.slice(
                              0,
                              20,
                            )}-${featureIndex}`}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <Check className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span
                              className={`font-medium ${
                                plan.popular
                                  ? "text-primary-foreground/80"
                                  : "text-primary"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4">
                      <Button
                        variant={plan.buttonVariant}
                        className={`w-full h-11 font-semibold ${
                          plan.popular
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-white"
                        }`}
                        aria-label={`${plan.buttonText} for ${plan.name} plan`}
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center space-y-4 mt-12"
          variants={bentoDescription}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-sm text-muted-foreground font-medium">
            All plans include a 14-day free trial • No credit card required •
            Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bentoDescription, bentoHeader } from "@/lib/animations";
import CustomSeperator from "./Seperator";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is a FAQ and why is it important?",
    answer:
      "A FAQ (Frequently Asked Questions) section is a collection of common questions and answers that help users quickly find information about your product or service. It's important because it reduces support requests, improves user experience, and helps with SEO by addressing common search queries.",
  },
  {
    id: "2",
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "FAQs help reduce customer support workload by providing instant answers to common questions. They improve user experience by making information easily accessible, boost SEO performance, and can increase conversion rates by addressing potential customer concerns before they arise.",
  },
  {
    id: "3",
    question: "How do I effectively create a FAQ section?",
    answer:
      "Start by analyzing customer support tickets, chat logs, and feedback to identify the most common questions. Write clear, concise answers using simple language. Organize questions by category, use search functionality, and keep the content updated regularly based on new customer inquiries.",
  },
  {
    id: "4",
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "A well-maintained FAQ section reduces support ticket volume by up to 80%, improves customer satisfaction through instant answers, enhances SEO rankings, increases conversion rates, and provides valuable insights into customer pain points that can inform product development.",
  },
  {
    id: "5",
    question: "How do I measure the effectiveness of my FAQ section?",
    answer:
      "Track metrics like FAQ page views, search queries within FAQs, reduction in support tickets, customer satisfaction scores, and conversion rates. Use analytics to identify which questions are most popular and which might need better answers or additional information.",
  },
];

export function FAQSection() {
  return (
    <section
      className="bg-muted text-foreground relative"
      aria-labelledby="faq-section-title"
    >
      <CustomSeperator />
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 px-8 py-10 md:py-24">
        <div className="grid gap-9 lg:grid-cols-2 w-full">
          {/* Left Column - Help Section */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={bentoHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge
                variant={"outline"}
                className="bg-primary text-primary-foreground w-fit"
              >
                <span className="size-1.5 rounded-full bg-green-500"></span>
                Support
              </Badge>
            </motion.div>

            <motion.h2
              id="faq-section-title"
              className="text-3xl sm:text-4xl font-bold text-primary leading-tight"
              variants={bentoHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              Need Help?{" "}
              <span className="text-muted-foreground italic font-normal">
                We're here to assist.
              </span>
            </motion.h2>

            <motion.p
              className="text-base text-muted-foreground text-balance"
              variants={bentoDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              Still have questions? Feel free to contact our friendly{" "}
              <span className="underline cursor-pointer text-primary/70 transition-colors">
                support team
              </span>{" "}
              specialists.
            </motion.p>

            <motion.div
              variants={bentoDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Button
                variant="outline"
                className="w-fit bg-background border-border text-foreground hover:bg-muted transition-colors"
                aria-label="View all frequently asked questions"
              >
                View all FAQs
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="space-y-0"
            variants={bentoDescription}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Accordion type="multiple" className="w-full">
              {faqData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={bentoDescription}
                  custom={index}
                >
                  <AccordionItem value={item.id} className="border-border">
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-4 bg-muted/50 hover:bg-muted/70 rounded-md px-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed px-4 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { AnimatedList } from "@/components/ui/animated-list";
import { bentoVisual } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Customer ticket resolved",
    description: "AI Agent",
    time: "2m ago",
    icon: "🎯",
    color: "#00C9A7",
  },
  {
    name: "Lead qualification complete",
    description: "Sales Bot",
    time: "5m ago",
    icon: "💼",
    color: "#FFB800",
  },
  {
    name: "Meeting scheduled",
    description: "Calendar Agent",
    time: "8m ago",
    icon: "📅",
    color: "#FF3D71",
  },
  {
    name: "Report generated",
    description: "Analytics Bot",
    time: "12m ago",
    icon: "📊",
    color: "#1E86FF",
  },
  {
    name: "Email campaign sent",
    description: "Marketing Agent",
    time: "15m ago",
    icon: "📧",
    color: "#8B5CF6",
  },
  {
    name: "Inventory updated",
    description: "Operations Bot",
    time: "18m ago",
    icon: "📦",
    color: "#10B981",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-2",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-b from-chart-1/10 via-chart-2/10 to-chart-3/10 backdrop-blur-3xl"
          // style={{
          //   backgroundColor: color,
          // }}
        >
          <span className="text-sm">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-md">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListSection({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "relative flex h-[300px] w-full flex-col overflow-hidden py-2 px-4",
        className,
      )}
      role="img"
      aria-label="Real-time activity feed showing AI agent tasks and notifications"
      variants={bentoVisual}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={`${item.name}-${idx}`} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </motion.div>
  );
}

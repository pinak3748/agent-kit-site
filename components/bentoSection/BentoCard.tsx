"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface BentoCardProps {
  title: string;
  description: string | string[];
  icon: LucideIcon;
  visual: ReactNode;
  className?: string;
  colSpan?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  visualPosition?: "top" | "bottom" | "center";
  visualClassName?: string;
  contentClassName?: string;
  "aria-label"?: string;
}

export function BentoCard({
  title,
  description,
  icon: Icon,
  visual,
  className,
  colSpan = { mobile: 12, tablet: 6, desktop: 4 },
  visualPosition = "bottom",
  visualClassName,
  contentClassName,
  "aria-label": ariaLabel,
}: BentoCardProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  return (
    <Card
      className={cn(
        "glass-1 hover:glass-2 group border-gray-200 text-card-foreground shadow-xs py-0 relative flex flex-col gap-1 overflow-hidden rounded-xl transition-all h-full",
        `col-span-${colSpan.mobile} md:col-span-${colSpan.tablet} lg:col-span-${colSpan.desktop}`,
        className,
      )}
      aria-label={ariaLabel || title}
      tabIndex={0}
    >
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-chart-1/10 blur-sm via-chart-2/10 to-transparent" />

      <div
        className={cn(
          "flex grow max-h-[350px] items-end justify-center overflow-hidden",
          visualPosition === "top" && "order-first",
          visualPosition === "center" && "items-center",
          visualClassName,
        )}
        data-slot="card-visual"
      >
        {visual}
      </div>

      <CardContent
        className={cn(
          "flex flex-col gap-4 p-6 flex-shrink-0",
          contentClassName,
        )}
      >
        <Icon className="lucide text-muted-foreground size-6 stroke-1" />
        <h3
          data-slot="card-title"
          className="text-xl leading-none font-semibold tracking-tight"
          id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
        >
          {title}
        </h3>
        <div
          data-slot="card-description"
          className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
        >
          {descriptionArray.map((desc, index) => (
            <p key={`${title}-${desc.slice(0, 20)}-${index}`}>{desc}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

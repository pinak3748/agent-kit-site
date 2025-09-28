"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface BentoCardLargeProps {
  title: string;
  description: string | string[];
  icon: LucideIcon;
  visual: ReactNode;
  className?: string;
  visualClassName?: string;
  contentClassName?: string;
  "aria-label"?: string;
}

export function BentoCardLarge({
  title,
  description,
  icon: Icon,
  visual,
  className,
  visualClassName,
  contentClassName,
  "aria-label": ariaLabel,
}: BentoCardLargeProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  return (
    <Card
      className={cn(
        "glass-1 hover:glass-2 group border-gray-200 text-card-foreground shadow-xs relative flex flex-col gap-6 overflow-hidden rounded-xl transition-all col-span-12 md:flex-row h-full",
        className,
      )}
      aria-label={ariaLabel || title}
      tabIndex={0}
    >
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-chart-1/10 blur-sm via-chart-2/10 to-transparent" />

      <CardContent
        className={cn(
          "flex flex-col gap-4 grow basis-0 md:justify-end",
          contentClassName,
        )}
      >
        <Icon className="lucide text-muted-foreground size-8 stroke-1" />
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

      <div
        className={cn("flex grow items-end justify-center", visualClassName)}
        data-slot="card-visual"
      >
        {visual}
      </div>
    </Card>
  );
}

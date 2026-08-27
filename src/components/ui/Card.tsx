"use client";

import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-white/[0.02] p-6",
        hover &&
          "transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20",
        className
      )}
    >
      {children}
    </div>
  );
}

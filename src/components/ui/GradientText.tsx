import { cn } from "@/lib/cn";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}

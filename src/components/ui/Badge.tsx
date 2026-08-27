import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "blue" | "green" | "purple" | "amber";
  className?: string;
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-white/5 text-navy-300 border-white/10",
    blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
    green: "bg-accent-green/10 text-accent-green border-accent-green/20",
    purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
    amber: "bg-accent-amber/10 text-accent-amber border-accent-amber/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "elevated";
  hover?: boolean;
}

/**
 * Reusable Card component with configurable variants
 * Used across Education, Certifications, and Projects components
 */
export function Card({
  children,
  className,
  variant = "default",
  hover = false,
}: CardProps) {
  const baseStyles = "p-6 rounded-2xl";

  const variantStyles = {
    default: "bg-background border border-border",
    bordered: "bg-muted/50 border border-border",
    elevated: "bg-background border border-border shadow-lg",
  };

  const hoverStyles = hover
    ? "hover:border-accent hover:shadow-xl transition-all"
    : "transition-all";

  return (
    <div className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}>
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "card" | "dark";
}

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24 px-4 sm:px-6 lg:px-8",
        variant === "card" && "bg-card",
        variant === "dark" && "bg-foreground text-background",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <p className="text-primary text-sm font-medium mb-3 tracking-wide">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

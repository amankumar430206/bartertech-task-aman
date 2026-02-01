import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/app/lib/utils"; // ← we'll create this tiny helper

type BadgeVariant = "default" | "success" | "warning" | "danger" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

  const variants = {
    default: "bg-gray-100 text-gray-800 border border-gray-200",
    success: "bg-green-100 text-green-800 border border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    danger: "bg-red-100 text-red-800 border border-red-200",
    outline: "bg-transparent text-gray-700 border border-gray-400",
  };

  return (
    <div className={cn(base, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}

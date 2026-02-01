import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost" | "destructive" | "success";
type ButtonSize = "sm" | "default" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading = false, disabled, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
      outline: "border border-gray-300 bg-white hover:bg-gray-100 focus-visible:ring-gray-400",
      ghost: "hover:bg-gray-100 focus-visible:ring-gray-400",
      destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
      success: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm",
      default: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], isLoading && "opacity-70 cursor-wait", className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };

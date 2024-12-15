import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
  size?: "icon" | "small" | "medium" | "large";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", size = "medium", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "base-button-styles",
          variant === "outline" && "border border-gray-300",
          size === "icon" && "h-8 w-8",
          size === "small" && "py-1 px-2 text-sm",
          size === "medium" && "py-2 px-4 text-base",
          size === "large" && "py-3 px-6 text-lg",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

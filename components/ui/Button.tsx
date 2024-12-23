"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "default";
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "default",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full text-lg font-medium transition-all",
        // Variant styles
        variant === "primary" &&
          "bg-gradient-to-r from-purple-600 to-pink-600 text-gray-600 hover:opacity-90",
        variant === "secondary" &&
          "border border-purple-500/50 text-gray-600 hover:bg-purple-500/10",
        // Size styles
        size === "small" && "px-4 py-2 text-sm",
        size === "medium" && "px-6 py-3 text-base",
        size === "large" && "px-8 py-4 text-lg",
        size === "default" && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

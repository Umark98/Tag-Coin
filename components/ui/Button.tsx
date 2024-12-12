"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export const Button = ({ variant = "primary", children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-8 py-4 rounded-full text-lg font-medium transition-all",
        variant === "primary" && "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90",
        variant === "secondary" && "border border-purple-500/50 text-white hover:bg-purple-500/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
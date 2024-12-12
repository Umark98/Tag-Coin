import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => (
  <span className={cn(
    "bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text",
    className
  )}>
    {children}
  </span>
);
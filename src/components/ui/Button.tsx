import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variantStyles = {
  primary:
    "bg-sky-600 text-white hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
  secondary:
    "bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",
  outline:
    "border-2 border-sky-600 text-sky-600 hover:bg-sky-50 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
  ghost:
    "text-sky-600 hover:bg-sky-50 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
}

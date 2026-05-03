import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
  helperText?: string;
};

export function Select({
  className,
  error,
  helperText,
  ...props
}: SelectProps) {
  return (
    <div className="w-full">
      <select
        className={cn(
          "w-full rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-colors duration-200",
          "bg-white placeholder:text-slate-400",
          "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
          "cursor-pointer appearance-none",
          error
            ? "border-red-300 focus:border-red-500"
            : "border-slate-300 hover:border-slate-400 focus:border-sky-500",
          className,
        )}
        {...props}
      />
      {helperText && (
        <p
          className={cn(
            "mt-1 text-xs",
            error ? "text-red-600" : "text-slate-500",
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
  helperText?: string;
};

export function Textarea({
  className,
  error,
  helperText,
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">
      <textarea
        className={cn(
          "w-full rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-colors duration-200",
          "bg-white placeholder:text-slate-400 resize-none",
          "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
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

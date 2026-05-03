import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

type FormFieldProps = PropsWithChildren<{
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}>;

export function FormField({
  label,
  htmlFor,
  required,
  error,
  helperText,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block">
        <span className="inline-flex gap-1 text-sm font-semibold text-slate-700">
          {label}
          {required && <span className="text-red-600">*</span>}
        </span>
      </label>
      {children}
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-slate-500">{helperText}</p>
      )}
    </div>
  );
}

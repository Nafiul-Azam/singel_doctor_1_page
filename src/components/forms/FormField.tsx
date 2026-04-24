import type { PropsWithChildren } from "react";

type FormFieldProps = PropsWithChildren<{
  label: string;
  htmlFor: string;
}>;

export function FormField({ label, htmlFor, children }: FormFieldProps) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}

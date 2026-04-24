import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, ...props }: SelectProps) {
  return <select className={cn("w-full rounded-md border border-slate-300 px-3 py-2 text-sm", className)} {...props} />;
}

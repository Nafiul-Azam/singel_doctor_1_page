import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={cn("w-full rounded-md border border-slate-300 px-3 py-2 text-sm", className)} {...props} />;
}

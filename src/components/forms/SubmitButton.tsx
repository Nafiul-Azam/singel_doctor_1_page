"use client";

import { Loader2 } from "lucide-react";

type SubmitButtonProps = {
  label: string;
  loading?: boolean;
  disabled?: boolean;
};

export function SubmitButton({ label, loading, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      {label}
    </button>
  );
}

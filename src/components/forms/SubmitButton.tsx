"use client";

type SubmitButtonProps = {
  label: string;
};

export function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button type="submit" className="inline-flex rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">
      {label}
    </button>
  );
}

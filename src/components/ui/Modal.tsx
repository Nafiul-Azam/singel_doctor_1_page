"use client";

import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

type ModalProps = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
}>;

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className={cn("w-full max-w-lg rounded-lg bg-white p-6")}>
        <button type="button" className="mb-3 text-sm text-slate-500" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

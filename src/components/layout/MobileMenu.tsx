"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <div className={cn("mt-3 rounded-lg border border-slate-200 bg-white p-3", !open && "hidden")}>
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

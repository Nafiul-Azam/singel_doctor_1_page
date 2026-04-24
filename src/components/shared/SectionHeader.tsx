import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", centered && "text-center")}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">{subtitle}</p> : null}
    </div>
  );
}

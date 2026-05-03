import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  highlight?: string;
};

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  highlight,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 space-y-3", centered && "text-center")}>
      {highlight && (
        <div className="inline-flex rounded-full bg-sky-100 px-4 py-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            {highlight}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

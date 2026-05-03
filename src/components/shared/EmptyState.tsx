import { AlertCircle } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
};

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">
      <div className="inline-flex rounded-full bg-slate-100 p-4 text-slate-400">
        {icon || <AlertCircle size={32} />}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="mt-6 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-sky-700 hover:shadow-md"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

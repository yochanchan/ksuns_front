import type { LucideIcon } from "lucide-react";

type ChoiceCardProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: LucideIcon;
  isUnknown?: boolean;
  className?: string;
};

export function ChoiceCard({
  label,
  selected,
  onClick,
  isUnknown = false,
  icon: Icon,
  className = "",
}: ChoiceCardProps) {
  const baseClasses =
    "group w-full rounded-xl border bg-white p-4 text-center transition hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";
  const stateClasses = selected
    ? "border-sky-500 bg-sky-50 shadow-sm"
    : "border-slate-200 hover:border-slate-400 hover:shadow-sm";
  const sizeClasses = isUnknown ? "py-4 min-h-[128px]" : "py-6 min-h-[168px]";
  const composedClassName = [baseClasses, stateClasses, sizeClasses, className]
    .filter(Boolean)
    .join(" ");

  const iconColor = selected
    ? "text-sky-600"
    : "text-slate-500 group-hover:text-slate-700";

  return (
    <button
      type="button"
      className={composedClassName}
      onClick={onClick}
      aria-pressed={selected}
    >
      <div className="flex flex-col items-center gap-3">
        {Icon ? (
          <Icon
            aria-hidden="true"
            className={`h-7 w-7 transition-colors ${iconColor}`}
          />
        ) : null}
        <span className="text-base font-semibold leading-6 text-slate-900">
          {label}
        </span>
      </div>
    </button>
  );
}

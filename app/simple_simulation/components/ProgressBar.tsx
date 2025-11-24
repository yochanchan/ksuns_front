type ProgressBarProps = {
  completed: number;
  total: number;
};

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total === 0 ? 0 : Math.min((completed / total) * 100, 100);

  return (
    <div className="w-full">
      <div className="h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-sky-500 transition-[width] duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
          aria-hidden
        />
      </div>
      <span className="sr-only">
        {`Progress: ${completed} out of ${total} questions completed`}
      </span>
    </div>
  );
}

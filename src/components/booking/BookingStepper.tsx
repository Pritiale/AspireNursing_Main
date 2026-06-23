const steps = [
  { id: 1, label: "Choose Service" },
  { id: 2, label: "Shift Details" },
  { id: 3, label: "Your Details" },
  { id: 4, label: "Confirmation" },
];

export default function BookingStepper({ current }: { current: number }) {
  return (
    <div className="border-b border-brand-border bg-white">
      <ol className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-5 sm:px-6">
        {steps.map((step, index) => {
          const isComplete = step.id < current;
          const isActive = step.id === current;
          return (
            <li key={step.id} className="flex flex-1 items-center last:flex-none">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm font-bold ${
                    isComplete
                      ? "bg-green-600 text-white"
                      : isActive
                        ? "bg-brand-blue text-white"
                        : "bg-brand-blue-light text-brand-muted"
                  }`}
                >
                  {isComplete ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </span>
                <span
                  className={`hidden text-sm font-medium sm:block ${
                    isActive || isComplete ? "text-brand-blue-dark" : "text-brand-muted"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <span
                  className={`mx-2 h-px flex-1 ${
                    isComplete ? "bg-green-600" : "bg-brand-border"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

import { formatCurrency } from "../../../utils/formatCurrency";

function BudgetProgress({ budgets }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-card p-5">
      <h3 className="mb-6 text-lg font-semibold">Budget Progress</h3>

      <div className="space-y-6">
        {budgets.map((budget) => (
          <div key={budget.id}>
            {/* Top Row */}
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">
                {budget.category.icon} {budget.category.name}
              </h4>

              <span className="text-sm text-zinc-400">
                {budget.percentage}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full transition-all ${
                  budget.percentage >= 90
                    ? "bg-red-500"
                    : budget.percentage >= 75
                      ? "bg-yellow-400"
                      : "bg-lime-400"
                }`}
                style={{
                  width: `${budget.percentage}%`,
                }}
              />
            </div>

            {/* Bottom Row */}
            <div className="mt-2 flex justify-between text-sm text-zinc-400">
              <span>
                {formatCurrency(budget.spent)} / {formatCurrency(budget.limit)}
              </span>

              <span>{formatCurrency(budget.remaining)} left</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BudgetProgress;

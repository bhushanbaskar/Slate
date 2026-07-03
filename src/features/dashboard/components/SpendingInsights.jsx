import { Wallet, Receipt, TrendingUp, Landmark } from "lucide-react";

function SpendingInsights() {
  const insights = [
    {
      id: 1,
      title: "Highest Spending",
      value: "Food",
      subtitle: "₹8,200 this month",
      icon: Wallet,
    },
    {
      id: 2,
      title: "Largest Transaction",
      value: "Salary",
      subtitle: "+₹35,000",
      icon: Landmark,
    },
    {
      id: 3,
      title: "Average Daily Spend",
      value: "₹714",
      subtitle: "Based on this month",
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "Transactions",
      value: "48",
      subtitle: "This month",
      icon: Receipt,
    },
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-card p-5">
      <h3 className="mb-6 text-lg font-semibold">Spending Insights</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.id}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/10">
                <Icon className="text-lime-400" size={20} />
              </div>

              <p className="text-sm text-zinc-400">{item.title}</p>

              <h4 className="mt-1 text-xl font-semibold">{item.value}</h4>

              <p className="mt-1 text-sm text-zinc-500">{item.subtitle}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SpendingInsights;

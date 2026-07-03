import { Zap, Tv, Smartphone, Wifi, ArrowRight } from "lucide-react";

function UpcomingBills() {
  const bills = [
    {
      id: 1,
      title: "Electricity",
      due: "Tomorrow",
      amount: 1240,
      icon: Zap,
    },
    {
      id: 2,
      title: "Netflix",
      due: "28 Jun",
      amount: 199,
      icon: Tv,
    },
    {
      id: 3,
      title: "Mobile Recharge",
      due: "30 Jun",
      amount: 299,
      icon: Smartphone,
    },
    {
      id: 4,
      title: "Wi-Fi",
      due: "2 Jul",
      amount: 899,
      icon: Wifi,
    },
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-card p-5">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Upcoming Bills</h3>

        <button className="flex items-center gap-1 text-sm text-lime-400 hover:text-lime-300 transition">
          View all
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Bills */}
      <div className="space-y-4">
        {bills.map((bill) => {
          const Icon = bill.icon;

          return (
            <article
              key={bill.id}
              className="flex items-center justify-between border-b border-white/5 pb-4 last:border-none last:pb-0"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <Icon size={20} />
                </div>

                <div>
                  <h4 className="font-medium">{bill.title}</h4>

                  <p className="text-sm text-zinc-400">Due {bill.due}</p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right">
                <p className="font-semibold">₹{bill.amount.toLocaleString()}</p>

                <span className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs text-yellow-400">
                  Pending
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default UpcomingBills;

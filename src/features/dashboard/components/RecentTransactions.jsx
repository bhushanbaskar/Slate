import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { formatCurrency } from "../../../utils/formatCurrency";
import { formatRelativeDate } from "../../../utils/dateHelpers";

function RecentTransactions({ transactions }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-card p-5">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>

        <Link to={"/transactions"}>
          <button className="flex items-center gap-1 text-sm text-lime-400 transition hover:text-lime-300 cursor-pointer">
            View all
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <article
            key={transaction.id}
            className="flex items-center justify-between border-b border-white/5 pb-4 last:border-none last:pb-0"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                style={{
                  backgroundColor: `${transaction.category.color}20`,
                }}
              >
                {transaction.category.icon}
              </div>

              <div>
                <h4 className="font-medium">{transaction.title}</h4>

                <p className="text-sm text-zinc-400">
                  {transaction.category.name}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-lime-400"
                    : "text-red-400"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </p>

              <p className="text-sm text-zinc-400">
                {formatRelativeDate(transaction.date)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecentTransactions;

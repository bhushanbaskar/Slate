import { useState } from "react";

import BudgetProgress from "./components/BudgetProgress";
import ExpenseBreakdown from "./components/ExpenseBreakdown";
import MonthWiseExpense from "./components/MonthWiseExpense";
import QuickActions from "./components/QuickActions";
import RecentTransactions from "./components/RecentTransactions";
import SpendingInsights from "./components/SpendingInsights";
import UpcomingBills from "./components/UpcomingBills";

import TransactionModal from "../expenses/components/TransactionModal";

import { addTransaction } from "../expenses/services/transactionService";
import { useDashboard } from "./hooks/useDashboard";
import { formatCurrency } from "../../utils/formatCurrency";

function Dashboard() {
  const {
    overview,
    recentTransactions,
    expenseBreakdown,
    monthlyExpenses,
    budgets,
    refresh,
  } = useDashboard();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("expense");

  function openExpenseModal() {
    setModalType("expense");
    setIsModalOpen(true);
  }

  function openIncomeModal() {
    setModalType("income");
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleSaveTransaction(transaction) {
    addTransaction(transaction);
    refresh();
    closeModal();
  }

  const overviewStats = [
    {
      title: "Total Balance",
      value: formatCurrency(overview.totalBalance),
      description: "Current Balance",
      descriptionColor: "text-lime-400",
    },
    {
      title: "Income",
      value: formatCurrency(overview.monthlyIncome),
      description: "Received this month",
      descriptionColor: "text-lime-400",
    },
    {
      title: "Expenses",
      value: formatCurrency(overview.monthlyExpenses),
      description: "Spent this month",
      descriptionColor: "text-red-400",
    },
    {
      title: "Savings Rate",
      value: `${overview.savingsRate}%`,
      description: "This month",
      descriptionColor:
        overview.savingsRate >= 0 ? "text-lime-400" : "text-red-400",
    },
  ];

  return (
    <>
      {/* ===================== Overview ===================== */}

      <section>
        <div className="flex items-center justify-between px-3">
          <h2 className="pl-4 text-(--accent-light)">/ Overview</h2>

          <QuickActions
            onAddExpense={openExpenseModal}
            onAddIncome={openIncomeModal}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 py-4 lg:justify-evenly">
          {overviewStats.map((stat) => (
            <article
              key={stat.title}
              className="w-60 rounded border border-neutral-900 py-4 text-center lg:w-75"
            >
              <p className="text-[14px] text-neutral-300">{stat.title}</p>

              <p className="text-2xl font-bold">{stat.value}</p>

              <p className={`text-[12px] ${stat.descriptionColor}`}>
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== Charts ===================== */}

      <div className="mt-3 flex flex-wrap items-center justify-center pl-3 md:justify-between">
        <MonthWiseExpense width="100%" data={monthlyExpenses} />

        <ExpenseBreakdown data={expenseBreakdown} />
      </div>

      {/* ===================== Recent Transactions ===================== */}

      <RecentTransactions transactions={recentTransactions} />

      {/* ===================== Budget Progress ===================== */}

      <BudgetProgress budgets={budgets} />

      {/* ===================== Spending Insights ===================== */}

      <SpendingInsights />

      {/* ===================== Upcoming Bills ===================== */}

      <UpcomingBills />

      {/* ===================== Transaction Modal ===================== */}

      <TransactionModal
        isOpen={isModalOpen}
        type={modalType}
        onClose={closeModal}
        onSave={handleSaveTransaction}
      />
    </>
  );
}

export default Dashboard;

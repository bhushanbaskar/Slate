import { useState } from "react";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import TransactionModal from "./components/TransactionModal";

import { getAllTransactions } from "../dashboard/services/dashboardService";
import {
  deleteTransaction,
  updateTransaction,
} from "./services/transactionService";

import { formatCurrency } from "../../utils/formatCurrency";
import { formatRelativeDate } from "../../utils/dateHelpers";

function TransactionsPage() {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState(getAllTransactions());

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  function refreshTransactions() {
    setTransactions(getAllTransactions());
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?",
    );

    if (!confirmed) return;

    deleteTransaction(id);

    refreshTransactions();
  }

  function handleEdit(transaction) {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  }

  function handleUpdate(updatedTransaction) {
    updateTransaction(updatedTransaction);

    refreshTransactions();

    setIsModalOpen(false);
    setSelectedTransaction(null);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  }

  return (
    <>
      <section className="space-y-6 p-6">
        {/* ================= Header ================= */}

        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h2 className="text-2xl font-semibold">All Transactions</h2>

          <div />
        </div>

        {/* ================= Table ================= */}

        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>

                <th className="px-4 py-3 text-left">Category</th>

                <th className="px-4 py-3 text-left">Date</th>

                <th className="px-4 py-3 text-right">Amount</th>

                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t border-white/10">
                  <td className="px-4 py-4">{transaction.title}</td>

                  <td className="px-4 py-4">
                    {transaction.category.icon} {transaction.category.name}
                  </td>

                  <td className="px-4 py-4 text-zinc-400">
                    {formatRelativeDate(transaction.date)}
                  </td>

                  <td
                    className={`px-4 py-4 text-right font-medium ${
                      transaction.type === "income"
                        ? "text-lime-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {formatCurrency(transaction.amount)}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleEdit(transaction)}
                        className="text-blue-400 transition hover:text-blue-300"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => handleDelete(transaction.id)}
                        className="text-red-400 transition hover:text-red-300"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <TransactionModal
        isOpen={isModalOpen}
        type={selectedTransaction?.type ?? "expense"}
        transaction={selectedTransaction}
        onClose={handleCloseModal}
        onSave={handleUpdate}
      />
    </>
  );
}

export default TransactionsPage;

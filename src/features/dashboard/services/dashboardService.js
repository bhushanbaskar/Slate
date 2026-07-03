import { getTransactions } from "../../expenses/services/transactionService";
import { getCategoryById } from "../../categories/services/categoryService";
import { getShortMonthName, isCurrentMonth } from "../../../utils/dateHelpers";

export function getOverviewStats() {
  const transactions = getTransactions();

  let totalBalance = 0;
  let monthlyIncome = 0;
  let monthlyExpenses = 0;

  for (const transaction of transactions) {
    if (transaction.type === "income") {
      totalBalance += transaction.amount;

      if (isCurrentMonth(transaction.date)) {
        monthlyIncome += transaction.amount;
      }
    } else {
      totalBalance -= transaction.amount;

      if (isCurrentMonth(transaction.date)) {
        monthlyExpenses += transaction.amount;
      }
    }
  }

  const savingsRate =
    monthlyIncome === 0
      ? 0
      : Math.round(((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100);

  return {
    totalBalance,
    monthlyIncome,
    monthlyExpenses,
    savingsRate,
  };
}
export function getRecentTransactions(limit = 5) {
  const transactions = [...getTransactions()];

  transactions.sort(
    (firstTransaction, secondTransaction) =>
      new Date(secondTransaction.date) - new Date(firstTransaction.date),
  );

  return transactions.slice(0, limit).map((transaction) => ({
    ...transaction,
    category: getCategoryById(transaction.categoryId),
  }));
}

export function getExpenseBreakdown() {
  const transactions = getTransactions();

  const breakdown = {};

  for (const transaction of transactions) {
    if (transaction.type !== "expense") continue;

    breakdown[transaction.categoryId] =
      (breakdown[transaction.categoryId] || 0) + transaction.amount;
  }

  return Object.entries(breakdown).map(([categoryId, amount]) => {
    const category = getCategoryById(categoryId);

    return {
      categoryId,
      name: category.name,
      icon: category.icon,
      color: category.color,
      value: amount,
    };
  });
}

export function getMonthlyExpenses() {
  const transactions = getTransactions();

  const monthlyExpenses = {};

  for (const transaction of transactions) {
    if (transaction.type !== "expense") continue;

    const monthKey = transaction.date.slice(0, 7);

    if (!monthlyExpenses[monthKey]) {
      monthlyExpenses[monthKey] = {
        month: getShortMonthName(transaction.date),
        amount: 0,
      };
    }

    monthlyExpenses[monthKey].amount += transaction.amount;
  }

  return Object.entries(monthlyExpenses)
    .sort(([monthA], [monthB]) => monthA.localeCompare(monthB))
    .map(([, value]) => ({
      month: value.month,
      expense: value.amount,
    }));
}

export function getAllTransactions() {
  return [...getTransactions()]
    .sort(
      (firstTransaction, secondTransaction) =>
        new Date(secondTransaction.date) - new Date(firstTransaction.date),
    )
    .map((transaction) => ({
      ...transaction,
      category: getCategoryById(transaction.categoryId),
    }));
}

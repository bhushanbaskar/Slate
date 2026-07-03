import { getData, saveData } from "../../../services/storage";
import { getTransactions } from "../../expenses/services/transactionService";
import { getCategoryById } from "../../categories/services/categoryService";
import { isCurrentMonth } from "../../../utils/dateHelpers";
export function getBudgets() {
  const data = getData();

  if (data === null) {
    return [];
  }

  return data.budgets;
}
export function addBudget(budget) {
  const data = getData();

  if (data === null) {
    return false;
  }

  data.budgets = [...data.budgets, budget];

  saveData(data);

  return true;
}
export function updateBudget(id, updates) {
  const data = getData();

  if (data === null) {
    return false;
  }

  const index = data.budgets.findIndex((budget) => budget.id === id);

  if (index === -1) {
    return false;
  }

  data.budgets[index] = {
    ...data.budgets[index],
    ...updates,
  };

  saveData(data);

  return true;
}

export function deleteBudget(id) {
  const data = getData();

  if (data === null) {
    return false;
  }

  data.budgets = data.budgets.filter((budget) => budget.id !== id);

  saveData(data);

  return true;
}

export function getBudgetProgress() {
  const budgets = getBudgets();
  const transactions = getTransactions();

  return budgets.map((budget) => {
    const spent = transactions
      .filter(
        (transaction) =>
          transaction.type === "expense" &&
          transaction.categoryId === budget.categoryId &&
          isCurrentMonth(transaction.date),
      )
      .reduce((total, transaction) => total + transaction.amount, 0);

    const category = getCategoryById(budget.categoryId);

    return {
      ...budget,
      category,
      spent,
      remaining: budget.limit - spent,
      percentage: Math.min(Math.round((spent / budget.limit) * 100), 100),
    };
  });
}

import { useCallback, useEffect, useState } from "react";

import {
  getMonthlyExpenses,
  getOverviewStats,
  getRecentTransactions,
  getExpenseBreakdown,
} from "../services/dashboardService";

import { getBudgetProgress } from "../../budgets/services/budgetService";

export function useDashboard() {
  const [dashboardData, setDashboardData] = useState({
    overview: {
      totalBalance: 0,
      monthlyIncome: 0,
      monthlyExpenses: 0,
      savingsRate: 0,
    },
    recentTransactions: [],
    expenseBreakdown: [],
    monthlyExpenses: [],
    budgets: [],
  });

  const refresh = useCallback(() => {
    setDashboardData({
      overview: getOverviewStats(),
      recentTransactions: getRecentTransactions(),
      expenseBreakdown: getExpenseBreakdown(),
      monthlyExpenses: getMonthlyExpenses(),
      budgets: getBudgetProgress(),
    });
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    ...dashboardData,
    refresh,
  };
}

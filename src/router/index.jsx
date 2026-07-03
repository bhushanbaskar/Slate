import { Routes, Route } from "react-router-dom";

// import pages

import AppLayout from "../layouts/AppLayout";
import Dashboard from "../features/dashboard/Dashboard";
import TransactionsPage from "../features/expenses/TransactionsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<TransactionsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

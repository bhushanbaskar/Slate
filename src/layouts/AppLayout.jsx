import { Outlet } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import Sidebar from "./components/Sidebar";

function AppLayout() {
  return (
    <>
      <AppHeader />
      {/* ==========wrapper for sidebar and main outlet=========== */}
      <div className="flex h-[90vh]">
        <Sidebar />

        <main className="flex-1 h-full overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden relative">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;

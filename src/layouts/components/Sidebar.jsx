import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    {
      label: "Dashboard",
      path: "/",
    },
    {
      label: "Transactions",
      path: "/Transactions",
    },
    {
      label: "Budgets",
      path: "/budgets",
    },
    {
      label: "Analytics",
      path: "/analytics",
    },
  ];

  return (
    <aside className=" hidden md:block w-60 h-full border-r border-zinc-800 bg-black">
      <div className="flex h-full flex-col">
        {/* =====================================================
            PRIMARY NAVIGATION
            Main routes of the application.
        ====================================================== */}
        <nav className="flex-1 px-3 py-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/app"} // Prevent Dashboard from staying active on nested routes
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 transition-colors ${
                      isActive
                        ? "text-lime-300 drop-shadow-[0_0_16px_rgba(190,242,100,0.8)]"
                        : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* =================================================
              FUTURE FEATURES
              Uncomment when implemented.
          ================================================== */}

          {/*
          <div className="mt-8">
            <h2 className="mb-2 text-xs uppercase text-zinc-500">
              Planning
            </h2>

            <ul className="space-y-1">
              <li>Goals</li>
              <li>Recurring Expenses</li>
              <li>Savings</li>
            </ul>
          </div>
          */}
        </nav>

        {/* =====================================================
            SECONDARY NAVIGATION
            Less frequently used routes.
        ====================================================== */}
        <div className="border-t border-zinc-800 p-3">
          <NavLink
            to="/app/settings"
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2 transition-colors ${
                isActive
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white"
              }`
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

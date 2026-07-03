import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function QuickActions({ onAddIncome, onAddExpense }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const actions = [
    {
      label: "Income",
      onClick: onAddIncome,
    },
    {
      label: "Expense",
      onClick: onAddExpense,
    },
    {
      label: "Insights",
      onClick: () => {},
    },
  ];

  function handleClick(action) {
    action();
    setIsMenuOpen(false);
  }

  return (
    <div className="relative">
      <button
        className="w-max cursor-pointer rounded-[7px] bg-[#5e69d1] p-3 text-center text-[14px] transition-colors duration-300 hover:bg-[#6974e1]"
        onClick={() => setIsMenuOpen((previous) => !previous)}
      >
        + Add New
        <ExpandMoreIcon />
      </button>

      {isMenuOpen && (
        <section className="absolute top-[112%] flex w-32 flex-col justify-center gap-3 rounded-[7px] bg-[#151617] px-3 py-4">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              onClick={() => handleClick(action.onClick)}
              className="cursor-pointer border-b border-[#555557] pb-2 text-[#939496] transition-colors duration-300 hover:text-white"
            >
              {action.label}
            </button>
          ))}
        </section>
      )}
    </div>
  );
}

export default QuickActions;

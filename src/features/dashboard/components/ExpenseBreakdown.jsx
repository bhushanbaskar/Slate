import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

import { formatCurrency } from "../../../utils/formatCurrency";

function ExpenseBreakdown({ data }) {
  return (
    <section className="h-100 w-80 rounded-2xl bg-card p-5">
      <h3 className="mb-4 text-lg font-semibold">Expense Breakdown</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={1}
          >
            {data.map((category) => (
              <Cell key={category.categoryId} fill={category.color} />
            ))}
          </Pie>

          <Tooltip content={<CustomTooltip />} />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const category = payload[0].payload;

  return (
    <div className="rounded bg-neutral-950 p-3">
      <p className="font-medium">
        {category.icon} {category.name}
      </p>

      <p className="text-sm text-neutral-300">
        {formatCurrency(category.value)}
      </p>
    </div>
  );
}

export default ExpenseBreakdown;
